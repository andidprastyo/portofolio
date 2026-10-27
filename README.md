# Portfolio

A personal portfolio site built with **React + Vite**, styled after Palantir's
open-source [Blueprint](https://blueprintjs.com/) design system in its **light
theme** — a soft white canvas (`#f8f9fb`) with pure white cards, 1px hairline
borders, 2px corner radii, tabular monospace numerals, and the Blueprint blue
(`#2d72d2`) as the single accent.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build        # production bundle into dist/
npm run preview      # serve the built bundle locally
npm run lint         # ESLint (flat config + React hooks rules)
npm run lint:fix     # ESLint with --fix
npm run format       # Prettier --write
npm run format:check # verify formatting without writing
npm run check        # lint + format:check + build
```

## Making it yours

**Everything you need to edit lives in one file: [`src/data/portfolio.js`](src/data/portfolio.js).**

Every value in it is a placeholder. Replace the strings and reload — no
component changes required. Sections render conditionally, so deleting an array
(e.g. emptying `skills`) removes that section's content cleanly.

| Export       | Controls                                                              |
| ------------ | --------------------------------------------------------------------- |
| `profile`    | Name, role, tagline, bio, location, availability, avatar, résumé link |
| `stats`      | The four-up metrics strip under the hero                              |
| `socials`    | Contact links in the hero and Contact section                         |
| `focusAreas` | Decorative ticker labels under the hero                               |
| `experience` | The role explorer entries                                             |
| `projects`   | The project cards                                                     |
| `skills`     | The grouped skill columns                                             |
| `navItems`   | Navbar and footer links (`id` must match section ids)                 |

### Optional extras

- **Photo** — drop an image in `public/`, then set `profile.avatar = '/me.jpg'`.
- **Résumé** — drop a PDF in `public/`, then set `profile.resumeUrl = '/cv.pdf'`.
  The hero swaps its secondary button to a download link automatically.
- **Project badges** — set `status` to `shipped`, `active`, `wip`, or `archived`.
  Set `featured: true` to make a card span the full grid width.
- **Project images** — drop a screenshot into `public/projects/`, then set
  `image: '/projects/name.jpg'` and an optional `imageAlt` description.

## Design system

The theme is token-driven. [`src/styles/tokens.css`](src/styles/tokens.css) holds
the raw Blueprint palette (copied verbatim from
`palantir/blueprint`'s `_colors.scss`, Apache-2.0) plus a semantic layer —
surfaces, text, borders, intents, spacing, radii, and motion.

Because everything downstream references semantic tokens, **restyling the whole
site means editing that one file.** Want a different canvas? Remap the surface
and text tokens:

```css
--surface-app: #f8f9fb;    /* soft white canvas */
--surface-raised: var(--bp-white);
--surface-overlay: var(--bp-white);
--surface-sunken: #f1f3f6;
--text-primary: var(--bp-black);
--text-secondary: var(--bp-dark-gray4);
--text-muted: var(--bp-gray1);
--border: rgba(17, 20, 24, 0.16);
--border-subtle: rgba(17, 20, 24, 0.09);
--accent: var(--bp-blue3);
--accent-text: var(--bp-blue2);
--accent-surface: rgba(45, 114, 210, 0.09);
--accent-border: rgba(45, 114, 210, 0.35);
--success-text: var(--bp-green2);
--warning-text: var(--bp-orange2);
```

### Structure

```
src/
  components/     Navbar, Backdrop, Hero, Marquee, About, Projects, Experience,
                  Contact, Footer, Section (shared header), Icon (inline SVG set)
  data/
    portfolio.js  ← all site content
  hooks/
    usePortfolio.js  useReveal, useScrollSpy, useScrolled
  lib/
    links.js         isExternalUrl / externalLinkProps helpers
  styles/
    tokens.css       Blueprint palette + semantic variables
    base.css         reset, document defaults, shared primitives
    components.css   per-section styles
```

## Accessibility & behaviour notes

- Sections use semantic landmarks; the navbar marks the active section with
  `aria-current`, and the mobile drawer is `aria-expanded`/`aria-controls` wired.
- Scroll-reveal animations and smooth scrolling are disabled under
  `prefers-reduced-motion: reduce`.
- Focus states use a Blueprint-style dual-ring outline that stays visible
  against the soft white surface.
- No runtime dependencies beyond React — icons are inline SVG, and there is no
  CSS framework.

## Code quality

ESLint (flat config, with the React hooks and Fast Refresh rules) and Prettier
are configured and passing:

```bash
npm run check   # lint + format:check + build
```

Prettier uses no semicolons, single quotes, and a 90-column print width to match
the existing style. `dist/`, `node_modules/`, and the local npm cache are
ignored.

## Deployment

`npm run build` emits a fully static `dist/` directory — deploy it to Netlify,
Vercel, GitHub Pages, Cloudflare Pages, or any static host. It is a single-page
app with in-page anchors only, so no SPA rewrite rules are required.

## License

Site code is yours to use. The Blueprint color values are from Palantir's
Blueprint project, licensed under Apache-2.0.
