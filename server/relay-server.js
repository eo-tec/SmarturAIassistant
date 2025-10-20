// Servidor backend para OpenAI Chat Completions API con soporte de audio
// Este servidor maneja la autenticación y hace requests HTTP a OpenAI Responses API

const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Configurar OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Aumentar límite para audio en base64

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OpenAI Chat Completions Backend Server',
    model: 'gpt-audio-mini-2025-10-06'
  });
});

// Chat endpoint - recibe audio y devuelve respuesta con audio
app.post('/api/chat', async (req, res) => {
  try {
    const { audio, instructions, voice = 'shimmer' } = req.body;

    if (!audio) {
      return res.status(400).json({
        error: 'Missing audio data'
      });
    }

    console.log('📥 Received chat request');
    console.log('📊 Audio length:', audio.length, 'chars (base64)');
    console.log('🎤 Voice:', voice);

    // Usar Chat Completions API con soporte de audio
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-audio-preview',
      modalities: ['text', 'audio'],
      audio: { voice: voice, format: 'wav' },
      messages: [
        {
          role: 'system',
          content: instructions || getDefaultHotelInstructions()
        },
        {
          role: 'user',
          content: [
            {
              type: 'input_audio',
              input_audio: {
                data: audio,
                format: 'wav'
              }
            }
          ]
        }
      ]
    });

    console.log('✅ Response received from OpenAI');
    console.log('📦 Response:', JSON.stringify(response, null, 2));

    // Extraer el audio y texto de la respuesta de Chat Completions
    let audioResponse = null;
    let textResponse = '';

    if (response.choices && response.choices.length > 0) {
      const message = response.choices[0].message;

      // El audio viene en message.audio
      if (message.audio) {
        audioResponse = message.audio;
        console.log('🔊 Audio found in response');
      }

      // El texto transcrito viene en message.content
      if (message.content) {
        textResponse = message.content;
        console.log('📝 Text found in response:', textResponse);
      }
    }

    // Devolver la respuesta al frontend
    res.json({
      success: true,
      audio: audioResponse,
      text: textResponse,
      fullResponse: response
    });

  } catch (error) {
    console.error('❌ Error calling OpenAI:', error);

    res.status(500).json({
      error: 'OpenAI API error',
      message: error.message,
      details: error.response?.data || error.toString()
    });
  }
});

// Instrucciones por defecto para el asistente de hotel
function getDefaultHotelInstructions() {
  return `Eres un asistente virtual de hotel profesional, amable y servicial. Tu nombre es "Hotel Assistant".

Tu función es ayudar a los huéspedes con:
- Información sobre servicios del hotel (restaurante, spa, gimnasio, piscina)
- Horarios de comidas y servicios
- Reservas de mesas en el restaurante
- Solicitudes de servicio a la habitación
- Información turística local
- Check-in y check-out
- Servicios de conserjería

Siempre responde en español de forma clara, concisa y amigable. Si no sabes algo, ofrece alternativas o sugiere contactar con recepción.

Mantén un tono profesional pero cercano, como si fueras un conserje experimentado del hotel.`;
}

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on http://localhost:${PORT}`);
  console.log(`🤖 Using model: gpt-4o-audio-preview`);
  console.log(`🔑 API Key configured:`, process.env.OPENAI_API_KEY ? 'Yes' : 'No');

  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ WARNING: OPENAI_API_KEY not found in environment variables!');
    console.error('💡 Create a .env file with: OPENAI_API_KEY=sk-proj-...');
  }
});
