"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getDestination } from "@/lib/destinations";

export default function ResultsContent() {
  const params = useSearchParams();
  const destSlug = params.get("dest") || "maine";
  const firstName = params.get("name") || "there";

  const dest = getDestination(destSlug) || getDestination("maine")!;

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero result */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dest.heroImage}
            alt={dest.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-16 pt-40">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3">
            Your Retreat Match, {firstName}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-3">
            {dest.name},
            <br />
            <em>{dest.state}</em>
          </h1>
          <p className="text-gold/80 font-sans text-sm italic">
            {dest.tagline}
          </p>
        </div>
      </section>

      {/* Match explanation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="section-label mb-3">Why {dest.name}?</p>
              <h2 className="font-serif text-3xl text-navy mb-6">
                Your Perfect Match
              </h2>
              <div className="divider-gold" />
              <p className="text-navy/70 font-sans leading-relaxed mt-6">
                {dest.longDescription}
              </p>
              <p className="text-navy/60 font-sans leading-relaxed mt-4">
                Starting from{" "}
                <strong className="text-gold">
                  ${dest.priceFrom.toLocaleString()} per person
                </strong>
                , fully curated end-to-end.
              </p>
            </div>

            <div>
              <p className="section-label mb-5">What&apos;s Included</p>
              <ul className="space-y-4">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                    <span className="text-navy/70 font-sans text-sm leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Sample Itinerary</p>
            <h2 className="font-serif text-3xl text-navy">
              3 Days in <em>{dest.name}</em>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>
          <div className="space-y-8">
            {dest.sampleItinerary.map((day, i) => (
              <div key={day.day} className="bg-white p-8 border-l-2 border-gold">
                <h3 className="font-serif text-lg text-navy mb-4">
                  {day.day}
                </h3>
                <ul className="space-y-2">
                  {day.activities.map((a) => (
                    <li
                      key={a}
                      className="text-navy/60 font-sans text-sm flex items-start gap-2"
                    >
                      <span className="text-gold mt-0.5">·</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy text-center">
        <p className="section-label text-gold mb-4">Ready to Make It Official?</p>
        <h2 className="section-title-light mb-6">
          Let&apos;s Build Your
          <br />
          <em>Custom {dest.name} Retreat</em>
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="text-cream/60 font-sans max-w-xl mx-auto mt-6 mb-10">
          Share a few more details and our team will put together a fully
          custom proposal — usually within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-gold">
            Request a Custom Proposal
          </Link>
          <Link href={`/packages/${dest.slug}`} className="btn-outline-cream">
            Explore {dest.name} in Detail
          </Link>
        </div>
      </section>

      {/* Retake quiz */}
      <div className="py-8 px-6 bg-cream text-center">
        <Link
          href="/retreat-builder"
          className="text-navy/40 text-xs tracking-widest uppercase font-sans hover:text-navy/70 transition-colors"
        >
          ← Retake the Quiz
        </Link>
      </div>
    </div>
  );
}
