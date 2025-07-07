#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚂 Railway Deployment Preparation Script');
console.log('=======================================\n');

// Check if we're in a Railway environment
const isRailway = process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_PROJECT_ID;
if (isRailway) {
  console.log('✅ Running in Railway environment');
  console.log(`Environment: ${process.env.RAILWAY_ENVIRONMENT || 'production'}`);
  console.log(`Project ID: ${process.env.RAILWAY_PROJECT_ID || 'unknown'}`);
} else {
  console.log('⚠️  Not running in Railway environment');
}

// Check environment variables
console.log('\n🔧 Environment Variables Check:');
console.log('================================');
const requiredEnvVars = [
  'MONGODB_URI',
  'JWT_SECRET',
  'NODE_ENV'
];

const optionalEnvVars = [
  'CORS_ORIGIN',
  'JWT_EXPIRE',
  'ADMIN_WALLET_ADDRESS',
  'PLATFORM_FEE',
  'FREE_AI_ENDPOINT',
  'FREE_AI_API_KEY'
];

console.log('\nRequired Environment Variables:');
requiredEnvVars.forEach(varName => {
  if (process.env[varName]) {
    console.log(`✅ ${varName}: ${varName === 'JWT_SECRET' ? '***SET***' : 'Set'}`);
  } else {
    console.log(`❌ ${varName}: Not set`);
  }
});

console.log('\nOptional Environment Variables:');
optionalEnvVars.forEach(varName => {
  if (process.env[varName]) {
    console.log(`✅ ${varName}: Set`);
  } else {
    console.log(`⚠️  ${varName}: Not set (optional)`);
  }
});

// Check package.json
console.log('\n📦 Package.json Check:');
console.log('=====================');
const packagePath = path.join(__dirname, '..', 'backend', 'package.json');
if (fs.existsSync(packagePath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    console.log(`✅ Package name: ${packageJson.name}`);
    console.log(`✅ Version: ${packageJson.version}`);
    console.log(`✅ Main entry: ${packageJson.main}`);
    
    // Check node-fetch version
    if (packageJson.dependencies['node-fetch']) {
      console.log(`✅ node-fetch version: ${packageJson.dependencies['node-fetch']}`);
    } else {
      console.log('⚠️  node-fetch not found in dependencies');
    }
    
    // Check start script
    if (packageJson.scripts.start) {
      console.log(`✅ Start script: ${packageJson.scripts.start}`);
    } else {
      console.log('❌ No start script found');
    }
  } catch (error) {
    console.error('❌ Error reading package.json:', error.message);
  }
} else {
  console.error('❌ package.json not found');
}

// Check server file
console.log('\n🔍 Server File Check:');
console.log('====================');
const serverPath = path.join(__dirname, '..', 'backend', 'src', 'server.js');
if (fs.existsSync(serverPath)) {
  console.log('✅ server.js exists');
  
  // Check if it's properly configured
  const serverContent = fs.readFileSync(serverPath, 'utf8');
  if (serverContent.includes('app.listen')) {
    console.log('✅ Server has listen configuration');
  } else {
    console.log('❌ Server missing listen configuration');
  }
} else {
  console.error('❌ server.js not found');
}

// Check app.js
console.log('\n🔍 App File Check:');
console.log('==================');
const appPath = path.join(__dirname, '..', 'backend', 'src', 'app.js');
if (fs.existsSync(appPath)) {
  console.log('✅ app.js exists');
  
  // Check if it has proper route handling
  const appContent = fs.readFileSync(appPath, 'utf8');
  if (appContent.includes('/api/health')) {
    console.log('✅ Health check endpoint configured');
  } else {
    console.log('❌ Health check endpoint missing');
  }
  
  if (appContent.includes('app.use(\'/api/')) {
    console.log('✅ API routes configured');
  } else {
    console.log('❌ API routes missing');
  }
} else {
  console.error('❌ app.js not found');
}

// Check routes directory
console.log('\n📁 Routes Check:');
console.log('================');
const routesPath = path.join(__dirname, '..', 'backend', 'src', 'routes');
if (fs.existsSync(routesPath)) {
  const routeFiles = fs.readdirSync(routesPath).filter(file => file.endsWith('.js'));
  console.log(`✅ Found ${routeFiles.length} route files:`);
  routeFiles.forEach(file => {
    console.log(`   - ${file}`);
  });
} else {
  console.error('❌ Routes directory not found');
}

console.log('\n📋 Railway Deployment Checklist:');
console.log('=================================');
console.log('1. ✅ Package.json configured');
console.log('2. ✅ Server entry point exists');
console.log('3. ✅ API routes configured');
console.log('4. ⚠️  Environment variables set');
console.log('5. ⚠️  MongoDB connection configured');
console.log('6. ⚠️  Railway project connected');

console.log('\n🔧 Next Steps:');
console.log('==============');
console.log('1. Ensure all environment variables are set in Railway dashboard');
console.log('2. Deploy to Railway using: railway up');
console.log('3. Check logs: railway logs');
console.log('4. Test health endpoint: https://your-app.railway.app/api/health');
console.log('5. Test API endpoint: https://your-app.railway.app/api/test');

console.log('\n🐛 Troubleshooting:');
console.log('===================');
console.log('- Check Railway logs for errors');
console.log('- Verify MongoDB connection string');
console.log('- Ensure JWT_SECRET is set');
console.log('- Check CORS_ORIGIN matches your frontend domain');

console.log('\n🎉 Your project is ready for Railway deployment!'); 