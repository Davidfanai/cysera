export interface GalleryItem {
  id: string;
  title: string;
  category: 'oven' | 'bathroom' | 'tile' | 'kitchen';
  location: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  tags: string[];
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Bathroom Shower Tile & Glass Scrub",
    category: "bathroom",
    location: "Ringwood East Property",
    description: "Deep scrub of shower floor tiles, drain, and glass screens removing soap scum, mineral deposits, and grime.",
    beforeImg: "/images/before1.jpeg",
    afterImg: "/images/after1.jpeg",
    tags: ["Bathroom Clean", "Shower Glass", "Tile & Grout"]
  },
  {
    id: "gal-2",
    title: "Double Vanity Sink & Benchtop Scrub",
    category: "bathroom",
    location: "Croydon Family Home",
    description: "Thorough sanitization and stain removal from bathroom double vanity sinks, tapware, and stone counter top.",
    beforeImg: "/images/before2.jpeg",
    afterImg: "/images/after2.jpeg",
    tags: ["Vanity Clean", "Sink Polish", "Bathroom Sanitization"]
  },
  {
    id: "gal-3",
    title: "Exhaust Fan & Rangehood Deep Degreasing",
    category: "kitchen",
    location: "Bayswater North Townhouse",
    description: "Heavy grease, oil grime, and dust buildup completely scrubbed clean from exhaust fan vents and rangehood housing.",
    beforeImg: "/images/before3.jpeg",
    afterImg: "/images/after3.jpeg",
    tags: ["Rangehood Clean", "Degreasing", "Kitchen Exhaust"]
  },
  {
    id: "gal-4",
    title: "Oven & Air Fryer Tray Degreasing",
    category: "oven",
    location: "Box Hill Residence",
    description: "Baked-on grease, burnt food residue, and carbon deposits scrubbed clean from oven interior trays and wire racks.",
    beforeImg: "/images/before4.jpeg",
    afterImg: "/images/after4.jpeg",
    tags: ["Oven Clean", "Tray Degreasing", "Carbon Removal"]
  },
  {
    id: "gal-5",
    title: "Bathroom Basin & Tap Descaling",
    category: "bathroom",
    location: "Doncaster Residence",
    description: "Removal of mineral scale, hair residue, and grime from bathroom ceramic basin and tapware.",
    beforeImg: "/images/before5.jpeg",
    afterImg: "/images/after5.jpeg",
    tags: ["Basin Clean", "Descaling", "Bathroom Scrub"]
  },
  {
    id: "gal-6",
    title: "Sitting Room & Living Area Deep Clean",
    category: "kitchen",
    location: "Mitcham Residence",
    description: "Complete sitting room transformation including timber floor polishing, sofa tidying, coffee table glass cleaning, and high dusting.",
    beforeImg: "/images/before6.jpeg",
    afterImg: "/images/after6.jpeg",
    tags: ["Sitting Room", "Living Area", "Deep Clean"]
  }
];
