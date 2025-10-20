# Asistente de Hotel con OpenAI Chat Completions API

Asistente virtual de hotel con soporte de voz usando OpenAI Chat Completions API (modelo `gpt-audio-mini-2025-10-06`).

## Características

- 🎤 **Detección de voz** en tiempo real con VAD (Voice Activity Detection)
- 🤖 **Chat con audio** usando OpenAI Chat Completions API
- 🔊 **Respuestas en audio** generadas por OpenAI
- 🎨 **Interfaz visual animada** con bola orbital que refleja los estados
- 🔒 **Seguro** - API key protegida en el servidor backend

## Arquitectura

```
Frontend (React + Vite)
    ↓
  VAD (detección de voz)
    ↓
  Captura audio → Float32Array → PCM16 base64
    ↓
Backend (Express)
    ↓
OpenAI Chat Completions API
  (gpt-audio-mini-2025-10-06)
    ↓
Respuesta con audio
    ↓
Frontend reproduce audio
```

## Instalación

### 1. Instalar dependencias del frontend

```bash
npm install
```

### 2. Instalar dependencias del backend

```bash
cd server
npm install
```

### 3. Configurar API Key de OpenAI

Edita `server/.env` y configura tu API key:

```env
OPENAI_API_KEY=sk-proj-tu-api-key-aqui
PORT=8080
```

**Importante**: Consigue tu API key en https://platform.openai.com/api-keys

### 4. Iniciar el servidor backend

```bash
cd server
npm start
```

El servidor estará corriendo en `http://localhost:8080`

### 5. Iniciar el frontend

En otra terminal:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Uso

1. Abre la aplicación en tu navegador
2. Haz clic en **"▶️ Iniciar Asistente"**
3. Permite el acceso al micrófono cuando el navegador lo solicite
4. **Habla** cerca del micrófono
5. La bola cambiará de estado:
   - **Idle** (gris): Esperando
   - **Listening** (blanco pulsando): Detectando tu voz
   - **Thinking** (gris oscuro/claro): Procesando con OpenAI
   - **Speaking** (blanco con onda): Reproduciendo respuesta

## Estados Visuales

| Estado | Color | Animación | Significado |
|--------|-------|-----------|-------------|
| **Idle** | Gris medio | Respiración lenta | Esperando comando de voz |
| **Listening** | Blanco brillante | Pulso reactivo + ripples | Detectando tu voz |
| **Thinking** | Gris oscuro ↔ claro | Rotación + movimiento vertical | Procesando con OpenAI |
| **Speaking** | Blanco brillante | Pulso + onda de audio | Reproduciendo respuesta |

## Contexto del Asistente

El asistente está configurado como un **conserje virtual de hotel** que puede ayudar con:

- ✅ Información sobre servicios del hotel
- ✅ Horarios de comidas y servicios
- ✅ Reservas de restaurante
- ✅ Servicio a la habitación
- ✅ Información turística local
- ✅ Check-in y check-out
- ✅ Servicios de conserjería

### Ejemplos de Preguntas

- "¿A qué hora abre el restaurante?"
- "Quiero reservar una mesa para dos personas"
- "¿Qué servicios tiene el spa?"
- "¿Dónde puedo visitar cerca del hotel?"
- "Necesito servicio a la habitación"

## Personalización

### Cambiar las Instrucciones

Edita `src/hooks/useOpenAIChat.ts`, función `getDefaultHotelInstructions()`:

```typescript
export function getDefaultHotelInstructions(): string {
  return `Tus instrucciones personalizadas aquí...`;
}
```

O pasa instrucciones personalizadas en `App.tsx`:

```typescript
const chat = useOpenAIChat({
  instructions: 'Eres un asistente personalizado...',
  // ...
});
```

### Cambiar la Voz

En `src/App.tsx`, modifica el parámetro `voice`:

```typescript
const chat = useOpenAIChat({
  voice: 'alloy', // Opciones: alloy, ash, ballad, coral, echo, sage, shimmer, verse, marin, cedar
  // ...
});
```

