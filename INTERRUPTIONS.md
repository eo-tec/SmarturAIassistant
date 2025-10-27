# Interrupciones (Barge-in) - OpenAI Realtime API

## ✅ Implementado

El asistente ahora soporta **interrupciones naturales** (barge-in): cuando el asistente está hablando y tú empiezas a hablar, se detiene inmediatamente para escucharte.

## Cómo funciona

### Flujo de interrupción

```
Asistente está hablando (estado: 'speaking')
    ↓
Usuario empieza a hablar
    ↓
OpenAI detecta: input_audio_buffer.speech_started
    ↓
Sistema verifica: ¿asistente hablando? ✅
    ↓
1. Envía response.cancel a OpenAI
2. Limpia buffer de audio local
3. Cambia estado a 'listening'
    ↓
OpenAI responde: response.cancelled
    ↓
Asistente escucha al usuario
```

## Implementación

### En `useOpenAIRealtime.ts:270-293`

```typescript
case 'input_audio_buffer.speech_started':
  console.log('🎤 User speech started');

  // Si el asistente está hablando, interrumpirlo (barge-in)
  if (stateRef.current === 'speaking') {
    console.log('⚠️ Interrupting assistant response...');

    // 1. Cancelar la respuesta actual en OpenAI
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({
        type: 'response.cancel'
      }));
      console.log('📤 Sent response.cancel to OpenAI');
    }

    // 2. Limpiar el buffer de audio que está reproduciendo
    if (audioPlayerRef.current) {
      audioPlayerRef.current.clear();
      console.log('🧹 Cleared audio playback buffer');
    }
  }

  setState('listening');
  break;
```

### Evento de cancelación

```typescript
case 'response.cancelled':
  console.log('🚫 Response cancelled (interrupted by user)');
  setState('listening');
  break;
```

## Eventos involucrados

### 1. Detección de voz del usuario
```json
{
  "type": "input_audio_buffer.speech_started"
}
```
- **Enviado por**: OpenAI (server VAD)
- **Cuándo**: Detecta que el usuario empezó a hablar
- **Acción**: Verificar si hay que interrumpir

### 2. Cancelación de respuesta
```json
{
  "type": "response.cancel"
}
```
- **Enviado por**: Cliente
- **Cuándo**: Usuario interrumpe al asistente
- **Resultado**: OpenAI detiene la generación de respuesta

### 3. Confirmación de cancelación
```json
{
  "type": "response.cancelled"
}
```
- **Enviado por**: OpenAI
- **Cuándo**: Después de cancelar exitosamente
- **Acción**: Estado vuelve a 'listening'

## Comportamiento esperado

### ✅ Interrupciones exitosas

**Escenario 1: Interrupción temprana**
```
Usuario: "¿Cuál es el horario del...?"
Asistente: "El horario del restaurante es de—"
Usuario: "Espera, mejor dime sobre el spa"
Asistente: [SE DETIENE INMEDIATAMENTE]
Asistente: "Claro, el spa está abierto..."
```

**Escenario 2: Corrección**
```
Asistente: "Te puedo ayudar con la reserva para mañana a las—"
Usuario: "No, no es para mañana"
Asistente: [SE DETIENE]
Asistente: "Entendido, ¿para qué día es la reserva?"
```

**Escenario 3: Cambio de tema**
```
Asistente: "El check-out es a las 12 del mediodía y puedes solicitar—"
Usuario: "Oye, tengo otra pregunta"
Asistente: [SE DETIENE]
Asistente: "Claro, dime"
```

### ❌ Sin interrupciones

El asistente NO se interrumpe cuando:
- El usuario NO está hablando (ruido de fondo no cuenta)
- El asistente NO está hablando (estado ≠ 'speaking')
- El WebSocket está desconectado

## Logs en consola

Cuando hay una interrupción, verás:

```
🎤 User speech started
⚠️ Interrupting assistant response...
📤 Sent response.cancel to OpenAI
🧹 Cleared audio playback buffer
📥 Server event: response.cancelled
🚫 Response cancelled (interrupted by user)
```

## Ajustes

### Sensibilidad de detección

Si las interrupciones son muy sensibles (se activan con ruido):
```typescript
// En useOpenAIRealtime.ts:123
turn_detection: {
  threshold: 0.6,  // ← Aumentar (menos sensible)
  // ...
}
```

Si las interrupciones son lentas:
```typescript
turn_detection: {
  threshold: 0.4,  // ← Reducir (más sensible)
  // ...
}
```

### Evitar falsos positivos

El sistema ya tiene protección contra falsos positivos:
- Solo interrumpe si `state === 'speaking'`
- Requiere que el server VAD detecte voz real (no ruido)

## Ventajas

✅ **Conversación natural**: Como hablar con una persona real
✅ **Respuesta inmediata**: Se detiene al instante
✅ **Sin desperdicio**: OpenAI deja de generar (ahorra tokens)
✅ **Audio limpio**: No quedan fragmentos reproduciendo

## Limitaciones conocidas

⚠️ **Latencia de red**: ~50-200ms entre hablar y que se detenga
⚠️ **Fragmentos cortos**: Audio muy corto puede terminar antes de cancelar
⚠️ **Overlapping**: No se puede hablar simultáneamente (es turn-based)

## Próximos pasos

- [ ] Agregar modo de conversación simultánea (full-duplex)
- [ ] Implementar "resume" para continuar respuestas interrumpidas
- [ ] Añadir feedback visual cuando se interrumpe
- [ ] Métricas de interrupciones (cuántas veces, duración, etc.)

## Referencias

- [OpenAI Realtime API - Response Control](https://platform.openai.com/docs/api-reference/realtime-client-events/response/cancel)
- [Server VAD Configuration](https://platform.openai.com/docs/guides/realtime#turn-detection)
