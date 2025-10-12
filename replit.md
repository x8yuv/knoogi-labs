# Overview

Knoogi Labs is a modern full-stack web application built for a Canadian technology consulting company. The application serves as a business website showcasing services in AI development, app development, digital marketing, and media creation. It features a contact form for lead generation and provides information about the company's offerings and team.

The application uses a monorepo structure with a React frontend and Express.js backend, designed for deployment on Replit with integrated development tooling.

## Recent Changes (October 12, 2025)
- **Social Media Sharing**: Fixed Open Graph and Twitter Card meta tags to properly display logo and banner on WhatsApp, Facebook, LinkedIn, and other platforms
  - Updated all og:image and twitter:image tags to use absolute URLs (https://knoogi.com/...)
  - Resized social media banner to optimal 1200×630 pixels for best display across platforms
  - Added image alt text tags for improved accessibility
  - Updated og:url to use knoogi.com domain instead of replit.app
  - Social banner image includes branded gradient with company name and tagline

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system including branded colors and typography
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints with proper HTTP status codes and JSON responses
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Validation**: Zod schemas for runtime type checking and API validation
- **Storage**: In-memory storage implementation with interface-based design for easy database migration

## Data Storage
- **Current**: MemStorage class providing in-memory data persistence for development
- **Schema**: Drizzle ORM with PostgreSQL schema definitions for production readiness
- **Models**: User management and contact message storage with proper typing
- **Migration Ready**: Configured for easy transition to PostgreSQL with existing Drizzle setup

## Development Architecture
- **Monorepo**: Unified codebase with shared types and schemas between frontend and backend
- **Build Process**: Separate build targets for client (Vite) and server (esbuild)
- **Development Server**: Integrated Vite development server with HMR and API proxy
- **Type Safety**: Shared TypeScript configuration across all packages

## UI/UX Design System
- **Theme**: Custom design system with branded color palette (tech-blue, innovation-purple, success-green)
- **Typography**: Multi-font system with Inter, Poppins, and custom font loading
- **Components**: Consistent component library with variant-based styling
- **Responsive**: Mobile-first responsive design with Tailwind breakpoints
- **Accessibility**: Built on Radix UI primitives ensuring WCAG compliance

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for frontend development
- **Backend Framework**: Express.js with TypeScript support for API development
- **Build Tools**: Vite for frontend bundling, esbuild for server compilation

## UI and Styling
- **Component Library**: Radix UI primitives for accessible component foundation
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling

## Data Management
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database Driver**: Neon serverless PostgreSQL adapter for production deployment
- **Validation**: Zod for runtime type validation and schema generation
- **State Management**: TanStack Query for server state and API caching

## Development Tools
- **TypeScript**: Full-stack type safety with shared configurations
- **Replit Integration**: Specialized Vite plugins for Replit development environment
- **Session Management**: connect-pg-simple for PostgreSQL session storage (configured but not active)
- **Date Handling**: date-fns for consistent date manipulation

## Production Dependencies
- **Database**: PostgreSQL via Neon serverless for scalable data persistence
- **Build Output**: Optimized bundles for both client and server deployment
- **Environment**: Configured for production deployment with proper error handling