"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Footer from "../components/Footer";

// Icons
import {
  FaUsers,
  FaBullseye,
  FaHandshake,
  FaCrown,
  FaCheckCircle,
  FaBriefcase,
  FaGlobe,
  FaHandsHelping,
  FaChartBar,
  FaBullhorn,
  FaAward,
  FaRocket,
  FaBuilding,
  FaGlassCheers,
} from "react-icons/fa";
import { MdEventAvailable, MdSecurity } from "react-icons/md";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export default function AboutPage() {
  const galleryImages = [
    "extra1.jpeg",
    "extra2.jpeg",
    "extra3.jpeg",
    "extra4.jpeg",
    "extra5.jpeg",
    "extra6.jpeg",
    "extra7.jpeg",
    "extra8.jpeg",
    "extra9.jpeg",
    "extra10.jpeg",
    "extra11.jpeg",
    "extra12.jpeg",
    "extra13.jpeg",
    "extra14.jpeg",
    "extra15.jpeg",
    "extra16.jpeg",
    "h1.jpeg",
    "h3.jpeg",
    "h4.jpeg",
    "h6.jpeg",
    "h7.jpeg",
    "h10.jpeg",
    "h11.jpeg",
    "h16.jpeg",
  ];

  return (
    <div>
      {/* HERO */}
      <section className="relative flex items-center justify-center h-[45vh] md:h-[55vh] bg-black">
        <Image
          src="/images/extra3.jpeg"
          alt="Beauties Ushers and Hostesses professional event ushers"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1
            className={`${playfairDisplay.className} text-white text-3xl md:text-4xl mb-3`}
          >
            Setting the Global Standard in Event Staffing
          </h1>
          <p className="text-white text-sm md:text-base">
            The premier choice for luxury weddings, corporate summits, and international conferences across Africa and Asia.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 my-14 text-center text-[#3a3a3a]">
        <p className="text-base md:text-lg leading-relaxed">
          Beauties Ushers & Hostesses is a world-class event support agency specializing in
          high-profile corporate events, international summits, diplomatic gatherings, and
          luxury private celebrations. Operating seamlessly across <strong>West, East, South, and North Africa, as well as Asia</strong>,
          we bring a signature blend of elegance, structure, and military-precision coordination
          that guarantees your event is nothing short of spectacular.
        </p>
      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-4 my-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <FaUsers size={28} className="text-[#c19127]" />
            <p className="font-medium text-sm md:text-base">
              Professional Team
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FaHandshake size={28} className="text-[#c19127]" />
            <p className="font-medium text-sm md:text-base">
              Client-Focused Service
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <FaCrown size={28} className="text-[#c19127]" />
            <p className="font-medium text-sm md:text-base">Luxury Standards</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MdEventAvailable size={28} className="text-[#c19127]" />
            <p className="font-medium text-sm md:text-base">
              Global Experience
            </p>
          </div>
        </div>
      </section>

      <hr className="opacity-30" />

      {/* VISION & MISSION */}
      <section className="max-w-6xl mx-auto px-4 my-16 grid md:grid-cols-2 gap-8">
        <div className="p-6 md:p-8 rounded bg-[#faf7f2]">
          <div className="flex items-center gap-3 mb-3">
            <FaBullseye className="text-[#c19127]" />
            <h2 className={`${playfairDisplay.className} text-xl md:text-2xl`}>
              Our Vision
            </h2>
          </div>
          <p className="text-[#3a3a3a] text-sm md:text-base">
            To be the undisputed global leader in event staffing, recognized internationally
            for elevating the standard of hospitality and guest experience at the world's most
            prestigious gatherings.
          </p>
        </div>
        <div className="p-6 md:p-8 rounded bg-[#faf7f2]">
          <div className="flex items-center gap-3 mb-3">
            <FaCheckCircle className="text-[#c19127]" />
            <h2 className={`${playfairDisplay.className} text-xl md:text-2xl`}>
              Our Mission
            </h2>
          </div>
          <p className="text-[#3a3a3a] text-sm md:text-base">
            We deploy exceptionally trained personnel and strategic execution plans to
            deliver a seamless, five-star experience that enhances your brand image
            and leaves a lasting impression of excellence on every guest.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-4 my-16">
        <h2
          className={`${playfairDisplay.className} text-xl md:text-2xl text-center mb-10`}
        >
          Our Professional Services
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-[#3a3a3a] text-sm md:text-base">
          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaBriefcase className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Corporate Events & Business Meetings</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaGlobe className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>International Conferences & Summits</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaHandsHelping className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Fundraisers & Formal Dinner Galas</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaChartBar className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Exhibitions & Trade Shows</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaBullhorn className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Media & PR Events</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaAward className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Award Ceremonies & Staff Recognition</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaRocket className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Product Launches</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaBuilding className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Ground Breakings & Grand Openings</span>
          </li>

          <li className="group flex items-start gap-4 transition-all duration-300 ease-out hover:translate-x-1">
            <FaGlassCheers className="text-[#c19127] text-xl mt-1 transition-transform duration-300 group-hover:scale-110" />
            <span>Private Events & Celebrations</span>
          </li>
        </ul>
      </section>

      {/* GALLERY */}
      <section className="my-20 px-4">
        <h2
          className={`${playfairDisplay.className} text-xl md:text-2xl text-center mb-8`}
        >
          Our Work in Action
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          className="max-w-6xl mx-auto"
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[220px] md:h-[280px] rounded overflow-hidden group">
                <Image
                  src={`/images/${img}`}
                  alt="Beauties Ushers event gallery"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <Link href="/works" className="text-[#c19127] font-medium">
            View All Our Works →
          </Link>
        </div>
      </section>

      {/* FUNCTIONS */}
      <section className="bg-[#111] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`${playfairDisplay.className} text-xl md:text-2xl text-center mb-10`}
          >
            What Our Ushers Do
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm md:text-base">
            <p className="flex gap-2 items-start">
              <MdSecurity className="text-[#c19127] mt-1" /> Guest safety and
              venue coordination
            </p>
            <p className="flex gap-2 items-start">
              <MdSecurity className="text-[#c19127] mt-1" /> Guest registration
              and accreditation
            </p>
            <p className="flex gap-2 items-start">
              <MdSecurity className="text-[#c19127] mt-1" /> Seating assistance
              and crowd control
            </p>
            <p className="flex gap-2 items-start">
              <MdSecurity className="text-[#c19127] mt-1" /> Microphone and Q&A
              coordination
            </p>
            <p className="flex gap-2 items-start">
              <MdSecurity className="text-[#c19127] mt-1" /> Distribution of
              event materials
            </p>
            <p className="flex gap-2 items-start">
              <MdSecurity className="text-[#c19127] mt-1" /> Full on-ground
              support till close
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-[#b0841f] via-[#c19127] to-[#e4b350] text-white text-center py-24 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className={`${playfairDisplay.className} text-2xl md:text-4xl font-bold mb-6 leading-tight drop-shadow-sm`}>
            Let’s Make Your Event Exceptional
          </h2>
          <p className="mb-10 text-base md:text-lg font-light opacity-95 max-w-2xl mx-auto leading-relaxed">
            Partner with Beauties Ushers & Hostesses for professional ushering,
            seamless coordination, and a premium guest experience that leaves a lasting legacy.
          </p>
          <Link
            href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services."
            className="inline-block bg-white text-[#c19127] text-lg font-semibold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Book Our Ushers
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
