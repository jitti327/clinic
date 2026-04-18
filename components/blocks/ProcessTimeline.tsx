"use client";

import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo, inViewViewport } from "@/lib/motion";

const steps = [
  {
    n: "01",
    title: "Consultation & history",
    body: "We map symptoms, triggers, and what matters to you day to day.",
  },
  {
    n: "02",
    title: "Hands-on assessment",
    body: "Movement, strength, and tissue response — always with respect for comfort.",
  },
  {
    n: "03",
    title: "Ultrasound when it changes care",
    body: "On-site imaging to clarify structures and plan injections if appropriate.",
  },
  {
    n: "04",
    title: "Shared plan & follow-up",
    body: "Options, risks, and benefits in plain English — plus GP letters when needed.",
  },
] as const;

export function ProcessTimeline() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      className="border-b border-border bg-canvas py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
          Process
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
          How we work — calm, structured, thorough.
        </h2>
        <div className="relative mx-auto mt-12 w-full max-w-5xl sm:mt-14">
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-border-strong md:left-1/2 md:-translate-x-1/2" aria-hidden />
          <ul className="relative space-y-12 md:space-y-16">
            {steps.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.li
                  key={step.n}
                  initial={reduce ? undefined : { opacity: 0, x: isRight ? 24 : -24 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={inViewViewport}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                  className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12"
                >
                  <div
                    className={`flex gap-6 md:items-start ${
                      isRight
                        ? "md:col-start-2 md:flex-row-reverse md:text-right"
                        : "md:col-start-1"
                    }`}
                  >
                    <span className="font-display relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-void text-xs font-bold text-accent">
                      {i + 1}
                    </span>
                    <div
                      className={`min-w-0 md:pt-0 ${
                        isRight ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <p className="font-mono text-[10px] text-subtle">{step.n}</p>
                      <h3 className="font-display mt-1 text-xl font-semibold text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{step.body}</p>
                    </div>
                  </div>
                  <div
                    className={`hidden min-h-[1px] md:block ${
                      isRight ? "md:col-start-1 md:row-start-1" : "md:col-start-2"
                    }`}
                    aria-hidden
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
