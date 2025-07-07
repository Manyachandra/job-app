# Job & Networking Portal

A full-stack web application inspired by LinkedIn, Upwork, and AngelList, enhanced with AI-powered features and Web3 blockchain integration.

## 🚀 Features

- **User Authentication & Profiles**: JWT-based auth with comprehensive user profiles
- **Job Posting & Management**: Create, view, and manage job listings
- **AI-Powered Matching**: Smart job-candidate matching using NLP
- **Web3 Integration**: MetaMask wallet connection and blockchain payments
- **Smart Contract**: Solidity contract for on-chain payment logging
- **Social Feed**: Professional networking with posts, likes, and comments
- **Skill Extraction**: AI-powered skill parsing from resumes and bios

## 🛠 Tech Stack

### Frontend
- **React.js** - UI framework
- **Tailwind CSS** - Styling
- **Ethers.js** - Web3 integration
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Blockchain
- **Ethereum** - Blockchain network
- **MetaMask** - Wallet integration
- **Solidity** - Smart contracts
- **Hardhat** - Development framework

### AI/ML
- **OpenAI API** - NLP and skill extraction
- **Natural language processing** - Job matching algorithms

## 📁 Project Structure

```
Intern/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # MongoDB models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── utils/           # Utility functions
│   │   ├── app.js          # Express app setup
│   │   └── server.js       # Server entry point
│   ├── package.json
│   └── env.example
├── frontend/                # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── context/        # React contexts
│   │   ├── utils/          # Utility functions
│   │   ├── App.js
│   │   └── index.js
│   ├── tailwind.config.js
│   └── package.json
├── smart-contract/          # Solidity smart contracts
│   ├── contracts/
│   │   └── JobPortal.sol   # Main contract
│   ├── scripts/            # Deployment scripts
│   └── README.md
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- MetaMask browser extension
- OpenAI API key (for AI features)

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`

### Smart Contract Setup

1. **Navigate to smart-contract directory:**
   ```bash
   cd smart-contract
   ```

2. **Install Hardhat:**
   ```bash
   npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers
   ```

3. **Compile contracts:**
   ```bash
   npx hardhat compile
   ```

4. **Deploy to testnet:**
   ```bash
   npx hardhat run scripts/deploy.js --network goerli
   ```

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/job-networking-portal
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
ADMIN_WALLET_ADDRESS=0x1234567890123456789012345678901234567890
PLATFORM_FEE=0.001
OPENAI_API_KEY=your-openai-api-key
CORS_ORIGIN=http://localhost:3000
```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile
- `GET /api/auth/user/:id` - Get user by ID

### Jobs
- `GET /api/jobs` - Get all jobs with filtering
- `POST /api/jobs` - Create job posting (requires Web3 payment)
- `GET /api/jobs/:id` - Get job by ID
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job
- `POST /api/jobs/:id/apply` - Apply for job
- `GET /api/jobs/user/my-jobs` - Get user's posted jobs
- `GET /api/jobs/user/applications` - Get user's applications

### Posts (Coming Soon)
- `GET /api/posts` - Get social feed
- `POST /api/posts` - Create post
- `PUT /api/posts/:id/like` - Like/unlike post
- `POST /api/posts/:id/comments` - Add comment

## 🤖 AI Features

### Job Matching
- Analyzes job descriptions and candidate profiles
- Calculates match scores based on skills and requirements
- Provides personalized job recommendations

### Skill Extraction
- Parses resumes and bios to extract skills
- Auto-fills skill tags in user profiles
- Identifies skill gaps and suggestions

## 💰 Web3 Integration

### Wallet Connection
- MetaMask integration for Ethereum wallet
- Secure wallet address verification
- Transaction signing and verification
- Network detection and switching

### Payment System
- Platform fee collection in ETH (0.001 ETH per job posting)
- On-chain payment logging via smart contract
- Transaction verification and confirmation
- Payment history tracking

### Smart Contract Features
- **JobPortal.sol**: Main contract for payment logging
- Payment verification and job posting validation
- Admin controls for fee management
- Event emission for transparency
- User payment history tracking

## 🎯 Roadmap

### Phase 1: Core Features ✅
- [x] User authentication
- [x] Basic UI with Tailwind CSS
- [x] MongoDB models
- [x] Express server setup

### Phase 2: Job Management ✅
- [x] Job posting and listing
- [x] Job search and filtering
- [x] Application system
- [x] Pagination and advanced search

### Phase 3: Web3 Integration ✅
- [x] MetaMask wallet connection
- [x] Payment processing
- [x] Smart contract deployment
- [x] On-chain payment logging

### Phase 4: AI Features
- [ ] OpenAI API integration
- [ ] Job matching algorithm
- [ ] Skill extraction

### Phase 5: Social Features
- [ ] Social feed
- [ ] Networking features
- [ ] Messaging system

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd frontend
npm test
```

### Smart Contract Testing
```bash
cd smart-contract
npx hardhat test
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

### Backend (Render)
1. Connect GitHub repository to Render
2. Set environment variables
3. Deploy as Node.js service

### Smart Contract (Testnet)
1. Deploy to Goerli testnet
2. Verify contract on Etherscan
3. Update frontend with contract address

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Built with ❤️ for the RizeOS Core Team Internship Assessment**

### 🏆 **Achievement Summary**

This project demonstrates:
- ✅ **Full-stack development** with React, Node.js, and MongoDB
- ✅ **Web3 integration** with MetaMask and Ethereum
- ✅ **Smart contract development** in Solidity
- ✅ **Professional UI/UX** with Tailwind CSS
- ✅ **Secure authentication** with JWT
- ✅ **Advanced job management** with filtering and pagination
- ✅ **Blockchain payments** with transaction verification
- ✅ **Clean architecture** with proper separation of concerns 