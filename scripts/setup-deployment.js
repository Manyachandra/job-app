#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up deployment environment...\n');

// Check if required files exist
const requiredFiles = [
  'frontend/package.json',
  'backend/package.json',
  'smart-contract/package.json',
  'vercel.json'
];

console.log('📋 Checking required files...');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
  }
});

// Check for environment files
console.log('\n🔧 Checking environment files...');
const envFiles = [
  'backend/.env',
  'frontend/.env',
  'smart-contract/.env'
];

envFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`⚠️  ${file} - Create this file with required environment variables`);
  }
});

// Check smart contract compilation
console.log('\n📦 Checking smart contract compilation...');
const artifactsDir = 'smart-contract/artifacts';
if (fs.existsSync(artifactsDir)) {
  console.log('✅ Smart contracts compiled');
} else {
  console.log('⚠️  Smart contracts not compiled - run: cd smart-contract && npm run compile');
}

// Check frontend build
console.log('\n🏗️  Checking frontend build...');
const buildDir = 'frontend/build';
if (fs.existsSync(buildDir)) {
  console.log('✅ Frontend built');
} else {
  console.log('⚠️  Frontend not built - run: cd frontend && npm run build');
}

console.log('\n📝 Next steps:');
console.log('1. Set up environment variables in Vercel dashboard');
console.log('2. Deploy smart contracts to your chosen network');
console.log('3. Update frontend environment with contract address');
console.log('4. Deploy to Vercel');
console.log('\n📖 See DEPLOYMENT.md for detailed instructions'); 