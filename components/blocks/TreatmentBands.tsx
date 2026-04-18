"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { routes } from "@/lib/routes";
import { easeOutExpo, inViewViewport } from "@/lib/motion";
import { siteImages } from "@/lib/site-media";

const bands = [
  {
    title: "Hyaluronic acid",
    tag: "Joint support",
    body: "May help pain and function in suitable osteoarthritis — discussed in context of your scans and goals.",
    align: "left" as const,
    image: siteImages.treatments.ha,
  },
  {
    title: "Cortisone injections",
    tag: "Inflammation",
    body: "Targeted anti-inflammatory treatment when inflammation is driving pain and limiting recovery.",
    align: "right" as const,
    image: siteImages.treatments.cortisone,
  },
  {
    title: "PRP · Prolotherapy · Spinal injections",
    tag: "Advanced options",
    body: "Including platelet-rich plasma, prolotherapy, and spinal procedures where the clinical picture supports them — always after assessment.",
    align: "left" as const,
    image: siteImages.treatments.advanced,
  },
];

export function TreatmentBands() {
  const reduce = useReducedMotion();

  return (
    <section id="treatments" className="bg-void">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-24">
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={inViewViewport}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Treatments
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Injection-led options — individual to you.
          </h2>
          <p className="mt-4 text-muted">
            Nothing is “off the shelf.” Suitability depends on examination,
            history, and shared decision-making.
          </p>
        </motion.div>

        <div className="mt-14 space-y-6 lg:space-y-8">
          {bands.map((band, i) => (
            <motion.article
              key={band.title}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{
                delay: reduce ? 0 : i * 0.08,
                duration: 0.5,
                ease: easeOutExpo,
              }}
              className={`relative overflow-hidden rounded-sm border border-border ${
                band.align === "right"
                  ? "lg:ml-8 lg:mr-0 xl:ml-12"
                  : "lg:mr-8 lg:ml-0 xl:mr-12"
              } bg-surface-elevated`}
            >
              <div
                className={`flex flex-col lg:min-h-[260px] lg:flex-row ${
                  band.align === "right" ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative h-56 w-full shrink-0 sm:h-52 lg:h-auto lg:w-[38%] lg:min-h-[inherit]">
                  <Image
                    src={band.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,184,166,0.12)_0%,transparent_50%)]"
                    aria-hidden
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-surface-elevated/90 via-transparent to-transparent lg:from-surface-elevated/85 lg:via-surface-elevated/35 lg:to-transparent ${
                      band.align === "right"
                        ? "lg:bg-gradient-to-l"
                        : "lg:bg-gradient-to-r"
                    }`}
                    aria-hidden
                  />
                </div>
                <div className="relative flex-1 bg-[linear-gradient(105deg,rgba(20,184,166,0.05)_0%,transparent_40%)] p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                        {band.tag}
                      </p>
                      <h3 className="font-display mt-3 text-2xl font-bold text-ink">
                        {band.title}
                      </h3>
                    </div>
                    <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-between">
                      <p className="text-muted">{band.body}</p>
                      <Link
                        href={routes.book}
                        className="mt-6 inline-flex text-sm font-semibold text-accent transition-colors hover:text-ink"
                      >
                        Discuss suitability →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
