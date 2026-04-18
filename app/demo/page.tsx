import type { Metadata } from "next";
import { DemoDashboard } from "@/components/demo/DemoDashboard";
import { routeMeta, routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: routeMeta[routes.demo].title,
  description: routeMeta[routes.demo].description,
};

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-[var(--max-content)] px-4 py-12 sm:px-6 lg:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-subtle">
          Stakeholder preview
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Practice operations (demo)
        </h1>
        <p className="mt-3 text-muted">
          Separated from the patient homepage so clinical marketing stays clear.
          Use this layout to discuss dashboards, KPIs, or booking UX with owners
          — swap in real integrations later.
        </p>
      </header>
      <div className="mt-10">
        <DemoDashboard />
      </div>
    </div>
  );
}
