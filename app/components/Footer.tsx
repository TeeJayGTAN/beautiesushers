"use client";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaCalendarCheck } from "react-icons/fa";
import Link from "next/link";
import { address } from "../data/address";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="px-8 bg-amber-50 pt-16 pb-12 text-[#171717]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-start">
        {/* Column 1: Logo & About */}
        <div className="footercol flex flex-col gap-6">
          <div className="footerlogo w-42">
            <Image
              className="w-full h-full object-cover -mt-1"
              src={"/images/busherslogo.png"}
              width={120}
              height={120}
              alt="logo"
            />
          </div>
          <div className="writeup text-base text-[#3a3a3a] leading-relaxed">
            Excellence knows no borders. As a leading international event staffing agency,
            we bring poise, warmth, and precision to events across Africa and Asia.
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footercol2 flex flex-col gap-6">
          <h4 className={`${playfairDisplay.className} text-xl font-semibold`}>Quick Links</h4>
          <ul className="text-base text-[#3a3a3a] flex flex-col gap-3">
            <li>
              <Link href="/about" className="hover:text-[#c19127] transition-colors">About</Link>
            </li>
            <li>
              <Link href="/works" className="hover:text-[#c19127] transition-colors">Our Works</Link>
            </li>
            <li>
              <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services." className="hover:text-[#c19127] transition-colors">
                Book Us Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Address */}
        <div className="footercol3 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h4 className={`${playfairDisplay.className} text-xl font-semibold`}>Contact Us</h4>
            <ul className="text-base text-[#3a3a3a] flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#c19127]" />
                <span>+234 703 687 1870</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#c19127]" />
                <span>beautiesushers@yahoo.co.uk</span>
              </li>
              <li>
                <Link
                  href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services."
                  className="flex items-center gap-3 hover:text-[#c19127] transition-colors underline"
                >
                  <FaWhatsapp className="text-[#c19127] text-lg" />
                  <span>Chat On Whatsapp</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            {address.map((addr, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className={`${playfairDisplay.className} text-lg font-medium border-b border-[#c19127] w-fit pb-1`}>
                  {addr.officeName}
                </h4>
                <ul className="text-base text-[#3a3a3a] mt-2 flex flex-col gap-2">
                  <li className="mb-1 flex items-start gap-3">
                    <FaMapMarkerAlt className="text-[#c19127] mt-1 shrink-0" />
                    <span>{addr.address}</span>
                  </li>
                  {addr.phone && (
                    <li className="flex items-center gap-3">
                      <FaPhoneAlt className="text-[#c19127] shrink-0" />
                      <a href={`tel:${addr.phone}`} className="hover:text-[#c19127]">{addr.phone}</a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <h4 className={`${playfairDisplay.className} text-lg font-medium`}>Follow Us</h4>
            <ul className="social links flex gap-4">
              <li>
                <FaFacebook size={24} className="hover:text-[#c19127] cursor-pointer transition-colors" />
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/direct/new/?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.%20Please%20share%20more%20details.%20Thank%20you.&username=beauties_ushers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} className="hover:text-[#c19127] cursor-pointer transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/beauties-ushers-49b72483"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} className="hover:text-[#c19127] cursor-pointer transition-colors" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Newsletter/Quote */}
        <div className="footercol4">
          <div className="flex flex-col gap-6">
            <h4 className={`${playfairDisplay.className} text-xl font-semibold`}>
              Request a Quote
            </h4>
            <p className="text-base text-[#3a3a3a] leading-relaxed">
              Our calendar fills up quickly. Request a proposal today to secure your dates.
            </p>
            <div className="cta-btn text-base font-medium py-3 px-6 w-fit flex items-center justify-center rounded-full text-white bg-[#c19127] hover:bg-[#a67c1f] transition-colors shadow-md">
              <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services." className="flex items-center gap-2">
                <FaCalendarCheck />
                <span>Start Your Booking</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-8 text-center">
        <span className="text-sm text-[#3a3a3a]">
          Copyright 2025 Beauties Ushers. All Rights Reserved |{" "}
          <span className="opacity-70 cursor-pointer hover:opacity-100">Privacy Policy </span>
        </span>
      </div>
    </footer>
  );
}
