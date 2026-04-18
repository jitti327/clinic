import {
  BentoTrust,
  ConditionRail,
  CtaFinale,
  EditorialHero,
  FaqSplit,
  PreHeaderStrip,
  PricingBand,
  ProcessTimeline,
  SpecialistSplit,
  TestimonialCinema,
  TreatmentBands,
  VisitSection,
} from "@/components/blocks";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";

export default function HomePage() {
  return (
    <div className="pb-24 md:pb-0">
      <PreHeaderStrip />
      <EditorialHero />
      <BentoTrust />
      <ConditionRail />
      <ProcessTimeline />
      <TreatmentBands />
      <SpecialistSplit />
      <TestimonialCinema />
      <PricingBand />
      <FaqSplit />
      <VisitSection />
      <CtaFinale />
      <MobileStickyCta />
    </div>
  );
}
