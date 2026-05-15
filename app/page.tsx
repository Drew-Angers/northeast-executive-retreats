import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Northeast Executive Retreats | Luxury Corporate Retreats in New England",
  description:
    "Your team deserves more than a conference room. Premium corporate retreats and executive off-sites across New England — Newport, Maine, Berkshires, Boston, and Vermont. From $1,500 per person.",
};

const destinations = [
  {
    slug: "newport",
    name: "Newport",
    state: "Rhode Island",
    tagline: "The Gilded Age Strategy Summit",
    description:
      "Historic mansions, private sailing, and world-class dining. Newport commands attention and sets the stage for transformative leadership moments.",
    image: "/destinations/newport.jpg",
    keywords: "executive retreat Newport Rhode Island",
  },
  {
    slug: "maine",
    name: "Coastal Maine",
    state: "Maine",
    tagline: "The Maritime Reset",
    description:
      "Private lobster bakes, sea kayaking, and rugged coastal luxury. Maine strips away the noise and returns your team to what matters.",
    image: "/destinations/maine.jpg",
    keywords: "corporate retreat Maine",
  },
  {
    slug: "berkshires",
    name: "The Berkshires",
    state: "Massachusetts",
    tagline: "The Creative Offsite",
    description:
      "Rolling hills, world-class arts, and restorative wellness. The Berkshires spark creative breakthroughs for high-growth teams.",
    image: "/destinations/vermont.jpg",
    keywords: "corporate retreat Berkshires Massachusetts",
  },
  {
    slug: "boston",
    name: "Boston",
    state: "Massachusetts",
    tagline: "The Historic Leadership Summit",
    description:
      "America&apos;s cradle of leadership. Private harbor events, Freedom Trail experiences, and iconic venues that make every agenda feel consequential.",
    image: "/destinations/boston.jpg",
    keywords: "executive retreat Boston Massachusetts",
  },
  {
    slug: "vermont",
    name: "Vermont",
    state: "Vermont",
    tagline: "The Mountain Recharge",
    description:
      "Farm-to-table dinners, covered bridges, and mountain air. Vermont delivers genuine renewal for teams that need to reset and realign.",
    image: "/destinations/vermont-barn.jpg",
    keywords: "corporate offsite Vermont",
  },
];

