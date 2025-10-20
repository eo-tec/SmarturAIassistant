# Cambio a Server VAD de OpenAI

## ✅ Migración completada: VAD Local → Server VAD

Se eliminó el VAD local (@ricky0123/vad-web) y ahora usamos el **Server VAD de OpenAI**, integrado en la Realtime API.

## Por qué este cambio es mejor

### Antes (VAD Local)
```
Usuario habla
    ↓
VAD local detecta voz (Silero ML en el navegador)
    ↓
Acumula audio
    ↓
VAD detecta silencio → envía audio completo
    ↓
OpenAI procesa
```

**Problemas:**
- ❌ Doble procesamiento (VAD local + Server VAD)
- ❌ Mayor latencia (espera a que el VAD local detecte fin)
- ❌ Más recursos del navegador
- ❌ Conflictos entre VADs

### Ahora (Server VAD)
```
Usuario habla
    ↓
Micrófono captura audio continuamente
    ↓
Envía chunks cada 100ms via WebSocket
    ↓
OpenAI Server VAD detecta habla en tiempo real
    ↓
OpenAI procesa y responde inmediatamente
```

**Ventajas:**
- ✅ Latencia ultra-baja (streaming continuo)
- ✅ Un solo VAD (el de OpenAI, optimizado)
- ✅ Menos recursos del navegador
- ✅ Detección más precisa
- ✅ Código más simple

## Flujo de eventos con Server VAD

### 1. Inicio de sesión
```javascript
// Cliente envía configuración con server VAD habilitado
{
  type: 'session.update',
  session: {
    turn_detection: {
      type: 'server_vad',
      threshold: 0.5,
      prefix_padding_ms: 300,
      silence_duration_ms: 500
    }
  }
}
```

### 2. Streaming de audio
```javascript
// Cliente envía chunks continuamente (cada 100ms)
{
  type: 'input_audio_buffer.append',
  audio: 'base64_pcm16_data...'
}
```

### 3. OpenAI detecta voz automáticamente

**Cuando empiezas a hablar:**
```javascript
// OpenAI envía
{
  type: 'input_audio_buffer.speech_started'
}
```

**Cuando dejas de hablar:**
```javascript
// OpenAI envía
{
  type: 'input_audio_buffer.speech_stopped'
}

// Y automáticamente hace commit y procesa
{
  type: 'input_audio_buffer.committed'
}
```

### 4. OpenAI responde
```javascript
// Streaming de audio de respuesta
{
  type: 'response.audio.delta',
  delta: 'base64_audio_chunk...'
}
```

## Configuración del Server VAD

En `useOpenAIRealtime.ts`:

```javascript
turn_detection: {
  type: 'server_vad',           // Usar VAD del servidor
  threshold: 0.5,                // Sensibilidad (0.0 - 1.0)
  prefix_padding_ms: 300,        // Audio antes de detectar voz
  silence_duration_ms: 500,      // Silencio antes de considerar fin
}
```

### Parámetros ajustables

- **threshold**: Sensibilidad de detección
  - `0.3` - Muy sensible (detecta susurros, más falsos positivos)
  - `0.5` - Balanceado (recomendado)
  - `0.7` - Menos sensible (solo voz clara)

- **prefix_padding_ms**: Milisegundos de audio a incluir ANTES de detectar voz
  - Útil para no cortar el inicio de palabras
  - Recomendado: 200-500ms

- **silence_duration_ms**: Milisegundos de silencio para considerar que terminaste
  - `300ms` - Respuestas muy rápidas (puede cortar pausas naturales)
  - `500ms` - Balanceado (recomendado)
  - `1000ms` - Conversación más pausada

## Código simplificado

### Hook de micrófono (`useMicrophoneStream.ts`)
```typescript
// Captura audio y envía chunks cada 100ms
const microphone = useMicrophoneStream({
  onAudioChunk: (chunk) => {
    realtime.sendAudio(chunk)
  },
  chunkIntervalMs: 100,
  sampleRate: 24000
})
```

### Sin commit manual
```typescript
// ANTES (con VAD local) ❌
wsRef.current.send(JSON.stringify({
  type: 'input_audio_buffer.append',
  audio: base64Audio
}))
wsRef.current.send(JSON.stringify({
  type: 'input_audio_buffer.commit'  // ← Manual
}))

// AHORA (con server VAD) ✅
wsRef.current.send(JSON.stringify({
  type: 'input_audio_buffer.append',
  audio: base64Audio
}))
// OpenAI hace commit automáticamente cuando detecta silencio
```

## Manejo de estados

Los estados ahora son manejados 100% por eventos del servidor:

```typescript
case 'input_audio_buffer.speech_started':
  setState('listening')  // Usuario hablando
  break

case 'input_audio_buffer.speech_stopped':
  setState('thinking')   // Procesando
  break

case 'response.audio.delta':
  setState('speaking')   // Asistente respondiendo
  break

case 'response.done':
  setState('listening')  // Listo para nuevo input
  break
```

## Troubleshooting

### "El asistente no detecta cuando hablo"
- Verifica el nivel de audio del micrófono (debería mostrar 🔊 X%)
- Reduce `threshold` en la configuración de `turn_detection`
- Revisa permisos de micrófono en el navegador

### "El asistente corta mis palabras"
- Aumenta `silence_duration_ms` (ej: de 500ms a 800ms)
- Aumenta `prefix_padding_ms`

### "El asistente es muy lento en responder"
- Reduce `silence_duration_ms` (ej: de 500ms a 300ms)
- Verifica latencia de red (WebSocket debe estar en <100ms)

### "Audio entrecortado o con lag"
- Reduce `chunkIntervalMs` (ej: de 100ms a 50ms)
- Verifica ancho de banda de red
- Revisa CPU del navegador (audio processing es intensivo)

## Próximos pasos

- [ ] Experimentar con diferentes valores de `threshold`
- [ ] Añadir interrupciones (poder hablar mientras el asistente responde)
- [ ] Implementar cancelación de respuesta
- [ ] Agregar visualización de niveles de audio en tiempo real

## Referencias

- [OpenAI Realtime API - Turn Detection](https://platform.openai.com/docs/guides/realtime#turn-detection)
- [Server VAD Configuration](https://platform.openai.com/docs/api-reference/realtime-server-events/session/update)
