# UI Reactiva al Audio - Visualización Dinámica

## ✅ Implementado

El sistema de visualización 3D (OrbitalSystem) ahora responde en tiempo real al volumen del audio:

- **Listening**: Animaciones reactivas al nivel del **micrófono** (voz del usuario)
- **Speaking**: Animaciones reactivas al nivel del **audio de salida** (voz del asistente)

## Suavizado de Audio (Audio Smoothing)

Para evitar movimientos bruscos, se implementó **interpolación lineal (LERP)** en las transiciones de volumen:

```typescript
// En OrbitalSystem.tsx
let smoothedAudioLevel = 0

// En cada frame:
const targetAudioLevel = audioLevelRef.current || 0
smoothedAudioLevel = lerp(smoothedAudioLevel, targetAudioLevel, 0.15)

// Función lerp:
const lerp = (start, end, factor) => start + (end - start) * factor
```

**Factor de suavizado: 0.15**
- Valor bajo (0.05-0.10): Muy suave, puede sentirse lento
- **Valor recomendado (0.12-0.18)**: Balance perfecto
- Valor alto (0.3-0.5): Más reactivo, menos suave

**Efecto:**
- ✅ Transiciones fluidas entre volúmenes
- ✅ Sin saltos bruscos ni jitter
- ✅ Movimientos orgánicos y naturales
- ✅ Sigue el audio sin lag perceptible

## Arquitectura

### 1. Análisis de Audio de Salida (`AudioPlayer`)

```typescript
// Web Audio API para análisis en tiempo real
private analyser: AnalyserNode
private gainNode: GainNode
private audioLevel: number = 0

// Pipeline de audio:
source → gainNode → analyser → destination
                       ↓
                 Cálculo RMS
                       ↓
              audioLevel (0.0-1.0)
```

**Características:**
- **AnalyserNode**: FFT size 256, smoothing 0.8
- **RMS (Root Mean Square)**: Calcula energía del audio
- **Actualización**: 60fps vía requestAnimationFrame
- **Rango**: 0.0 (silencio) - 1.0 (máximo volumen)

### 2. Análisis de Audio de Entrada (`useMicrophoneStream`)

Ya existente, calcula nivel del micrófono cada 4096 samples.

### 3. Visualización Reactiva (`OrbitalSystem`)

Recibe `audioLevel` como prop y ajusta animaciones en tiempo real.

## Efectos Visuales por Estado

### LISTENING (Reactivo al micrófono)

#### Esfera Central
```typescript
const audioIntensity = audioLevelRef.current || 0
const basePulse = 1 + Math.sin(time * 3) * 0.02  // Pulso base sutil
const audioPulse = audioIntensity * 0.15         // +15% por audio
sphere.scale = basePulse + audioPulse
```

- **Sin voz**: Pulso sutil (±2%)
- **Hablando**: Crece hasta +15% según volumen

#### Halo (Anillo)
```typescript
const rippleSpeed = 6 + audioIntensity * 4       // 6-10 Hz
const rippleIntensity = 0.15 + audioIntensity * 0.1
halo.opacity = 0.3 + audioIntensity * 0.15
```

- **Velocidad de ripple**: Aumenta con voz
- **Intensidad**: Más pronunciada con volumen
- **Opacidad**: Más visible cuando hablas

#### Partículas
```typescript
p.angle += p.speed * (2 + audioIntensity * 3)    // 2x-5x velocidad
convergence = 0.3 + audioIntensity * 0.2         // Movimiento
opacity = 0.6 + audioIntensity * 0.2             // Visibilidad
```

- **Rotación**: 2x velocidad base, hasta 5x con voz fuerte
- **Convergencia**: Se acercan al centro con audio
- **Opacidad**: Más visibles cuando hablas

### SPEAKING (Reactivo al audio de salida)

#### Esfera Central
```typescript
const basePulse = 1 + Math.sin(time * 8) * 0.02  // Pulso base rápido
const audioPulse = audioIntensity * 0.12         // +12% por audio
sphere.scale = basePulse + audioPulse
```

- **Pulso base**: Más rápido que listening (8 Hz vs 3 Hz)
- **Reactividad**: +12% según volumen del asistente

#### Halo
```typescript
const expansionBase = 1 + Math.sin(time * 4) * 0.03
const expansionAudio = audioIntensity * 0.08
halo.scale = expansionBase + expansionAudio
halo.opacity = 0.35 + audioIntensity * 0.15
```

- **Expansión**: Crece con el volumen del asistente
- **Opacidad**: Más brillante cuando habla fuerte

#### Partículas
```typescript
radiusMultiplier = 1 + audioPulse * 1.2
opacity = 0.4 + audioIntensity * 0.3
```

- **Distancia**: Se alejan cuando el asistente habla fuerte
- **Opacidad**: Más visibles con volumen

#### Waveform (Forma de Onda)
```typescript
opacity = 0.4 + audioIntensity * 0.4             // 40%-80%
waveAmplitude = 0.3 * audioIntensity + 0.05      // Altura de onda
```

- **Opacidad**: Más visible con audio
- **Amplitud**: La onda crece con el volumen
- **Movimiento**: Ondula siguiendo el ritmo del audio

## Flujo de Datos

```
Usuario habla
    ↓
useMicrophoneStream
    ↓
microphone.audioLevel (0.0-1.0)
    ↓
App.tsx (state === 'listening')
    ↓
OrbitalSystem audioLevel prop
    ↓
Animaciones reactivas

Asistente habla
    ↓
AudioPlayer → AnalyserNode
    ↓
realtime.outputAudioLevel (0.0-1.0)
    ↓
App.tsx (state === 'speaking')
    ↓
OrbitalSystem audioLevel prop
    ↓
Animaciones reactivas
```

