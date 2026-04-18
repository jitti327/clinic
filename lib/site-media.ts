/**
 * Editorial clinical imagery (Unsplash). Replace with on-site photography when available.
 * Avoid ward/bed stock — it reads as “bedroom” on dark UI and undermines trust.
 */
export const siteImages = {
  hero:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85",
  bento: {
    gmc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    reviews:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    /** Brighter, readable on dark cards (was: very dark scanner room). */
    us: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=85",
    inj: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80",
  },
  /**
   * Clinical environment (previous stethoscope desk photo returned 404 from Unsplash).
   * Not a portrait of any named clinician.
   */
  specialist:
    "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=85",
  treatments: {
    /** Clinical imaging / equipment — previous photo ID returned 404 from Unsplash. */
    ha: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    cortisone:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
    advanced:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
} as const;

export const clinicAddress = {
  line1: "1A Parker Street",
  town: "Burnley",
  region: "Lancashire",
  postcode: "BB11 1AU",
  country: "United Kingdom",
} as const;

export function formatClinicAddressSingleLine() {
  return `${clinicAddress.line1}, ${clinicAddress.town} ${clinicAddress.postcode}`;
}

/** Google Maps classic embed (works in iframes in-browser). */
export const googleMapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${clinicAddress.line1}, ${clinicAddress.town} ${clinicAddress.postcode}, ${clinicAddress.country}`,
)}&hl=en&z=16&output=embed`;
