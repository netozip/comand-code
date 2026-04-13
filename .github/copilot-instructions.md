# Project Guidelines

## Code Style
- Use PascalCase for React components, camelCase for props and variables
- Follow ESLint rules in [eslint.config.js](eslint.config.js), including custom no-unused-vars pattern for uppercase variables
- Styling: Tailwind CSS v4 with inline className; use hex colors for custom overrides (e.g., `bg-[#0b0b0b]`)
- Reference [index.css](src/index.css) for global styles and utility classes

## Architecture
- Fixed sidebar navigation (70px width) with main content offset (`ml-[70px]`)
- Components: Presentational (CodeBlock, Sidebar) and container (App)
- Dark theme with purple/gray accents
- See [App.jsx](src/App.jsx) for layout structure, [components/](src/components/) for reusable parts

## Build and Test
- Install: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Preview: `npm run preview`

## Conventions
- Sidebar is static (no routing yet); add icons via [Sidebar.jsx](src/components/Sidebar.jsx)
- Content hardcoded in App.jsx; consider data-driven approach for scalability
- Syntax highlighting uses vscDarkPlus theme in CodeBlock
- Portuguese language UI; plan for i18n if expanding

See [README.md](README.md) for general Vite+React setup.</content>
<parameter name="filePath">/Users/gamma/Documents/dev/pro/react/comand-code/.github/copilot-instructions.md