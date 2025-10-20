# Guía de Deployment a Dokploy

## Resumen

Esta aplicación está lista para desplegarse en Dokploy usando un Dockerfile. Todo (frontend + backend) se ejecuta en un solo contenedor, simplificando el deployment.

## Arquitectura de Deployment

```
┌─────────────────────────────────────────┐
│         Docker Container                 │
│                                          │
│  ┌────────────────────────────────────┐ │
│  │      Express Server (Port 8080)    │ │
│  │                                    │ │
│  │  ┌──────────────┐  ┌────────────┐ │ │
│  │  │  API Routes  │  │  Static    │ │ │
│  │  │  /api/chat   │  │  Files     │ │ │
│  │  │  /health     │  │  (React)   │ │ │
│  │  └──────────────┘  └────────────┘ │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## Pasos para Desplegar en Dokploy

### 1. Preparar el Repositorio Git

```bash
# Si aún no tienes git inicializado
git init

# Agregar todos los archivos
git add .

# Crear commit
git commit -m "Ready for Dokploy deployment"

# Agregar remote (GitHub, GitLab, etc.)
git remote add origin <tu-repo-url>

# Push
git push -u origin main
```

### 2. Configurar Dokploy

1. **Accede a tu panel de Dokploy**
   - URL: `https://dokploy.tu-dominio.com`

2. **Crear Nueva Aplicación**
   - Click en "Create Application"
   - Selecciona "Git Repository"

3. **Conectar Repositorio**
   - Proveedor: GitHub/GitLab/etc.
   - Repositorio: Selecciona tu repo
   - Branch: `main` (o la que uses)

4. **Configurar Build**
   - **Build Method**: `Dockerfile`
   - **Dockerfile Path**: `./Dockerfile`
   - **Context Path**: `.` (raíz del proyecto)
   - **Build Arguments**: (ninguno necesario)

5. **Configurar Red**
   - **Port**: `8080`
   - **Protocol**: `HTTP`

6. **Configurar Dominio** (Opcional pero recomendado)
   - Agrega tu dominio personalizado
   - Ejemplo: `hotel-assistant.tu-dominio.com`
   - Dokploy configurará SSL automáticamente

### 3. Variables de Entorno

En la sección "Environment Variables" de Dokploy, agrega:

```env
OPENAI_API_KEY=sk-proj-XXXXXXXXXXXXXXXXXX
NODE_ENV=production
PORT=8080
```

**IMPORTANTE**:
- `OPENAI_API_KEY` es **OBLIGATORIO**
- Consigue tu API key en: https://platform.openai.com/api-keys
- No incluyas la API key en el código ni en git

### 4. Health Check

Configura el health check en Dokploy:

- **Path**: `/health`
- **Port**: `8080`
- **Interval**: `30s`
- **Timeout**: `3s`
- **Retries**: `3`
- **Start Period**: `40s`

### 5. Recursos Recomendados

Para una aplicación con audio, recomiendo:

- **CPU**: 0.5 - 1 vCPU
- **RAM**: 512 MB - 1 GB
- **Storage**: 1 GB

Dokploy ajustará según disponibilidad.

### 6. Deploy

1. Click en **"Deploy"**
2. Dokploy comenzará a:
   - Clonar el repositorio
   - Construir la imagen Docker (multi-stage build)
   - Crear el contenedor
   - Exponerlo en el puerto configurado
3. Monitorea los logs en tiempo real
4. Espera el mensaje: `🚀 Backend Server running on...`

### 7. Verificar Deployment

Una vez desplegado, verifica:

#### Health Check
```bash
curl https://tu-dominio.com/health
```

Respuesta esperada:
```json
{
  "status": "ok",
  "message": "OpenAI Chat Completions Backend Server",
  "model": "gpt-4o-audio-preview"
}
```

#### Frontend
Abre en navegador: `https://tu-dominio.com`

Deberías ver la aplicación del asistente de hotel.

#### API
```bash
curl -X POST https://tu-dominio.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"audio":"...base64...","voice":"shimmer"}'
```

## Actualizar la Aplicación

### Opción 1: Auto-Deploy (Recomendado)

Configura webhooks en Dokploy para deploy automático al hacer push:

