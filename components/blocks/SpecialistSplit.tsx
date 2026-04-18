"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import { easeOutExpo, inViewViewport } from "@/lib/motion";
import { siteImages } from "@/lib/site-media";

export function SpecialistSplit() {
  const reduce = useReducedMotion();

  return (
    <section
      id="specialist"
      className="border-b border-border bg-canvas py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-x-12 lg:gap-y-10 xl:gap-x-16">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 1.02 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={inViewViewport}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="relative order-2 min-h-[260px] overflow-hidden rounded-sm border border-border bg-graphite sm:min-h-[300px] lg:order-1 lg:min-h-[420px]"
        >
          <Image
            src={siteImages.specialist}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(20,184,166,0.2),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-subtle">
              Dr Akhtar
            </p>
            <p className="font-display mt-2 text-lg font-semibold text-ink">
              Dual-qualified GP &amp; osteopath
            </p>
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 lg:pl-8 lg:pr-4 xl:pl-16"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.55, ease: easeOutExpo, delay: reduce ? 0 : 0.06 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
            Specialist
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Medicine and osteopathy — one coherent plan.
          </h2>
          <motion.blockquote
            initial={reduce ? undefined : { opacity: 0, filter: "blur(8px)" }}
            whileInView={reduce ? undefined : { opacity: 1, filter: "blur(0px)" }}
            viewport={inViewViewport}
            transition={{ duration: 0.55, ease: easeOutExpo }}
            className="relative mt-8 border-l-2 border-accent pl-6 text-lg font-medium leading-snug text-ink"
          >
            <span className="absolute -left-1 -top-2 font-display text-5xl text-border-strong opacity-40">
              “
            </span>
            Two lenses on the same problem — depth you can verify on GMC and
            GOsC registers.
          </motion.blockquote>
          <p className="mt-6 text-muted">
            Medical degree, University of Sheffield (2007). Osteopathy, London
            College of Osteopathic Medicine (2017). Manual therapy, MSK
            ultrasound, and injection-led care when it is the right tool.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              Ultrasound supports diagnosis — not used as a sales prop
            </li>
            <li className="flex gap-2">
              <span className="text-accent">✓</span>
              Referral onward when surgery or another specialist is appropriate
            </li>
          </ul>
          <Link
            href={routes.book}
            className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-sm bg-brand px-6 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover sm:w-auto"
          >
            Book with Dr Akhtar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
