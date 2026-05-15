export type Destination = {
  slug: string;
  name: string;
  state: string;
  tagline: string;
  headline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  galleryImages: string[];
  highlights: string[];
  sampleItinerary: { day: string; activities: string[] }[];
  idealFor: string[];
  priceFrom: number;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
};

export const destinations: Destination[] = [
  {
    slug: "newport",
    name: "Newport",
    state: "Rhode Island",
    tagline: "The Gilded Age Strategy Summit",
    headline: "Command the Room.\nCommand the Sea.",
    description:
      "Newport's Gilded Age mansions and private harbor set a stage few boardrooms can match. When your leadership team needs a setting that commands respect and inspires bold thinking, Newport delivers.",
    longDescription:
      "Newport, Rhode Island is America's original luxury destination — a city where Vanderbilt-era grandeur meets working waterfront energy. For executive retreats and corporate off-sites, it offers an unmatched combination of historic gravitas, world-class dining, and private sailing access that no conference center can replicate. Our Newport retreats leverage Blue Lobster Travel's deep relationships with the region's finest estates, restaurants, and sailing operators to create corporate experiences your team will reference for years.",
    heroImage: "/destinations/newport.jpg",
    galleryImages: [
      "/destinations/maine.jpg",
      "/destinations/boston.jpg",
      "/destinations/vermont.jpg",
    ],
    highlights: [
      "Private mansion venue buyouts for strategy sessions",
      "Executive sailing experiences on Narragansett Bay",
      "Curated Newport Cliff Walk leadership walks",
      "Private chef dinners at Gilded Age estates",
      "Bespoke team-building on America's Cup yachts",
    ],
    sampleItinerary: [
      {
        day: "Day 1 — Arrival & Immersion",
        activities: [
          "Private transfer from Boston or Providence",
          "Welcome reception on a private harbor yacht",
          "Dinner at a reserved Newport estate dining room",
        ],
      },
      {
        day: "Day 2 — Strategy & Experience",
        activities: [
          "Morning strategy sessions in a Cliff Walk mansion",
          "Sailing regatta team-building on Narragansett Bay",
          "Evening cocktails at The Breakers private event",
        ],
      },
      {
        day: "Day 3 — Reflection & Departure",
        activities: [
          "Sunrise leadership walk on the Cliff Walk",
          "Farewell brunch at a top-rated Newport restaurant",
          "Private transfer departure",
        ],
      },
    ],
    idealFor: [
      "C-suite leadership summits",
      "Board retreats",
      "Sales leadership off-sites",
      "Executive team alignment",
    ],
    priceFrom: 1500,
    seoTitle: "Executive Retreat Newport Rhode Island | Corporate Off-Site Newport",
    seoDescription:
      "Luxury executive retreats and corporate off-sites in Newport, Rhode Island. Gilded Age mansions, private sailing, and world-class dining. From $1,500 per person. In partnership with Blue Lobster Travel.",
    keywords: [
      "corporate retreat Newport Rhode Island",
      "executive retreat Newport RI",
      "corporate offsite Newport",
      "executive offsite Newport Rhode Island",
      "luxury corporate retreat Newport",
      "team building Newport Rhode Island",
    ],
  },
  {
    slug: "maine",
    name: "Coastal Maine",
    state: "Maine",
    tagline: "The Maritime Reset",
    headline: "Strip Away the Noise.\nFind What Matters.",
    description:
      "Maine's rugged coastline cuts through distraction. Private lobster bakes, sea kayaking, and genuine wilderness luxury create the conditions for your team's most honest conversations.",
    longDescription:
      "Coastal Maine — from Kennebunkport to Bar Harbor — offers a rare combination of accessible luxury and genuine wilderness that no other New England destination can match. For corporate retreats focused on team bonding, culture reset, or leadership development, Maine's salt air and unhurried pace have a way of breaking down walls that conference rooms never could. Our Maine retreats tap into Blue Lobster Travel's exclusive access to private coastal estates, lighthouse venues, and premier lobster experience operators across the Maine coast.",
    heroImage: "/destinations/maine.jpg",
    galleryImages: [
      "/destinations/vermont.jpg",
      "/destinations/newport.jpg",
      "/destinations/boston.jpg",
    ],
    highlights: [
      "Private coastal estate buyouts in Kennebunkport & Bar Harbor",
      "Curated lobster bake experiences on private beaches",
      "Sea kayaking and sailing team-building on Casco Bay",
      "Lighthouse venue dinners with private chef",
      "Whale watch excursions for group downtime",
    ],
    sampleItinerary: [
      {
        day: "Day 1 — Arrival & Decompression",
        activities: [
          "Private van transfer from Portland Jetport",
          "Welcome lobster bake on a private beach",
          "Bonfire and informal team mixer at coastal estate",
        ],
      },
      {
        day: "Day 2 — Work Hard, Play Harder",
        activities: [
          "Morning strategy sessions with ocean views",
          "Afternoon sea kayaking team-building",
          "Private chef dinner at a lighthouse venue",
        ],
      },
      {
        day: "Day 3 — Refresh & Realign",
        activities: [
          "Sunrise walk on a private beach",
          "Final team session: goals and accountability",
          "Farewell brunch at a top-rated Maine inn",
        ],
      },
    ],
    idealFor: [
      "Team culture and bonding retreats",
      "Leadership development off-sites",
      "Post-merger integration retreats",
      "Annual company kickoffs",
    ],
    priceFrom: 1500,
    seoTitle: "Corporate Retreat Maine | Executive Off-Site Coastal Maine",
    seoDescription:
      "Luxury corporate retreats and executive off-sites on the Maine coast. Private estates, lobster bakes, sea kayaking. Kennebunkport to Bar Harbor. From $1,500 per person.",
    keywords: [
      "corporate retreat Maine",
      "executive retreat Maine",
      "corporate offsite Maine",
      "executive offsite coastal Maine",
      "luxury team retreat Maine",
      "corporate retreat Kennebunkport",
      "executive retreat Bar Harbor",
    ],
  },
  {
    slug: "berkshires",
    name: "The Berkshires",
    state: "Massachusetts",
    tagline: "The Creative Offsite",
    headline: "Where Big Ideas\nFind Open Space.",
    description:
      "Rolling hills, world-class arts, and restorative wellness. The Berkshires create the mental spaciousness that high-growth teams need to think beyond the quarterly roadmap.",
    longDescription:
      "The Berkshires of western Massachusetts occupy a unique position in New England corporate retreat culture — they're close enough to Boston and New York to be logistically simple, yet far enough removed to feel genuinely transformative. For creative companies, marketing teams, and organizations navigating change, the Berkshires' combination of arts culture, wellness infrastructure, and natural beauty creates a distinctive backdrop for strategic off-sites. Our Berkshires retreats partner with the region's top historic inns, private estates, and Tanglewood-adjacent venues.",
    heroImage: "/destinations/vermont.jpg",
    galleryImages: [
      "/destinations/maine.jpg",
      "/destinations/newport.jpg",
      "/destinations/boston.jpg",
    ],
    highlights: [
      "Private estate venues with mountain views",
      "Curated Tanglewood and MASS MoCA cultural experiences",
      "Farm-to-table private dinners with local producers",
      "Wellness and restorative programming options",
      "Guided hiking and nature leadership experiences",
    ],
    sampleItinerary: [
      {
        day: "Day 1 — Arrive & Unwind",
        activities: [
          "Private transfer from Boston or New York",
          "Welcome reception at a historic Berkshire estate",
          "Farm-to-table dinner with local vineyard pairing",
        ],
      },
      {
        day: "Day 2 — Create & Connect",
        activities: [
          "Morning strategy and creative workshop sessions",
          "Afternoon Tanglewood grounds experience or MASS MoCA tour",
          "Private chef dinner in a converted barn venue",
        ],
      },
      {
        day: "Day 3 — Reflect & Depart",
        activities: [
          "Morning wellness walk through the hills",
          "Final team alignment session",
          "Farewell brunch at a top-rated Lenox inn",
        ],
      },
    ],
    idealFor: [
      "Creative and marketing team off-sites",
      "Innovation and strategy workshops",
      "Wellness-focused leadership retreats",
      "Tech company annual retreats",
    ],
    priceFrom: 1500,
    seoTitle: "Corporate Retreat Berkshires MA | Executive Offsite Berkshires",
    seoDescription:
      "Luxury corporate retreats and executive off-sites in the Berkshires, Massachusetts. Private estates, arts culture, farm-to-table dining. From $1,500 per person.",
    keywords: [
      "corporate retreat Berkshires",
      "executive retreat Berkshires Massachusetts",
      "corporate offsite Berkshires MA",
      "team retreat Lenox Massachusetts",
      "luxury corporate retreat western Massachusetts",
    ],
  },
  {
    slug: "boston",
    name: "Boston",
    state: "Massachusetts",
    tagline: "The Historic Leadership Summit",
    headline: "Where America's\nLeadership Was Forged.",
    description:
      "Boston's layered history and world-class hospitality create an unrivaled backdrop for leadership summits, board meetings, and high-stakes corporate gatherings.",
    longDescription:
      "Boston is America's original leadership city — home to the country's first university, the birthplace of the American Revolution, and today a global hub for finance, technology, life sciences, and innovation. For executive retreats and corporate summits requiring gravitas, accessibility, and world-class amenities, Boston delivers on every count. Our Boston programs leverage private harbor events, Freedom Trail leadership experiences, and exclusive access to the city's premier private dining rooms and historic venues.",
    heroImage: "/destinations/boston.jpg",
    galleryImages: [
      "/destinations/newport.jpg",
      "/destinations/maine.jpg",
      "/destinations/vermont.jpg",
    ],
    highlights: [
      "Private harbor cruises on Boston Harbor",
      "Exclusive Freedom Trail leadership walking experiences",
      "Reserved private dining at Boston's finest restaurants",
      "Harvard and MIT campus access for educational programming",
      "Historic Faneuil Hall private event buyouts",
    ],
    sampleItinerary: [
      {
        day: "Day 1 — Arrive & Orient",
        activities: [
          "Private airport transfer to boutique Back Bay hotel",
          "Welcome dinner at a premier Boston private dining room",
          "Evening harbor cruise with team mixer",
        ],
      },
      {
        day: "Day 2 — Lead & Learn",
        activities: [
          "Morning leadership sessions at a historic venue",
          "Private Freedom Trail leadership experience",
          "Afternoon free for Harvard Square exploration",
          "Group dinner at a James Beard-recognized restaurant",
        ],
      },
      {
        day: "Day 3 — Summit & Depart",
        activities: [
          "Final morning summit session",
          "Farewell brunch with Charles River views",
          "Private transfers departure",
        ],
      },
    ],
    idealFor: [
      "Board retreats and annual summits",
      "Financial services leadership off-sites",
      "Life sciences and biotech team gatherings",
      "Executive onboarding and alignment",
    ],
    priceFrom: 1500,
    seoTitle: "Executive Retreat Boston MA | Corporate Offsite Boston Massachusetts",
    seoDescription:
      "Luxury executive retreats and corporate off-sites in Boston, Massachusetts. Private harbor events, historic venues, and world-class dining. From $1,500 per person.",
    keywords: [
      "corporate retreat Boston",
      "executive retreat Boston Massachusetts",
      "corporate offsite Boston MA",
      "executive summit Boston",
      "luxury corporate retreat Boston",
      "leadership retreat Boston",
    ],
  },
  {
    slug: "vermont",
    name: "Vermont",
    state: "Vermont",
    tagline: "The Mountain Recharge",
    headline: "Genuine Renewal.\nAmong the Green Mountains.",
    description:
      "Vermont's covered bridges, farm-to-table culture, and mountain air deliver something rarer than a great meeting: genuine restoration. Your team returns changed.",
    longDescription:
      "Vermont offers New England's most authentically restorative setting for corporate retreats and executive off-sites. Whether your team needs a winter ski retreat, a fall foliage strategy session, or a summer mountain reset, Vermont's distinctive combination of local farm culture, outdoor access, and quaint New England character creates an environment where teams do their best thinking. Our Vermont retreats tap Blue Lobster Travel's relationships with the state's finest inns, private estates, and outdoor experience operators.",
    heroImage: "/destinations/vermont-barn.jpg",
    galleryImages: [
      "/destinations/vermont.jpg",
      "/destinations/maine.jpg",
      "/destinations/boston.jpg",
    ],
    highlights: [
      "Private inn buyouts with mountain and valley views",
      "Curated farm-to-table dinners with local producers",
      "Ski and snowshoe excursions at premier Vermont resorts",
      "Covered bridge hiking and fall foliage leadership walks",
      "Maple sugaring and craft brewery experiences",
    ],
    sampleItinerary: [
      {
        day: "Day 1 — Arrive & Breathe",
        activities: [
          "Private transfer from Burlington or Boston",
          "Welcome farm-to-table dinner at a Vermont inn",
          "Fireside evening session and team bonding",
        ],
      },
      {
        day: "Day 2 — Explore & Align",
        activities: [
          "Morning strategy sessions with mountain views",
          "Afternoon hiking, skiing, or cycling excursion",
          "Private chef dinner at the inn with local craft beverage pairing",
        ],
      },
      {
        day: "Day 3 — Reflect & Return",
        activities: [
          "Morning meditation walk through Vermont countryside",
          "Final team session: commitments and next steps",
          "Farewell brunch at a farm-to-table inn",
        ],
      },
    ],
    idealFor: [
      "Annual company retreats and culture-building",
      "Wellness-focused executive off-sites",
      "Seasonal incentive travel (fall foliage, ski season)",
      "Remote-first team in-person gatherings",
    ],
    priceFrom: 1500,
    seoTitle: "Corporate Retreat Vermont | Executive Offsite Vermont New England",
    seoDescription:
      "Luxury corporate retreats and executive off-sites in Vermont. Farm-to-table, mountain views, ski seasons. From $1,500 per person. In partnership with Blue Lobster Travel.",
    keywords: [
      "corporate retreat Vermont",
      "executive retreat Vermont",
      "corporate offsite Vermont",
      "team retreat Vermont New England",
      "luxury corporate retreat Vermont",
      "ski retreat corporate Vermont",
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}
