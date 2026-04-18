import Link from "next/link";
import { routes } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-elevated py-12">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-ink">MyMSK Clinic</p>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Private musculoskeletal care with in-house ultrasound and
            ultrasound-guided injections.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-subtle">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="tel:03337729655" className="text-accent hover:underline">
                0333 772 9655
              </a>
            </li>
            <li>
              <a
                href="mailto:admin@mymskclinic.co.uk"
                className="text-accent hover:underline"
              >
                admin@mymskclinic.co.uk
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?cid=9988807352140178415"
                className="text-accent hover:underline"
              >
                Directions · Burnley
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-subtle">
            Quick links
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={routes.book} className="text-accent hover:underline">
                Book appointment
              </Link>
            </li>
            <li>
              <Link href={routes.pricing} className="text-accent hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link href={routes.demo} className="text-accent hover:underline">
                Practice demo (illustrative)
              </Link>
            </li>
            <li>
              <a
                href="https://mymskclinic.co.uk/"
                className="text-accent hover:underline"
              >
                Live website
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1400px] px-4 text-xs text-subtle sm:px-6">
        © {new Date().getFullYear()} MyMSK Clinic. Next.js preview — content
        should be reviewed before production.
      </p>
    </footer>
  );
}
