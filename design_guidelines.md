# Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based with System Enhancement**: Drawing inspiration from modern portfolio leaders (Dribbble, Behance top portfolios) combined with clean design system principles for consistency. Focus on showcasing work beautifully while maintaining professional credibility.

## Core Design Principles
1. **Visual Hierarchy First**: Lead with impact, guide eyes intentionally
2. **Generous Whitespace**: Let content breathe, avoid cramped sections
3. **Project-Centric**: Work samples are the hero, everything supports them
4. **Professional Polish**: Every detail matters in a portfolio

## Layout System
**Spacing Scale**: Use Tailwind units of 4, 8, 12, 16, 20, and 24 consistently throughout (p-4, gap-8, mb-12, py-16, etc.)

**Section Rhythm**:
- Desktop: py-20 to py-32 for major sections
- Mobile: py-12 to py-16
- Max container width: max-w-7xl with px-4 padding

## Typography Hierarchy
**Font Selection**: Use 2 Google Fonts via CDN
- **Display/Headers**: Modern geometric sans (e.g., "Space Grotesk", "Plus Jakarta Sans")
- **Body/UI**: Clean readable sans (e.g., "Inter", "DM Sans")

**Scale**:
- Hero Name: text-6xl md:text-7xl lg:text-8xl, font-bold
- Section Titles: text-4xl md:text-5xl, font-bold
- Project Titles: text-2xl md:text-3xl, font-semibold
- Subheadings: text-xl md:text-2xl, font-medium
- Body: text-base md:text-lg
- Small: text-sm

## Navigation
**Fixed header** with backdrop blur effect (backdrop-blur-lg):
- Logo/Name on left
- Navigation links on right (About, Projects, Contact)
- Mobile: Hamburger menu transforming to full-screen overlay
- Height: h-16 md:h-20
- Smooth scroll behavior to sections

## Hero Section (Full viewport impact)
**Layout**: h-screen with flex center alignment
**Image Treatment**: Large hero image as background covering full viewport with subtle overlay for text readability
**Content Structure**:
- Name: Largest text, centered
- Title/Role: Below name (e.g., "Product Designer & Creative Developer")
- Short tagline: 1-2 sentences max
- Primary CTA button with blurred background (backdrop-blur-md bg-white/10)
- Scroll indicator at bottom

**Image**: Full-screen professional photo or abstract creative background that represents your work style

## About Section
**Layout**: Two-column desktop (lg:grid-cols-2), single column mobile
**Left Column**: Professional headshot image (rounded-2xl, aspect-square, max-w-md)
**Right Column**:
- Section title
- Bio paragraph (2-3 paragraphs, max-w-prose)
- Skills grid below (grid-cols-2 md:grid-cols-3 gap-4)
- Each skill as card with icon from Heroicons

**Image**: Professional portrait photo, well-lit, authentic

## Projects/Portfolio Section
**Layout**: Masonry-style grid for visual interest (not uniform heights)
- Desktop: 2-column grid (lg:grid-cols-2 gap-8)
- Each project card includes:
  - Featured image (aspect-video, rounded-xl)
  - Project title
  - Brief description (2-3 lines)
  - Tech/tools used (pills/badges)
  - "View Project" link with arrow icon

**Display 4-6 projects** with varied image sizes for rhythm
**Images**: Project screenshots, mockups, or hero images for each work sample

## Contact Section
**Layout**: Centered content, max-w-2xl
**Structure**:
- Section title
- Brief call-to-action text
- Email link (large, prominent)
- Social links grid (LinkedIn, GitHub, Twitter, etc.) using Heroicons
- Optional contact form: 2-column on desktop (name/email in row, message full width)

## Component Library
**Cards**: rounded-xl with subtle shadow on hover, transition-transform hover:scale-[1.02]
**Buttons**: 
- Primary: px-8 py-3, rounded-full, font-semibold
- On images: backdrop-blur-md with semi-transparent background
**Links**: Underline decoration with smooth color transition
**Form Inputs**: rounded-lg, border, px-4 py-3, focus states with ring

## Footer
**Layout**: py-12, centered text
- Copyright notice
- Quick navigation links
- Social icons repeated
- "Built with [tech stack]" credit

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Stack all multi-column layouts to single column on mobile
- Reduce text sizes appropriately
- Touch-friendly tap targets (min 44x44px)

## Animations & Interactions
**Minimal, purposeful motion**:
- Smooth scroll navigation
- Hover scale on project cards (scale-105)
- Fade-in on scroll for sections (implement with Intersection Observer)
- Navigation backdrop blur on scroll
**No** distracting parallax or excessive animations

## Images Summary
1. **Hero**: Full-screen background (professional/creative aesthetic)
2. **About**: Professional headshot portrait
3. **Projects**: 4-6 project screenshots/mockups
Total: 6-8 images required