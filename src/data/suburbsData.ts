export interface SuburbRegion {
  region: string;
  suburbs: string[];
}

export const SERVICED_REGIONS: SuburbRegion[] = [
  {
    region: "Maroondah Region",
    suburbs: [
      "Bayswater North",
      "Croydon",
      "Heathmont",
      "Kilsyth",
      "Ringwood"
    ]
  },
  {
    region: "Knox Region",
    suburbs: [
      "Bayswater",
      "Boronia",
      "Ferntree Gully",
      "Knoxfield",
      "Lysterfield",
      "Rowville",
      "Scoresby",
      "The Basin",
      "Wantirna"
    ]
  },
  {
    region: "Whitehorse & Eastern Suburbs",
    suburbs: [
      "Blackburn",
      "Box Hill",
      "Burwood",
      "Forest Hill",
      "Mitcham",
      "Nunawading",
      "Vermont"
    ]
  },
  {
    region: "Manningham Region",
    suburbs: [
      "Doncaster",
      "Donvale",
      "Park Orchards"
    ]
  },
  {
    region: "Yarra Ranges Border",
    suburbs: [
      "Belgrave",
      "Chirnside Park",
      "Lilydale",
      "Mooroolbark",
      "Mount Evelyn"
    ]
  }
];

export const ALL_SUBURBS: string[] = SERVICED_REGIONS.flatMap(r => r.suburbs);
