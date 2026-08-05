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
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    tags: ["End of Lease", "Oven Clean", "Carbon Removal"]
  },
  {
    id: "gal-2",
    title: "High-Traffic Carpet Steam & Pet Stain Removal",
    category: "carpet",
    location: "Croydon Family Home",
    description: "Deep hot-water steam extraction removed stubborn pet stains, embedded dirt, and allergen particles, drying soft and fresh in 3 hours.",
    beforeImg: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tags: ["Carpet Steam Clean", "Stain Removal", "Deodorizing"]
  },
  {
    id: "gal-3",
    title: "Bathroom Tile Grout & Soap Scum Scrub",
    category: "bathroom",
    location: "Bayswater North Townhouse",
    description: "Heavy mineral deposits, soap scum, and discoloured shower tile grout lines completely restored to pristine condition.",
    beforeImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
    tags: ["Tile & Grout", "Mould Scrub", "Glass Polish"]
  },
  {
    id: "gal-4",
    title: "Commercial Kitchen & Benchtop Deep Disinfection",
    category: "kitchen",
    location: "Box Hill Restaurant",
    description: "Commercial stainless steel, rangehood filters, and stone benchtops scrubbed, sanitized, and polished to food safety compliance standards.",
    beforeImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    tags: ["Commercial Clean", "Kitchen Sanitization", "Stainless Polish"]
  },
  {
    id: "gal-5",
    title: "Living Room Hardwood Floor Polish & Dust Removal",
    category: "kitchen",
    location: "Doncaster Residence",
    description: "Post-renovation fine dust extraction and natural timber floor steam sanitization leaving a mirror-like sheen.",
    beforeImg: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    afterImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tags: ["Deep Clean", "Timber Floor Care", "Post-Reno"]
  }
];