## Código Key

### App.tsx
```typescript
const audioLevel = state === 'listening'
  ? microphone.audioLevel        // Nivel del micrófono
  : state === 'speaking'
  ? realtime.outputAudioLevel   // Nivel del audio de salida
  : 0                            // Sin audio para idle/thinking

<OrbitalSystem state={state} audioLevel={audioLevel} />
```

### useOpenAIRealtime.ts
```typescript
// Actualizar nivel de audio cada 50ms
useEffect(() => {
  const updateAudioLevel = () => {
    if (audioPlayerRef.current) {
      setOutputAudioLevel(audioPlayerRef.current.getAudioLevel())
    }
  }
  const intervalId = setInterval(updateAudioLevel, 50)
  return () => clearInterval(intervalId)
}, [])
```

### AudioPlayer (audioUtils.ts)
```typescript
// Análisis continuo del audio
private startAudioAnalysis() {
  const analyze = () => {
    this.analyser.getByteTimeDomainData(dataArray)

    // Calcular RMS
    let sum = 0
    for (let i = 0; i < dataArray.length; i++) {
      const normalized = (dataArray[i] - 128) / 128
      sum += normalized * normalized
    }
    const rms = Math.sqrt(sum / dataArray.length)
    this.audioLevel = Math.min(rms * 2, 1.0)

    this.animationFrameId = requestAnimationFrame(analyze)
  }
  analyze()
}
```

## Parámetros Ajustables

### Factor de Suavizado

En `OrbitalSystem.tsx:139`:
```typescript
smoothedAudioLevel = lerp(smoothedAudioLevel, targetAudioLevel, 0.15)
                                                                  ↑
                                                        Ajustar este valor
```

**Valores recomendados:**
- `0.08`: Muy suave, casi como olas (puede tener lag visible)
- `0.12`: Suave y responsive (bueno para voces calmadas)
- **`0.15`**: Balance perfecto (recomendado) ⭐
- `0.20`: Más reactivo (bueno para música o voces dinámicas)
- `0.30`: Muy reactivo (casi sin suavizado)

### Sensibilidad de Listening

En `OrbitalSystem.tsx:176-210`:
```typescript
const audioPulse = audioIntensity * 0.15  // ← Ajustar (0.1-0.3)
const rippleSpeed = 6 + audioIntensity * 4 // ← Ajustar (2-8)
p.angle += p.speed * (2 + audioIntensity * 3) // ← Ajustar velocidad
```

### Sensibilidad de Speaking

En `OrbitalSystem.tsx:260-309`:
```typescript
const audioPulse = audioIntensity * 0.12   // ← Ajustar (0.08-0.2)
const expansionAudio = audioIntensity * 0.08 // ← Ajustar (0.05-0.15)
const waveAmplitude = 0.3 * audioIntensity + 0.05 // ← Ajustar (0.2-0.5)
```

### Frecuencia de Actualización

En `useOpenAIRealtime.ts:83`:
```typescript
const intervalId = setInterval(updateAudioLevel, 50) // ← Ajustar (30-100ms)
```

### Análisis de Audio

En `audioUtils.ts:159-160`:
```typescript
this.analyser.fftSize = 256              // ← Más alto = más preciso
this.analyser.smoothingTimeConstant = 0.8 // ← 0.0-1.0 (suavizado)
```

## Performance

### Optimizaciones Aplicadas

- ✅ **requestAnimationFrame**: Sincronizado con refresh del navegador
- ✅ **Smoothing**: AnalyserNode suaviza cambios bruscos
- ✅ **Interval eficiente**: Solo actualiza estado cada 50ms
- ✅ **Cálculo RMS**: Método eficiente para nivel de audio

### Recursos Utilizados

- **CPU**: ~1-2% adicional por análisis de audio
- **GPU**: Sin cambio (Three.js ya optimizado)
- **Memoria**: ~100KB adicional por buffers de análisis

## Troubleshooting

### Las animaciones no reaccionan al audio

1. **Verificar permisos de micrófono** (para listening)
2. **Revisar consola**: Debe mostrar niveles de audio
3. **Aumentar sensibilidad** de los multiplicadores

### Animaciones muy sensibles/nerviosas (jittery)

1. **Reducir factor de suavizado**: De `0.15` a `0.08` en OrbitalSystem.tsx:139
2. **Aumentar smoothing del analyser**: `smoothingTimeConstant = 0.9`
3. **Reducir multiplicadores**: Bajar `audioPulse * 0.15` a `* 0.08`
4. **Aumentar intervalo**: De 50ms a 100ms en useOpenAIRealtime.ts:83

### Animaciones muy lentas/con lag

1. **Aumentar factor de suavizado**: De `0.15` a `0.25` en OrbitalSystem.tsx:139
2. **Reducir smoothing del analyser**: `smoothingTimeConstant = 0.6`
3. **Reducir intervalo**: De 50ms a 30ms

### Audio sin analizar (silencio)

1. **Verificar conexiones**: gainNode → analyser → destination
2. **Revisar AudioContext**: Debe estar "running"
3. **Comprobar source.connect**: Debe ir al gainNode

## Próximos Pasos

- [ ] Añadir análisis de frecuencias (graves/medios/agudos)
- [ ] Colores dinámicos según tonalidad
- [ ] Modo visualización espectro completo
- [ ] Efectos de partículas según transientes
- [ ] Sincronización labial (lip-sync)

## Referencias

- [Web Audio API - AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode)
- [Audio Visualization Techniques](https://www.html5rocks.com/en/tutorials/webaudio/intro/)
- [Three.js Performance Tips](https://threejs.org/docs/#manual/en/introduction/Performance-tips)
