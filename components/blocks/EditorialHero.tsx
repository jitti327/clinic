"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { routes } from "@/lib/routes";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { siteImages } from "@/lib/site-media";

export function EditorialHero() {
  const reduce = useReducedMotion();
  const containerVariants = reduce
    ? { hidden: {}, show: { transition: { staggerChildren: 0, delayChildren: 0 } } }
    : staggerContainer;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-b border-border bg-void"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_70%_20%,rgba(20,184,166,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(15,118,110,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-4 py-16 lg:grid-cols-2 lg:items-center lg:gap-8 lg:py-24 xl:py-28 sm:px-6">
        <motion.div
          className="max-w-xl lg:max-w-none"
          variants={containerVariants}
          initial={reduce ? "show" : "hidden"}
          animate="show"
        >
          <motion.p
            variants={staggerItem}
            className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent"
          >
            MyMSK Clinic
          </motion.p>
          <motion.h1
            variants={staggerItem}
            className="font-display mt-4 text-[var(--text-display)] font-bold leading-[1.05] text-ink"
          >
            Precision care for back, muscle & joint pain.
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-[42ch] text-lg text-muted lg:text-xl"
          >
            Osteopathic assessment, on-site MSK ultrasound, and
            ultrasound-guided injections — so your next step is evidence-led,
            not guessed.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Link
              href={routes.book}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-brand px-8 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-glow-brand)] transition-[transform,box-shadow] hover:bg-brand-hover hover:shadow-lg active:scale-[0.98] sm:w-auto"
            >
              Book consultation
            </Link>
            <Link
              href="#treatments"
              className="inline-flex min-h-12 w-full items-center justify-center border border-border-strong bg-transparent px-8 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent sm:w-auto"
            >
              View treatments
            </Link>
            <a
              href="tel:03337729655"
              className="min-h-12 text-center text-sm font-semibold text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent sm:min-h-0 sm:text-left"
            >
              Speak to clinic →
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: parallaxY }}
          className="relative hidden min-h-[380px] overflow-hidden rounded-sm border border-border lg:block"
        >
          <Image
            src={siteImages.hero}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-void via-void/75 to-void/20"
            aria-hidden
          />
          <div
            className="absolute inset-0 rounded-sm ring-1 ring-inset ring-white/[0.06]"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 border-t border-border/80 bg-void/40 p-8 backdrop-blur-[2px]">
            <p className="font-mono text-[10px] uppercase tracking-widest text-subtle">
              In-house capability
            </p>
            <p className="mt-2 font-display text-xl font-semibold text-ink">
              Ultrasound · Guided injections · Dual registration
            </p>
          </div>
        </motion.div>

        <div className="relative mt-6 min-h-[220px] overflow-hidden rounded-sm border border-border sm:min-h-[240px] lg:hidden">
          <Image
            src={siteImages.hero}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-void/95 via-void/70 to-transparent"
            aria-hidden
          />
          <p className="relative z-[1] max-w-[20ch] p-5 text-sm font-medium leading-snug text-ink">
            GMC &amp; GOsC-registered specialist · On-site imaging · Burnley
          </p>
        </div>
      </div>
    </section>
  );
}
