export function PreHeaderStrip() {
  return (
    <div className="border-b border-border bg-void/80">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.14em] text-subtle sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 sm:text-[11px] sm:px-6">
        <span className="font-mono text-[10px] text-muted normal-case tracking-normal">
          Burnley · Lancashire
        </span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:gap-x-6">
          <a
            href="tel:03337729655"
            className="text-ink transition-colors hover:text-accent"
          >
            0333 772 9655
          </a>
          <span className="hidden text-border sm:inline" aria-hidden>
            |
          </span>
          <span className="max-w-[28ch] leading-snug sm:max-w-none">
            Private MSK · Ultrasound on site
          </span>
        </div>
      </div>
    </div>
  );
}
