# Route map

| Path | Purpose | Audience |
|------|---------|----------|
| `/` | Patient marketing home: trust strip, hero, pathways summary, treatments, credentials, testimonials CTA, FAQ teaser | Patients & referrers |
| `/book` | Guided multi-step booking (treatment → date/slot → details → confirm) | Patients |
| `/demo` | **Non-clinical** operations preview: KPIs, exemplar anonymised widgets — for owners/partners evaluating tooling | Internal / sales |

## Conventions

- Patient routes use **MyMSK brand** tokens (teal primary, **dark-first** surfaces — see `docs/DESIGN_SPEC_2026.md`).
- `/demo` is labelled explicitly as illustrative; no real patient identifiers.
- External references: live site [mymskclinic.co.uk](https://mymskclinic.co.uk/), Google Maps/reviews as on the current site.

## Files

- Route constants: `lib/routes.ts`
- Design tokens: `app/globals.css` (`:root` + `@theme inline`)
