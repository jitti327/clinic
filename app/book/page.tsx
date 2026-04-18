import type { Metadata } from "next";
import Link from "next/link";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { pricingOfficialUrl } from "@/lib/pricing";
import { routeMeta, routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: routeMeta[routes.book].title,
  description: routeMeta[routes.book].description,
};

export default function BookPage() {
  return (
    <div className="mx-auto max-w-[var(--max-content)] px-4 py-12 sm:px-6 lg:py-16">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="mb-10 lg:mb-0">
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink">
            Book an appointment
          </h1>
          <p className="mt-3 text-muted leading-relaxed">
            Request a time at the Burnley clinic. Submit your preferences below; the team will
            confirm by phone or email. For urgent concerns, call — do not rely on email alone.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted">
            <li>
              <span className="font-semibold text-ink">Phone: </span>
              <a href="tel:03337729655" className="font-semibold text-accent hover:underline">
                0333 772 9655
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Email: </span>
              <a
                href="mailto:admin@mymskclinic.co.uk"
                className="font-semibold text-accent hover:underline"
              >
                admin@mymskclinic.co.uk
              </a>
            </li>
            <li>
              <span className="font-semibold text-ink">Guide fees: </span>
              <Link href={routes.pricing} className="font-semibold text-accent hover:underline">
                Burnley pricing
              </Link>
              {" · "}
              <a
                href={pricingOfficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Official schedule
              </a>
            </li>
          </ul>
          <div className="mt-8 rounded-sm border border-border bg-surface-elevated/80 p-5 text-sm leading-relaxed text-muted">
            <p className="font-semibold text-ink">Before you attend</p>
            <ul className="mt-3 list-inside list-disc space-y-1.5">
              <li>Bring photo ID, a list of medications, and any prior scan reports.</li>
              <li>
                Cancel or reschedule with at least 24 hours&apos; notice to avoid the full fee
                being charged.
              </li>
              <li>Missed appointments with no notice may not be rebooked.</li>
            </ul>
          </div>
        </div>
        <BookingFlow />
      </div>
    </div>
  );
}
