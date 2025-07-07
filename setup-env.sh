#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔧 Environment Setup for Vercel Deployment${NC}\n"

# Function to print status
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Create backend .env file
print_status "Setting up backend environment variables..."

cat > backend/.env << 'EOF'
# Server Configuration
PORT=5000
NODE_ENV=production

# MongoDB Connection (Update with your MongoDB Atlas URI)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job-networking-portal

# JWT Configuration (Change this to a secure secret)
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d

# Admin Wallet (Update with your Ethereum wallet address)
ADMIN_WALLET_ADDRESS=0x1234567890123456789012345678901234567890
PLATFORM_FEE=0.001

# Free AI Service (Update with your AI service credentials)
FREE_AI_ENDPOINT=https://api.free-ai-service.com/v1/chat/completions
FREE_AI_API_KEY=your-free-ai-api-key-here

# CORS Configuration (Update with your Vercel domain after deployment)
CORS_ORIGIN=https://your-app.vercel.app
EOF

print_success "Backend .env file created"

# Create frontend .env file
print_status "Setting up frontend environment variables..."

cat > frontend/.env << 'EOF'
# API Configuration (Update with your Vercel domain after deployment)
REACT_APP_API_URL=https://your-app.vercel.app/api

# Web3 Configuration (Update after smart contract deployment)
REACT_APP_CONTRACT_ADDRESS=your-deployed-contract-address
REACT_APP_NETWORK_ID=11155111
REACT_APP_RPC_URL=https://sepolia.infura.io/v3/your-project-id
EOF

print_success "Frontend .env file created"

# Create smart contract .env file
print_status "Setting up smart contract environment variables..."

cat > smart-contract/.env << 'EOF'
# Network Configuration (Update with your credentials)
PRIVATE_KEY=your-private-key
INFURA_PROJECT_ID=your-infura-project-id
ETHERSCAN_API_KEY=your-etherscan-api-key

# Network URLs (Update with your Infura project ID)
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your-project-id
MAINNET_RPC_URL=https://mainnet.infura.io/v3/your-project-id
EOF

print_success "Smart contract .env file created"

echo -e "\n${GREEN}✅ Environment files created successfully!${NC}"
echo -e "\n${YELLOW}⚠️  IMPORTANT: Update the following in the .env files:${NC}"
echo -e "1. MongoDB Atlas connection string"
echo -e "2. JWT secret (use a strong random string)"
echo -e "3. Your Ethereum wallet address"
echo -e "4. AI service API key"
echo -e "5. Infura project ID and private key"
echo -e "6. Vercel domain (after deployment)"
echo -e "\n${BLUE}After updating the .env files, run:${NC}"
echo -e "./deploy-to-vercel.sh" 