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
import { slugEventWorks } from "../data/works";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

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
      {slugEventWorks.map((slide, i) => {
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
