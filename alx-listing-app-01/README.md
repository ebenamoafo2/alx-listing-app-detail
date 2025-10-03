# ALX Listing App

A modern, responsive Airbnb clone built with Next.js, TypeScript, and Tailwind CSS. This project focuses on creating a comprehensive property listing platform with a clean, user-friendly interface and robust functionality.

## 🎯 Project Goals

The ALX Listing App aims to replicate the core functionality of Airbnb's property listing system, including:

- **Property Listings**: Display properties with detailed information, images, and pricing
- **Search & Filtering**: Advanced search capabilities with multiple filter options
- **User Management**: User authentication, profiles, and booking management
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Type Safety**: Full TypeScript integration for reliable, maintainable code
- **Modern UI/UX**: Clean, intuitive interface using Tailwind CSS

##  Project Structure

```
alx-listing-app/
├── components/          # Reusable React components
│   ├── common/         # Generic UI components (Card, Button, Modal, etc.)
│   ├── layout/         # Layout-specific components (Header, Footer, Navbar)
│   └── property/       # Property-related components (PropertyCard, PropertyList)
│
├── constants/          # Application constants and configuration
│   └── index.ts       # API endpoints, UI text, validation rules, etc.
│
├── interfaces/         # TypeScript type definitions
│   └── index.ts       # All interfaces for props, data models, and API responses
│
├── pages/             # Next.js pages (file-based routing)
│   ├── _app.tsx      # Custom App component
│   ├── index.tsx     # Home page
│   └── ...           # Other pages
│
├── public/            # Static assets
│   └── assets/       # Images, icons, and other media files
│
├── styles/            # Global styles and CSS files
│   └── globals.css   # Tailwind CSS imports and global styles
│
└── ...config files   # Next.js, TypeScript, Tailwind, and other configurations
```

### 📁 Directory Purposes

- **`components/`**: Contains all reusable React components organized by category
  - `common/`: Generic UI components like Card, Button, Modal that can be used anywhere
  - `layout/`: Components specific to page layout (headers, footers, navigation)
  - `property/`: Components specifically related to property listings and details

- **`interfaces/`**: Centralized TypeScript type definitions
  - Ensures type safety across the entire application
  - Includes component props, data models, API responses, and utility types

- **`constants/`**: Application-wide constants and configuration
  - API endpoints and base URLs
  - UI text and labels for internationalization
  - Validation rules and configuration settings
  - Static data like property types and amenities

- **`public/assets/`**: Static files served directly by Next.js
  - Property images, user avatars, icons
  - Any media files that don't require processing

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Installation & Setup

1. **Clone the repository** (or navigate to your project directory):
   ```bash
   cd alx-listing-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

The application will automatically reload when you make changes to the code.

### Available Scripts

- **`npm run dev`**: Runs the development server with hot reloading
- **`npm run build`**: Creates an optimized production build
- **`npm run start`**: Starts the production server (run `npm run build` first)
- **`npm run lint`**: Runs ESLint to check for code quality issues
- **`npm run lint:fix`**: Automatically fixes ESLint issues where possible

## 🛠️ Technologies Used

- **[Next.js](https://nextjs.org/)**: React framework with file-based routing and SSR capabilities
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript for better development experience
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid UI development
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces
- **[ESLint](https://eslint.org/)**: Code linting tool for maintaining code quality

## 📱 Features (Planned)

- [ ] **Property Listings**: Browse and search available properties
- [ ] **Property Details**: Detailed view with images, amenities, and booking options
- [ ] **User Authentication**: Login, registration, and profile management
- [ ] **Booking System**: Reserve properties with date selection
- [ ] **Search & Filters**: Advanced filtering by location, price, amenities, etc.
- [ ] **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- [ ] **Reviews & Ratings**: User reviews and property ratings
- [ ] **Host Dashboard**: Property management for hosts

## 🎨 Design System

The application follows a consistent design system built with Tailwind CSS:

- **Colors**: Modern, accessible color palette
- **Typography**: Clear hierarchy with readable fonts
- **Spacing**: Consistent spacing using Tailwind's scale
- **Components**: Reusable UI components with consistent styling
- **Responsive**: Mobile-first responsive design

## 🔧 Development Guidelines

- **Component Structure**: Use functional components with TypeScript
- **Styling**: Utilize Tailwind CSS utility classes
- **State Management**: React hooks for local state, context for global state
- **File Naming**: Use PascalCase for components, camelCase for utilities
- **Code Quality**: Follow ESLint rules and TypeScript best practices

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)

