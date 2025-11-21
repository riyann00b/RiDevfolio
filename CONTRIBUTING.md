# Contributing to RiDevfolio

Thank you for your interest in contributing to RiDevfolio! This document provides guidelines and instructions for contributing to this project.

## 🎯 Ways to Contribute

- Report bugs and issues
- Suggest new features or improvements
- Improve documentation
- Submit bug fixes
- Add new features (with prior discussion)

## 🐛 Reporting Bugs

Before submitting a bug report:

1. Check the [existing issues](https://github.com/riyann00b/RiDevfolio/issues) to avoid duplicates
2. Use the latest version of the project
3. Verify the issue is reproducible

When submitting a bug report, include:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node/Bun version)

## 💡 Suggesting Features

Feature suggestions are welcome! Please:

1. Check existing issues and discussions first
2. Provide a clear use case
3. Explain why this feature would be useful
4. Be open to discussion and feedback

## 🔧 Development Setup

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) v18+
- Git

### Setup Steps

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the repository page.

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/RiDevfolio.git
   cd RiDevfolio
   ```

3. **Install dependencies**

   ```bash
   bun install
   ```

4. **Create a branch**

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

5. **Start development server**

   ```bash
   bun run dev
   ```

   Visit `http://localhost:4321` to see your changes.

## 📝 Code Guidelines

### General Principles

- Write clean, readable, and maintainable code
- Follow existing code style and patterns
- Keep components small and focused
- Comment complex logic
- Test your changes thoroughly

### File Structure

- **Components**: Place reusable UI components in `src/components/`
- **Pages**: Add new pages in `src/pages/`
- **Styles**: Global styles go in `src/styles/`
- **Configuration**: Update site config in `src/config.ts`

### Naming Conventions

- Use **PascalCase** for component files: `MyComponent.astro`
- Use **camelCase** for variables and functions: `myVariable`, `myFunction()`
- Use **kebab-case** for file names in public folder: `my-image.png`

### Astro Components

- Use TypeScript when possible
- Extract reusable logic into utilities
- Keep templates clean and readable
- Use proper semantic HTML

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing
- Respect the existing color scheme and design system

## ✅ Pull Request Process

### Before Submitting

1. **Test your changes**
   - Run `bun run build` to ensure it builds successfully
   - Test in multiple browsers if applicable
   - Verify responsive design on different screen sizes

2. **Update documentation**
   - Update README.md if you've added new features
   - Add comments to complex code
   - Update TypeScript types if applicable

3. **Commit your changes**
   
   Use clear, descriptive commit messages:
   
   ```bash
   git add .
   git commit -m "feat: add dark mode toggle"
   # or
   git commit -m "fix: resolve LinkedIn URL issue"
   ```

   **Commit message format:**
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `refactor:` for code refactoring
   - `test:` for adding tests
   - `chore:` for maintenance tasks

4. **Push to your fork**

   ```bash
   git push origin feature/your-feature-name
   ```

### Submitting the PR

1. Go to the [original repository](https://github.com/riyann00b/RiDevfolio)
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template with:
   - Clear description of changes
   - Related issue numbers (if applicable)
   - Screenshots (for UI changes)
   - Testing steps

### After Submission

- Be responsive to feedback and questions
- Make requested changes promptly
- Keep the PR focused on a single feature/fix
- Maintain a professional and respectful tone

## 🎨 Design Guidelines

When making UI changes:

- Maintain consistency with existing design
- Ensure accessibility (proper contrast, semantic HTML)
- Test dark mode compatibility
- Keep animations smooth and purposeful
- Optimize images and assets

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## ❓ Questions?

If you have questions or need help:

1. Check existing documentation
2. Search through [issues](https://github.com/riyann00b/RiDevfolio/issues)
3. Open a new issue with the "question" label
4. Reach out via email: riyannazeer786@gmail.com

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the project
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Personal attacks or insults
- Publishing others' private information
- Any unprofessional conduct

## 📄 License

By contributing to RiDevfolio, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

---

Thank you for contributing to RiDevfolio! Your efforts help make this project better for everyone. 🚀