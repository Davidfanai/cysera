export interface ReviewItem {
  id: string;
  name: string;
  suburb: string;
  rating: number;
  date: string;
  serviceUsed: string;
  comment: string;
  avatar: string;
  verified: boolean;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Brenda Ringwaldt",
    suburb: "Park Orchards",
    rating: 5,
    date: "August 2026",
    serviceUsed: "Weekly House Cleaning",
    comment: "Thank you so much for all you do at our house every Friday! We very much appreciate it!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-2",
    name: "Sarah Jenkins",
    suburb: "Ringwood",
    rating: 5,
    date: "August 2026",
    serviceUsed: "End of Lease Cleaning",
    comment: "Cysera saved my bond! The real estate manager commented that it was the cleanest move-out inspection she'd seen all year. Ovens and carpets were completely spotless.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-3",
    name: "David Chen",
    suburb: "Box Hill",
    rating: 5,
    date: "July 2026",
    serviceUsed: "Commercial Office Cleaning",
    comment: "We hired Cysera for our medical office in Box Hill. Their attention to detail with high-touch sanitization and eco-friendly products is unmatched. Very reliable team!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-4",
    name: "Emily & Marcus",
    suburb: "Bayswater North",
    rating: 5,
    date: "July 2026",
    serviceUsed: "Bi-Weekly Fortnightly Clean",
    comment: "Being local in Bayswater North, Cysera comes to our home every fortnight. They are punctual, super friendly with our dog, and leave the house smelling heavenly without harsh chemical fumes.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-5",
    name: "Michael Ross",
    suburb: "Croydon",
    rating: 5,
    date: "June 2026",
    serviceUsed: "Carpet Steam & Tile Grout Clean",
    comment: "The carpet steam clean got rid of stubborn coffee stains that 2 other cleaners couldn't fix. Grout in the master bathroom looks brand new again. Highly recommend Cysera!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    verified: true
  },
  {
    id: "rev-6",
    name: "Amanda Watson",
    suburb: "Doncaster",
    rating: 5,
    date: "May 2026",
    serviceUsed: "Deep Spring Clean",
    comment: "Outstanding service from quote to completion. The online instant quote was accurate, and the cleaners worked tirelessly for 5 hours. Outstanding value for money.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    verified: true
  }
];
