export interface GalleryItem {
  id: string;
  title: string;
  category: 'oven' | 'carpet' | 'bathroom' | 'tile' | 'kitchen';
  location: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  tags: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Baked-On Oven Interior Degreasing",
    category: "oven",
    location: "Ringwood East Property",
    description: "Multi-year baked carbon and grease buildup completely removed using our eco-friendly non-toxic dip tank system during an End of Lease clean.",
    beforeImg: "/images/before1.jpeg",
    afterImg: "/images/after1.jpeg",
    tags: ["End of Lease", "Oven Clean", "Carbon Removal"]
  },
  {
    id: "gal-2",
    title: "High-Traffic Carpet Steam & Stain Removal",
    category: "carpet",
    location: "Croydon Family Home",
    description: "Deep hot-water steam extraction removed stubborn pet stains, embedded dirt, and allergen particles, drying soft and fresh in 3 hours.",
    beforeImg: "/images/before2.jpeg",
    afterImg: "/images/after2.jpeg",
    tags: ["Carpet Steam Clean", "Stain Removal", "Deodorizing"]
  },
  {
    id: "gal-3",
    title: "Bathroom Tile Grout & Soap Scum Scrub",
    category: "bathroom",
    location: "Bayswater North Townhouse",
    description: "Heavy mineral deposits, soap scum, and discoloured shower tile grout lines completely restored to pristine condition.",
    beforeImg: "/images/before3.jpeg",
    afterImg: "/images/after3.jpeg",
    tags: ["Deep Clean", "Mould Scrub", "Glass Polish"]
  },
  {
    id: "gal-4",
    title: "Kitchen & Benchtop Deep Disinfection",
    category: "kitchen",
    location: "Box Hill Residence",
    description: "Stainless steel surfaces, rangehood filters, and stone benchtops scrubbed, sanitized, and polished to food safety standards.",
    beforeImg: "/images/before4.jpeg",
    afterImg: "/images/after4.jpeg",
    tags: ["Kitchen Sanitization", "Deep Scrub", "Stainless Polish"]
  },
  {
    id: "gal-5",
    title: "Residential Deep Intensive Clean",
    category: "kitchen",
    location: "Doncaster Residence",
    description: "Meticulous top-to-bottom deep clean removing stubborn grime, grease film, and accumulated dust.",
    beforeImg: "/images/before5.jpeg",
    afterImg: "/images/after5.jpeg",
    tags: ["Deep Clean", "Residential", "Spring Clean"]
  }
];
