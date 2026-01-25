# Minimalist Portfolio Redesign

**Date**: 2025-01-26
**Status**: Approved for Implementation

## Vision

Transform the portfolio from heavy animations to a Vercel/Gumroad-inspired minimalist design while preserving all existing content.

## Design Decisions

### Visual Foundation
- **Background**: Pure solid colors - `#FFFFFF` (light) / `#09090B` (dark)
- **Primary Text**: `#18181B` (zinc-900) / `#FAFAFA` (zinc-50)
- **Secondary Text**: `#71717A` (zinc-500) / `#A1A1AA` (zinc-400)
- **Accent**: `#2563EB` (blue-600) / `#3B82F6` (blue-500)
- **Borders**: `#E4E4E7` (zinc-200) / `#27272A` (zinc-800)
- **Typography**: Inter/System UI, tight tracking on headings, relaxed line-height
- **Spacing**: 8px base unit, 64px section padding, 768px content max-width

### Section Structure (8 → 5 sections)

1. **Hero** - Single column, centered, one CSS fade-in animation
2. **About** - Merged Overview + About content
3. **Tech Stack** - Simplified, no filtering, icon + name only
4. **Experience** - Merged Experience + Certifications
5. **Work** - Merged Projects + Testimonials
6. **Contact** - Simplified form
7. **Footer** - Minimal

### Motion & Interactions
- **Hero**: Single CSS `fadeIn` keyframe (600ms) on page load
- **Hover**: CSS `transition-all duration-200` on borders/backgrounds only
- **No**: Staggered animations, scale effects, parallax, particles, infinite loops

### Components (shadcn/ui)
- Card: border-based, no shadows, rounded-lg
- Button: primary solid, secondary ghost, rounded-md
- No transform animations on hover/press

## Implementation Order

1. Background simplification
2. Hero section redesign
3. Section consolidation
4. Tech stack simplification
5. Global styles and theme
6. Navigation cleanup
7. Testing and refinement

## Content Preservation

All existing content is preserved - only presentation changes.
