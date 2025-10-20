#!/bin/bash

# Script para probar el build completo localmente antes de desplegar
# Simula el proceso que hará Docker

set -e  # Exit on error

echo "🔨 Building frontend..."
npm run build

echo "📦 Copying dist to server..."
npm run copy:dist

echo "✅ Build complete!"
echo ""
echo "Para probar localmente:"
echo "  cd server"
echo "  NODE_ENV=production npm start"
echo ""
echo "Luego visita: http://localhost:8080"
