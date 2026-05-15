import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "Northeast Executive Retreats | Luxury Corporate Retreats in New England",
    template: "%s | Northeast Executive Retreats",
  },
  icons: {
    icon: [
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/lighthouse_logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-64.png",
    apple: "/favicon-192.png",
  },
  description:
    "Premium corporate retreats, executive off-sites, and team-building experiences across New England. Newport, Maine, Berkshires, Boston, and Vermont. From $1,500 per person.",
  keywords: [
    "corporate retreat New England",
    "executive retreat New England",
    "corporate offsite New England",
    "executive offsite New England",
    "corporate retreat Maine",
    "executive retreat Maine",
    "corporate retreat Newport Rhode Island",
    "executive retreat Newport",
    "corporate retreat Berkshires",
    "executive offsite Berkshires Massachusetts",
    "corporate retreat Boston",
    "executive retreat Boston Massachusetts",
    "corporate retreat Vermont",
    "executive offsite Vermont",
    "luxury corporate retreat New England",
    "team building New England",
    "corporate event planning New England",
    "destination management company New England",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Northeast Executive Retreats",
    title:
      "Northeast Executive Retreats | Luxury Corporate Retreats in New England",
    description:
      "Premium corporate retreats and executive off-sites across New England's most storied destinations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
