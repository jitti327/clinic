"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { easeOutExpo } from "@/lib/motion";

const quotes = [
  {
    text: "The clinic is a beautifully clean and calm space… more informative than any scans or medical staff over the years.",
    meta: "Google review",
  },
  {
    text: "Everything was explained to me, I was reassured… I am 95% pain free a week after the epidural.",
    meta: "Google · sciatica care",
  },
  {
    text: "Hyaluronic injection and cyst drainage, guided by ultrasound — completely painless. I can’t praise him enough.",
    meta: "Google · knee OA",
  },
] as const;

export function TestimonialCinema() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setI((v) => (v + 1) % quotes.length), []);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next, paused, reduce]);

  return (
    <section className="relative overflow-hidden border-b border-border bg-graphite py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display select-none text-[clamp(8rem,20vw,16rem)] font-bold leading-none text-ink/[0.04]">
          “
        </span>
      </div>
      <div className="relative mx-auto max-w-[900px] px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
          Patient proof
        </p>
        <div
          className="mt-10 min-h-[200px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: easeOutExpo }}
            >
              <blockquote className="font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                “{quotes[i].text}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-subtle">
                {quotes[i].meta}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-accent" : "w-2 bg-border-strong hover:bg-subtle"
              }`}
            />
          ))}
        </div>
        <a
          href="https://maps.google.com/?cid=9988807352140178415"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-sm font-semibold text-accent hover:underline"
        >
          Read all reviews on Google →
        </a>
      </div>
    </section>
  );
}
