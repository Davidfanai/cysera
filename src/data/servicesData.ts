export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'bond' | 'specialized';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  startingPrice: string;
  badge?: string;
  inclusions: string[];
  features: string[];
  popularFor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential-cleaning",
    title: "Residential Home Cleaning",
    category: "residential",
    shortDesc: "Routine domestic cleaning tailored for busy Melbourne families. Weekly, fortnightly, or monthly options.",
    fullDesc: "Our eco-friendly home cleaning services transform your living space into a pristine sanctuary. From dusting ceiling fans to scrubbing kitchen benchtops and sanitizing bathrooms, CYSERA takes care of every detail.",
    iconName: "Home",
    startingPrice: "$35 / hr",
    badge: "Most Popular",
    popularFor: "Apartments, Townhouses, & Family Homes",
    inclusions: [
      "Dusting all surfaces & light fittings",
      "Vacuuming carpets & mopping hard floors",
      "Full bathroom scrub & sanitization (shower, tub, toilet, mirror)",
      "Kitchen benchtop, stove top & appliance exterior wipe-down",
      "Tidying beds & emptying waste bins"
    ],
    features: [
      "Transparent & affordable domestic rates",
      "100% Non-toxic eco-friendly products",
      "Consistent dedicated cleaning team",
      "Fully insured & police-checked cleaners"
    ]
  },
  {
    id: "end-of-lease-cleaning",
    title: "End of Lease Cleaning",
    category: "bond",
    shortDesc: "100% Bond Back Guarantee. REIV approved agent checklist compliant bond cleaning in Eastern Suburbs.",
    fullDesc: "Moving out? CYSERA guarantees 100% of your bond back without hassle, following strict real estate agent move-out checklists.",
    iconName: "Key",
    startingPrice: "$240",
    badge: "100% Bond Guarantee",
    popularFor: "Tenants, Property Managers, & Landlords",
    inclusions: [
      "Deep oven interior & rangehood degreasing",
      "Inside/outside kitchen cabinets & drawers wipe-down",
      "Window interior & sill tracks cleaning",
      "Full wall spot cleaning & skirting boards",
      "Bathroom lime-scale, mould, & tile scrub",
      "Full property vacuum & hard floor steam mop"
    ],
    features: [
      "Real estate agent move-out checklist compliant",
      "72-hour re-clean guarantee included free",
      "Official tax invoice supplied for property manager",
      "Carpet steam clean add-on package discounts"
    ]
  },
  {
    id: "commercial-cleaning",
    title: "Commercial & Office Cleaning",
    category: "commercial",
    shortDesc: "Professional office, medical clinic, retail, & venue cleaning services tailored to your business schedule.",
    fullDesc: "Maintain an impeccable corporate image. CYSERA provides reliable after-hours or day cleaning for businesses across Bayswater, Ringwood, Box Hill, and surrounding business hubs.",
    iconName: "Building2",
    startingPrice: "$100 / visit",
    popularFor: "Offices, Retail Stores, Clinics, & Showrooms",
    inclusions: [
      "Desks, monitors & workstation sanitization",
      "Staff kitchen & breakroom deep clean",
      "High-touch point disinfection (handles, switches, keypads)",
      "Commercial carpet vacuuming & hard floor care",
      "Restroom replenishment & deep sanitization",
      "Rubbish & recycling removal"
    ],
    features: [
      "Custom commercial contracts & schedules",
      "Flexible schedule (After hours, early morning, weekend)",
      "Security-cleared, police-checked cleaners",
      "Commercial grade eco disinfectants"
    ]
  },
  {
    id: "carpet-steam-cleaning",
    title: "Carpet & Upholstery Steam Cleaning",
    category: "specialized",
    shortDesc: "High-pressure hot water extraction for deep stain removal, allergen elimination, and fresh carpets.",
    fullDesc: "Revitalize worn carpets and sofas with our heavy-duty truck-mount steam extraction systems. We target stubborn stains and pet odours.",
    iconName: "Sparkles",
    startingPrice: "$79 (up to 3 rooms)",
    badge: "Deep Stain Removal",
    popularFor: "Pet Owners, Allergy Sufferers, & End of Lease",
    inclusions: [
      "Pre-treatment stain spray & high-traffic agitation",
      "Industrial hot-water extraction (steam clean)",
      "Deodorizing & antibacterial treatment",
      "Pet urine & allergen neutralization",
      "Fast-dry air turbo fan setup"
    ],
    features: [
      "Deep steam clean starting at just $79",
      "Safe for wool, synthetic & delicate fibres",
      "Dries within 2-4 hours",
      "Upholstery & mattress steam clean available"
    ]
  },
  {
    id: "tile-grout-cleaning",
    title: "Tile & Grout Cleaning",
    category: "specialized",
    shortDesc: "High-pressure rotary scrubbing to restore discoloured grout lines and dull floor tiles.",
    fullDesc: "Tired of scrubbing dark grout lines on hands and knees? Our rotary pressure washer and specialized alkali solutions strip away decades of dirt.",
    iconName: "Grid",
    startingPrice: "$129",
    popularFor: "Kitchens, Bathrooms, Patios, & Commercial Entryways",
    inclusions: [
      "Alkaline & acidic grout pre-soak treatment",
      "High-speed rotary tile brush scrub",
      "Enclosed high-pressure steam rinse & extraction",
      "Grout line color restoration",
      "Protective grout clear sealant application (optional)"
    ],
    features: [
      "Restores tiles to like-new condition",
      "Eliminates deep-set bathroom mould",
      "Protective sealing prevents future staining",
      "Zero splash back or mess left behind"
    ]
  },
  {
    id: "deep-cleaning",
    title: "Deep Intensive Cleaning",
    category: "residential",
    shortDesc: "Comprehensive top-to-bottom scrub for homes needing extra love, seasonal spring cleans, or post-renovation.",
    fullDesc: "When standard cleaning isn't enough, CYSERA's Deep Clean targets every hidden corner, built-up grime, ceiling fan, window track, and appliance interior.",
    iconName: "Zap",
    startingPrice: "$180",
    popularFor: "Spring Cleaning, Post-Reno, & Moving In",
    inclusions: [
      "Inside cupboards & behind major appliances",
      "High dusting (light fixtures, ceiling corners, door frames)",
      "Deep scrub of tile grout & shower screen glass",
      "Interior glass windows, mirrors, & tracks",
      "Skirting boards, architraves, & door handles wipe-down"
    ],
    features: [
      "Meticulous 40-point checklist inspection",
      "All equipment & eco-supplies included",
      "Instant freshness guarantee"
    ]
  },
  {
    id: "specialized-window-cleaning",
    title: "Window & High-Pressure Washing",
    category: "specialized",
    shortDesc: "Crystal clear streak-free window cleaning and high-pressure outdoor patio & driveway washing.",
    fullDesc: "Complete your property's shine with exterior pure-water pole window cleaning and high-pressure driveway power washing.",
    iconName: "Sun",
    startingPrice: "$89",
    popularFor: "Residential Exterior, Storefronts, & Balconies",
    inclusions: [
      "Streak-free interior & exterior glass cleaning",
      "Flyscreen washing & frame wipe-down",
      "High-pressure driveway & paver power wash",
      "Gutter rim & balcony glass washing"
    ],
    features: [
      "Pure-water ion technology for streak-free shine",
      "Safe ladder & extension pole equipment",
      "Removes stubborn hard water stains"
    ]
  }
];
