# Design brief

Reading this as: a one-page personal bio for people who might work with a product leader, with an editorial paper language, leaning toward static HTML and a single serif.

Audience: hiring managers, founders, and engineers who want the career in one sitting. Not customers of a local business. Not a startup launch.

Vibe: distinctive, calm, editorial. A document you can read, not a campaign.

Constraints: facts only from the CV (October 2026). No phone number. No Snap product detail beyond the CV. Static files for GitHub Pages. No build step. No paid font. No photograph exists in the CV, so the hero is typographic. A stock portrait would be a lie.

## Dials

- DESIGN_VARIANCE: 7. High enough to avoid a centered SaaS hero, low enough to stay a document. Left-aligned essay, a time rail for the jobs, one accent rule on the current role. Not a poster, not a template.
- MOTION_INTENSITY: 3. The page is read, not operated. One short entrance on the name and the line under it. Press feedback on the nav and the email control. Nothing else moves.
- VISUAL_DENSITY: 4. Air between roles so the dates scan, prose kept to a narrow measure. Denser than a manifesto, looser than a resume paste.

Local-business trust dials are the wrong tool here. This is a person's career, not a shopfront.

## Visual system

- Theme: light only. Paper `#f4f0e6`, ink `#1c1915`, muted `#5e584e`. No mid-page theme flip.
- One accent: `#8d3d2f`, used for the email control, links, and the current role's dates. Contrast on paper is about 6.5:1.
- One radius: 0. Square corners, like a printed page.
- Type: Source Serif 4 (free, OFL, one family via Google Fonts, `display=swap`). Fallback: Iowan Old Style, Palatino, Georgia, serif. Not Inter, not Fraunces, not Instrument Serif.
- Motion: ease-out `cubic-bezier(0.23, 1, 0.32, 1)`, under 300ms, transform and opacity only. Press scale 0.97 for 160ms. Hover effects only under `(hover: hover) and (pointer: fine)`. `prefers-reduced-motion: reduce` drops movement. No scroll listener.

## Page shape

Hero, first screen: name, one line of what he does and where, email control. Narrative arc under that. Work as a stacked timeline (not equal cards). Study, languages, and awards in a different layout. Contact is the address, not a form. Closing line: built from his CV, October 2026.
