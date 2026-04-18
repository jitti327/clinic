# MyMSK Clinic — Studio creative specification (2026)

**Role:** Premium dark UI, healthcare conversion, bespoke product craft — not a template.  
**Reference content:** [mymskclinic.co.uk](https://mymskclinic.co.uk/)  
**Stack:** Next.js, TypeScript, Tailwind, Framer Motion, a11y-first, SEO-ready.

---

## 1. Brand and experience concept

**Positioning:** *Precision MSK medicine, delivered with human clarity* — somewhere between a **private London clinic’s restraint**, a **high-end health-tech product** (Oura-level calm, not startup neon), and **editorial medical journalism** (clear hierarchy, confident type).

**Experience promise:** Within three seconds the visitor feels: *this is serious, modern, and built for people in pain who are done with vague answers.* The site is **confident**, not loud; **warm**, not corporate; **clinical**, not sterile.

**North-star feeling:** “I’d trust them with an injection” — earned through **credential density**, **process transparency**, and **proof**, not stock photos.

---

## 2. Creative direction summary

- **Dark-first:** Deep charcoal/graphite base; text is **off-white and warm grey**, never harsh pure white everywhere.
- **One accent family:** Teal–cyan **only** for action, links, and “precision” moments — **no** purple, no rainbow CTAs.
- **Composition over components:** Sections **alternate DNA** — full-bleed editorial, asymmetric split, horizontal scroller, bento-style density, single hero stat — so rhythm never reads as “three cards, repeat.”
- **Depth through layering:** Subtle **inner borders** (1px, low-opacity), **noise texture** (2–3% opacity optional), **soft vignettes**, **large type bleeding** off-grid — not drop-shadow soup.
- **Motion as choreography:** One **hero sequence**, then **restraint**; scroll reveals are **short, staggered, once**; parallax **max 8–12px** on decorative layers only.

---

## 3. Visual design language

| Element | Direction |
|---------|-----------|
| **Surfaces** | `void` (#050607), `graphite` (#0c0e10), `elevated` (#12161a), `panel` (#161c22) — slight blue in black, not flat grey. |
| **Text** | Headlines: `#f4f2ee` (warm). Body: `#b8bcb8`. Muted: `#7a807b`. |
| **Accent** | Primary CTA fill: deep teal `#0d4f4a` → hover `#126b63`. Bright edge: `#2dd4bf` at **12%** for glow only. |
| **Borders** | Hairline `rgba(244,242,238,0.06)`; “premium” cards use **double hairline** or **inner highlight** top edge. |
| **Glass** | **Header only** or one **quote module**: `backdrop-blur(16px)`, `bg rgba(18,22,26,0.65)` — never on body copy blocks. |
| **Imagery** | Real clinic / Dr photography only; **duotone** teal into shadow OR **high contrast B&W** with teal edge light — no clipart. |
| **Iconography** | Thin stroke, 1.5px, rounded caps; **one** icon style site-wide. |
| **Shape language** | Mix: **sharp** editorial blocks + **one** radius system (e.g. 8px utilities, 0 on hero slab). Avoid “everything rounded-3xl.” |

---

## 4. Homepage structure — premium sections (non-repetitive rhythm)

| § | Section | Layout / drama |
|---|---------|----------------|
| **A** | **Pre-header strip** | Single line: phone · “Burnley” · hours — monospace or small caps, **full width**, hairline bottom. |
| **B** | **Hero — editorial slab** | **Asymmetric:** Left: mega headline (2 lines max), subcopy 45ch. Right: **full-height treatment** — cropped clinical detail (ultrasound hand, equipment edge) OR abstract **mesh gradient** (teal 8% opacity, slow drift). **No** centered hero. |
| **C** | **Trust constellation** | **Not a row of icons** — **bento grid**: large cell “GMC · GOsC”, medium “5.0 · 300+ reviews”, small “On-site ultrasound”, tiny “Guided injections”. Different alignments. |
| **D** | **Conditions — horizontal rail** | **Horizontally scrollable** chips/cards (snap) — Back · Neck · Joint OA · Shoulder · Sports · Sciatica — with **gradient fade** at edges. Desktop: peek next card. |
| **E** | **“How we work” — vertical timeline** | **Single vertical line**, alternating left/right copy blocks; step numbers **oversized** (outline only). |
| **F** | **Treatments — staggered stack** | **No 3-col grid.** Alternate **wide + narrow** bands: one treatment **full bleed** text left / image or glyph right; next **inset** card offset. |
| **G** | **Dr Akhtar — split screen** | Photo **50vw** (object-position eyes), copy **50vw** with **pull quote** (“Two lenses: medicine and osteopathy”). |
| **H** | **Proof — cinematic quote** | One **full-width** testimonial, huge quotation mark as **watermark**, reviewer meta small. Optional carousel **crossfade** (slow). |
| **I** | **Pricing — confidence band** | Dark panel with **mono-spaced figures** for “from £” + disclaimer in small caps. **CTA** breaks the band (contrasting pill). |
| **J** | **FAQ — split** | Left: “Questions” sticky H2. Right: accordion **with divider animation** (height + opacity). |
| **K** | **Map / visit** | Minimal map embed; **large type** address; parking note. |
| **L** | **Closing CTA** | **Full bleed** teal-dark with **single** sentence + two buttons (Book · Call) — **no** clutter. |

This rhythm: **slab → bento → rail → timeline → asymmetric → split → quote → pricing → FAQ → map → finale** = impossible to confuse with a template.

---

## 5. Inner pages structure

| Page | Premium pattern |
|------|-----------------|
| **Treatments hub** | **Masonry-style** or **category tabs** + featured treatment hero. |
| **Treatment detail** | **Sticky mini-TOC** left (desktop); **reading width** 58ch; **callout** boxes for risks/recovery. |
| **Conditions hub** | **Alphabet or body map** (subtle SVG outline, no cartoon). |
| **Condition detail** | **Problem → how we assess → what we might offer → FAQs** — one **highlight** stripe per page. |
| **Pricing** | **Tier cards** with **comparison** row; **footnote** strip. |
| **About** | Timeline + credentials **wall** (logos GMC/GOsC as text links). |
| **Book** | **Progressive disclosure**; **sidebar summary** on desktop (sticky). |
| **Contact** | **Split form / map**; **direct** human copy. |

---

## 6. Reusable component system (“21st.dev-level” language)

**Primitives:** `Text` (variants: display, headline, body, caption, overline), `Button` (solid, outline, ghost, link-arrow), `Divider`, `Container`, `Grid`, `Stack`, `Badge`, `Link`.

**Composed blocks (name these in Figma/code):**

- `EditorialHero` — asymmetric, optional parallax layer  
- `BentoTrust` — irregular grid of proof cells  
- `ConditionRail` — horizontal scroll + snap  
- `ProcessTimeline` — vertical spine  
- `TreatmentBand` — full-bleed / inset alternating  
- `SpecialistSplit` — 50/50 + quote  
- `TestimonialCinema` — single or crossfade  
- `PricingBand` — typographic, mono accents  
- `FaqSplit` — sticky title + accordion  
- `CtaFinale` — full bleed, minimal  
- `GlassHeader` — blur nav  
- `MotionSection` — wrapper for viewport reveals  

**Craft rules:** Hover = **border brightens + 1px translateY + inner shadow**; not scale 1.05 on everything.

---

## 7. Framer Motion — section-by-section

| Section | Motion spec |
|---------|-------------|
| **Pre-header** | `opacity 0→1`, `y: 4→0`, duration **0.4s**, delay **0** — single pass. |
| **Hero** | **Stagger children:** overline **0.1s**, H1 words or lines **0.05s stagger** (use `splitText` logic or line blocks), subcopy **0.2s**, CTAs **0.25s**. `ease: [0.22, 1, 0.36, 1]`. |
| **Hero right visual** | **Parallax:** `useScroll` + `useTransform` → image `y` **-8 to 8** over viewport; **disable** if reduced motion. |
| **Bento trust** | Cards: `whileInView` **opacity + y**; **stagger 0.08s**; **once: true**. |
| **Condition rail** | **Drag elastic** optional desktop; mobile native scroll; **edge fade** CSS mask. |
| **Timeline** | Line draws with `pathLength` **0→1** (if SVG) OR each step **slide from alternating side** (`x: ±24→0`). |
| **Treatment bands** | **Scroll-linked** slight **opacity** on band background (very subtle) OR **reveal mask** bottom-to-top **12%** height. |
| **Specialist split** | Photo **scale 1.02→1** on load; quote **blur 4px→0** + opacity. |
| **Testimonial** | **Crossfade** `AnimatePresence mode="wait"` **0.6s**; **pause 5s** auto-advance (pause on hover). |
| **Pricing** | Numbers **count-up** optional (respect reduced motion → static). |
| **FAQ** | `height: auto` animation via grid trick **0.28s**; chevron **rotate 180**. |
| **Sticky header** | `useScroll`: past 80px → `y: 0 → -100%` hide; scroll up → show — **spring damping 28**. |
| **CTA glow** | **Box-shadow** keyframe pulse **3s** infinite, **opacity 0.15→0.35** on teal glow — **only** primary CTA in finale section. |
| **Cards hover** | `whileHover`: `y: -2`, `transition: { type: "spring", stiffness: 400, damping: 28 }`. |
| **Mobile menu** | Panel `x: 100%→0`; backdrop `opacity`; **focus trap**. |
| **Page transition** | Optional `template.tsx` **fade** `0.15s` — keep subtle to not feel “app-like.” |

**Reduced motion:** All above → **opacity only** or **instant**; disable parallax, count-up, auto carousel.

---

## 8. Typography and color system

**Fonts (suggestion):**  
- **Display / headlines:** *Söhne*, *GT America*, or *Inter Tight* / *Plus Jakarta Sans* **semi-condensed** for character — **not** generic Inter-only if budget allows.  
- **Body:** *Inter* or *Source Sans 3* at **17px** mobile / **18px** desktop for luxury reading.  
- **Mono (pricing only):** *IBM Plex Mono* or *Geist Mono* at small sizes.

**Scale (example):**  
- Display: `clamp(2.75rem, 6vw, 4.5rem)` / line 1.05 / tracking **-0.03em**  
- H2: `clamp(1.75rem, 3vw, 2.75rem)`  
- Overline: `0.6875rem` / **+0.12em** tracking / uppercase  

**Color tokens (CSS):**  
- `--void`, `--graphite`, `--elevated`, `--panel`  
- `--text-primary`, `--text-secondary`, `--text-tertiary`  
- `--accent`, `--accent-muted`, `--accent-glow`  
- `--line`, `--line-strong`  

---

## 9. Layout rhythm and spacing strategy

- **8pt base**; **section padding:** mobile `64px`, desktop `96–128px`.  
- **Horizontal:** `clamp(1rem, 4vw, 3rem)` gutter.  
- **Max width:** text **58–65ch**; **full-bleed** sections alternate with **inset** (`max-w-[1400px]`).  
- **Vertical rhythm:** After a **dense** section, follow with **breathing** (single column, large type).  
- **Asymmetry:** Deliberate **offset** cards (e.g. `margin-left: 8vw` on one block).

---

## 10. Conversion strategy

1. **Hero:** Primary “Book consultation” + secondary “View treatments” + **tertiary** “Call” (text link with arrow).  
2. **Sticky mobile bar:** `Call | Book` after scroll past hero.  
3. **Pricing teaser** on home → **qualify** before long contact.  
4. **Treatment pages:** Mid-page **soft CTA** + end **hard CTA**.  
5. **Trust before ask:** GMC/GOsC + Google **above** first long form.  
6. **Microcopy:** Buttons say **Book consultation**, not Submit.

---

## 11. Mobile-first interaction strategy

- **Hero:** Stack; **right visual** becomes **horizontal band** under headline or **background** at 20% opacity.  
- **Bento** → **2-col** then **1-col**; maintain **size contrast** (one cell still dominant).  
- **Rail:** Native scroll + **snap-mandatory**; **larger** touch cards.  
- **Timeline:** Single column; numbers left.  
- **Header:** Hamburger; **full screen** menu with **large** links + phone.  
- **Reduce motion** on low-end: **prefers-reduced-motion** + `connection.saveData` optional simpler assets.

---

## 12. Accessibility considerations

- WCAG **2.2 AA** contrast on all text (audit dark greys carefully).  
- **Focus:** 2px teal outline, **offset 2px**.  
- **Motion:** `useReducedMotion` + CSS media query.  
- **Carousel:** pause, prev/next, **no auto** if user prefers reduced motion.  
- **Accordions:** `aria-expanded`, `aria-controls`, keyboard **Enter/Space**.  
- **Skip link** to main.  
- **Landmarks** and **unique** H1 per page.

---

## 13. Next.js component architecture suggestions

```
app/
  (marketing)/layout.tsx      # shell: GlassHeader, footer, page transition
  (marketing)/page.tsx        # homepage sections composed
  treatments/[slug]/page.tsx
  conditions/[slug]/page.tsx
  pricing/page.tsx
  faq/page.tsx
  about/page.tsx
  book/page.tsx
components/
  ui/                         # primitives
  blocks/                     # EditorialHero, BentoTrust, ...
  motion/                     # useScrollHeader, Reveal, StaggerChildren
lib/
  motion.ts                   # transition presets, reduced-motion helper
  seo.ts                      # metadata builders
```

- **Server Components** by default; **client** only for motion, carousel, accordion, mobile nav, booking.  
- **`generateMetadata`** for every slug.  
- **JSON-LD** in layout or page for `MedicalClinic`, `FAQPage`.

---

## 14. What to avoid (generic / AI slop)

- Centered hero + three equal cards + three equal cards again.  
- **Purple / indigo** gradients, **neon** blobs, **Inter-only** with no hierarchy.  
- Rounded-2xl **every** surface.  
- **5-star icon** rows with no real link to Google.  
- Stock **laughing doctor**; **3D cartoon** joints.  
- **“We care”** filler with no proof.  
- **Infinite** scroll animations; **parallax** on text.  
- **Same** card component **six** times in a row.

---

## 15. Final polished prompt (for UI generation or pair-programming)

Use this verbatim or adapt:

---

**Prompt:**

Design and implement a **dark-first, premium 2026 website** for a UK **musculoskeletal clinic** (MyMSK / Burnley). **Visual quality:** on par with **21st.dev** component craft and **Framer** marketing sites — **bespoke**, **editorial**, **product-grade**; **not** a generic healthcare template or AI layout.

**Aesthetic:** Deep **charcoal / graphite** backgrounds (`#050607`–`#161c22`), **warm off-white** typography (`#f4f2ee`, `#b8bcb8`), **single** restrained **teal–cyan** accent (`#0d4f4a`, highlights `#2dd4bf` at low opacity only). **No purple**, **no neon**, **no cartoon medical art**. Optional **minimal glass** on **header only**. Depth via **hairline borders**, **layered surfaces**, **subtle noise**, **large display type** — not heavy drop shadows everywhere.

**Homepage composition (non-repetitive):** (1) Thin utility strip; (2) **Asymmetric editorial hero** — left: 2-line **display headline** + tight subcopy + **two bold CTAs** (Book consultation, View treatments) + phone link; right: **clinical photography** or abstract **teal mist** with **very subtle parallax**; (3) **Bento trust grid** (GMC, GOsC, Google rating, ultrasound, guided injections) with **irregular cell sizes**; (4) **Horizontal snap scroll** “conditions” rail; (5) **Vertical timeline** “how we work”; (6) **Alternating full-bleed / inset treatment bands** (not a 3-column grid); (7) **50/50 specialist split** with **pull quote**; (8) **Single cinematic testimonial** with crossfade; (9) **Typographic pricing band** with mono “from £” figures; (10) **Split FAQ** sticky heading + accordion; (11) **Minimal map**; (12) **Full-bleed finale CTA** with **soft pulsing glow** on primary button only.

**Motion (Framer Motion):** Hero **staggered text reveal** (0.05s stagger, custom ease); sections **`whileInView` once** with short stagger; **card hover** spring `y: -2`; **header hide/show** on scroll direction; **FAQ** height animation; **testimonial** slow crossfade; **respect `prefers-reduced-motion`** (opacity-only, no parallax). **Typography:** Display font **tight tracking**, body **17–18px**, **strong hierarchy**. **Accessibility:** AA contrast, focus rings, keyboard accordion, skip link.

**Tech:** Next.js App Router, TypeScript, Tailwind, reusable **blocks** in `components/blocks/`, server-first with client islands for motion. **Deliver** polished, **distinctive** layouts that feel like a **major upgrade** over a typical clinic brochure site.

---

*End of specification.*
