"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, inViewViewport } from "@/lib/motion";

const conditions = [
  { label: "Back & spine", href: "#treatments" },
  { label: "Neck & upper back", href: "#treatments" },
  { label: "Joint pain / OA", href: "#treatments" },
  { label: "Shoulder", href: "#treatments" },
  { label: "Sports & tendon", href: "#treatments" },
  { label: "Sciatica", href: "#treatments" },
] as const;

export function ConditionRail() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border bg-graphite py-10 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
              Where it hurts
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-ink sm:text-3xl">
              Find your starting point
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Every pathway still begins with assessment — these labels help you orient before you
            book.
          </p>
        </div>
        <div className="relative mt-6 sm:mt-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-graphite to-transparent sm:w-12" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-graphite to-transparent sm:w-12" />
          <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3">
            {conditions.map((c, i) => (
              <motion.li
                key={c.label}
                className="snap-start shrink-0"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={inViewViewport}
                transition={{
                  delay: reduce ? 0 : i * 0.04,
                  duration: 0.4,
                  ease: easeOutExpo,
                }}
              >
                <Link
                  href={c.href}
                  className="flex min-h-[48px] min-w-[min(200px,calc(100vw-3rem))] max-w-[calc(100vw-2.5rem)] items-center justify-center rounded-sm border border-border bg-surface-elevated px-4 text-sm font-semibold text-ink transition-[border-color,transform,box-shadow] active:scale-[0.98] sm:min-h-[52px] sm:min-w-[200px] sm:max-w-none sm:px-5 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {c.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
