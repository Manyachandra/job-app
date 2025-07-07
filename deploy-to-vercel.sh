#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Full-Stack Deployment to Vercel${NC}\n"

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

# Check if Vercel CLI is installed
print_status "Checking Vercel CLI installation..."
if ! command -v vercel &> /dev/null; then
    print_status "Installing Vercel CLI..."
    npm install -g vercel
    if [ $? -ne 0 ]; then
        print_error "Failed to install Vercel CLI"
        exit 1
    fi
else
    print_success "Vercel CLI is already installed"
fi

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    print_error "Please run this script from the project root directory"
    exit 1
fi

# Step 1: Install all dependencies
print_status "Step 1: Installing all dependencies..."

print_status "Installing root dependencies..."
npm install
if [ $? -ne 0 ]; then
    print_error "Failed to install root dependencies"
    exit 1
fi

print_status "Installing frontend dependencies..."
cd frontend
npm install
if [ $? -ne 0 ]; then
    print_error "Failed to install frontend dependencies"
    exit 1
fi
cd ..

print_status "Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    print_error "Failed to install backend dependencies"
    exit 1
fi
cd ..

print_status "Installing smart contract dependencies..."
cd smart-contract
npm install
if [ $? -ne 0 ]; then
    print_warning "Failed to install smart contract dependencies (this is okay for frontend/backend deployment)"
fi
cd ..

print_success "All dependencies installed successfully"

# Step 2: Build frontend
print_status "Step 2: Building frontend..."
cd frontend
npm run build
if [ $? -ne 0 ]; then
    print_error "Frontend build failed"
    exit 1
fi
cd ..
print_success "Frontend built successfully"

# Step 3: Compile smart contracts (optional)
print_status "Step 3: Compiling smart contracts..."
cd smart-contract
if npm run compile; then
    print_success "Smart contracts compiled successfully"
else
    print_warning "Smart contract compilation failed (this is okay for frontend/backend deployment)"
fi
cd ..

# Step 4: Check environment files
print_status "Step 4: Checking environment configuration..."

# Check if .env files exist
if [ ! -f "backend/.env" ]; then
    print_warning "backend/.env file not found. You'll need to set environment variables in Vercel dashboard."
fi

if [ ! -f "frontend/.env" ]; then
    print_warning "frontend/.env file not found. You'll need to set environment variables in Vercel dashboard."
fi

# Step 5: Deploy to Vercel
print_status "Step 5: Deploying to Vercel..."

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    print_status "You need to log in to Vercel first..."
    vercel login
    if [ $? -ne 0 ]; then
        print_error "Failed to log in to Vercel"
        exit 1
    fi
fi

# Deploy to Vercel
print_status "Starting deployment..."
vercel --prod

if [ $? -eq 0 ]; then
    print_success "Deployment completed successfully!"
    echo -e "\n${GREEN}🎉 Your application has been deployed to Vercel!${NC}"
    echo -e "\n${BLUE}Next steps:${NC}"
    echo -e "1. Set up environment variables in Vercel dashboard"
    echo -e "2. Deploy smart contracts to your chosen network"
    echo -e "3. Update frontend environment with contract address"
    echo -e "4. Test your application"
    echo -e "\n${BLUE}Environment Variables needed:${NC}"
    echo -e "Backend: MONGODB_URI, JWT_SECRET, CORS_ORIGIN, etc."
    echo -e "Frontend: REACT_APP_API_URL, REACT_APP_CONTRACT_ADDRESS, etc."
else
    print_error "Deployment failed"
    exit 1
fi 