**Voces disponibles:**
- **alloy**: Voz neutral y balanceada
- **ash**: Voz suave y conversacional
- **ballad**: Voz cálida y expresiva
- **coral**: Voz británica y amigable
- **echo**: Voz masculina clara
- **sage**: Voz profesional y confiable
- **shimmer**: Voz femenina suave y cálida (por defecto)
- **verse**: Voz enérgica y dinámica
- **marin**: Voz juvenil y entusiasta
- **cedar**: Voz profunda y autoritaria

## Estructura del Proyecto

```
AIassistant/
├── src/
│   ├── App.tsx                    # Componente principal
│   ├── hooks/
│   │   ├── useOpenAIChat.ts       # Hook para Chat API con audio
│   │   └── useVoiceActivityDetection.ts  # VAD
│   ├── utils/
│   │   └── audioUtils.ts          # Conversiones de audio
│   └── OrbitalSystem.tsx          # Componente visual
├── server/
│   ├── relay-server.js            # Servidor backend
│   ├── package.json
│   └── .env                       # API key (no subir a git)
├── .env                           # Config frontend
└── package.json
```

## API Utilizada

Este proyecto usa la **OpenAI Chat Completions API** (Responses API) con el modelo:

- **Modelo**: `gpt-audio-mini-2025-10-06`
- **Modalidades**: Text + Audio
- **Formato de audio**: PCM16 a 24kHz
- **API**: `/v1/responses` (Responses API)

## Seguridad

⚠️ **IMPORTANTE**: La API key de OpenAI está protegida en el servidor backend.

**Para producción:**
- ✅ API key está en el servidor (no expuesta al navegador)
- ✅ El frontend solo se comunica con tu servidor backend
- ✅ Implementa autenticación de usuarios en el backend
- ✅ Agrega rate limiting para prevenir abuso
- ✅ Monitorea el uso de la API

## Costos Estimados

La API de Chat Completions con audio tiene costos variables. Consulta los precios actuales en:
https://openai.com/api/pricing/

**Estimación aproximada**: Una conversación de 5 minutos puede costar entre $0.10 - $0.50 USD dependiendo del uso.

Monitorea tu uso en: https://platform.openai.com/usage

## Troubleshooting

### El asistente no responde

1. ✅ Verifica que el servidor backend esté corriendo (`cd server && npm start`)
2. ✅ Revisa que la API key esté configurada en `server/.env`
3. ✅ Asegúrate de tener créditos en tu cuenta de OpenAI
4. ✅ Verifica que el micrófono esté funcionando
5. ✅ Revisa la consola del navegador para errores

### Error de conexión al backend

- ✅ Asegúrate de que el servidor backend esté corriendo en `http://localhost:8080`
- ✅ Verifica que `VITE_BACKEND_URL` en `.env` apunte al servidor correcto
- ✅ Revisa los logs del servidor backend para errores

### Audio no se reproduce

1. ✅ Verifica que los altavoces estén encendidos
2. ✅ Revisa los permisos de audio del navegador
3. ✅ Comprueba la consola para errores de Web Audio API

### VAD no detecta voz

1. ✅ Habla más cerca del micrófono
2. ✅ Verifica permisos de micrófono en el navegador
3. ✅ Prueba con otro micrófono
4. ✅ Asegúrate de que no haya ruido de fondo excesivo

## Recursos

