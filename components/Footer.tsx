import Link from "next/link";

const destinations = [
  { label: "Newport, Rhode Island", href: "/packages/newport" },
  { label: "Coastal Maine", href: "/packages/maine" },
  { label: "The Berkshires", href: "/packages/berkshires" },
  { label: "Boston, Massachusetts", href: "/packages/boston" },
  { label: "Vermont", href: "/packages/vermont" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Build Your Retreat", href: "/retreat-builder" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-cream/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex flex-col leading-none mb-6">
            <span className="font-serif text-lg text-cream font-medium tracking-wide">
              Northeast Executive
            </span>
            <span className="font-serif text-lg text-gold font-medium tracking-wide">
              Retreats
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-cream/60 mb-6">
            Premium corporate retreats and executive off-sites across New
            England&apos;s most storied destinations.
          </p>
          <div className="w-8 h-px bg-gold" />
        </div>

        {/* Destinations */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold font-sans font-medium mb-5">
            Destinations
          </p>
          <ul className="space-y-3">
            {destinations.map((d) => (
              <li key={d.label}>
                <Link
                  href={d.href}
                  className="text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {d.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold font-sans font-medium mb-5">
            Company
          </p>
          <ul className="space-y-3">
            {company.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="text-sm text-cream/60 hover:text-gold transition-colors"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold font-sans font-medium mb-5">
            Plan Your Retreat
          </p>
          <p className="text-sm text-cream/60 leading-relaxed mb-6">
            Ready to elevate your next corporate off-site? Let&apos;s start the
            conversation.
          </p>
          <Link href="/retreat-builder" className="btn-outline-cream text-xs">
            Get Started
          </Link>
        </div>
      </div>

      {/* SEO Rich Text Block */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-xs text-cream/30 leading-relaxed text-center max-w-4xl mx-auto">
            Northeast Executive Retreats specializes in luxury corporate
            retreats, executive off-sites, and team-building experiences across
            New England — including corporate retreats in Maine, executive
            off-sites in Newport Rhode Island, corporate retreats in the
            Berkshires Massachusetts, executive retreats in Boston, and
            corporate off-sites in Vermont. From strategic planning sessions to
            incentive travel and sales kickoffs, we design unforgettable New
            England corporate experiences for teams of 10 to 100+.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Northeast Executive Retreats. All
            rights reserved.
          </p>
          <p className="text-xs text-cream/30">
            In Partnership with Premier New England Luxury Firms
          </p>
        </div>
      </div>
    </footer>
  );
}
