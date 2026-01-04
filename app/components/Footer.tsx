"use client";
import Image from "next/image";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { address } from "../data/address";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="px-4 grid grid-cols-1 gap-8 bg-amber-50 pt-12 justify-items-start text-start text-[#171717]">
      <div className="footercol flex flex-col gap-4">
        <div className="footerlogo w-42 px-4">
          <Image
            className="w-full h-full object-cover -mt-1"
            src={"/images/busherslogo.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="writeup text-base text-[#3a3a3a] max-w-xs">
          At Beauties Ushers, we understand that first impressions matter. Our
          team of carefully selected and professionally trained ushers bring
          poise, warmth, and attention to detail to every event.
        </div>
      </div>
      <div className="footercol2 flex flex-col gap-4">
        <h4 className={`${playfairDisplay.className} text-lg`}>Quick Links</h4>
        <ul className="text-base text-[#3a3a3a] ">
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/works">Our Works</Link>
          </li>
          <li>
            <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
              Book Us Now
            </Link>
          </li>
        </ul>
      </div>
      <div className="footercol3 flex flex-col gap-8">
        <div className=" flex flex-col gap-4">
          <h4 className={`${playfairDisplay.className} text-lg`}>Contact Us</h4>
          <ul className="text-base text-[#3a3a3a] max-w-xs">
            <li>+234 802 432 3232</li>
            <li>beautiesushers@yahoo.co.uk</li>
            <li>
              <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
                Chat On Whatsapp
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          {address.map((address) => (
            <>
              <h4 className={`${playfairDisplay.className} text-lg`}>
                Address | {address.officeName}
              </h4>
              <ul className="text-base text-[#3a3a3a] max-w-xs">
                <li>{address.address}</li>
                <li>
                  {address.phone && (
                    <a href={`tel:${address.phone}`}>{address.phone}</a>
                  )}
                </li>
                <li>
                  <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
                    Chat On Whatsapp
                  </Link>
                </li>
              </ul>
            </>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h4 className={`${playfairDisplay.className} text-lg`}>Follow Us</h4>
          <ul className="social links flex gap-4">
            <li>
              <FaFacebook size={28} color="" />
            </li>
            <li>
              <FaInstagram size={28} color="" />
            </li>
            <li>
              <FaLinkedin size={28} color="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="footercol4 pb-12">
        <div className="flex flex-col gap-4">
          <h4 className={`${playfairDisplay.className} text-lg`}>
            Request a Quote
          </h4>
          <p className="text-base max-w-xs">
            Request a quote for our ushers and we would be in touch immediately
          </p>
          <div className="cta-btn text-base font-medium mt-2 py-3 px-5 w-fit flex items-center justify-center rounded text-white bg-[#c19127]">
            <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
              Book Our Ushers
            </Link>
          </div>
        </div>
      </div>
      <span className="py-4 text-xs w-full text-center mx-auto text-[#3a3a3a]">
        Copyright 2025 Beauties Ushers. All Rights Reserved |{" "}
        <span className="opacity-70">Privacy Policy </span>{" "}
      </span>
    </footer>
  );
}
