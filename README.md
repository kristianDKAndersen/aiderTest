# Vue 3 + JavaScript sprinkle with TypeScript Starter Template

A modern Vue.js starter template with TypeScript support, featuring comprehensive tooling for development, testing, and code quality.

## Features

### Core Dependencies

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type safety and enhanced developer experience
- **Pinia**: State management solution
- **Vue Router**: Official router for Vue.js
- **TailwindCSS**: Utility-first CSS framework

### Development Tools

- **Vite**: Next-generation frontend tooling
- **Storybook**: UI component development environment
- **ESLint**: JavaScript/TypeScript linting
- **Prettier**: Code formatting
- **Stylelint**: CSS/SCSS linting
- **Husky**: Git hooks for code quality
- **lint-staged**: Run linters on git staged files

## Git Commit Convention

This project uses a pre-commit hook that automatically prepends a task ID to commit messages. The task ID is read from your `.env` file.

1. Create a `.env` file in your project root:

```
TASK_ID=PROJ-123
```

2. Your commits will automatically be formatted as:

```
PROJ-123: your commit message
```

## Quick Start

### Using degit (recommended)

```bash
# Install degit if not already installed
npm install -g degit

# Create new project
npx degit kristianDKAndersen/aiderTest your-project-name

# Install dependencies
cd your-project-name
npm install
```

### Using git clone

```bash
# Clone repository
git clone https://github.com/kristianDKAndersen/aiderTest.git
cd aiderTest
npm install
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve

# Run Storybook
npm run storybook
```

## Code Quality Commands

```bash
# Lint code
npm run lint

# Format code
npm run format

# Lint styles
npm run stylelint
```

## Project Structure

```
your-project/
├── .husky/             # Git hooks
├── .storybook/         # Storybook configuration
├── src/                # Source code
├──── components
├──── composable
├──── public/
├──── router
├──── stores
├──── stories
├──── styles
├──── views             # Static assets
└── package.json        # Project configuration
```
