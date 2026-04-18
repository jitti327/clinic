import type { Metadata } from "next";
import Link from "next/link";
import {
  pricingBurnleyRows,
  pricingDisclaimerFull,
  pricingOfficialUrl,
} from "@/lib/pricing";
import { routes, routeMeta } from "@/lib/routes";

export const metadata: Metadata = {
  title: routeMeta[routes.pricing].title,
  description: routeMeta[routes.pricing].description,
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 py-16 sm:px-6 lg:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
        Pricing
      </p>
      <h1 className="font-display mt-3 text-4xl font-bold text-ink">
        Burnley guide fees
      </h1>
      <p className="mt-4 text-muted leading-relaxed">{pricingDisclaimerFull}</p>
      <p className="mt-4 text-sm text-muted">
        This page mirrors the public Burnley schedule for convenience. If anything differs, the{" "}
        <a
          href={pricingOfficialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent underline decoration-border underline-offset-4 hover:text-ink"
        >
          official pricing page
        </a>{" "}
        takes precedence.
      </p>

      <div className="mt-10 overflow-hidden rounded-sm border border-border">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-surface-elevated text-[10px] font-semibold uppercase tracking-wider text-subtle">
            <tr>
              <th className="px-4 py-3 font-semibold sm:px-6">Service</th>
              <th className="px-4 py-3 text-right font-semibold tabular-nums sm:px-6">
                Guide fee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-canvas">
            {pricingBurnleyRows.map((row) => (
              <tr key={row.name} className="text-muted">
                <td className="px-4 py-4 align-top text-ink sm:px-6">
                  <span className="font-medium">{row.name}</span>
                  {row.note ? (
                    <span className="mt-1 block text-xs font-normal text-muted">{row.note}</span>
                  ) : null}
                </td>
                <td className="px-4 py-4 text-right font-mono text-base font-semibold tabular-nums text-ink sm:px-6">
                  {row.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <Link
          href={routes.book}
          className="inline-flex min-h-12 items-center justify-center rounded-sm bg-brand px-8 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
        >
          Book consultation
        </Link>
        <a
          href="tel:03337729655"
          className="inline-flex min-h-12 items-center justify-center rounded-sm border border-border-strong px-8 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          Call 0333 772 9655
        </a>
      </div>
    </div>
  );
}