const differentiators = [
  {
    title: "End-to-End Curation",
    body: "We design every detail — venues, transport, meals, excursions, and agenda flow. You arrive, you lead, we handle everything else.",
  },
  {
    title: "White-Glove Execution",
    body: "Backed by partnerships with premier New England luxury firms. Relationships with the region's finest venues, operators, and experience providers that others don't have.",
  },
  {
    title: "Corporate Intelligence",
    body: "We start with your team's goals, not a venue list. Every retreat is built around measurable outcomes — not just beautiful backdrops.",
  },
  {
    title: "Flexible Group Sizes",
    body: "Executive dinners for 10. Sales kickoffs for 100. We right-size every experience to your team and your budget.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-navy-dark">
          <Image
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1800&q=80"
            alt="Luxury New England coastal landscape"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/60 via-navy-dark/40 to-navy-dark/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label text-gold mb-4 animate-fade-up">
            New England · Corporate Retreats · Executive Off-Sites
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6 animate-fade-up animate-delay-100">
            Your Team Deserves More
            <br />
            <em>Than a Conference Room.</em>
          </h1>
          <div className="w-12 h-px bg-gold mx-auto my-6 animate-fade-up animate-delay-200" />
          <p className="text-cream/80 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-300">
            Where Strategy Meets the Shore. Premium corporate retreats and
            executive off-sites across New England&apos;s most storied
            destinations — from $1,500 per person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-400">
            <Link href="/retreat-builder" className="btn-gold">
              Build Your Retreat
            </Link>
            <Link href="/packages" className="btn-outline-cream">
              View Destinations
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up animate-delay-400">
          <span className="text-cream/40 text-xs tracking-widest uppercase font-sans">
            Explore
          </span>
          <div className="w-px h-8 bg-gold/40 animate-pulse" />
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="bg-navy py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {["Maine", "Vermont", "Rhode Island", "Massachusetts", "New Hampshire"].map(
            (state) => (
              <p
                key={state}
                className="text-xs tracking-widest uppercase text-cream/50 font-sans"
              >
                {state}
              </p>
            )
          )}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-16">
            <p className="section-label">Why Northeast Executive Retreats</p>
            <h2 className="section-title">
              Not a Hotel Sales Team.
              <br />
              <em>An Experience Partner.</em>
            </h2>
            <div className="divider-gold" />
            <p className="text-navy/70 leading-relaxed font-sans">
              When you search for a New England corporate retreat today, you get
              hotel landing pages and generic event spaces. We&apos;re
              something different — a dedicated destination management partner
              that designs the entire experience around your team&apos;s goals,
              not a room block.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((d, i) => (
              <div key={d.title} className="group">
                <p className="text-gold font-serif text-4xl font-light mb-4 opacity-40">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-xl text-navy mb-3">{d.title}</h3>
                <div className="w-6 h-px bg-gold mb-4 group-hover:w-12 transition-all duration-300" />
                <p className="text-navy/60 text-sm leading-relaxed font-sans">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">Five Signature Destinations</p>
            <h2 className="section-title">
              New England&apos;s Finest
              <br />
              <em>Corporate Retreat Settings</em>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/packages/${dest.slug}`}
                className="group relative overflow-hidden block"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={`${dest.keywords}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold text-xs tracking-widest uppercase font-sans mb-1">
                    {dest.state}
                  </p>
                  <h3 className="font-serif text-2xl text-cream mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-cream/70 text-sm font-sans italic">
                    {dest.tagline}
                  </p>
                  <p className="text-gold text-xs tracking-widest uppercase font-sans mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </p>
                </div>
              </Link>
            ))}

            {/* Lead Magnet CTA Card */}
            <div className="relative bg-navy flex flex-col items-center justify-center p-10 text-center h-80">
              <p className="section-label text-gold mb-3">Not Sure Where?</p>
              <h3 className="font-serif text-2xl text-cream mb-4">
                Let Us Find Your Perfect Match
              </h3>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="text-cream/60 text-sm font-sans leading-relaxed mb-6">
                Answer 4 quick questions and get a custom retreat recommendation
                built for your team.
              </p>
              <Link href="/retreat-builder" className="btn-gold text-xs">
                Start the Quiz
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET BANNER ── */}
      <section className="relative py-28 px-6 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1600&q=80"
            alt="New England coastline"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Retreat Vision Builder</p>
          <h2 className="section-title-light mb-6">
            Find Your Perfect
            <br />
            <em>New England Retreat</em>
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-cream/70 font-sans leading-relaxed max-w-xl mx-auto mt-6 mb-10">
            Answer 4 quick questions about your team and goals. We&apos;ll
            match you to the ideal destination and send you a custom itinerary
            lookbook — instantly.
          </p>
          <Link href="/retreat-builder" className="btn-gold">
            Build Your Retreat in 60 Seconds
          </Link>
        </div>
      </section>

      {/* ── PRICING ANCHOR ── */}
      <section className="py-24 px-6 bg-cream-dark">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-label mb-4">Transparent Pricing</p>
          <h2 className="section-title mb-6">
            From{" "}
            <span className="text-gold">$1,500</span> Per Person
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="text-navy/70 font-sans leading-relaxed max-w-2xl mx-auto mt-6 mb-10">
            Every retreat includes venue selection, transportation coordination,
            curated dining, facilitated excursions, and dedicated on-site
            support. No hidden fees. No surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Custom Quote
            </Link>
            <Link href="/retreat-builder" className="btn-outline">
              Get an Instant Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
