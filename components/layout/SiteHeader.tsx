"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { routes } from "@/lib/routes";

const nav = [
  { href: routes.home, label: "Home" },
  { href: "/#treatments", label: "Treatments" },
  { href: "/#process", label: "Process" },
  { href: "/#specialist", label: "Dr Akhtar" },
  { href: routes.pricing, label: "Pricing" },
  { href: routes.book, label: "Book" },
] as const;

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 72) {
        setHidden(false);
        lastY.current = y;
        return;
      }
      setHidden(y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className="sticky top-0 z-[100] border-b border-border bg-[color-mix(in_srgb,var(--surface-elevated)_82%,transparent)] backdrop-blur-xl backdrop-saturate-150"
        animate={{ y: hidden && !menuOpen ? -100 : 0 }}
        transition={
          reduce ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 32 }
        }
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href={routes.home}
            className="flex items-center gap-2.5 text-ink no-underline"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand text-sm font-bold text-brand-foreground">
              M
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold tracking-tight">
                MyMSK
              </span>
              <span className="text-[10px] text-subtle">Burnley</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-2 text-sm font-medium text-muted no-underline transition-colors hover:bg-white/[0.04] hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={routes.demo}
              className="ml-1 rounded-sm px-3 py-2 text-sm font-medium text-subtle no-underline hover:text-muted"
            >
              Demo
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:03337729655"
              className="hidden rounded-sm border border-border px-3 py-2 text-sm font-medium text-ink no-underline transition-colors hover:border-border-strong xl:inline-block"
            >
              0333 772 9655
            </a>
            <Link
              href={routes.book}
              className="inline-flex min-h-10 items-center justify-center rounded-sm bg-brand px-3 text-xs font-semibold text-brand-foreground shadow-[var(--shadow-glow-brand)] no-underline transition-[transform,background-color] hover:bg-brand-hover sm:px-4 sm:text-sm"
            >
              Book
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-border lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-lg leading-none text-ink">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence mode="sync">
        {menuOpen && (
          <>
            <motion.button
              key="nav-backdrop"
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[110] bg-void/70 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              key="nav-drawer"
              id="mobile-nav"
              className="fixed right-0 top-0 z-[120] h-full w-[min(100%,320px)] border-l border-border bg-surface-elevated px-6 pb-10 pt-20 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              <ul className="flex flex-col gap-1">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-sm px-3 py-3 text-base font-semibold text-ink no-underline hover:bg-white/[0.04]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={routes.demo}
                    className="block rounded-sm px-3 py-3 text-base font-medium text-subtle no-underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Practice demo
                  </Link>
                </li>
              </ul>
              <a
                href="tel:03337729655"
                className="mt-8 block w-full rounded-sm border border-border py-3 text-center text-sm font-semibold text-ink"
              >
                Call 0333 772 9655
              </a>
              <Link
                href={routes.book}
                className="mt-3 block w-full rounded-sm bg-brand py-3 text-center text-sm font-semibold text-brand-foreground"
                onClick={() => setMenuOpen(false)}
              >
                Book consultation
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
