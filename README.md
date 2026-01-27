# Cairo Indie Filmmakers Club

A landing page for the Cairo Indie Filmmakers Club (CIFC) — a community of indie filmmakers in Cairo committed to making one film per month.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Build

```bash
npm run build
npm run preview
```

## Deploy

This project builds to static files and can be deployed to [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and deploy

## Project Structure

```
src/
  components/       # React components
    ui/             # shadcn/ui primitives (button, card, alert, separator)
    Hero.tsx        # Hero section with background image
    About.tsx       # About the club
    Features.tsx    # Why join / the challenge
    Rules.tsx       # Club rules
    Apply.tsx       # Application CTA (links to Google Form)
    CTA.tsx         # Bottom call-to-action
    Navbar.tsx      # Navigation bar
    Footer.tsx      # Footer
    Layout.tsx      # Page layout wrapper
  pages/
    Index.tsx       # Landing page
    NotFound.tsx    # 404 page
  lib/
    utils.ts        # Tailwind merge utility
public/
  images/           # Static images (logos, backgrounds)
```
