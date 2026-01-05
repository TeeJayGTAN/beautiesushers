import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";

const sourceSans3 = Source_Sans_3({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Beauties Ushers | Professional Ushering & Event Staffing Services",
    template: "%s | Beauties Ushers",
  },
  description:
    "Beauties Ushers is a professional ushering and event staffing company delivering premium guest management for weddings, corporate events, conferences, and special occasions.",
  keywords: [
    "ushering services",
    "event ushers",
    "professional ushers",
    "event staffing company",
    "wedding ushers",
    "corporate event ushers",
    "ushers in Lagos",
    "ushers in Abuja",
    "ushers in Africa",
  ],
  metadataBase: new URL("https://beautiesushers.com"),
  openGraph: {
    title: "Beauties Ushers",
    description:
      "Professional ushering and event staffing services you can trust.",
    url: "https://beautiesushers.com",
    siteName: "Beauties Ushers",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beauties Ushers – Professional Ushering Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauties Ushers",
    description:
      "Premium ushering and event staffing services for all event types.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Beauties Ushers",
              url: "https://beautiesushers.com",
              logo: "https://beautiesushers.com/images/busherslogo.png",
              sameAs: [
                "https://www.instagram.com/beautiesushers",
                "https://www.facebook.com/beautiesushers",
              ],
            }),
          }}
        />
        <Header />
        {children}
        <div className="w-[100px] h-fit fixed bottom-4 right-2">
          <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
            {" "}
            <Image
              width={9999}
              height={9999}
              alt="whatsapp pic"
              src={"/images/whatsapp.png"}
            />{" "}
          </Link>
        </div>
      </body>
    </html>
  );
}
