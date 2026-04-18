/**
 * Application route map — patient marketing vs. internal-style demo.
 * @see docs/ROUTES.md
 */
export const routes = {
  home: "/",
  book: "/book",
  demo: "/demo",
  pricing: "/pricing",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];

export const routeMeta: Record<
  AppRoute,
  { title: string; description: string; audience: "patient" | "demo" }
> = {
  "/": {
    title: "MyMSK Clinic — MSK & injection care in Burnley",
    description:
      "Musculoskeletal clinic: ultrasound, ultrasound-guided injections, dual GMC & GOsC-registered specialist.",
    audience: "patient",
  },
  "/book": {
    title: "Book an appointment",
    description:
      "Request an appointment at MyMSK Clinic, Burnley. Guided booking flow.",
    audience: "patient",
  },
  "/demo": {
    title: "Operations preview (demo)",
    description:
      "Illustrative dashboard and practice metrics for stakeholder review — not live clinical data.",
    audience: "demo",
  },
  "/pricing": {
    title: "Pricing guide",
    description:
      "Burnley guide fees for consultation, follow-up, injections, and advanced MSK procedures — aligned with mymskclinic.co.uk.",
    audience: "patient",
  },
};
