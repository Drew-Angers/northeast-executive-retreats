import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { destinations, getDestination } from "@/lib/destinations";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dest = getDestination(params.slug);
  if (!dest) return {};
  return {
    title: dest.seoTitle,
    description: dest.seoDescription,
    keywords: dest.keywords,
  };
}

export default function DestinationPage({ params }: Props) {
  const dest = getDestination(params.slug);
  if (!dest) notFound();

  const others = destinations.filter((d) => d.slug !== dest.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={dest.heroImage}
            alt={dest.seoTitle}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40">
          <p className="section-label text-gold mb-3">{dest.state}</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream leading-tight mb-3">
            {dest.headline.split("\n").map((line, i) => (
              <span key={i}>
                {i === 1 ? <em>{line}</em> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="text-gold/80 font-sans text-sm italic mt-3">
            {dest.tagline}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-3">The Experience</p>
            <h2 className="font-serif text-3xl text-navy mb-6">
              {dest.name}, {dest.state}
            </h2>
            <div className="divider-gold" />
            <p className="text-navy/70 font-sans leading-relaxed mt-6 mb-6">
              {dest.longDescription}
            </p>
            <p className="text-navy/60 font-sans leading-relaxed">
              Starting from{" "}
              <strong className="text-gold font-sans">
                ${dest.priceFrom.toLocaleString()} per person
              </strong>
              , fully curated and managed end-to-end.
            </p>
          </div>

          <div>
            <p className="section-label mb-5">Signature Highlights</p>
            <ul className="space-y-4">
              {dest.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">—</span>
                  <span className="text-navy/70 font-sans text-sm leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Sample Itinerary</p>
            <h2 className="font-serif text-3xl text-navy">
              A Glimpse at Your{" "}
              <em>{dest.name} Retreat</em>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-navy/50 font-sans text-sm mt-4">
              Every retreat is custom-built around your team&apos;s goals.
              This is one example — we&apos;ll design yours from scratch.
            </p>
          </div>

          <div className="space-y-8">
            {dest.sampleItinerary.map((day, i) => (
              <div key={day.day} className="flex gap-8">
                <div className="flex-shrink-0 w-8 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-gold font-serif text-sm">{i + 1}</span>
                  </div>
                  {i < dest.sampleItinerary.length - 1 && (
                    <div className="flex-1 w-px bg-cream-dark mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-lg text-navy mb-3">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-gold mb-3">Ideal For</p>
              <h2 className="section-title-light mb-6">
                Is {dest.name} Right
                <br />
                <em>for Your Team?</em>
              </h2>
              <div className="divider-gold" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dest.idealFor.map((item) => (
                <div
                  key={item}
                  className="border border-cream/20 p-5 hover:border-gold/50 transition-colors"
                >
                  <p className="text-cream font-sans text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-cream text-center">
        <p className="section-label mb-4">Ready to Plan?</p>
        <h2 className="font-serif text-4xl text-navy mb-6">
          Start Your {dest.name} Retreat
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="text-navy/60 font-sans max-w-xl mx-auto mt-6 mb-10">
          Tell us about your team and we&apos;ll build a custom {dest.name}{" "}
          itinerary and quote — usually within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/retreat-builder" className="btn-primary">
            Build Your Retreat
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us Directly
          </Link>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="section-label mb-3 text-center">Explore More</p>
          <h2 className="font-serif text-3xl text-navy text-center mb-12">
            Other Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((d) => (
              <Link
                key={d.slug}
                href={`/packages/${d.slug}`}
                className="group relative overflow-hidden block"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={d.heroImage}
                    alt={d.seoTitle}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-gold text-xs tracking-widest uppercase font-sans mb-1">
                    {d.state}
                  </p>
                  <h3 className="font-serif text-xl text-cream">{d.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
