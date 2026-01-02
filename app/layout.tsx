import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const sourceSans3 = Source_Sans_3({
  display: 'swap',
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Beauties Ushers",
  description: "Beauty Ushers is an ushery agency specialized in hospitality...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
