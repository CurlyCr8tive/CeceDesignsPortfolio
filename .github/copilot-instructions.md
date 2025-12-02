# Copilot Instructions: Portfolio Website

## Architecture Overview

This is a **personal portfolio website** built as a full-stack monorepo with Vite-powered dev server combining Express backend and React frontend in a single process.

**Stack**: React 18 + Express 4 + TypeScript + Tailwind CSS + shadcn/ui
**Router**: Wouter (lightweight client-side routing)
**State**: TanStack Query for server state
**Database**: Drizzle ORM + PostgreSQL (Neon) with optional in-memory fallback
**Design System**: Custom theme based on shadcn/ui "new-york" style with pink/rose primary (330° hue)

### Key Architecture Patterns

- **Monorepo structure**: `client/` (frontend), `server/` (backend), `shared/` (types/schema)
- **Single-port deployment**: Both API and client served on PORT 5000 (Replit requirement)
- **Vite middleware**: Dev mode uses Vite middleware; production serves from `dist/public`
- **Path aliases**: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

## Development Workflow

### Running the Project
```bash
npm run dev          # Development with hot reload (tsx + Vite)
npm run build        # Build client (Vite) + server (esbuild)
npm start            # Production server
npm run check        # TypeScript type checking
npm run db:push      # Push Drizzle schema to database
```

**Critical**: Port 5000 is hardcoded for deployment compatibility. Other ports are firewalled.

### File Organization
- **Components**: Section components in `client/src/components/` (HeroSection, AboutSection, etc.)
- **UI primitives**: shadcn/ui components in `client/src/components/ui/`
- **Pages**: Minimal routing with `pages/home.tsx` and `pages/not-found.tsx`
- **Assets**: Images in `attached_assets/` (referenced via `@assets/` alias)
- **API routes**: Add to `server/routes.ts` with `/api` prefix

## Design System Conventions

### Follow design_guidelines.md
All design decisions reference `design_guidelines.md` - this is the source of truth for:
- Typography scale (text-6xl for hero, text-4xl for sections, etc.)
- Spacing rhythm (py-20 to py-32 for sections)
- Component patterns (Cards with hover-elevate, backdrop-blur on hero buttons)
- Layout constraints (max-w-7xl containers, px-4 padding)

### Color System
**Primary**: Pink/rose (330° hue, 85% saturation) - used for CTAs, links, brand elements
**Font families**: 
- Serif (Space Grotesk) for headings
- Sans (Inter) for body text
- Set via CSS variables: `font-serif`, `font-sans`

### Custom Tailwind Utilities
**Elevation system** in `index.css`:
- `hover-elevate` / `active-elevate` - Adds subtle brightness overlay on interaction
- `toggle-elevate` + `toggle-elevated` - For toggled states
- Applied to Cards and Buttons automatically via base styles

**Example**: `<Card className="hover-elevate">` gets automatic hover brightness

## Component Patterns

### Section Structure
Each major section follows this pattern:
```tsx
<section id="about" className="py-20 md:py-32 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
    {/* Section content */}
  </div>
</section>
```

### Image Imports
Images imported from `attached_assets/` via alias:
```tsx
import heroImage from "@assets/generated_images/hero.png";
import project1 from "@assets/Screenshot_123.png";
```

### Data-testid Convention
All interactive elements and major content blocks have `data-testid` attributes:
- Sections: `data-testid="section-hero"`
- Text: `data-testid="text-hero-name"`
- Buttons: `data-testid="button-hero-cta"`
- Cards: `data-testid="card-project-0"`

## API & Database Patterns

### Storage Interface
`server/storage.ts` defines `IStorage` interface. Current implementation is `MemStorage` (in-memory), but structure supports Drizzle/Postgres swap.

**Pattern for CRUD**:
```typescript
// In routes.ts
app.post("/api/endpoint", async (req, res) => {
  const result = await storage.method();
  res.json(result);
});
```

### Schema Pattern
Database schema in `shared/schema.ts` using Drizzle + Zod:
```typescript
export const tableName = pgTable("table_name", { /* columns */ });
export const insertSchema = createInsertSchema(tableName);
export type InsertType = z.infer<typeof insertSchema>;
```

## Key Files to Reference

- `design_guidelines.md` - Design specs, spacing, typography, section layouts
- `vite.config.ts` - Path aliases, build config, Replit plugin setup
- `tailwind.config.ts` - Theme tokens, color system, custom border radius
- `client/src/index.css` - CSS variables, elevation utilities, light/dark modes
- `components.json` - shadcn/ui configuration ("new-york" style)

## Common Tasks

### Adding a New Section Component
1. Create `client/src/components/NewSection.tsx`
2. Follow section structure pattern (py-20 spacing, max-w-7xl container)
3. Import and add to `pages/home.tsx`
4. Add `id="section-name"` for smooth scroll navigation
5. Add data-testid attributes for testing

### Adding shadcn/ui Component
```bash
npx shadcn@latest add [component-name]
```
Components go to `client/src/components/ui/` automatically via `components.json` config.

### Styling Buttons on Images
Use backdrop-blur pattern from HeroSection:
```tsx
<Button className="backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20">
```

### Adding API Endpoint
1. Add route in `server/routes.ts` (prefix with `/api`)
2. Use `storage` for data operations
3. Server logs API requests automatically (see middleware in `server/index.ts`)

## Gotchas

- **No Vite SSR setup**: This is not Next.js - client renders fully in browser
- **Wouter not React Router**: Use `useLocation()` from "wouter", not "react-router-dom"
- **Font loading**: Fonts loaded via CSS variables, not Google CDN (change in index.css if needed)
- **Asset paths**: Always use `@assets/` alias, never relative paths from attached_assets
- **Smooth scroll**: Enabled in `pages/home.tsx` via `scrollBehavior: "smooth"` on mount

## Project Context

This portfolio showcases Cherice Heron's work as a Product Designer & Creative Developer. Featured projects include:
- **Health Equity NYC**: Data visualization dashboard (Next.js, Recharts, OpenAI)
- **Nephra**: Health tracking for kidney disease (React, Supabase)
- **Influencer CRM**: Gaming creator relationship platform
- **My Makeup Bag**: Mobile app design (Figma)

Design emphasizes clean aesthetics, generous whitespace, and project-centric presentation. All copy and content should maintain professional polish while staying approachable.
