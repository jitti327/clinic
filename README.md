# MyMSK Clinic — Next.js (repo root)

Run the app from **this folder** (no `web/` subdirectory):

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Route | Purpose |
|-------|---------|
| `/` | Patient homepage (dark theme, trust-led) |
| `/book` | Guided booking |
| `/demo` | Illustrative practice / ops preview |

## Legacy

- **`legacy/static-demo-full.html`** — Previous single-file static demo (archived).

## Documentation

- **`docs/DESIGN_SPEC_2026.md`** — Full UX/IA, components, motion, accessibility, SEO, and delivery plan for the premium dark clinical site.
- **`docs/DESIGN_TOKENS.md`** — Token cheat sheet.
- **`docs/ROUTES.md`** — Route / audience matrix.
- **`lib/routes.ts`** — Route constants.

## Stack

Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, TypeScript.
