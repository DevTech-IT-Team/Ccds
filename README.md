# CCDC Website

Colorado Colonics Detox Center (CCDC) - A multi-page React website for a colon hydrotherapy and wellness studio in Englewood, CO.

## Tech Stack

- **React 18** + **Vite** - Fast development and build tooling
- **React Router v6** - Client-side routing for multi-page navigation
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Page transitions and micro-animations
- **lucide-react** - Icon library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Vercel

This project includes a `vercel.json` configuration file for SPA routing. To deploy:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy

The `vercel.json` file ensures that all routes are properly handled by redirecting to `index.html`.

### Netlify

For Netlify deployment, create a `_redirects` file in the `public/` directory:

```
/* /index.html 200
```

Then deploy via the Netlify CLI or connect your Git repository.

## Project Structure

```
ccdcs/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── layout/        # Header, Footer, MobileCTA, PageWrapper
│   │   ├── ui/            # Reusable UI components
│   │   └── icons/         # Custom icons (CareCycle)
│   ├── data/              # Site content (content.js, pricing.js, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── App.jsx            # Router setup
│   └── index.css          # Global styles + Tailwind
├── index.html
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json
```

## Content Management

All site content is centralized in `src/data/`:
- `content.js` - General site copy, navigation, and page content
- `pricing.js` - Pricing tables
- `testimonials.js` - Client testimonials
- `staff.js` - Staff bios and credentials

Update these files to change site content without modifying JSX components.

## Design System

The site uses a custom color palette:
- Primary: `--teal-deep` (#173C40)
- Secondary: `--aqua` (#7FB3BC)
- Accent: `--clay` (#B85C38)
- Backgrounds: `--sand` (#F7F2E7), `--aqua-pale` (#DCEAEC)

Typography:
- Headings: Fraunces (serif)
- Body: Inter (sans-serif)

## TODO Items

The following items are marked with `TODO` in the code and need attention:

1. **Contact Form** - Wire the contact form to a real backend (Formspree or custom endpoint)
2. **Google Reviews** - Insert the real Google Business review URL
3. **Staff Photos** - Replace placeholder initials with actual staff photos
4. **PDF Downloads** - Attach real PDF files for Gut-Brain Connection and History of Hydrocolon Therapy
5. **Map Embed** - Replace map placeholder with actual Google Maps embed
6. **BioCharger Links** - Add real video demo and FAQ links

## Accessibility

The site includes:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` support
- WCAG AA color contrast

## License

© 2025 Colorado Colonics Detox Center. All rights reserved. in your project.
