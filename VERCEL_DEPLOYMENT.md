# 🚀 Complete Vercel Deployment Guide

This guide will help you deploy your entire Job App stack (Frontend, Backend, and Smart Contracts) to Vercel.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **MongoDB Atlas** - For database hosting
4. **Infura Account** - For Ethereum network access
5. **Ethereum Wallet** - For smart contract deployment

## 🛠️ Quick Deployment

### Option 1: Automated Deployment (Recommended)

1. **Setup Environment Variables:**
   ```bash
   ./setup-env.sh
   ```

2. **Update Environment Files:**
   - Edit `backend/.env` with your MongoDB Atlas URI
   - Edit `frontend/.env` with your API URLs
   - Edit `smart-contract/.env` with your Infura credentials

3. **Deploy Everything:**
   ```bash
   ./deploy-to-vercel.sh
   ```

### Option 2: Manual Deployment

1. **Install Dependencies:**
   ```bash
   # Root dependencies
   npm install
   
   # Frontend dependencies
   cd frontend && npm install && cd ..
   
   # Backend dependencies
   cd backend && npm install && cd ..
   
   # Smart contract dependencies
   cd smart-contract && npm install && cd ..
   ```

2. **Build Frontend:**
   ```bash
   cd frontend && npm run build && cd ..
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

## 🔧 Environment Variables Setup

### Backend Environment Variables (Required)

Create `backend/.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# MongoDB Connection (Required)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job-networking-portal

# JWT Configuration (Required)
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# Admin Wallet (Required)
ADMIN_WALLET_ADDRESS=0x1234567890123456789012345678901234567890
PLATFORM_FEE=0.001

# Free AI Service (Optional)
FREE_AI_ENDPOINT=https://api.free-ai-service.com/v1/chat/completions
FREE_AI_API_KEY=your-free-ai-api-key-here

# CORS Configuration (Update after deployment)
CORS_ORIGIN=https://your-app.vercel.app
```

### Frontend Environment Variables (Required)

Create `frontend/.env`:

```env
# API Configuration (Update after deployment)
REACT_APP_API_URL=https://your-app.vercel.app/api

# Web3 Configuration (Update after smart contract deployment)
REACT_APP_CONTRACT_ADDRESS=your-deployed-contract-address
REACT_APP_NETWORK_ID=11155111
REACT_APP_RPC_URL=https://sepolia.infura.io/v3/your-project-id
```

### Smart Contract Environment Variables (Optional)

Create `smart-contract/.env`:

```env
# Network Configuration
PRIVATE_KEY=your-private-key
INFURA_PROJECT_ID=your-infura-project-id
ETHERSCAN_API_KEY=your-etherscan-api-key

# Network URLs
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your-project-id
MAINNET_RPC_URL=https://mainnet.infura.io/v3/your-project-id
```

## 🌐 Setting Up External Services

### 1. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Get your connection string
4. Update `MONGODB_URI` in `backend/.env`

### 2. Infura Setup

1. Go to [Infura](https://infura.io)
2. Create a new project
3. Get your project ID
4. Update `INFURA_PROJECT_ID` in `smart-contract/.env`

### 3. Smart Contract Deployment

1. **Deploy to Testnet (Recommended):**
   ```bash
   cd smart-contract
   npm run deploy:testnet
   ```

2. **Note the deployed contract address**
3. **Update `REACT_APP_CONTRACT_ADDRESS` in `frontend/.env`**

## 📦 Vercel Configuration

The `vercel.json` file is configured to:

- **Frontend**: Build React app and serve static files
- **Backend**: Deploy Express server as serverless functions
- **Routes**: Route API calls to backend, everything else to frontend

## 🔍 Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check that all dependencies are installed
   - Verify environment variables are set
   - Check Vercel build logs

2. **API Not Working:**
   - Verify CORS settings
   - Check backend environment variables
   - Ensure MongoDB connection is working

3. **Smart Contract Issues:**
   - Verify contract is deployed to correct network
   - Check frontend has correct contract address
   - Ensure wallet is connected to right network

### Debug Commands:

```bash
# Check Vercel CLI
vercel --version

# Check if logged in
vercel whoami

# View deployment logs
vercel logs

# Test build locally
cd frontend && npm run build
```

## 🚀 Post-Deployment

1. **Set Environment Variables in Vercel Dashboard:**
   - Go to your project settings
   - Add all environment variables from `.env` files

2. **Update CORS and API URLs:**
   - Update `CORS_ORIGIN` with your Vercel domain
   - Update `REACT_APP_API_URL` with your Vercel domain

3. **Test Your Application:**
   - Visit your Vercel domain
   - Test API endpoints
   - Test smart contract interactions

## 📞 Support

- Check Vercel build logs for detailed error messages
- Verify all environment variables are correctly set
- Test locally before deploying

## 🔄 Continuous Deployment

Once set up, Vercel will automatically deploy when you push to your GitHub repository's main branch.

---

**Happy Deploying! 🎉** 