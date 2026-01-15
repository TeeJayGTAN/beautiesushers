"use client"
import Link from "next/link";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Footer from "../components/Footer"
import { brands } from "../data/brands";
import TestimonialsSlider from "../components/TestimonialsSlider";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

import { slugEventWorks } from "../data/works";

export default function WorkPage() {
  return (
    <div className="bg-white">
      <section className="works-hero flex items-center justify-center rounded px-4 h-[40vh] md:h-[50vh] bg-black/80 relative">
        <div className="absolute inset-0 bg-[url('/images/h12.jpeg')] bg-cover bg-center opacity-40"></div>
        <h1 className={`${playfairDisplay.className} text-4xl md:text-6xl z-10 text-white font-bold tracking-wide`}>
          Our Works
        </h1>
      </section>

      <div className="max-w-7xl mx-auto">
        <section className={`my-16 text-center mx-auto text-[#3a3a3a] px-4 max-w-4xl`}>
          <p className="text-lg md:text-xl leading-relaxed">
            Our expertise transcends borders. We have successfully staffed major international
            summits and luxury events across the globe, serving premium brands and
            governments from the UK, USA, Europe, Asia, and the Middle East. From
            West Africa to the exhibition halls of Dubai and Mumbai, our signature
            excellence remains constant.
          </p>
        </section>

        <hr className="mb-16 border-gray-200 mx-8" />

        <section className={`case-studies px-8 mb-20`}>
          <h2
            className={`${playfairDisplay.className} text-3xl md:text-4xl mb-12 text-center w-full mx-auto font-semibold text-[#171717]`}
          >
            Case Studies
          </h2>
          <div className="case-studies-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {slugEventWorks.map((eventWork, index) => (
              <div key={index} className="group cursor-pointer">
                <Link
                  className="flex flex-col gap-2 h-full"
                  href={`/works/${eventWork.slug}`}
                >
                  <div className="img-wrapperworks relative w-full h-80 overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                    <Image
                      fill
                      alt={eventWork.eventName}
                      src={`/images/${eventWork.eventImage}`}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 w-full bg-[#c19127]/95 backdrop-blur-sm text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center min-h-[80px]">
                      <p className="text-center font-medium text-sm md:text-base line-clamp-2">
                        {eventWork.eventName}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-[#171717] group-hover:text-[#c19127] transition-colors line-clamp-2 md:hidden">
                    {eventWork.eventName}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-16 border-gray-200 mx-8" />

        <section className="my-16 px-8">
          <div className={`heading ${playfairDisplay.className} text-3xl md:text-4xl text-center mb-10`}>
            Trusted by Clients Who Value Excellence
          </div>
          <div className="nations grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 text-center">
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">UK</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">USA</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Nigeria</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Dubai</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Egypt</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Uganda</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">South-Africa</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Malaysia</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Malawi</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">India</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Zimbabwe</div>
            <div className="nation p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors">Indonesia</div>
          </div>

          <div className="brands mt-16 grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, i) => {
              return (
                <div className="brand grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" key={i}>
                  <Image
                    className="w-[100px] h-auto object-contain"
                    src={`/images/${brand.imgUrl}`}
                    alt="brand logo"
                    height={200}
                    width={200}
                  />
                </div>
              );
            })}
          </div>
        </section>

        <hr className="my-16 border-gray-200 mx-8" />

        <div className="our-testimonials mb-20 px-4 md:px-8 w-full max-w-6xl mx-auto">
          <TestimonialsSlider />
        </div>
      </div>

      <Footer />
    </div>
  );
}
