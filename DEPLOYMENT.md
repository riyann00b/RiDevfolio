# Deployment Guide

This document provides detailed instructions for deploying RiDevfolio to various platforms and troubleshooting common issues.

## 🚀 GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages whenever you push to the `main` branch.

#### Setup Instructions

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**
   - Save the changes

2. **Configure Custom Domain (Optional)**
   - In the same Pages settings, add your custom domain (e.g., `ricode.me`)
   - The `public/CNAME` file is already configured with `ricode.me`
   - Update your DNS records:
     ```
     Type: A
     Name: @
     Value: 185.199.108.153
     Value: 185.199.109.153
     Value: 185.199.110.153
     Value: 185.199.111.153
     
     Type: CNAME
     Name: www
     Value: riyann00b.github.io
     ```

3. **Deploy**
   - Push your changes to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Visit the **Actions** tab to monitor deployment progress

#### Workflow Details

The workflow (`..github/workflows/astro.yml`) performs the following:
- Checks out your code
- Sets up Bun (fast JavaScript runtime)
- Installs dependencies with `bun install --frozen-lockfile`
- Builds the site with `bun run build`
- Uploads the built site to GitHub Pages
- Deploys to your GitHub Pages site

### Troubleshooting GitHub Pages

#### Error: "Some specified paths were not resolved, unable to cache dependencies"

**Cause:** The workflow was trying to cache npm dependencies but the project uses Bun.

**Solution:** The updated workflow now uses Bun instead of npm. Make sure you have:
- `bun.lock` in your repository (not `package-lock.json`)
- The workflow file uses `oven-sh/setup-bun@v1`

#### Error: "CNAME already exists"

**Cause:** GitHub is trying to create a CNAME file but one already exists.

**Solution:** The `public/CNAME` file is already configured. Just ensure it contains only your domain name.

#### Error: 404 on deployed site

**Cause:** Site/base configuration mismatch.

**Solution:** Check `astro.config.mjs`:
```javascript
export default defineConfig({
  site: "https://ricode.me", // or your GitHub Pages URL
  // Don't set 'base' for custom domain or user pages
});
```

#### Error: Build fails with "command not found"

**Cause:** Workflow can't find Bun or build command.

**Solution:** Verify the workflow includes:
```yaml
- name: Setup Bun
  uses: oven-sh/setup-bun@v1
  with:
    bun-version: latest
```

### Manual GitHub Pages Deployment

If you prefer to deploy manually:

```bash
# Build the site
bun run build

# Install GitHub Pages deployment tool
npm install -g gh-pages

# Deploy
gh-pages -d dist
```

## 🌐 Vercel Deployment

### Method 1: Import from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click **Import Project**
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Astro
   - **Build Command**: `bun run build`
   - **Output Directory**: `dist`
5. Click **Deploy**

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Vercel Configuration

Create `vercel.json` (optional):
```json
{
  "buildCommand": "bun run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

## 🎯 Netlify Deployment

### Method 1: Drag and Drop

```bash
# Build locally
bun run build

# Drag the 'dist' folder to Netlify's deployment page
```

### Method 2: Git Integration

1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect to GitHub and select your repository
4. Configure:
   - **Build command**: `bun run build`
   - **Publish directory**: `dist`
   - **Node version**: `20` (in Environment variables)
5. Click **Deploy site**

### Netlify Configuration

Create `netlify.toml`:
```toml
[build]
  command = "bun run build"
  publish = "dist"

[[plugins]]
  package = "@astrojs/netlify"
```

## ☁️ Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Create a new project and connect to GitHub
3. Configure build settings:
   - **Framework preset**: Astro
   - **Build command**: `bun run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**

## 🐳 Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM oven/bun:latest AS builder

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t ridevfolio .
docker run -p 8080:80 ridevfolio
```

## 🔧 Common Build Issues

### Issue: "Module not found"

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules bun.lock
bun install
bun run build
```

### Issue: "Out of memory"

**Solution:**
```bash
# Increase Node memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
bun run build
```

### Issue: Styles not loading

**Cause:** Tailwind CSS not processing correctly.

**Solution:** Verify `astro.config.mjs` includes:
```javascript
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

## 📊 Performance Optimization

### Enable Compression

Most hosting platforms automatically enable gzip/brotli compression. Verify in your hosting dashboard.

### Image Optimization

Astro automatically optimizes images. Ensure images are in `public/` or use Astro's image component:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/image.png';
---
<Image src={myImage} alt="Description" />
```

### Caching

Configure cache headers in your hosting platform:
- HTML: `Cache-Control: public, max-age=0, must-revalidate`
- Assets: `Cache-Control: public, max-age=31536000, immutable`

## 🔐 Environment Variables

If you need environment variables:

### Local Development
Create `.env`:
```env
PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
```

### GitHub Actions
Add secrets in **Settings** → **Secrets and variables** → **Actions**

### Vercel/Netlify
Add in the project's environment variables settings

## ✅ Pre-Deployment Checklist

- [ ] All links work correctly
- [ ] Images load properly
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] SEO meta tags are correct
- [ ] Custom domain DNS configured (if applicable)
- [ ] HTTPS is enabled
- [ ] Build completes without errors
- [ ] No console errors on deployed site

## 📞 Getting Help

If you encounter issues:

1. Check the [Astro Documentation](https://docs.astro.build)
2. Review [GitHub Actions logs](https://github.com/riyann00b/RiDevfolio/actions)
3. Open an [issue](https://github.com/riyann00b/RiDevfolio/issues)
4. Contact: riyannazeer786@gmail.com

---

**Last Updated:** January 2025