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
  title: "Beauties Ushers",
  description:
    "Beauty Ushers is an ushery agency specialized in hospitality...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans3.className} antialiased`}>
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