- [OpenAI Chat Completions Docs](https://platform.openai.com/docs/guides/text-generation)
- [OpenAI Responses API](https://platform.openai.com/docs/api-reference/responses)
- [OpenAI Pricing](https://openai.com/api/pricing/)
- [VAD Web Library](https://github.com/ricky0123/vad)
- [Three.js Documentation](https://threejs.org/docs/)

## Deployment a Producción (Dokploy)

### Opción 1: Deployment con Dockerfile (Recomendado)

1. **Sube tu código a un repositorio Git** (GitHub, GitLab, etc.)

2. **En Dokploy, crea una nueva aplicación**:
   - Selecciona "Create Application"
   - Elige "Git Repository"
   - Conecta tu repositorio
   - Selecciona la rama (ej: `main`)

3. **Configura el deployment**:
   - **Build Method**: Dockerfile
   - **Dockerfile Path**: `./Dockerfile` (en la raíz)
   - **Port**: 8080

4. **Configura las variables de entorno**:
   ```
   OPENAI_API_KEY=sk-proj-tu-api-key-aqui
   NODE_ENV=production
   PORT=8080
   ```

5. **Deploy**:
   - Haz clic en "Deploy"
   - Dokploy construirá la imagen y la desplegará
   - Asigna un dominio en la configuración de Dokploy

### Opción 2: Deployment con Docker Compose

1. En Dokploy, sube el archivo `docker-compose.yml`

2. Configura las variables de entorno en Dokploy

3. Deploy directo desde el compose

### Health Check

Tu aplicación tiene un endpoint de health check configurado:
- **URL**: `https://tu-dominio.com/health`
- **Response**: `{ "status": "ok", "model": "gpt-4o-audio-preview" }`

Configura el health check en Dokploy:
- **Path**: `/health`
- **Port**: 8080
- **Interval**: 30s

### SSL/HTTPS

Dokploy maneja automáticamente los certificados SSL con Let's Encrypt. Solo necesitas:
1. Configurar tu dominio en Dokploy
2. Apuntar el DNS a tu servidor Dokploy
3. Dokploy generará y renovará los certificados automáticamente

### Variables de Entorno Requeridas

| Variable | Descripción | Requerido |
|----------|-------------|-----------|
| `OPENAI_API_KEY` | Tu API key de OpenAI | ✅ Sí |
| `NODE_ENV` | Entorno de ejecución | ❌ No (default: production) |
| `PORT` | Puerto del servidor | ❌ No (default: 8080) |

### Build Local con Docker

Para probar el deployment localmente:

```bash
# Build de la imagen
docker build -t aiassistant .

# Run del container
docker run -p 8080:8080 \
  -e OPENAI_API_KEY=sk-proj-... \
  -e NODE_ENV=production \
  aiassistant
```

O usando docker-compose:

```bash
# Asegúrate de tener el .env configurado en server/
docker-compose up -d
```

### Logs y Debugging

En Dokploy puedes ver los logs en tiempo real:
- Ve a tu aplicación
- Haz clic en "Logs"
- Filtra por errores o búsqueda

Logs importantes a monitorear:
- `🚀 Backend Server running on...` - Servidor iniciado
- `🤖 Using model: gpt-4o-audio-preview` - Modelo configurado
- `🔑 API Key configured: Yes` - API key detectada
- `📂 Serving static files from:...` - Frontend servido correctamente

### URLs en Producción

Una vez desplegado, tu aplicación estará disponible en:
- **Frontend**: `https://tu-dominio.com`
- **API**: `https://tu-dominio.com/api/chat`
- **Health**: `https://tu-dominio.com/health`

Todo servido desde el mismo dominio, no hay problemas de CORS.

### Actualización del Código

Para actualizar tu aplicación:
1. Haz commit y push a tu repositorio Git
2. En Dokploy, haz clic en "Redeploy"
3. Dokploy reconstruirá la imagen con los cambios
4. Zero-downtime deployment automático

### Costos

**Hosting**:
- Dokploy es gratis (self-hosted en tu VPS)
- Solo pagas tu VPS (que ya tienes)

**OpenAI API**:
- Consulta precios en https://openai.com/api/pricing/
- Monitorea uso en https://platform.openai.com/usage

## Desarrollo Local

### Modo Desarrollo Normal (sin Docker)

```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
cd server
npm run dev
```

### Modo Desarrollo con Docker

```bash
# Build y run
docker-compose up --build

# Solo run (si ya está build)
docker-compose up

# Detener
docker-compose down
```

## Licencia

MIT
