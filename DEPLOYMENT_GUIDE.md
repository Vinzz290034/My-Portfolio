# Portfolio Deployment Guide

## Part 1: Deploy to Vercel

### Step 1: Prepare for Deployment

1. **Install Vercel CLI** (optional but recommended):
```bash
npm install -g vercel
```

2. **Push your code to GitHub** (if not already done):
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Vinzz290034/Portfolio.git
git push -u origin main
```

### Step 2: Deploy via Vercel Dashboard

**Easy Method - GitHub Integration:**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your portfolio repository from GitHub
5. Vercel will auto-detect it's a Vite project
6. Click "Deploy"

**Or via CLI:**
```bash
vercel
# Follow the prompts
```

### Step 3: Configure Environment Variables

After deployment, add environment variables in Vercel Dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables:
   ```
   VITE_FLOWISE_URL=http://localhost:3000
   VITE_FLOWISE_CHAT_ID=d33602df-7078-47ee-8433-c5916bf372d4
   ```

---

## Part 2: Deploy Flowise AI

You have two options:

### Option A: Deploy Flowise to Vercel (Recommended for Production)

**Problem:** Flowise requires persistent storage and WebSocket support, which is challenging on Vercel's serverless architecture.

**Better Solution:** Use Flowise Cloud or Railway.

### Option B: Deploy to Railway (Best for Flowise)

Railway provides better support for Flowise's requirements.

**Steps:**

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub"
5. Choose your Flowise repository (or create a new one)
6. Railway will auto-detect and deploy

**After deployment:**
- Get your Railway URL from the deployment dashboard
- Update your portfolio's environment variables:
  ```
  VITE_FLOWISE_URL=https://your-railway-url.railway.app
  VITE_FLOWISE_CHAT_ID=d33602df-7078-47ee-8433-c5916bf372d4
  ```

### Option C: Keep Flowise Locally (Development Only)

If you want to keep Flowise running locally for now:

1. Keep your Docker container running locally:
```bash
docker run -d --name flowise -p 3000:3000 flowiseai/flowise
```

2. Use a tunneling service to expose local Flowise to your Vercel deployment:

**Using ngrok:**
```bash
# Install ngrok
npm install -g ngrok

# Expose your local Flowise
ngrok http 3000

# Update VITE_FLOWISE_URL with ngrok URL in Vercel
```

---

## Step-by-Step Deployment Plan

### For Portfolio:

1. **Local Testing:**
   ```bash
   npm run dev
   # Test everything locally first
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Final portfolio version"
   git push origin main
   ```

3. **Deploy to Vercel:**
   - Via Dashboard or CLI
   - Add environment variables
   - Deploy!

### For Flowise AI:

**Choose one approach:**

**Option 1: Railway (Recommended)**
- Create Railway account
- Deploy Flowise from GitHub
- Get deployed URL
- Update portfolio env vars

**Option 2: ngrok + Local**
- Run Flowise locally via Docker
- Use ngrok to expose it
- Add ngrok URL to Vercel env vars

**Option 3: Flowise Cloud**
- Visit https://cloud.flowise.ai
- Create account and deploy there
- Use their API endpoints

---

## Configuration Files Needed

Make sure these files are in your repository:

✅ Already created:
- `index.html` - Has Flowise embed
- `.env.local` - Local environment variables
- `vite.config.ts` - Build configuration
- `package.json` - Dependencies

✅ Add `.env.example`:
```env
VITE_FLOWISE_URL=https://your-flowise-url.railway.app
VITE_FLOWISE_CHAT_ID=d33602df-7078-47ee-8433-c5916bf372d4
```

✅ Make sure `.gitignore` includes:
```
.env
.env.local
node_modules/
dist/
.DS_Store
```

---

## Verify Deployment

After deploying:

1. Visit your Vercel URL
2. Check console (F12) for errors
3. Click chatbot button to test AI
4. If AI not responding:
   - Check network tab for API calls
   - Verify environment variables are set
   - Check Flowise is running

---

## Troubleshooting

**Chatbot not responding:**
- Verify Flowise URL is correct and accessible
- Check VITE_FLOWISE_CHAT_ID matches your flow
- Ensure CORS is configured in Flowise

**Build fails on Vercel:**
- Check `npm run build` works locally
- Verify all imports are correct
- Check node_modules aren't breaking

**Slow performance:**
- Enable Vercel Analytics
- Optimize images (already done)
- Check Flowise response times

---

## Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added to Vercel
- [ ] Flowise deployed (Railway/Cloud/ngrok)
- [ ] Flowise URL updated in Vercel env vars
- [ ] Portfolio builds successfully
- [ ] Chatbot responds on live site
- [ ] All links (projects, socials) work
- [ ] Animations load smoothly

---

## Support

If you need help:
1. Check Vercel docs: https://vercel.com/docs
2. Check Flowise docs: https://docs.flowiseai.com
3. Check Railway docs: https://docs.railway.app

Good luck with deployment! 🚀
