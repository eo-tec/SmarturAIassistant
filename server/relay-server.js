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

// ---------------------------------------------------------------------------
// Keepalive de Supabase
// El plan Free pausa el proyecto tras ~7 días de inactividad, y las consultas
// que van por conexión directa a Postgres no cuentan para ese contador: solo
// cuenta el tráfico contra la API (PostgREST). Un GET periódico a una tabla
// dedicada mantiene el proyecto despierto.
// ---------------------------------------------------------------------------
const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const KEEPALIVE_TABLE = process.env.SUPABASE_KEEPALIVE_TABLE || 'keepalive';
const KEEPALIVE_INTERVAL_HOURS = Number(process.env.SUPABASE_KEEPALIVE_INTERVAL_HOURS) || 24;
const KEEPALIVE_ENABLED = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
const KEEPALIVE_RETRY_DELAY_MS = 10 * 60 * 1000;
const KEEPALIVE_MAX_ATTEMPTS = 3;

// Estado del último ping, expuesto en /health para comprobarlo de un vistazo
let lastKeepalive = { ok: null, status: null, at: null, error: null };

async function pingSupabase() {
  const url = `${SUPABASE_URL}/rest/v1/${KEEPALIVE_TABLE}?select=*&limit=1`;
  console.log('🔄 Supabase keepalive: ping...');

  try {
    const response = await fetch(url, {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(`HTTP ${response.status} — ${details.slice(0, 200)}`);
    }

    lastKeepalive = { ok: true, status: response.status, at: new Date().toISOString(), error: null };
    console.log(`✅ Supabase keepalive OK (HTTP ${response.status})`);
  } catch (err) {
    const message = err.name === 'TimeoutError' ? 'timeout (10s)' : err.message;
    lastKeepalive = { ok: false, status: null, at: new Date().toISOString(), error: message };
    console.error(`❌ Supabase keepalive falló: ${message}`);
  }

  return lastKeepalive;
}

// Lanza un ping y, si falla, reintenta hasta KEEPALIVE_MAX_ATTEMPTS antes de
// esperar al siguiente ciclo. No propaga errores: un rechazo sin capturar
// tumbaría el contenedor.
async function runKeepaliveCycle(attempt = 1) {
  const result = await pingSupabase();

  if (!result.ok && attempt < KEEPALIVE_MAX_ATTEMPTS) {
    console.log(`↻ Reintento ${attempt + 1}/${KEEPALIVE_MAX_ATTEMPTS} en 10 min`);
    setTimeout(() => {
      runKeepaliveCycle(attempt + 1).catch(() => {});
    }, KEEPALIVE_RETRY_DELAY_MS).unref();
  }
}

function startKeepalive() {
  if (!KEEPALIVE_ENABLED) {
    console.warn('⚠️  Supabase keepalive desactivado (falta SUPABASE_URL o SUPABASE_ANON_KEY)');
    return;
  }

  console.log(`💓 Supabase keepalive: tabla "${KEEPALIVE_TABLE}" cada ${KEEPALIVE_INTERVAL_HOURS}h`);

  // Ping al arrancar: cubre el caso de reinicio del contenedor
  runKeepaliveCycle().catch(() => {});
  setInterval(() => {
    runKeepaliveCycle().catch(() => {});
  }, KEEPALIVE_INTERVAL_HOURS * 60 * 60 * 1000);
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'OpenAI Realtime Token Server (WebRTC GA)',
    model: REALTIME_MODEL,
    version: '3.0.0',
    supabaseKeepalive: {
      enabled: KEEPALIVE_ENABLED,
      table: KEEPALIVE_TABLE,
      intervalHours: KEEPALIVE_INTERVAL_HOURS,
      lastPing: lastKeepalive,
    }
  });
});

// Ping manual a Supabase — para verificar la configuración tras desplegar
// sin tener que esperar al siguiente ciclo.
app.get('/keepalive', async (req, res) => {
  if (!KEEPALIVE_ENABLED) {
    return res.status(503).json({
      enabled: false,
      error: 'Keepalive desactivado: falta SUPABASE_URL o SUPABASE_ANON_KEY',
    });
  }

  const result = await pingSupabase();
  res.status(result.ok ? 200 : 502).json({ enabled: true, table: KEEPALIVE_TABLE, ...result });
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
  console.log(`   GET /keepalive - Ping manual a Supabase`);
  console.log('');

  startKeepalive();
});
