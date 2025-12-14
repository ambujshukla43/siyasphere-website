# Deploy to GitHub - Instructions

## Step 1: Authenticate with GitHub CLI

Run this command in your terminal:
```bash
gh auth login
```

Follow the prompts:
- **GitHub.com** → Yes
- **HTTPS** → Select HTTPS
- **Authenticate Git with your GitHub credentials?** → Yes
- **How would you like to authenticate?** → Choose "Login with a web browser"
- Copy the code and press Enter (browser will open)
- Authorize GitHub CLI in your browser

## Step 2: Create Repository and Push

After authentication, run:
```bash
cd "/Users/ambuj/Documents/Ambuj Cursor/siyasphere-website"
gh repo create siyasphere-website --public --source=. --remote=origin --push
```

This will:
- Create a public repository on GitHub
- Add it as the remote origin
- Push your code to GitHub

## Step 3: Your code is now on GitHub!

Your repository will be at: `https://github.com/YOUR_USERNAME/siyasphere-website`

## Step 4: Deploy to Vercel from GitHub

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your `siyasphere-website` repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"
6. Your site will be live!

---

## Alternative: Manual Method (if CLI doesn't work)

1. Go to https://github.com/new
2. Create a new repository named `siyasphere-website`
3. **Don't** initialize with README, .gitignore, or license
4. Then run:
   ```bash
   cd "/Users/ambuj/Documents/Ambuj Cursor/siyasphere-website"
   git remote add origin https://github.com/YOUR_USERNAME/siyasphere-website.git
   git branch -M main
   git push -u origin main
   ```
