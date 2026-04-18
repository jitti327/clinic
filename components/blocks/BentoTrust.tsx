"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { easeOutExpo, inViewViewport } from "@/lib/motion";
import { siteImages } from "@/lib/site-media";

const cells = [
  {
    id: "gmc",
    span: "lg:col-span-2 lg:row-span-1",
    label: "Regulation",
    title: "GMC · GOsC",
    sub: "Dual-registered — verify anytime.",
    href: "https://www.gmc-uk.org/",
    external: true,
    image: siteImages.bento.gmc,
  },
  {
    id: "reviews",
    span: "lg:col-span-1",
    label: "Patients",
    title: "5.0",
    sub: "300+ Google reviews",
    href: "https://maps.google.com/?cid=9988807352140178415",
    external: true,
    image: siteImages.bento.reviews,
  },
  {
    id: "us",
    span: "lg:col-span-1",
    label: "Imaging",
    title: "MSK ultrasound",
    sub: "On-site, same visit when needed.",
    href: "#process",
    external: false,
    image: siteImages.bento.us,
  },
  {
    id: "inj",
    span: "lg:col-span-2",
    label: "Procedures",
    title: "Ultrasound-guided injections",
    sub: "Accuracy where it matters for comfort and outcome.",
    href: "#treatments",
    external: false,
    image: siteImages.bento.inj,
  },
] as const;

export function BentoTrust() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-border bg-canvas py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
          Trust
        </p>
        <h2 className="font-display mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
          Credentials & capability, without the noise.
        </h2>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">
          {cells.map((cell, i) => {
            const Inner = (
              <>
                <p className="relative z-[1] text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                  {cell.label}
                </p>
                <p className="relative z-[1] font-display mt-3 text-2xl font-bold text-ink sm:text-3xl">
                  {cell.title}
                </p>
                <p className="relative z-[1] mt-2 max-w-[28ch] text-sm text-muted">
                  {cell.sub}
                </p>
              </>
            );

            const className = `group relative overflow-hidden rounded-sm border border-border bg-surface-elevated p-6 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover ${cell.span}`;

            const motionProps = {
              initial: reduce ? undefined : { opacity: 0, y: 20 },
              whileInView: reduce ? undefined : { opacity: 1, y: 0 },
              viewport: inViewViewport,
              transition: {
                delay: reduce ? 0 : i * 0.06,
                duration: 0.45,
                ease: easeOutExpo,
              },
            };

            const Media = (
              <>
                <Image
                  src={cell.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover brightness-[1.08] saturate-[1.06] opacity-[0.56] transition-[opacity,transform,filter] duration-500 group-hover:scale-[1.03] group-hover:opacity-[0.68]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-canvas from-25% via-canvas/45 via-55% to-canvas/5"
                  aria-hidden
                />
              </>
            );

            if (cell.external) {
              return (
                <motion.a
                  key={cell.id}
                  href={cell.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  {...motionProps}
                >
                  {Media}
                  <span className="absolute right-4 top-4 z-[1] text-subtle opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                  {Inner}
                </motion.a>
              );
            }

            return (
              <motion.div key={cell.id} className={className} {...motionProps}>
                {Media}
                <Link
                  href={cell.href}
                  className="relative z-[1] block h-full min-h-[8rem] text-inherit no-underline outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                >
                  {Inner}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
