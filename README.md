# RiDevfolio 🚀

A modern, responsive portfolio website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Showcasing professional experience, projects, skills, certifications, and education in a clean, performant single-page application.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Astro](https://img.shields.io/badge/Astro-5.12.3-FF5D01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?logo=tailwindcss)

## 🌟 Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance and near-zero JavaScript
- **🎨 Modern Design**: Clean, responsive UI with smooth animations and dark mode support
- **📱 Mobile First**: Fully responsive design that works seamlessly on all devices
- **🔧 Easy Customization**: Single configuration file to update all content
- **♿ Accessible**: Built with accessibility best practices
- **🎯 SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **TypeScript** - Type safety and better developer experience

## 📋 Prerequisites

Before you begin, ensure you have one of the following installed:
- [Bun](https://bun.sh/) (recommended - primary package manager)
- [Node.js](https://nodejs.org/) (v18 or higher) with npm

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/riyann00b/RiDevfolio.git
cd RiDevfolio
```

### 2. Install dependencies

Using Bun (recommended):
```bash
bun install
```

Or using npm:
```bash
npm install
```

### 3. Start the development server

Using Bun:
```bash
bun run dev
```

Or with npm:
```bash
npm run dev
```

Your site will be available at `http://localhost:4321`

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview production build locally |

Replace `bun` with `npm` if you're using npm as your package manager.

## ⚙️ Customization

All content is managed through a single configuration file: `src/config.ts`

### Update Personal Information

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  description: "Your portfolio description",
  accentColor: "#98fd9e", // Change your accent color
  social: {
    email: "your.email@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/yourusername",
  },
  // ... more configuration
}
```

### Sections You Can Customize

- **About Me**: Update `aboutMe` string
- **Skills**: Modify the `skills` array
- **Projects**: Add/edit projects in the `projects` array
- **Experience**: Update work experience in the `experience` array
- **Education**: Modify education details in the `education` array
- **Certifications**: Add certifications in the `certifications` array

## 🎨 Color Customization

Change the accent color by modifying the `accentColor` property in `src/config.ts`. The color will be applied throughout the site for hover effects and highlights.

## 📁 Project Structure

```
RiDevfolio/
├── public/              # Static assets
│   ├── favicon.svg
│   └── logo.svg
├── src/
│   ├── components/      # Astro components
│   │   ├── About.astro
│   │   ├── Certifications.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── pages/           # Page routes
│   │   └── index.astro
│   ├── styles/          # Global styles
│   └── config.ts        # Site configuration
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## 🌐 Deployment

This site can be deployed to any static hosting service:

### GitHub Pages (Automated)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

**Setup Steps:**

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to the main branch - the workflow will automatically build and deploy

**Custom Domain (Optional):**

If using a custom domain like `ricode.me`:
1. Add your domain in Settings → Pages → Custom domain
2. The `public/CNAME` file is already configured
3. Update DNS records at your domain provider to point to GitHub Pages

**Note:** The workflow uses Bun for faster builds. No additional configuration needed!

### Vercel
```bash
bun run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
bun run build
# Deploy the dist/ folder to Netlify
```

### Other Static Hosts
```bash
bun run build
# Deploy the dist/ folder to your hosting provider
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/riyann00b/RiDevfolio/issues).

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 👨‍💻 Author

**MD Riyan Nazeer**

- LinkedIn: [@md-riyan-nazeer](https://www.linkedin.com/in/md-riyan-nazeer)
- GitHub: [@riyann00b](https://github.com/riyann00b)
- Email: riyannazeer786@gmail.com

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Lucide Icons](https://lucide.dev)

---

⭐ Star this repo if you find it helpful!