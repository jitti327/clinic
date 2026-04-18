"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { transition } from "@/lib/motion";
import { routes } from "@/lib/routes";

export function MobileStickyCta() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={false}
      animate={
        visible
          ? { y: 0, opacity: 1 }
          : { y: "120%", opacity: 0 }
      }
      transition={reduce ? { duration: 0.15 } : transition.springSoft}
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ pointerEvents: visible ? "auto" : "none" }}
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="border-t border-border bg-[color-mix(in_srgb,var(--surface-elevated)_94%,transparent)] px-4 py-3 backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-lg gap-3">
          <a
            href="tel:03337729655"
            className="flex min-h-12 flex-1 items-center justify-center rounded-sm border border-border text-sm font-semibold text-ink active:scale-[0.98]"
          >
            Call
          </a>
          <Link
            href={routes.book}
            className="flex min-h-12 flex-1 items-center justify-center rounded-sm bg-brand text-sm font-semibold text-brand-foreground active:scale-[0.98]"
          >
            Book
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
