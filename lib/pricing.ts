/**
 * Burnley guide fees — aligned with mymskclinic.co.uk/pricing.
 * Re-check the live site before launch; fees and VAT wording may change.
 */
export const pricingOfficialUrl = "https://mymskclinic.co.uk/pricing/";

export const pricingDisclaimerShort =
  "Burnley guide fees. Final cost confirmed after assessment. Fees may differ at other locations.";

export const pricingDisclaimerFull =
  "These are guide fees for the Burnley clinic based on the public fee schedule. Manchester and other locations may differ. The clinician confirms the exact fee after examination. Give at least 24 hours’ notice to cancel or you may be charged the full fee; missed appointments with no notice may not be rearranged.";

export const pricingHomeHighlights = [
  {
    label: "Initial consultation (doctor)",
    price: "£150",
    detail: "Typically 45–60 minutes, including examination and ultrasound if clinically required.",
  },
  {
    label: "Doctor follow-up",
    price: "£125",
    detail: "30–45 minutes for review and ongoing care planning.",
  },
  {
    label: "Ultrasound-guided cortisone",
    price: "from £275",
    detail: "Consultation and scan when required; non-spinal joints and suitable soft-tissue targets.",
  },
] as const;

export type PricingRow = { name: string; price: string; note?: string };

export const pricingBurnleyRows: PricingRow[] = [
  {
    name: "Initial consultation with doctor",
    price: "£150",
    note: "45–60 min; exam and ultrasound if required.",
  },
  {
    name: "Follow-up with doctor",
    price: "£125",
    note: "30–45 min; aftercare and response to treatment.",
  },
  {
    name: "Osteopath",
    price: "£150",
    note: "60 min; assessment and treatment.",
  },
  {
    name: "Cortisone injection",
    price: "£275",
    note: "Consultation and ultrasound-guided steroid injection (non-spinal).",
  },
  {
    name: "Hyaluronic acid injection (ultrasound-guided)",
    price: "£350 – £425",
    note: "Ostenil / Durolane; consultation inclusive.",
  },
  {
    name: "Achilles tendonitis injection",
    price: "£299",
    note: "High-volume / hydro-dissection; ultrasound-guided.",
  },
  {
    name: "Hydrodilatation (frozen shoulder)",
    price: "£350",
    note: "Consultation, scan, and high-volume injection inclusive.",
  },
  {
    name: "Back / spinal injection",
    price: "£250 – £300",
    note: "Depends on examination — e.g. SI joint, lumbar facet.",
  },
  {
    name: "Caudal epidural",
    price: "£400",
    note: "Image-guided; consultation inclusive.",
  },
  {
    name: "PRP",
    price: "£400",
    note: "Per treatment; consultation and scan inclusive; course often required.",
  },
  {
    name: "Prolotherapy",
    price: "£275",
    note: "Per treatment; course of 3 (incl. consultation) total £825.",
  },
  {
    name: "Arthrosamid",
    price: "Please enquire",
    note: "Discuss suitability and fee with the clinic.",
  },
];