1. En Dokploy, ve a tu aplicación
2. Sección "Webhooks"
3. Copia la URL del webhook
4. En GitHub/GitLab, agrega el webhook
5. Ahora cada `git push` desplegará automáticamente

### Opción 2: Deploy Manual

1. Haz tus cambios localmente
2. Commit y push a git:
   ```bash
   git add .
   git commit -m "Update: descripción de cambios"
   git push
   ```
3. En Dokploy, click en "Redeploy"
4. Dokploy reconstruirá con los cambios

## Logs y Debugging

### Ver Logs en Tiempo Real

En Dokploy:
1. Ve a tu aplicación
2. Click en "Logs"
3. Selecciona "Live Logs"

### Logs Importantes

Busca estos mensajes:
- ✅ `🚀 Backend Server running on http://localhost:8080` - OK
- ✅ `🤖 Using model: gpt-4o-audio-preview` - Modelo correcto
- ✅ `🔑 API Key configured: Yes` - API key detectada
- ✅ `📂 Serving static files from: /app/dist` - Frontend servido
- ❌ `❌ WARNING: OPENAI_API_KEY not found` - Falta API key

### Debugging Común

**Problema**: Application won't start
- **Solución**: Verifica que `OPENAI_API_KEY` esté configurada

**Problema**: 404 en el frontend
- **Solución**: Verifica que el build se completó correctamente en los logs

**Problema**: CORS errors
- **Solución**: No debería haber CORS ya que todo está en el mismo dominio

**Problema**: Audio no funciona
- **Solución**: Verifica que estés usando HTTPS (requerido para micrófono)

## Rollback

Si algo sale mal después de un deploy:

1. En Dokploy, ve a "Deployments History"
2. Encuentra el deployment anterior que funcionaba
3. Click en "Rollback to this version"
4. Dokploy restaurará ese estado

## Costos Estimados

### Hosting (VPS + Dokploy)
- **Dokploy**: Gratis (self-hosted)
- **VPS**: Ya lo tienes ✅

### OpenAI API
- **Modelo**: gpt-4o-audio-preview
- **Costos**: Variable según uso
- **Monitoreo**: https://platform.openai.com/usage

Ejemplo de uso:
- 100 conversaciones/día × 2 min promedio = ~$10-20/mes

## Monitoreo

Recomendaciones:
1. **Configura alertas** en Dokploy para errores
2. **Monitorea uso** de OpenAI API regularmente
3. **Revisa logs** periódicamente
4. **Health checks** configurados correctamente

## Seguridad

✅ **API Key**: Protegida en variables de entorno (no en código)
✅ **HTTPS**: Manejado por Dokploy automáticamente
✅ **CORS**: No hay problemas (mismo dominio)
⚠️ **Rate Limiting**: Considera implementar para evitar abuso
⚠️ **Autenticación**: Considera agregar para uso privado

## Próximos Pasos

Después del deployment, considera:

1. **Monitoreo**: Configura alertas de uptime
2. **Backups**: Dokploy maneja esto automáticamente
3. **CDN**: Para mejor performance global (opcional)
4. **Rate Limiting**: Implementar en Express para proteger API
5. **Analytics**: Agregar para entender uso

## Soporte

Si tienes problemas:
1. Revisa los logs en Dokploy
2. Verifica variables de entorno
3. Consulta la documentación de Dokploy
4. Revisa el health check endpoint

## Checklist Pre-Deployment

Antes de hacer el primer deploy, verifica:

- [ ] Código subido a Git
- [ ] `.env` agregado a `.gitignore`
- [ ] API key de OpenAI válida y con créditos
- [ ] Dockerfile funciona localmente (`docker build -t test .`)
- [ ] Variables de entorno configuradas en Dokploy
- [ ] Dominio apuntando a servidor Dokploy (si usas uno)
- [ ] Health check configurado

## Checklist Post-Deployment

Después del deploy, verifica:

- [ ] Health check responde correctamente
- [ ] Frontend carga en el navegador
- [ ] Micrófono funciona (requiere HTTPS)
- [ ] Asistente responde correctamente
- [ ] Audio de respuesta se reproduce
- [ ] Logs muestran todo OK
- [ ] SSL está activo (candado en navegador)

---

¡Listo para production! 🚀
