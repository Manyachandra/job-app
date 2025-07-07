#!/bin/bash

echo "🚀 Starting build process..."

# Build smart contracts (skip if there are configuration issues)
echo "📦 Building smart contracts..."
cd smart-contract
npm install
if npm run compile; then
    echo "✅ Smart contracts compiled successfully"
else
    echo "⚠️  Smart contract compilation failed (this is okay for frontend deployment)"
fi
cd ..

# Build frontend
echo "🏗️ Building frontend..."
cd frontend
npm install
if npm run build; then
    echo "✅ Frontend built successfully"
else
    echo "❌ Frontend build failed"
    exit 1
fi
cd ..

echo "✅ Build completed!" 