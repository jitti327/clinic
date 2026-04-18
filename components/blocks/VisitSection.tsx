import {
  clinicAddress,
  formatClinicAddressSingleLine,
  googleMapsEmbedSrc,
} from "@/lib/site-media";

export function VisitSection() {
  return (
    <section className="border-t border-border bg-surface-elevated py-16 sm:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
              Visit
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink">
              Burnley clinic
            </h2>
            <address className="mt-4 max-w-md not-italic leading-relaxed text-muted">
              <span className="font-medium text-ink">MyMSK Clinic</span>
              <br />
              {clinicAddress.line1}
              <br />
              {clinicAddress.town}, {clinicAddress.region} {clinicAddress.postcode}
              <br />
              {clinicAddress.country}
            </address>
            <p className="mt-4 max-w-md text-sm text-muted">
              Town-centre access. For satellite appointments (including Manchester),
              see{" "}
              <a
                href="https://mymskclinic.co.uk/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline decoration-border underline-offset-4 hover:text-ink"
              >
                contact
              </a>
              .
            </p>
            <a
              href="https://maps.google.com/?cid=9988807352140178415"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center rounded-sm bg-brand px-6 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-hover"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="relative">
            <div className="relative min-h-[240px] overflow-hidden rounded-sm border border-border bg-graphite shadow-card-hover aspect-[4/3] sm:aspect-[16/10] sm:min-h-0">
              <iframe
                title={`Map: ${formatClinicAddressSingleLine()}`}
                src={googleMapsEmbedSrc}
                className="absolute inset-0 h-full min-h-[240px] w-full border-0 sm:min-h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-xs text-subtle">
              Map data © Google · Pin is approximate; use &ldquo;Open in Google Maps&rdquo; for
              directions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
