"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { routes } from "@/lib/routes";

export function DemoDashboard() {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-8">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.35 }}
        className="rounded-xl border border-warning/25 bg-warning/10 px-4 py-3 text-sm text-[color-mix(in_srgb,var(--warning)_92%,var(--ink))]"
      >
        <strong>Illustrative only.</strong> Figures and names below are generic
        placeholders for stakeholder review — not live clinical or financial
        data.
      </motion.div>

      <div className="rounded-xl border border-border bg-surface-elevated p-6 shadow-card sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-subtle">
          Today at a glance
        </p>
        <p className="mt-2 text-4xl font-bold tracking-tight text-ink">18</p>
        <p className="text-sm font-medium text-muted">Appointments scheduled</p>
        <p className="mt-2 text-sm text-subtle">
          Example only · Fri 18 Apr 2026 · Burnley site
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Missed (week)", value: "4", sub: "vs prior week" },
          { label: "Follow-ups due", value: "7", sub: "3 flagged priority" },
          { label: "On-time starts", value: "94%", sub: "14-day rolling" },
        ].map((k, i) => (
          <motion.div
            key={k.label}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: reduce ? 0 : i * 0.05, duration: reduce ? 0 : 0.25 }}
            className="rounded-xl border border-border bg-surface-elevated p-5 shadow-sm"
          >
            <p className="text-2xl font-bold text-ink">{k.value}</p>
            <p className="text-sm font-medium text-muted">{k.label}</p>
            <p className="mt-1 text-xs text-subtle">{k.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl border border-border bg-canvas p-6">
        <p className="text-sm font-semibold text-ink">Next slot (example)</p>
        <p className="mt-1 text-sm text-muted">
          Ultrasound-guided injection · 09:40 · Room 1 · Patient initials A.B.
        </p>
        <Link
          href={routes.book}
          className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
        >
          Patient booking lives on /book →
        </Link>
      </div>
    </div>
  );
}
