# MyMSK Clinic — 2026 dark premium design specification

**Reference:** [mymskclinic.co.uk](https://mymskclinic.co.uk/)  
**Implementation:** Next.js App Router in this repo (`app/`, `components/`).  
**Audience:** Design team, Next.js developers, client stakeholders.

---

## 1. Full UX strategy

### North star
Build **immediate trust** for private MSK patients (often anxious, in pain, comparing clinics), then **clarify services**, then **remove friction** to book or call.

### Principles
1. **Dark-first, calm** — reduces visual noise; teal accent signals clinical precision without “hospital sterile.”
2. **Patient language first** — outcomes and reassurance; clinical detail secondary but verifiable (GMC/GOsC, ultrasound).
3. **No audience collision** — patient marketing on `/`; optional ops/sales preview on `/demo` only.
4. **Conversion paths** — Primary: Book consultation. Secondary: Call, pricing clarity, condition-led discovery.
5. **Proof over polish** — Real Google reviews, verifiable credentials, transparent limitations (after assessment, no guarantees).

### Anti-patterns (avoid)
- Purple/blue gradient SaaS templates, cartoon illustrations, stock “smiling doctor” tropes.
- Fake patient data or dramatised metrics on public pages.
- Walls of dense clinical text above the fold.

---

## 2. Information architecture

### Primary navigation (suggested final)
| Label | Path | Notes |
|-------|------|--------|
| Home | `/` | |
| Conditions | `/conditions` | Hub + detail routes e.g. `/conditions/back-pain` |
| Treatments | `/treatments` | Hub; children: `/treatments/prp`, `cortisone`, `hyaluronic-acid`, `prolotherapy`, `spinal-injections`, `ultrasound` |
| Pricing | `/pricing` | Clear packages / guide fees + disclaimers |
| About / Dr Akhtar | `/about` | Credentials, training, philosophy |
| Patient stories | `/reviews` or embed on home | Deep link to Google |
| FAQs | `/faq` | Structured data friendly |
| Contact & book | `/book`, `/contact` | Phone, email, map, form |

### Footer
Sitemap links, regulatory line (CQC if applicable), privacy, complaints, NHS/private disclaimer as required.

### `/demo` (optional)
Stakeholder-only operations preview — **not** linked prominently in patient header; footer or direct URL.

---

## 3. Homepage — section-by-section

| # | Section | Purpose | Content direction |
|---|---------|---------|-------------------|
| 1 | **Utility bar (optional)** | Phone, “Book”, hours | Sticky or in header |
| 2 | **Hero** | Value prop + primary CTA | Headline: pain → clarity → treatment. Sub: ultrasound + guided injections + dual registration. CTAs: Book consultation, View treatments, Call. Soft teal radial glow (implemented). |
| 3 | **Trust strip** | Instant credibility | GMC, GOsC, 5★ + count, “Ultrasound on-site” — icon row, not paragraphs |
| 4 | **Conditions snapshot** | SEO + self-triage | 6–8 tiles: back, neck, joint OA, shoulder, sports injury, sciatica — link to `/conditions/...` |
| 5 | **How it works** | Reduce anxiety | 3–4 steps: Consult → Examine → Ultrasound if needed → Plan |
| 6 | **Treatments grid** | Discovery | HA, cortisone, PRP, prolotherapy, spinal injections, guided injections — each card: who it’s for, “discussed after assessment”, link |
| 7 | **Dr Akhtar** | Human + expert | Photo, credentials, universities, “verify on GMC/GOsC” links |
| 8 | **Outcomes / proof** | Social proof | Google embed + 2 featured quotes with date |
| 9 | **Pricing teaser** | Qualify leads | “From £X” or “Guide prices” + link to full pricing |
| 10 | **FAQ preview** | Objection handling | 3 questions + link to `/faq` |
| 11 | **Location & contact** | Map, parking, accessibility | Burnley + catchment copy |
| 12 | **Final CTA band** | Conversion | Book + call + email |

---

## 4. Key inner pages

### `/treatments` (hub)
Lead paragraph; filter or anchor list; each treatment links to detail.

### Treatment detail template
- Who it helps / when considered  
- What happens (plain English)  
- Ultrasound guidance note where relevant  
- Risks & recovery (balanced, non-alarmist)  
- **Disclaimer:** individual assessment  
- CTA: Book, speak to clinic  

### `/conditions/*`
Symptom-led SEO; internal links to relevant treatments; same trust footer.

### `/pricing`
Table or cards: consultation, ultrasound, injection categories — **ranges** or “from” with “final cost after assessment.” VAT, payment, cancellation policy.

### `/faq`
Accordion (accessible); FAQ schema JSON-LD.

### `/about`
Story, values, team, governance, equipment.

### `/book`
Multi-step flow (implemented): treatment type → date/slot → details → confirm. Fallback: call CTA always visible.

### `/contact`
Form + map + hours.

### Legal
`/privacy`, `/terms` as required.

---

## 5. Component system

| Component | Variants | Notes |
|-----------|----------|--------|
| `Button` | primary, secondary, ghost, link | Primary = teal solid; min height 44px |
| `Card` | default, interactive (lift) | `surface-elevated`, border, soft shadow |
| `Chip` / badge | trust, neutral | Outline on dark |
| `Section` | `container` + vertical rhythm | `max-w-[72rem]`, `py-16`–`24` |
| `Accordion` | FAQ | `aria-expanded`, keyboard |
| `Stepper` | Booking | Mobile: vertical optional |
| `Quote` | testimonial | Attribution, date if available |
| `Stat` | KPI (demo only) | Don’t mimic clinical data on patient pages |
| `Nav` | desktop + mobile drawer | Focus trap in drawer |
| `Footer` | multi-column | |

**Naming:** PascalCase React; co-locate `*.tsx` + optional `*.styles` if CSS modules added later.

---

## 6. Motion system

### Global
- **Duration:** 150–280ms; **easing:** ease-out / cubic-bezier calm.
- **Respect:** `prefers-reduced-motion: reduce` → disable transforms, shorten to 0.

### Use motion for
- Page section **fade + 8–12px translateY** on first enter (`whileInView`, once).
- Booking **step cross-fade** (opacity + small x).
- **Hover:** card `-translate-y-0.5`, shadow lift; button scale 0.98 on active.

### Avoid
- Parallax, bouncing icons, auto-playing video, large stagger on every element.

### Library
Framer Motion (`motion`, `AnimatePresence`, `useReducedMotion`).

---

## 7. Colour system

**Intent:** Premium dark, teal clinical brand, **no purple gradients.**

| Role | CSS variable | Usage |
|------|--------------|--------|
| Canvas | `--canvas` | Base #080a0a |
| Surface | `--surface`, `--surface-elevated` | Layering |
| Text | `--ink`, `--ink-muted`, `--ink-subtle` | Hierarchy |
| Brand | `--brand-500`–`--brand-700` | CTAs, key marks |
| Accent | `--accent-500` | Links (teal-cyan) |
| Warning | `--warning` | Disclaimers, demo banner |
| Border | `--border` | 9–14% white mix |

**Glass:** header only — `backdrop-blur-xl` + semi-transparent surface; **no** heavy glass on body text areas.

---

## 8. Typography system

- **Family:** Inter (variable font OK later) — legible, neutral, medical-credible.
- **Scale:**  
  - Hero: `clamp` ~ 1.875rem–3rem, weight 700, tight tracking.  
  - H2: 1.5–1.875rem.  
  - Body: **16px minimum** on mobile.  
  - Small/meta: 0.75–0.875rem; maintain contrast.
- **Line length:** max ~65ch for long copy.
- **Pairing:** Single family; optional **serif for quotes only** (future) — not required v1.

---

## 9. Layout system

- **Grid:** 8px base; spacing tokens in `globals.css`.
- **Container:** `--max-content` 72rem; horizontal padding `16–24px`.
- **Breakpoints:** Tailwind defaults; **design mobile-first**.
- **Bespoke feel:** Asymmetric hero optional (text left, subtle gradient right); avoid generic three-column “feature” clones — vary card sizes and section backgrounds (`surface` vs tinted mix).

---

## 10. Conversion strategy

1. **Above-fold CTA:** Book consultation (primary).  
2. **Secondary:** Call (tap-to-tel on mobile).  
3. **Tertiary:** View treatments, Check pricing (equal prominence in nav or hero row).  
4. **Speak to clinic:** visible in header + footer + booking sidebar.  
5. **Trust interrupters:** GMC/GOsC + Google rating before long scroll.  
6. **Pricing page:** reduces unqualified leads *and* increases qualified bookings — be explicit about “guide only.”  
7. **Retargeting / analytics:** consent-first (UK GDPR); document in technical brief.

---

## 11. Accessibility checklist

- [ ] WCAG **2.2 AA** contrast on text and UI components (audit with tooling).  
- [ ] Keyboard: all interactive elements focusable; visible focus ring.  
- [ ] Screen readers: landmarks (`header`, `main`, `nav`, `footer`), `aria-label` on icon buttons.  
- [ ] Forms: labels tied to inputs; errors announced (`aria-live`).  
- [ ] Motion: `prefers-reduced-motion` honoured.  
- [ ] Touch targets ≥ **44×44px**.  
- [ ] No information by colour alone (links underlined or distinct weight).  
- [ ] Skip link to main content (add if not present).  

---

## 12. Mobile-first behaviour

- Single-column hero; trust chips wrap.  
- Nav → hamburger with focus trap.  
- Booking: full-width steps; sticky bottom bar optional: **Call | Book**.  
- Tap targets and spacing increased on small screens.  
- **Performance:** `next/image`, lazy below-fold, subset fonts, limit client JS.

---

## 13. SEO content block recommendations

- **Title/description** per route; template for conditions/treatments.  
- **H1** one per page; logical H2–H3.  
- **Local SEO:** Burnley, Lancashire, Manchester catchment where true.  
- **Schema:** `MedicalClinic` or `Physician`, `FAQPage`, `LocalBusiness` where valid.  
- **Internal linking:** conditions ↔ treatments ↔ FAQs.  
- **Avoid** duplicate thin pages; each condition page substantive (300+ words useful copy).

---

## 14. Technical implementation notes (Next.js)

- **App Router:** `app/(marketing)/...` layout group for shared chrome vs `app/(booking)` if needed.  
- **Metadata API:** `generateMetadata` for dynamic condition/treatment pages.  
- **Fonts:** `next/font/google` (Inter).  
- **Images:** `next/image`; priority only for LCP hero.  
- **Framer Motion:** `'use client'` islands; keep server components default.  
- **Env:** `NEXT_PUBLIC_SITE_URL` for canonicals.  
- **Forms:** Server Actions or API route + validation (Zod); spam protection (honeypot/Turnstile).  
- **i18n:** en-GB only unless client expands.

---

## 15. Framer Motion interaction ideas

- Hero: **stagger** trust chips 50–80ms on mount (respect reduce).  
- Cards: `whileHover` slight y + shadow (desktop only if `window.matchMedia`).  
- FAQ accordion: height animation **or** instant show/hide (prefer simple for a11y).  
- Booking: `AnimatePresence` `mode="wait"` between steps.  
- Page transition (optional): subtle fade via template — keep **< 300ms**.

---

## 16. Suggested reusable UI components

- `Container`, `SectionTitle`, `TrustStrip`, `TreatmentCard`, `ConditionCard`, `PriceRow`, `FaqAccordion`, `GoogleReviewsEmbed`, `CtaBand`, `SiteHeader`, `SiteFooter`, `BookingFlow`, `MotionFadeIn`.

---

## 17. Client requirement checklist

- [ ] Approve dark theme vs light (or offer toggle later).  
- [ ] Approve teal as primary (vs legacy site green — align hex).  
- [ ] Provide professional photography (clinic, Dr Akhtar).  
- [ ] Confirm **accurate** pricing and legal disclaimers.  
- [ ] Confirm CQC / regulatory statements.  
- [ ] Google Business Profile link + review widget approval.  
- [ ] Domain, hosting, email for forms.  
- [ ] Cookie / privacy policy sign-off.

---

## 18. Functional feature checklist

- [ ] Responsive layout all breakpoints.  
- [ ] Booking flow + email/CRM integration.  
- [ ] Click-to-call, maps.  
- [ ] Pricing page live.  
- [ ] FAQ searchable (optional).  
- [ ] Conditions & treatment pages CMS or MDX (optional).  
- [ ] 404 / error pages on-brand.  
- [ ] Analytics with consent banner.  
- [ ] Redirects from old URLs if migrating.

---

## 19. Content recommendations (by page)

| Page | Must include |
|------|----------------|
| Home | Outcome-led headline, trust strip, services snapshot, Dr intro, reviews, CTA. |
| Treatments | Indications, process, ultrasound note, disclaimers, CTA. |
| Conditions | Patient-centred symptoms, when to seek care, internal links. |
| Pricing | Ranges, what’s included, deposit/cancellation. |
| About | Credentials, training, values, onward referral. |
| FAQ | Referral, safety, recovery, parking, payment. |
| Book | Short intro, reassurance, privacy note on data. |
| Contact | Hours, accessibility, parking. |

Tone: **expert, reassuring, precise, human** — avoid superlatives without proof.

---

## 20. Execution plan (wireframe → launch)

| Phase | Deliverables |
|-------|----------------|
| **1. Discovery** | Content audit of live site; analytics; competitor set; approve IA. |
| **2. Wireframes** | Mobile-first grayscale: home + 3 inner templates. |
| **3. UI design** | Figma: tokens, components, dark theme screens; client sign-off. |
| **4. Build skeleton** | Next.js layouts, tokens, header/footer, routing. |
| **5. Page build** | Home, treatments hub, 2 pilots, pricing, FAQ, about, book. |
| **6. Content** | Final copy, images, legal review. |
| **7. QA** | Accessibility, performance (LCP, CLS), cross-browser, devices. |
| **8. Launch** | DNS, redirects, monitoring, Search Console. |
| **9. Post-launch** | A/B test CTAs optional; review heatmaps after 4–8 weeks. |

---

## Current repo status

- **Implemented:** Dark tokens in `app/globals.css`, glass header, hero glow, elevated cards, `/`, `/book`, `/demo`.  
- **Next build steps:** Add routes from §2, `SkipLink`, FAQ accordion page, pricing, conditions hub, Google embed, metadata per §13.

---

*Document version: 2026-04-18 · Aligned with codebase at repo root.*
