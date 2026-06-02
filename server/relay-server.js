// Token server for OpenAI Realtime API (WebRTC)
// Este servidor genera tokens efímeros para que el cliente se conecte directamente a OpenAI

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
app.use(cors());
app.use(express.json());

// Verificar que tenemos API key
if (!process.env.OPENAI_API_KEY) {
  console.error('❌ ERROR: OPENAI_API_KEY not found in environment variables!');
  console.error('💡 Create a .env file with: OPENAI_API_KEY=sk-proj-...');
  process.exit(1);
}

// Instrucciones del hotel (se envían al crear la sesión)
const HOTEL_INSTRUCTIONS = `Eres la recepcionista (Te llamas María) del Hotel SMARTUR, un hotel de lujo en Santiago de Compostela, Galicia, España.

# Rol y Objetivo
- Atender huéspedes con educación, profesionalidad y discreción
- Ofrecer información sobre el hotel, servicios y entorno local

# Personalidad y Tono
- Cálida, concisa, profesional
- NUNCA aduladora ni exagerada

# Longitud de Respuestas
- MÁXIMO 2-3 oraciones por turno
- Respuestas breves y directas

# Idioma
- SOLO responder en español
- Si el usuario habla otro idioma, indicar amablemente que solo hay soporte en español

# Variedad
- NO repetir las mismas frases
- Variar las respuestas para no sonar robótico

# Reglas de Reservas
- Si el huésped pide "revisar el sistema" por una reserva, confirma directamente que está realizada
- NUNCA decir "déjame revisar" o "un momento" - responder de inmediato

# RESTAURANTES (alta calidad, imprescindible reservar)
- Casa Marcelo: Cocina creativa contemporánea, ideal para una noche especial
- A Tafona: Alta cocina gallega actual, muy apreciada por clientes gastronómicos
- Abastos 2.0: Experiencia gastronómica vinculada al Mercado de Abastos, perfecta para comida

# ACTIVIDADES DESTACADAS
- Catedral de Santiago y Plaza del Obradoiro: Visita imprescindible, recomendable al atardecer
- Visita guiada privada por el casco histórico: Dos a tres horas, optimiza tiempo
- Excursión de día a Finisterre y Costa da Morte: Naturaleza atlántica, paisajes emblemáticos

# CONSEJOS
- Aconsejar reserva anticipada en restaurantes
- Ofrecer visitas privadas para experiencia exclusiva
- Responder SOLO con estas recomendaciones, sin añadir otras salvo que el cliente lo solicite`;

// Modelo Realtime GA (reemplaza a gpt-4o-realtime-preview-2024-12-17, retirado el 2026-05-07).
// Alternativas válidas: 'gpt-realtime-mini' (coste-eficiente) o 'gpt-realtime-2' (razonamiento).
const REALTIME_MODEL = process.env.REALTIME_MODEL || 'gpt-realtime';
// Voces: alloy, ash, ballad, coral, echo, sage, shimmer, verse, marin, cedar.
// 'marin' o 'cedar' recomendadas por OpenAI para mejor calidad de audio.
const REALTIME_VOICE = process.env.REALTIME_VOICE || 'coral';

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OpenAI Realtime Token Server (WebRTC GA)',
    model: REALTIME_MODEL,
    version: '3.0.0'
  });
});

// Endpoint para obtener token efímero (client secret) — API GA.
// Crea el secreto con POST /v1/realtime/client_secrets (el antiguo
// /v1/realtime/sessions ya no existe y devuelve "Invalid URL").
app.post('/session', async (req, res) => {
  console.log('🔑 Generating ephemeral client secret...');

  try {
    // Estructura GA: la config va envuelta en "session" (type:'realtime'),
    // el audio anidado bajo session.audio.input / session.audio.output,
    // y "expires_after" como hermano opcional de "session".
    const sessionConfig = {
      expires_after: { anchor: 'created_at', seconds: 600 },
      session: {
        type: 'realtime',
        model: REALTIME_MODEL,
        instructions: HOTEL_INSTRUCTIONS,
        output_modalities: ['audio'],
        audio: {
          input: {
            format: { type: 'audio/pcm', rate: 24000 },
            transcription: { model: 'whisper-1' },
            turn_detection: {
              type: 'server_vad',
              threshold: 0.6,
              prefix_padding_ms: 300,
              silence_duration_ms: 600,
            },
          },
          output: {
            format: { type: 'audio/pcm', rate: 24000 },
            voice: REALTIME_VOICE,
          },
        },
      },
    };

    const response = await fetch('https://api.openai.com/v1/realtime/client_secrets', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sessionConfig),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('❌ OpenAI API error:', error);
      return res.status(response.status).json({ error: 'Failed to create client secret', details: error });
    }

    // Respuesta GA: { value: "ek_...", expires_at: <epoch_s>, session: {...} }
    // El token efímero está en data.value (NO en data.client_secret.value).
    const data = await response.json();
    console.log('✅ Ephemeral client secret generated');
    console.log('  - Session ID:', data.session?.id);
    console.log('  - Model:', data.session?.model);
    console.log('  - Expires:', data.expires_at ? new Date(data.expires_at * 1000).toISOString() : 'n/a');

    // Reenviar la respuesta tal cual al cliente; el navegador leerá data.value.
    res.json(data);
  } catch (err) {
    console.error('❌ Error generating client secret:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET endpoint para compatibilidad
app.get('/session', async (req, res) => {
  // Redirigir a POST
  req.method = 'POST';
  return app._router.handle(req, res);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Token Server running on http://localhost:${PORT}`);
  console.log(`🎯 Model: ${REALTIME_MODEL}`);
  console.log(`🔑 API Key configured: Yes`);
  console.log(`🌍 Environment: ${NODE_ENV}`);
  console.log('');
  console.log('📡 Endpoints:');
  console.log(`   GET/POST /session - Get ephemeral token for WebRTC`);
  console.log(`   GET /health - Health check`);
});
