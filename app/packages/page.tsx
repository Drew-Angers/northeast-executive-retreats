import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Corporate Retreat Destinations | New England Executive Off-Sites",
  description:
    "Five signature corporate retreat destinations across New England — Newport RI, Coastal Maine, The Berkshires, Boston MA, and Vermont. Luxury executive off-sites from $1,500 per person.",
};

export default function PackagesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=80"
            alt="New England destinations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Five Destinations</p>
          <h1 className="section-title-light mb-6">
            New England&apos;s Finest
            <br />
            <em>Corporate Retreat Settings</em>
          </h1>
          <div className="divider-gold mx-auto" />
          <p className="text-cream/70 font-sans leading-relaxed max-w-2xl mx-auto mt-6">
            From Newport&apos;s Gilded Age mansions to Vermont&apos;s mountain
            inns — each destination is curated to match a specific kind of
            team, goal, and moment.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto space-y-8">
          {destinations.map((dest, i) => (
            <Link
              key={dest.slug}
              href={`/packages/${dest.slug}`}
              className="group flex flex-col md:flex-row overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div
                className={`relative w-full md:w-2/5 h-72 md:h-auto overflow-hidden ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={dest.heroImage}
                  alt={dest.seoTitle}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div
                className={`flex-1 p-10 flex flex-col justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="section-label text-gold mb-2">{dest.state}</p>
                <h2 className="font-serif text-3xl text-navy mb-2">
                  {dest.name}
                </h2>
                <p className="text-navy/50 font-sans text-sm italic mb-4">
                  {dest.tagline}
                </p>
                <div className="w-8 h-px bg-gold mb-6" />
                <p className="text-navy/70 font-sans leading-relaxed mb-6 max-w-lg">
                  {dest.description}
                </p>
                <div className="flex items-center gap-6">
                  <span className="text-xs tracking-widest uppercase font-sans text-navy group-hover:text-gold transition-colors">
                    Explore {dest.name} →
                  </span>
                  <span className="text-xs text-navy/40 font-sans">
                    From ${dest.priceFrom.toLocaleString()}/person
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy text-center">
        <p className="section-label text-gold mb-4">Not Sure Where to Start?</p>
        <h2 className="section-title-light mb-6">
          Take the Retreat Vision Quiz
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="text-cream/70 font-sans max-w-xl mx-auto mt-6 mb-10">
          Answer 4 questions about your team and goals. Get an instant
          destination match and sample itinerary — no commitment required.
        </p>
        <Link href="/retreat-builder" className="btn-gold">
          Start the Quiz
        </Link>
      </section>
    </>
  );
}
