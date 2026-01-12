"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Playfair_Display } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { testimonials } from "../data/testimonials";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const playfairDisplay = Playfair_Display({
    display: "swap",
    subsets: ["latin"],
});

export default function TestimonialsSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{ clickable: true }}
            className="pb-12"
        >
            {testimonials.map((testimony, i) => {
                return (
                    <SwiperSlide key={i} className="h-auto">
                        {/* Mobile View: Blur + Contain Style */}
                        <div className="md:hidden relative h-[60vh] rounded-xl overflow-hidden bg-black">
                            {/* Background: Blurred */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    className="w-full h-full object-cover blur-xl opacity-60 scale-110"
                                    src={`/images/${testimony.img}`}
                                    alt="testimonial background"
                                    fill
                                />
                            </div>

                            {/* Foreground: Contained */}
                            <div className="relative w-full h-full z-10">
                                <Image
                                    className="w-full h-full object-contain"
                                    src={`/images/${testimony.img}`}
                                    alt="testimonial image"
                                    fill
                                />
                            </div>

                            {/* Overlay Content */}
                            <div className="absolute inset-x-0 bottom-0 z-20 bg-black/70 backdrop-blur-md p-6 pt-10 flex flex-col justify-end text-white text-center">
                                <div className="stars flex gap-1 mb-3 justify-center">
                                    {[...Array(5)].map((_, i) => (
                                        <IoIosStar key={i} size={18} color="gold" />
                                    ))}
                                </div>
                                <p className="mb-4 text-sm leading-relaxed opacity-95">"{testimony.clientTestimony}"</p>
                                <div className={`${playfairDisplay.className} text-lg font-bold text-[#c19127]`}>
                                    {testimony.clientName}
                                </div>
                                <div className="text-xs font-medium uppercase tracking-wider opacity-80 mt-1">
                                    {testimony.clientDesignation}
                                </div>
                            </div>
                        </div>

                        {/* Desktop View: Card Style */}
                        <div className="hidden md:flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-16 h-16 shrink-0">
                                    <Image
                                        className="rounded-full object-cover"
                                        src={`/images/${testimony.img}`}
                                        alt={testimony.clientName}
                                        fill
                                    />
                                </div>
                                <div>
                                    <div className={`${playfairDisplay.className} text-lg font-bold text-gray-900`}>
                                        {testimony.clientName}
                                    </div>
                                    <div className="text-sm text-[#c19127] font-medium">
                                        {testimony.clientDesignation}
                                    </div>
                                </div>
                            </div>

                            <div className="stars flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <IoIosStar key={i} size={18} color="#c19127" />
                                ))}
                            </div>

                            <p className="text-gray-600 text-base leading-relaxed flex-grow">
                                "{testimony.clientTestimony}"
                            </p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
