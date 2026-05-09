import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Northeast Executive Retreats",
  description:
    "Northeast Executive Retreats is a specialist B2B corporate retreat and executive off-site company serving New England, in partnership with Blue Lobster Travel Co.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1600&q=80"
            alt="New England"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="section-label text-gold mb-4">Our Story</p>
          <h1 className="section-title-light mb-6">
            Built for the Gap in
            <br />
            <em>New England&apos;s Market</em>
          </h1>
          <div className="divider-gold mx-auto" />
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-16">
            <div className="md:col-span-3">
              <p className="section-label mb-3">What We Do</p>
              <h2 className="font-serif text-3xl text-navy mb-6">
                The B2B Experience Partner
                <br />
                <em>New England Was Missing</em>
              </h2>
              <div className="divider-gold" />
              <div className="space-y-5 mt-6 text-navy/70 font-sans leading-relaxed">
                <p>
                  Google &ldquo;corporate retreat New England&rdquo; and you get
                  hotel sales pages and fragmented event venues. What you
                  don&apos;t get is a dedicated partner who designs the entire
                  experience — from the first inquiry to the farewell brunch.
                </p>
                <p>
                  Northeast Executive Retreats was built to fill that gap. We
                  specialize exclusively in corporate retreats, executive
                  off-sites, and leadership experiences across New
                  England&apos;s most storied destinations — Newport, Maine, the
                  Berkshires, Boston, and Vermont.
                </p>
                <p>
                  Unlike hotel sales teams, we don&apos;t start with a room
                  block. We start with your team&apos;s goals, your
                  culture, and the outcomes you need. Then we design the
                  experience around that — venues, transportation, curated
                  dining, facilitated excursions, and on-site support, all
                  fully managed.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="bg-navy p-8">
                <p className="section-label text-gold mb-4">By the Numbers</p>
                <div className="space-y-6">
                  {[
                    { stat: "5", label: "Signature New England Destinations" },
                    { stat: "10+", label: "Team Members, Any Size" },
                    { stat: "$1,500", label: "Starting Price Per Person" },
                    { stat: "24hr", label: "Custom Proposal Turnaround" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-serif text-3xl text-gold">
                        {item.stat}
                      </p>
                      <p className="text-cream/60 font-sans text-sm mt-1">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Blue Lobster Travel Co. partnership"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="section-label mb-3">Our Execution Partner</p>
              <h2 className="font-serif text-3xl text-navy mb-6">
                In Partnership with
                <br />
                <em>Blue Lobster Travel Co.</em>
              </h2>
              <div className="divider-gold" />
              <p className="text-navy/70 font-sans leading-relaxed mt-6 mb-6">
                Every Northeast Executive Retreats experience is executed in
                partnership with{" "}
                <a
                  href="https://bluelobstertravelco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-dark transition-colors"
                >
                  Blue Lobster Travel Co.
                </a>{" "}
                — New England&apos;s premier destination management company.
              </p>
              <p className="text-navy/70 font-sans leading-relaxed mb-6">
                This partnership means your retreat is backed by deep regional
                relationships with the finest hotels, transportation operators,
                private venues, and experience providers across the Northeast —
                access that no individual corporate travel planner can match.
              </p>
              <a
                href="https://bluelobstertravelco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs"
              >
                Visit Blue Lobster Travel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-navy text-center">
        <p className="section-label text-gold mb-4">Let&apos;s Work Together</p>
        <h2 className="section-title-light mb-6">
          Ready to Plan Your
          <br />
          <em>New England Retreat?</em>
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="text-cream/60 font-sans max-w-xl mx-auto mt-6 mb-10">
          Start with our 60-second Retreat Vision Quiz, or reach out directly.
          We&apos;ll have a custom proposal back to you within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/retreat-builder" className="btn-gold">
            Build Your Retreat
          </Link>
          <Link href="/contact" className="btn-outline-cream">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
