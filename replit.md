# Cleaning Service Website

## Overview
This is a React-based cleaning service website built with Vite, TypeScript, and shadcn-ui components. The site features multilingual support (Russian and Uzbek) and showcases cleaning services with a modern, responsive design.

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
- `src/`
  - `pages/` - Page components (Index, NotFound)
  - `components/` - Reusable UI components
    - `ui/` - shadcn-ui components
    - Feature components (Hero, Services, Testimonials, etc.)
  - `i18n/` - Internationalization configuration and locales
  - `lib/` - Utility functions
  - `hooks/` - Custom React hooks
  - `assets/` - Images and static assets
- `public/` - Public assets

## Development
The project runs on port 5000 with the Vite dev server. The workflow "Start application" runs `npm run dev` which starts the development server with hot module replacement.

## Configuration
- **Vite**: Configured to run on 0.0.0.0:5000 for Replit compatibility
- **HMR**: WebSocket configured for Replit's proxy environment
- **Build**: Standard Vite build process outputs to `dist/`

## Features
- Multilingual support (Russian/Uzbek)
- Responsive design
- Modern UI with Tailwind CSS
- Component library with shadcn-ui
- SEO-friendly structure
- Professional cleaning service showcase

## Recent Changes
- **2025-10-04**: Imported from GitHub and configured for Replit environment
  - Changed server port from 8080 to 5000
  - Updated host to 0.0.0.0 for Replit compatibility
  - Configured HMR WebSocket for proxy environment
  - Set up deployment configuration for autoscale
