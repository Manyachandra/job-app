# Deployment Guide for Job App

This guide will help you deploy the entire Job App stack (Frontend, Backend, and Smart Contracts) to Vercel.

## Prerequisites

1. **GitHub Account**: Your code should be in a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **MongoDB Atlas**: For database hosting
4. **Ethereum Network**: For smart contract deployment (testnet recommended)

## Environment Variables Setup

### 1. Backend Environment Variables

Create a `.env` file in the `backend` directory with:

```env
# Server Configuration
PORT=5000
NODE_ENV=production

# MongoDB Connection (Use MongoDB Atlas)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job-networking-portal

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# Admin Wallet (Ethereum testnet)
ADMIN_WALLET_ADDRESS=0x1234567890123456789012345678901234567890
PLATFORM_FEE=0.001

# Free AI Service (for AI features)
FREE_AI_ENDPOINT=https://api.free-ai-service.com/v1/chat/completions
FREE_AI_API_KEY=your-free-ai-api-key-here

# CORS Configuration (Update with your Vercel domain)
CORS_ORIGIN=https://your-app.vercel.app
```

### 2. Frontend Environment Variables

Create a `.env` file in the `frontend` directory with:

```env
# API Configuration
REACT_APP_API_URL=https://your-app.vercel.app/api

# Web3 Configuration
REACT_APP_CONTRACT_ADDRESS=your-deployed-contract-address
REACT_APP_NETWORK_ID=11155111 # Sepolia testnet
REACT_APP_RPC_URL=https://sepolia.infura.io/v3/your-project-id
```

### 3. Smart Contract Environment Variables

Create a `.env` file in the `smart-contract` directory with:

```env
# Network Configuration
PRIVATE_KEY=your-private-key
INFURA_PROJECT_ID=your-infura-project-id
ETHERSCAN_API_KEY=your-etherscan-api-key

# Network URLs
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your-project-id
MAINNET_RPC_URL=https://mainnet.infura.io/v3/your-project-id
```

## Deployment Steps

### Step 1: Prepare Your Repository

1. Ensure all your code is committed to GitHub
2. Make sure the `vercel.json` file is in the root directory
3. Verify all environment files are properly configured

### Step 2: Deploy Smart Contracts

1. **Deploy to Testnet (Recommended for testing):**
   ```bash
   cd smart-contract
   npm install
   npm run deploy:testnet
   ```

2. **Note the deployed contract address** - you'll need this for the frontend

### Step 3: Deploy to Vercel

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables:**
   - In the Vercel dashboard, go to your project settings
   - Add all the environment variables from the backend `.env` file
   - Add all the environment variables from the frontend `.env` file
   - Make sure to update the API URL to point to your Vercel domain

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically run the build process

### Step 4: Verify Deployment

1. **Check Frontend:** Visit your Vercel domain
2. **Check Backend API:** Visit `https://your-app.vercel.app/api/health`
3. **Test Smart Contract:** Use the frontend to interact with your deployed contract

## Build Process

The deployment uses the following build process:

1. **Smart Contract Compilation:** Compiles Solidity contracts
2. **Frontend Build:** Builds React application
3. **Backend Setup:** Prepares serverless functions

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check that all dependencies are properly installed
   - Verify environment variables are set correctly
   - Check the build logs in Vercel dashboard

2. **API Not Working:**
   - Verify CORS settings
   - Check that backend environment variables are set
   - Ensure MongoDB connection is working

3. **Smart Contract Issues:**
   - Verify contract is deployed to the correct network
   - Check that frontend has the correct contract address
   - Ensure wallet is connected to the right network

### Support:

- Check Vercel build logs for detailed error messages
- Verify all environment variables are correctly set
- Test locally before deploying

## Post-Deployment

1. **Update DNS:** If you have a custom domain, configure it in Vercel
2. **Monitor:** Use Vercel analytics to monitor performance
3. **Scale:** Vercel automatically scales based on traffic
4. **Updates:** Push to GitHub to trigger automatic deployments 