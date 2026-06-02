# Migración a OpenAI Realtime API

> **⚠️ NOTA (actualizado a la API GA de OpenAI):** Este documento describe una migración
> histórica a la arquitectura **WebSocket relay**. La arquitectura **actual** del asistente
> usado en producción (botón del hotel en `smartur-front` → `/hotel/assistant`) es **WebRTC
> con tokens efímeros**:
> - El servidor (`server/relay-server.js`) genera el token efímero con
>   `POST https://api.openai.com/v1/realtime/client_secrets` (el antiguo
>   `/v1/realtime/sessions` fue retirado y devuelve `Invalid URL`).
> - El cliente (`useOpenAIWebRTC.ts`) lee el token de `data.value` y negocia el SDP contra
>   `POST https://api.openai.com/v1/realtime/calls` (sin `?model=`; el modelo se fija en el
>   token, server-side).
> - Modelo por defecto: **`gpt-realtime`** (configurable con `REALTIME_MODEL`). El antiguo
>   `gpt-4o-realtime-preview-2024-12-17` fue retirado el 2026-05-07.
> - Eventos GA del data channel: `response.output_audio.delta`, `response.output_audio.done`,
>   `response.output_audio_transcript.*` (antes `response.audio.*`).

Este proyecto ha sido migrado de **Chat Completions API** (HTTP) a **Realtime API** (WebSocket) para aprovechar las ventajas de baja latencia y comunicación bidireccional en tiempo real.

## Cambios principales

### 1. Arquitectura
- **Antes:** Cliente → HTTP POST → Servidor Express → OpenAI Chat Completions
- **Ahora:** Cliente ↔ WebSocket ↔ Servidor Relay ↔ OpenAI Realtime API

### 2. Modelo
- **Antes:** `gpt-4o-audio-preview`
- **Ahora:** `gpt-realtime-mini-2025-10-06`

### 3. Comunicación
- **Antes:** Request/Response HTTP (mayor latencia)
- **Ahora:** WebSocket bidireccional (latencia ultra-baja)

## Instalación

### 1. Instalar dependencias del servidor
```bash
cd server
npm install
```

Esto instalará la nueva dependencia `ws` para WebSocket.

### 2. Configurar API Key
Crea o edita el archivo `server/.env`:
```env
OPENAI_API_KEY=sk-proj-tu-api-key-aqui
PORT=8080
NODE_ENV=development
```

**IMPORTANTE:** Asegúrate de que tu cuenta de OpenAI tiene acceso a la Realtime API.

### 3. Instalar dependencias del frontend
```bash
# En la raíz del proyecto
npm install
```

## Uso

### 1. Iniciar el servidor relay
```bash
cd server
npm run dev
```

Deberías ver:
```
🚀 Relay Server running on http://localhost:8080
🤖 Model: gpt-realtime-mini-2025-10-06
🔑 API Key configured: Yes
🌍 Environment: development
🔌 WebSocket server ready
```

### 2. Iniciar el frontend
```bash
# En otra terminal, desde la raíz del proyecto
npm run dev
```

### 3. Probar el asistente
1. Abre el navegador en `http://localhost:5173`
2. Haz clic en "▶️ Iniciar Asistente"
3. Concede permisos de micrófono cuando se soliciten
4. Habla con el asistente

## Ventajas de la migración

### ✅ Latencia ultra-baja
- WebSocket persistente vs HTTP request/response
- Audio streaming bidireccional en tiempo real

### ✅ Mejor experiencia de usuario
- Respuestas más rápidas
- Conversación más natural
- Detección de voz del lado del servidor (server VAD)

### ✅ Más económico
- `gpt-realtime-mini` es más barato que `gpt-4o-audio-preview`
- Facturación por tokens de audio procesado

### ✅ Seguridad
- API key permanece en el servidor
- El cliente nunca ve las credenciales

## Flujo de datos

```
Usuario habla
    ↓
Micrófono del navegador
    ↓
VAD local detecta voz
    ↓
Audio (Float32Array) → PCM16 base64
    ↓
WebSocket Cliente → Relay Server
    ↓
Relay Server → OpenAI Realtime API
    ↓
OpenAI procesa (Whisper + GPT + TTS)
    ↓
OpenAI → Relay Server (eventos en streaming)
    ↓
Relay Server → Cliente WebSocket
    ↓
Cliente reproduce audio
    ↓
Usuario escucha respuesta
```

## Eventos principales

### Cliente → OpenAI
- `session.update` - Configurar sesión
- `input_audio_buffer.append` - Enviar audio del usuario
- `input_audio_buffer.commit` - Procesar audio enviado

### OpenAI → Cliente
- `session.created` - Sesión iniciada
- `session.updated` - Configuración aplicada
- `input_audio_buffer.speech_started` - Usuario empezó a hablar
- `input_audio_buffer.speech_stopped` - Usuario dejó de hablar
- `response.audio.delta` - Chunk de audio de respuesta
- `response.audio.done` - Audio completo

## Troubleshooting

### Error: "Failed to connect to relay server"
- Verifica que el servidor esté corriendo en `http://localhost:8080`
- Revisa los logs del servidor

### Error: "OPENAI_API_KEY not found"
- Crea el archivo `server/.env` con tu API key
- Reinicia el servidor

### Error: "Authentication failed"
- Verifica que tu API key sea válida
- Asegúrate de que tu cuenta tiene acceso a Realtime API

### No se escucha audio
- Verifica permisos de micrófono en el navegador
- Revisa la consola del navegador para errores
- Verifica que el VAD esté activo

## Próximos pasos

- [ ] Implementar funciones (function calling) para acciones específicas
- [ ] Añadir soporte para interrupciones
- [ ] Optimizar tamaño de chunks de audio
- [ ] Agregar métricas y monitoreo
- [ ] Implementar reconexión automática

## Referencias

- [OpenAI Realtime API Documentation](https://platform.openai.com/docs/guides/realtime)
- [Realtime API WebSocket Protocol](https://platform.openai.com/docs/guides/realtime-websocket)
- [GitHub: openai-realtime-console](https://github.com/openai/openai-realtime-console)
