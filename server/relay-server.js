// WebSocket relay server for OpenAI Realtime API
// Este servidor actúa como intermediario entre el cliente (navegador) y OpenAI
// Mantiene la API key segura en el servidor y relay mensajes bidireccionales

const express = require('express');
const path = require('path');
const { WebSocketServer } = require('ws');
const WebSocket = require('ws');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Verificar que tenemos API key
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ ERROR: OPENAI_API_KEY not found in environment variables!');
  console.error('💡 Create a .env file with: OPENAI_API_KEY=sk-proj-...');
  process.exit(1);
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OpenAI Realtime API Relay Server',
    model: 'gpt-realtime-2025-08-28',
    version: '1.0.0'
  });
});

// Servir frontend estático en producción
if (NODE_ENV === 'production') {
  const distPath = path.join(__dirname, 'dist');
  console.log('📂 Serving static files from:', distPath);
  app.use(express.static(distPath));

  // SPA fallback
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Crear servidor HTTP
const server = app.listen(PORT, () => {
  console.log(`🚀 Relay Server running on http://localhost:${PORT}`);
  console.log(`🤖 Model: gpt-realtime-2025-08-28`);
  console.log(`🔑 API Key configured: Yes`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
});

// Crear WebSocket server
const wss = new WebSocketServer({ server });

console.log('🔌 WebSocket server ready');

// Manejar conexiones de clientes
wss.on('connection', (clientWs) => {
  console.log('👤 Client connected');

  let openaiWs = null;
  let isAlive = true;

  // Conectar a OpenAI Realtime API
  try {
    const model = 'gpt-realtime-2025-08-28';
    const url = `wss://api.openai.com/v1/realtime?model=${model}`;

    console.log('🔌 Connecting to OpenAI Realtime API...');
    console.log('📝 URL:', url);

    openaiWs = new WebSocket(url, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'OpenAI-Beta': 'realtime=v1'
      }
    });

    // Cuando OpenAI se conecta
    openaiWs.on('open', () => {
      console.log('✅ Connected to OpenAI Realtime API');

      // Notificar al cliente que estamos conectados al relay
      clientWs.send(JSON.stringify({
        type: 'relay.connected',
        timestamp: Date.now()
      }));
    });

    // Relay mensajes de OpenAI -> Cliente
    openaiWs.on('message', (data) => {
      try {
        const message = data.toString();

        // Log solo los tipos de eventos, no el contenido completo
        try {
          const parsed = JSON.parse(message);
          console.log('📥 OpenAI → Client:', parsed.type);
        } catch (e) {
          console.log('📥 OpenAI → Client: [binary data]');
        }

        // Reenviar al cliente
        if (clientWs.readyState === WebSocket.OPEN) {
          clientWs.send(message);
        }
      } catch (err) {
        console.error('❌ Error relaying OpenAI message:', err);
      }
    });

    // Errores de OpenAI
    openaiWs.on('error', (error) => {
      console.error('❌ OpenAI WebSocket error:', error);

      // Notificar al cliente
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.send(JSON.stringify({
          type: 'error',
          error: {
            message: 'OpenAI connection error',
            details: error.message
          }
        }));
      }
    });

    // Cuando OpenAI cierra la conexión
    openaiWs.on('close', (code, reason) => {
      console.log('🔌 OpenAI connection closed:', code, reason.toString());

      // Cerrar conexión del cliente también
      if (clientWs.readyState === WebSocket.OPEN) {
        clientWs.close(1000, 'OpenAI connection closed');
      }
    });

  } catch (err) {
    console.error('❌ Error connecting to OpenAI:', err);

    clientWs.send(JSON.stringify({
      type: 'error',
      error: {
        message: 'Failed to connect to OpenAI',
        details: err.message
      }
    }));

    clientWs.close(1011, 'Internal server error');
    return;
  }

  // Relay mensajes de Cliente -> OpenAI
  clientWs.on('message', (data) => {
    try {
      const message = data.toString();

      // Log solo los tipos de eventos
      try {
        const parsed = JSON.parse(message);
        console.log('📤 Client → OpenAI:', parsed.type);

        // Log detallado para session.update y conversation.item.create (debug)
        if (parsed.type === 'session.update') {
          console.log('🔍 Session update details:');
          console.log('  - Instructions length:', parsed.session?.instructions?.length || 0);
          console.log('  - Instructions preview:', parsed.session?.instructions?.substring(0, 80) + '...');
          console.log('  - Voice:', parsed.session?.voice);
          console.log('  - Modalities:', parsed.session?.modalities);
        } else if (parsed.type === 'conversation.item.create') {
          console.log('🔍 Conversation item details:');
          console.log('  - Role:', parsed.item?.role);
          console.log('  - Content type:', parsed.item?.content?.[0]?.type);
          console.log('  - Text length:', parsed.item?.content?.[0]?.text?.length || 0);
          console.log('  - Text preview:', parsed.item?.content?.[0]?.text?.substring(0, 80) + '...');
        }
      } catch (e) {
        console.log('📤 Client → OpenAI: [binary data]');
      }

      // Reenviar a OpenAI
      if (openaiWs && openaiWs.readyState === WebSocket.OPEN) {
        openaiWs.send(message);
      } else {
        console.warn('⚠️ OpenAI WebSocket not ready, dropping message');
      }
    } catch (err) {
      console.error('❌ Error relaying client message:', err);
    }
  });

  // Heartbeat para detectar conexiones muertas
  clientWs.on('pong', () => {
    isAlive = true;
  });

  // Cuando el cliente se desconecta
  clientWs.on('close', (code, reason) => {
    console.log('👤 Client disconnected:', code, reason.toString());

    // Cerrar conexión a OpenAI
    if (openaiWs && openaiWs.readyState === WebSocket.OPEN) {
      openaiWs.close(1000, 'Client disconnected');
    }
  });

  // Error del cliente
  clientWs.on('error', (error) => {
    console.error('❌ Client WebSocket error:', error);
  });

  // Verificar conexión viva cada 30 segundos
  const heartbeatInterval = setInterval(() => {
    if (!isAlive) {
      console.log('💀 Client connection timeout, terminating...');
      clearInterval(heartbeatInterval);
      clientWs.terminate();
      if (openaiWs) {
        openaiWs.close(1000, 'Client timeout');
      }
      return;
    }

    isAlive = false;
    clientWs.ping();
  }, 30000);

  // Limpiar al desconectar
  clientWs.on('close', () => {
    clearInterval(heartbeatInterval);
  });
});

// Manejar cierre del servidor
process.on('SIGTERM', () => {
  console.log('⚠️ SIGTERM received, closing server...');
  wss.close(() => {
    server.close(() => {
      console.log('✅ Server closed');
      process.exit(0);
    });
  });
});

process.on('SIGINT', () => {
  console.log('⚠️ SIGINT received, closing server...');
  wss.close(() => {
    server.close(() => {
      console.log('✅ Server closed');
      process.exit(0);
    });
  });
});
