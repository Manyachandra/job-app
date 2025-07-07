# 🚀 Vercel Deployment - Quick Start

## Prerequisites Checklist
- [ ] GitHub repository with your code
- [ ] MongoDB Atlas account
- [ ] Vercel account

## 1. Prepare Your Code
```bash
# Run deployment check
npm run deploy:check

# Commit all changes
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## 2. Set Up MongoDB Atlas
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create free cluster
3. Create database user
4. Get connection string
5. Add IP whitelist: `0.0.0.0/0`

## 3. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure settings:
   - Framework: **Other**
   - Root Directory: `/` (leave default)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

## 4. Environment Variables
Add these in Vercel dashboard → Settings → Environment Variables:

### Backend Variables:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/job-networking-portal?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRE=7d
NODE_ENV=production
CORS_ORIGIN=https://your-domain.vercel.app
```

### Frontend Variables:
```
REACT_APP_API_URL=https://your-domain.vercel.app/api
```

## 5. Deploy
1. Click "Deploy"
2. Wait for build completion
3. Your app is live! 🎉

## 6. Verify Deployment
- Backend: `https://your-domain.vercel.app/api/health`
- Frontend: `https://your-domain.vercel.app`

## Troubleshooting
- **Build fails**: Check Vercel logs
- **API not working**: Verify environment variables
- **Database connection**: Check MongoDB Atlas settings
- **CORS errors**: Update CORS_ORIGIN with your domain

## Support
- 📖 Full guide: `DEPLOYMENT.md`
- 🔧 Check setup: `npm run deploy:check`
- 📧 Vercel docs: https://vercel.com/docs 