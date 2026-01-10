
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Source_Sans_3,
} from "next/font/google";
import "../globals.css";
// import Header from "./components/Header";
import Image from "next/image";
import Link from "next/link";

const sourceSans3 = Source_Sans_3({
  display: "swap",
  subsets: ["latin"],
});

//seo
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works | Event Ushering Projects & Experience",
  description:
    "Explore our portfolio of successful weddings, corporate events, conferences, and special occasions handled by Beauties Ushers.",
};
export default function WorkRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} antialiased`}>
        {/* <script
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
        /> */}
        {/* <Header /> */}
        {children}
        {/* <div className="w-[100px] h-fit fixed bottom-4 right-2">
          <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
            {" "}
            <Image
              width={9999}
              height={9999}
              alt="whatsapp pic"
              src={"/images/whatsapp.png"}
            />{" "}
          </Link>
        </div> */}
      </body>
    </html>
  );
}
