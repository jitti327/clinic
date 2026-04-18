# MyMSK Clinic — site experiments

- **`index.html`** — Static single-file demo (legacy / deploy snapshot).
- **`web/`** — **Next.js 16 (App Router)** patient site + booking + separated practice demo.

## Next.js app

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Route   | Purpose                                      |
|---------|-----------------------------------------------|
| `/`     | Patient-first home (trust, treatments, Dr Akhtar, reviews) |
| `/book` | Guided booking (Framer Motion step transitions) |
| `/demo` | Illustrative operations preview (stakeholders only) |

Design tokens and route notes: `web/docs/DESIGN_TOKENS.md`, `web/docs/ROUTES.md`, `web/lib/routes.ts`.
