# Multi-stage Dockerfile para deployment en Dokploy
# Stage 1: Build del frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copiar package files del frontend
COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY index.html ./

# Instalar todas las dependencias (necesarias para build)
RUN npm ci

# Copiar código fuente del frontend
COPY src ./src
COPY public ./public

# Build del frontend
RUN npm run build

# Stage 2: Runtime - Backend + Frontend estático
FROM node:20-alpine

WORKDIR /app

# Copiar package files del backend
COPY server/package*.json ./

# Instalar dependencias del backend (solo producción)
RUN npm ci --only=production

# Copiar código del backend
COPY server/*.js ./

# Copiar build del frontend desde stage anterior
COPY --from=frontend-builder /app/dist ./dist

# Exponer puerto
EXPOSE 8080

# Variables de entorno por defecto
ENV NODE_ENV=production
ENV PORT=8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:8080/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Iniciar servidor
CMD ["npm", "start"]
