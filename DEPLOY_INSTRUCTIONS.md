# Deploy to Vercel - Instructions

## Quick Deploy (Recommended)

1. **Login to Vercel:**
   ```bash
   vercel login
   ```
   This will open your browser to authenticate.

2. **Deploy your project:**
   ```bash
   vercel
   ```
   
   When prompted:
   - **Set up and deploy?** → Yes
   - **Which scope?** → Select your account
   - **Link to existing project?** → No (first time)
   - **Project name?** → Press Enter (uses `siyasphere-website`)
   - **Directory?** → Press Enter (uses `./`)
   - **Override settings?** → No

3. **After deployment**, you'll get a URL like:
   - `https://siyasphere-website.vercel.app`

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Alternative: Deploy via Vercel Website

1. Go to https://vercel.com and sign up/login
2. Click "Add New Project"
3. Connect your GitHub account (if you have the code on GitHub)
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

## Your site will be live and shareable!
