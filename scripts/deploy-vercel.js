#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Vercel Deployment Preparation Script');
console.log('=====================================\n');

// Check if vercel.json exists
const vercelConfigPath = path.join(__dirname, '..', 'vercel.json');
if (!fs.existsSync(vercelConfigPath)) {
  console.error('❌ vercel.json not found! Please create it first.');
  process.exit(1);
}

// Check if .vercelignore exists
const vercelIgnorePath = path.join(__dirname, '..', '.vercelignore');
if (!fs.existsSync(vercelIgnorePath)) {
  console.error('❌ .vercelignore not found! Please create it first.');
  process.exit(1);
}

// Check package.json files
const frontendPackagePath = path.join(__dirname, '..', 'frontend', 'package.json');
const backendPackagePath = path.join(__dirname, '..', 'backend', 'package.json');
const rootPackagePath = path.join(__dirname, '..', 'package.json');

if (!fs.existsSync(frontendPackagePath)) {
  console.error('❌ frontend/package.json not found!');
  process.exit(1);
}

if (!fs.existsSync(backendPackagePath)) {
  console.error('❌ backend/package.json not found!');
  process.exit(1);
}

if (!fs.existsSync(rootPackagePath)) {
  console.error('❌ package.json not found!');
  process.exit(1);
}

// Read and validate package.json files
try {
  const frontendPackage = JSON.parse(fs.readFileSync(frontendPackagePath, 'utf8'));
  const backendPackage = JSON.parse(fs.readFileSync(backendPackagePath, 'utf8'));
  const rootPackage = JSON.parse(fs.readFileSync(rootPackagePath, 'utf8'));

  console.log('✅ Package.json files found and valid');

  // Check for required scripts
  if (!frontendPackage.scripts.build) {
    console.warn('⚠️  frontend/package.json missing "build" script');
  } else {
    console.log('✅ Frontend build script found');
  }

  if (!backendPackage.scripts.start) {
    console.warn('⚠️  backend/package.json missing "start" script');
  } else {
    console.log('✅ Backend start script found');
  }

} catch (error) {
  console.error('❌ Error reading package.json files:', error.message);
  process.exit(1);
}

// Check for environment example files
const backendEnvExample = path.join(__dirname, '..', 'backend', 'env.example');
if (fs.existsSync(backendEnvExample)) {
  console.log('✅ Backend environment example file found');
} else {
  console.warn('⚠️  backend/env.example not found');
}

// Check for main entry points
const backendServerPath = path.join(__dirname, '..', 'backend', 'src', 'server.js');
const frontendIndexPath = path.join(__dirname, '..', 'frontend', 'src', 'index.js');

if (fs.existsSync(backendServerPath)) {
  console.log('✅ Backend server entry point found');
} else {
  console.error('❌ backend/src/server.js not found!');
  process.exit(1);
}

if (fs.existsSync(frontendIndexPath)) {
  console.log('✅ Frontend entry point found');
} else {
  console.error('❌ frontend/src/index.js not found!');
  process.exit(1);
}

console.log('\n📋 Deployment Checklist:');
console.log('=======================');
console.log('1. ✅ Vercel configuration files present');
console.log('2. ✅ Package.json files valid');
console.log('3. ✅ Entry points found');
console.log('4. ⚠️  Set up MongoDB Atlas database');
console.log('5. ⚠️  Configure environment variables in Vercel dashboard');
console.log('6. ⚠️  Push code to GitHub repository');
console.log('7. ⚠️  Connect repository to Vercel');

console.log('\n🔧 Next Steps:');
console.log('==============');
console.log('1. Set up MongoDB Atlas: https://www.mongodb.com/atlas');
console.log('2. Push your code to GitHub');
console.log('3. Go to https://vercel.com and create a new project');
console.log('4. Import your GitHub repository');
console.log('5. Configure environment variables in Vercel dashboard');
console.log('6. Deploy!');

console.log('\n📖 For detailed instructions, see DEPLOYMENT.md');
console.log('\n🎉 Your project is ready for Vercel deployment!'); 