# Design tokens (dark-first)

Source: `app/globals.css` (`:root` + `@theme inline`).

## Surfaces

| Token | Role |
|-------|------|
| `--canvas` | Page background (near-black, green-neutral) |
| `--surface` | Primary panels |
| `--surface-elevated` | Cards, footer, raised chips |
| Header | Glass: `color-mix(surface-elevated, transparent) + backdrop-blur` |

## Brand & text

| Token | Role |
|-------|------|
| `--brand-500` … `--brand-700` | Teal scale; primary CTA uses `--brand-600` |
| `--brand-foreground` | Text on solid CTA (dark teal) |
| `--ink` | Headings |
| `--ink-muted` | Body |
| `--ink-subtle` | Meta, labels |
| `--accent-500` | Links, secondary highlights (cyan-teal, not purple) |

## Accessibility

- Body text on `--canvas`: use `--ink-muted` minimum; verify **≥ 4.5:1** for `text-sm`.
- Large headings (`text-3xl+`): `--ink` on `--canvas` targets **≥ 3:1** for UI components; prefer **AAA** where possible.
- Focus: `--focus-ring` = `--brand-400`.
- `color-scheme: dark` set on `html`.

## Motion

- Durations: `--duration-fast`, `--duration-normal`; zeroed when `prefers-reduced-motion: reduce`.
