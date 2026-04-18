"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, inViewViewport } from "@/lib/motion";
import { routes } from "@/lib/routes";

export function CtaFinale() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#042a26] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(20,184,166,0.18),transparent_55%)]" />
      <motion.div
        className="relative mx-auto max-w-[720px] px-4 text-center sm:px-6"
        initial={reduce ? undefined : { opacity: 0, y: 20 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={inViewViewport}
        transition={{ duration: 0.55, ease: easeOutExpo }}
      >
        <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
          Ready for a clearer next step?
        </h2>
        <p className="mt-4 text-muted">
          Book a consultation or speak to the clinic today.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <motion.div
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      "0 0 0 0 rgba(45,212,191,0)",
                      "0 0 28px 2px rgba(45,212,191,0.22)",
                      "0 0 0 0 rgba(45,212,191,0)",
                    ],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }
            }
            className="rounded-sm"
          >
            <Link
              href={routes.book}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-brand px-10 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              Book consultation
            </Link>
          </motion.div>
          <a
            href="tel:03337729655"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-sm border border-white/20 px-10 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            Call 0333 772 9655
          </a>
        </div>
      </motion.div>
    </section>
  );
}
