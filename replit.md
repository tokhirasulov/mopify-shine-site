# Mopify - Cleaning Service Website

## Overview
This is a React-based cleaning service website built with Vite, TypeScript, and shadcn-ui components. The site features multilingual support (Russian and Uzbek) and showcases professional cleaning services with a modern, responsive design.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **UI Library**: shadcn-ui with Radix UI components
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Internationalization**: i18next with browser language detection
- **Icons**: Lucide React

## Project Structure
```
src/
├── pages/          # Page components (Index, NotFound)
├── components/     # Reusable UI components
│   ├── ui/        # shadcn-ui components
│   └── ...        # Feature components (Hero, Services, etc.)
├── i18n/          # Internationalization config and locales
├── lib/           # Utility functions
├── hooks/         # Custom React hooks
├── assets/        # Images and static assets
└── ...            # App entry points
public/            # Public static assets
```

## Replit Configuration
The project has been configured to run properly in the Replit environment:

### Vite Configuration (`vite.config.ts`)
- **Host**: `0.0.0.0` (required for Replit's container environment)
- **Port**: `5000` (Replit's standard frontend port)
- **Allowed Hosts**: `true` (allows Replit's proxy domains)
- **HMR WebSocket**: Configured for Replit's proxy with:
  - `clientPort: 443` (Replit's external port)
  - `protocol: 'wss'` (secure WebSocket)

### Workflow
- **Name**: "Start application"
- **Command**: `npm run dev`
- **Port**: 5000
- **Output**: webview

### Deployment
- **Target**: autoscale (static frontend)
- **Build**: `npm run build`
- **Run**: `npm run preview`

## Development
Run `npm run dev` to start the development server. The application will be available on port 5000 with hot module replacement enabled.

## Features
- Professional cleaning service landing page
- Multilingual support (Russian/Uzbek via i18next)
- Responsive design with Tailwind CSS
- Animated loading screen
- SEO-optimized with meta tags and structured data
- Modern UI with shadcn-ui components
- Smooth animations and transitions

## Recent Changes
- **2025-10-04**: Imported from GitHub and configured for Replit
  - Updated Vite config for Replit environment (port 5000, host 0.0.0.0)
  - Added `allowedHosts: true` for Replit proxy compatibility
  - Configured HMR WebSocket for secure connection through Replit proxy
  - Set up workflow for automatic dev server management
  - Configured deployment settings for production builds
  
## Known Behaviors
- The site includes a loading screen that displays for ~2 seconds on first visit
- HMR (Hot Module Replacement) is working correctly for instant updates during development
- Some React Router future flag warnings appear in console (informational only, not errors)
