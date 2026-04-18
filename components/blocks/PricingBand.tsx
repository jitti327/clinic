"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  pricingDisclaimerShort,
  pricingHomeHighlights,
  pricingOfficialUrl,
} from "@/lib/pricing";
import { easeOutExpo, inViewViewport } from "@/lib/motion";
import { routes } from "@/lib/routes";

export function PricingBand() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.45, ease: easeOutExpo }}
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Pricing
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Clear guide fees — confirmed after your assessment.
            </h2>
            <p className="mt-4 text-sm text-muted">{pricingDisclaimerShort}</p>
            <p className="mt-3 text-xs text-subtle">
              Source:{" "}
              <a
                href={pricingOfficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline decoration-border underline-offset-4 hover:text-ink"
              >
                mymskclinic.co.uk/pricing
              </a>
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-px bg-border sm:grid-cols-3">
              {pricingHomeHighlights.map((row) => (
                <div
                  key={row.label}
                  className="bg-surface-elevated p-6 transition-colors hover:bg-graphite/30"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-subtle">
                    {row.label}
                  </p>
                  <p className="mt-3 font-mono text-2xl font-semibold tabular-nums text-ink">
                    {row.price}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{row.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-subtle">
              VAT and payment options: confirm with reception when you book. Cancellation: at least
              24 hours&apos; notice or the full fee may apply.
            </p>
            <Link
              href={routes.pricing}
              className="mt-6 inline-flex min-h-11 items-center rounded-sm border border-accent px-6 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-brand-foreground"
            >
              Full Burnley price list
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
