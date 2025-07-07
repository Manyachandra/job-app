# Deployment Guide - Job Networking Portal

This guide will help you deploy the Job Networking Portal to Vercel through GitHub.

## Prerequisites

1. **GitHub Account**: Ensure your code is pushed to a GitHub repository
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **MongoDB Atlas**: Set up a MongoDB database (free tier available)
4. **Environment Variables**: Prepare your environment variables

## Step 1: Prepare Your Repository

### 1.1 Ensure All Files Are Committed
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 1.2 Verify Project Structure
Your repository should have this structure:
```
job-app/
├── frontend/          # React frontend
├── backend/           # Node.js/Express backend
├── smart-contract/    # Solidity contracts
├── vercel.json        # Vercel configuration
├── .vercelignore      # Files to exclude from deployment
└── package.json       # Root package.json
```

## Step 2: Set Up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string
5. Add your IP address to the whitelist (or use 0.0.0.0/0 for all IPs)

## Step 3: Deploy to Vercel

### 3.1 Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository containing your job-app

### 3.2 Configure Project Settings

1. **Framework Preset**: Select "Other"
2. **Root Directory**: Leave as `/` (root)
3. **Build Command**: Leave empty (handled by vercel.json)
4. **Output Directory**: Leave empty (handled by vercel.json)

### 3.3 Set Environment Variables

In the Vercel dashboard, go to your project settings and add these environment variables:

#### Backend Environment Variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job-networking-portal?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d
NODE_ENV=production
CORS_ORIGIN=https://your-domain.vercel.app
ADMIN_WALLET_ADDRESS=0x1234567890123456789012345678901234567890
PLATFORM_FEE=0.001
FREE_AI_ENDPOINT=https://api.free-ai-service.com/v1/chat/completions
FREE_AI_API_KEY=your-free-ai-api-key-here
```

#### Frontend Environment Variables:
```
REACT_APP_API_URL=https://your-domain.vercel.app/api
```

### 3.4 Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your app will be available at the provided URL

## Step 4: Verify Deployment

### 4.1 Check Backend Health
Visit: `https://your-domain.vercel.app/api/health`

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "production"
}
```

### 4.2 Test Frontend
Visit: `https://your-domain.vercel.app`

The React app should load and be able to communicate with the backend.

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Update your environment variables with the new domain
4. Redeploy if necessary

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are properly listed in package.json files
   - Verify Node.js version compatibility

2. **API Connection Issues**
   - Verify `REACT_APP_API_URL` is set correctly
   - Check CORS settings in backend
   - Ensure MongoDB connection string is valid

3. **Environment Variables**
   - Double-check all environment variables are set in Vercel
   - Ensure no typos in variable names
   - Redeploy after adding new environment variables

4. **Database Connection**
   - Verify MongoDB Atlas cluster is running
   - Check IP whitelist settings
   - Ensure database user has correct permissions

### Debug Commands

```bash
# Check build locally
npm run build:frontend
npm run build:backend

# Test backend locally
cd backend
npm start

# Test frontend locally
cd frontend
npm start
```

## Environment Variables Reference

### Backend (.env)
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `JWT_SECRET` | Secret key for JWT tokens | Yes | - |
| `JWT_EXPIRE` | JWT token expiration | No | 7d |
| `NODE_ENV` | Environment mode | No | development |
| `CORS_ORIGIN` | Allowed CORS origins | No | http://localhost:3000 |
| `ADMIN_WALLET_ADDRESS` | Admin wallet for Web3 features | No | - |
| `PLATFORM_FEE` | Platform fee for transactions | No | 0.001 |
| `FREE_AI_ENDPOINT` | AI service endpoint | No | - |
| `FREE_AI_API_KEY` | AI service API key | No | - |

### Frontend (.env)
| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `REACT_APP_API_URL` | Backend API URL | No | http://localhost:5001/api |

## Support

If you encounter issues:
1. Check the Vercel deployment logs
2. Verify all environment variables are set
3. Test the application locally first
4. Check MongoDB Atlas connection
5. Review the troubleshooting section above

## Security Notes

1. **Never commit sensitive data** like API keys or database credentials
2. **Use strong JWT secrets** in production
3. **Enable HTTPS** (automatic with Vercel)
4. **Regularly update dependencies** to patch security vulnerabilities
5. **Monitor your application** for any suspicious activity 