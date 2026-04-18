"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import { easeOutExpo } from "@/lib/motion";

const faqs = [
  {
    q: "Do I need a referral?",
    a: "Many patients self-refer for private MSK care. Bring any scans or letters if you have them — they can help, but are not always required to start.",
  },
  {
    q: "Why ultrasound-guided injections?",
    a: "Ultrasound helps visualise the target in real time. Research supports improved accuracy versus blind placement — supporting comfort and the likelihood of a successful outcome.",
  },
  {
    q: "How do fees and cancellation work?",
    a: "Guide fees are listed for Burnley; the clinician confirms the exact fee after assessment. Give at least 24 hours’ notice to cancel or you may be charged the full fee. Missed appointments with no notice may not be rearranged.",
  },
  {
    q: "What about Manchester or further afield?",
    a: "Burnley is the focus of this site; MyMSK also lists a Manchester location on the main website. Many patients travel from Greater Manchester for specialist-led MSK and injection care.",
  },
] as const;

export function FaqSplit() {
  const reduce = useReducedMotion();
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-canvas py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 lg:grid-cols-12 lg:gap-16 sm:px-6">
        <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
            FAQ
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Straight answers before you book.
          </h2>
          <p className="mt-4 text-sm text-muted">
            For clinical detail on treatments, see the main MyMSK site or discuss at consultation.
          </p>
        </div>
        <div className="border-t border-border lg:col-span-8 lg:border-t-0 lg:border-l lg:pl-16 lg:pt-0">
          <ul className="divide-y divide-border">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const btnId = `${baseId}-btn-${i}`;
              return (
                <li key={item.q} className="py-2">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {item.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={
                        reduce ? { duration: 0 } : { duration: 0.25, ease: easeOutExpo }
                      }
                      className="text-subtle"
                      aria-hidden
                    >
                    ▼
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: easeOutExpo }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 pr-8 text-sm leading-relaxed text-muted">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
