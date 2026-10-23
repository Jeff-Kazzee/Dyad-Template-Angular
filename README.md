# Dyad Angular Template

A minimal Angular template for Dyad.sh - a clean starting point for building Angular applications.

## Overview

This template provides a minimal, unopinionated Angular application setup that's fully compatible with Dyad.sh's JavaScript-based environment. It includes:

- Angular 20
- TypeScript support
- CSS styling
- Development server with hot reload
- Production build configuration

## Development

Angular 20 needs Node.js 20.19 or a later 20.x, 22.12 or a later 22.x, or 24.0 or a later 24.x.

To start the development server:

```bash
npm run dev
# or
npm start
```

The application will be available at `http://localhost:4200/` and will automatically reload when you make changes.

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment.

## Project Structure

```
src/
├── app/
│   ├── app.component.ts    # Main component logic
│   ├── app.component.html  # Main component template
│   └── app.component.css   # Main component styles
├── index.html             # Application entry point
├── main.ts               # Application bootstrap
└── styles.css            # Global styles
```

## Getting Started

1. Edit `src/app/app.component.ts` to add your component logic
2. Modify `src/app/app.component.html` for your template
3. Update `src/app/app.component.css` for component-specific styles
4. Add global styles in `src/styles.css`

## Technologies

- Angular 20
- TypeScript
- CSS

## License

This template is open source and available for use in your Dyad.sh projects.
