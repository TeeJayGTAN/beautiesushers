"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Playfair_Display } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

const slideEvents = [
  {
    eventName: "9th Annual Middle East Water Week Conference Exhibition 2025",
    eventLocation: "Kempinski Al Othman Hotel, Alkobar",
    eventImage: "h1.jpeg",
  },
  {
    eventName: "The Solar Week 2023",
    eventLocation: "Raddison Blu Cairo, Egypt",
    eventImage: "h2.jpeg",
  },
  {
    eventName: "LDC CIO Summit 2024",
    eventLocation: "Safari Park Hotel & Casino, Nairobi",
    eventImage: "h3.jpeg",
  },
  {
    eventName:
      "5th Edition Connected Africa Summit & 12 Edition Connected Banking Summit 2024",
    eventLocation: "Maslow Hotel Johannesburg, South Africa",
    eventImage: "h4.jpeg",
  },
  {
    eventName: "No Code Innovation Summit 2025",
    eventLocation: "Narcissus The Royal Hotel Riyadh, Saudi Arabia",
    eventImage: "h5.jpeg",
  },
  {
    eventName: "Global Government Cloud Summit 2025",
    eventLocation: "Museum of the Future, Dubai",
    eventImage: "h6.jpeg",
  },
  {
    eventName: "Global Aeronautical Information Management Conference 2025",
    eventLocation: "Transcorp Hilton, Abuja",
    eventImage: "h7.jpeg",
  },
  {
    eventName: "India Nuclear Business Platform 2023",
    eventLocation: "Hilton, Mumbai",
    eventImage: "h8.jpeg",
  },
  {
    eventName: "African Bible Leadership initiative",
    eventLocation: "Naf conference center abuja",
    eventImage: "h9.jpeg",
  },
  {
    eventName:
      "48th agm and 47th Scientific Conference of OPHTHALMOLOGical society of Nigeria",
    eventLocation: "Radisson Blu Lagos",
    eventImage: "h10.jpeg",
  },
  {
    eventName: "ACL'S Afri-Caribbean Investment Summit, 2025",
    eventLocation: "Transcorp Hilton, Abuja",
    eventImage: "h11.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h12.jpeg",
  },
  {
    eventName: "Regtech Africa Conference & Awards 2025",
    clientName: "Oriental Hotel, Lagos",
    eventImage: "h13.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h14.jpeg",
  },
  {
    eventName: "Water africa and East africa Building and Construction",
    eventLocation: "Serena hotel kigali",
    eventImage: "h15.jpeg",
  },
  {
    eventName: "World Milk Day 2025",
    clientName: "Nicon Luxury, Abuja",
    eventImage: "h16.jpeg",
  },
  {
    eventName:
      "International Exhibition of Pharmaceutical Medical & Healthcare Industry in Ghana 2022",
    eventLocation: "Accra International Conference Centre, Ghana",
    eventImage: "h17.jpeg",
  },
  {
    eventName: "Nigeria institute of public relations 2022 AGM/citizen summit",
    eventLocation: "BAT INTERNATIONAL CONFERENCE CENTER  ABUJA",
    eventImage: "h18.jpeg",
  },
  {
    eventName: "Society of Actuaries(SOA) Regional Conference 2024",
    eventLocation: "Crown Plaza, Riyadh",
    eventImage: "h19.jpeg",
  },
  {
    eventName: "African hepatitis summit 2023",
    eventLocation: "Nicon luxury abuja",
    eventImage: "h20.jpeg",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slideEvents.map((slide, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="slide relative w-full h-[45vh] md:h-[85vh] bg-black overflow-hidden">
              {/* Background Layer: Blurred & Covered (Desktop Only) */}
              <div className="hidden md:block absolute inset-0 w-full h-full">
                <Image
                  className="w-full h-full object-cover blur-2xl opacity-60 scale-110"
                  src={`/images/${slide.eventImage}`}
                  alt="hero background"
                  fill
                  priority={i === 0}
                />
              </div>

              {/* Foreground Layer: Cover on Mobile, Contain on Desktop */}
              <div className="relative w-full h-full z-10">
                <Image
                  className="w-full h-full object-cover object-top md:object-contain md:object-center"
                  src={`/images/${slide.eventImage}`}
                  alt="hero image"
                  fill
                  priority={i === 0}
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-x-0 bottom-[10%] z-20 pointer-events-none">
                <div
                  className={`mx-auto w-[90%] md:w-[60%] lg:w-[50%] text-center text-white bg-black/60 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl ${playfairDisplay.className} pointer-events-auto`}
                >
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    {slide.eventName}
                  </h2>
                  <span className="opacity-95 text-base md:text-xl font-light block">
                    {slide.eventLocation}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
