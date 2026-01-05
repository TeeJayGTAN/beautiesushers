"use client";
import Image from "next/image";
import Footer from "./components/Footer"
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Professional Ushering Services for Corporate Events & Weddings",
  description:
    "Beauties Ushers provides professional ushering services for weddings, corporate events, conferences, and special occasions with excellence and attention to detail.",
};

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required module styles
import "swiper/css/autoplay";

// Import modules
import { Autoplay } from "swiper/modules";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

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

const services = [
  {
    img: "h8.jpeg",
    title: "Conference Assistants",
    text: "We know the importance of projecting a positive and professional corporate image of your brand to delegates and speakers. Our experienced and professional Conference Assistants would manage the efficient running of registration, badge scanning, etc. at your conference.",
  },
  {
    img: "h9.jpeg",
    title: "Hostesses",
    text: "Want to give your guests and clients a VIP and professional impression? Our Hostesses are not only beautiful, but friendly, professional, proactive and attentive to details. They support both the hospitality and the logistics of your event, welcoming guests and ensuring they’re well catered for.",
  },
  {
    img: "h10.jpeg",
    title: "Exhibition Staff",
    text: "Looking to generate new leads at exhibitions or tradeshows? Our intelligent Exhibition Staff would interact with show visitors, distribute samples and marketing material and capture data of prospects. With English and French speaking staff, they orient prospects at your booth on your products and offers.",
  },
  {
    img: "h11.jpeg",
    title: "Multilingual Staff",
    text: "Want to ensure smooth communication between you and the attendants at international conferences, trade shows and product launches? Our multilingual event staff would welcome and communicate with guests in French, German, Spanish and Russian, in addition to English language.",
  },
];

import { testimonials } from "./data/testimonials";

import Link from "next/link";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { brands } from "./data/brands";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`relative ${isMenuOpen ? "bg-overlay-openedmenu" : ""}`}>
      <main>
        <section className="hero">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500, // Delay between transitions in ms
              disableOnInteraction: false, // Autoplay won't be disabled after user interaction
              pauseOnMouseEnter: true, // Pause autoplay when mouse enters swiper container
            }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {slideEvents.map((slide, i) => {
              return (
                <SwiperSlide>
                  <div className="slide">
                    <div className="relative slide-img mx-auto w-full md:w-[80vw] md:h-[80vh] h-[40vh] rounded">
                      <Image
                        className="w-full h-full rounded object-cover object-positioning"
                        src={`/images/${slide.eventImage}`}
                        alt="hero image"
                        width={9999}
                        height={9999}
                      />
                    </div>
                    <div
                      className={`slide-text text-lg w-full md:w-[80vw] text-center absolute bottom-[10%] left-1/2 transform -translate-x-1/2  text-white bg-[rgba(0,0,0,0.55)] p-5  ${playfairDisplay.className}`}
                    >
                      {slide.eventName}
                      <br />
                      <span className="opacity-95 text-base">
                        {slide.eventLocation}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section id="about" className="px-8 my-20">
          <div className="img-welcome mb-8 rounded overflow-hidden">
            <Image
              className="w-full h-full "
              src={`/images/h19.jpeg`}
              alt="welcome pic"
              height={9999}
              width={9999}
            />
          </div>
          <div
            className={`heading ${playfairDisplay.className} text-2xl text-[#171717] `}
          >
            Where Beauty Meets Professionalism
          </div>
          <div className={`body-text mt-5 text-[#3a3a3a]`}>
            At Beauties Ushers, we understand that first impressions matter. Our
            team of carefully selected and professionally trained ushers bring
            poise, warmth, and attention to detail to every event. Whether it’s
            a grand wedding, corporate function, church program, or private
            celebration, we ensure your guests feel welcomed, guided, and valued
            from start to finish
          </div>
          <div className="cta-btn text-base font-medium mt-5 py-3 px-5 w-fit flex items-center justify-center rounded text-white bg-[#c19127]">
            <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">Book Our Ushers</Link>
          </div>
        </section>
        <section className="flex flex-col items-center w-full justify-center gap-y-5">
          <div
            className={` heading ${playfairDisplay.className} text-2xl mb-5`}
          >
            Our Event Staffing Services
          </div>
          <div className="services flex flex-col items-center text-center w-[80%] gap-y-10">
            {services.map((service, i) => {
              return (
                <div className="services-card flex flex-col items-center text-center gap-y-2">
                  <div className="imgg w-full">
                    <Image
                      className=" rounded w-full h-full"
                      src={`/images/${service.img}`}
                      alt="welcome pic"
                      height={9999}
                      width={9999}
                    />
                  </div>
                  <div
                    className={`text-[#171717] text-lg ${playfairDisplay.className}`}
                  >
                    {service.title}
                  </div>
                  <div className="talk text-sm text-[#3a3a3a]">
                    {service.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cta-btn text-base font-medium mt-5 py-3 px-5 w-fit flex items-center justify-center rounded text-white bg-[#c19127]">
            <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">Book Our Ushers</Link>
          </div>
        </section>
        <section className="my-20 px-8">
          <div className={`heading ${playfairDisplay.className} text-2xl`}>
            Trusted by Clients Who Value Excellence
          </div>
          <div className="nations grid grid-cols-3 gap-2 mt-5">
            <div className="nation">UK</div>
            <div className="nation">USA</div>
            <div className="nation">Nigeria</div>
            <div className="nation">Dubai</div>
            <div className="nation">Egypt</div>
            <div className="nation">Uganda</div>
            <div className="nation">South-Africa</div>
            <div className="nation">Malaysia</div>
            <div className="nation">Malawi</div>
            <div className="nation">India</div>
            <div className="nation">Zimbabwe</div>
            <div className="nation">Indonesia</div>
          </div>
          <div className="brands mt-8 grid grid-cols-3 gap-4">
            {brands.map((brand) => {
              return (
                <div className="brand">
                  <Image
                    className="w-[80px]"
                    src={`/images/${brand.imgUrl}`}
                    alt="welcome pic"
                    height={9999}
                    width={9999}
                  />
                </div>
              );
            })}
          </div>
          <div className="our-testimonials mt-14">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 2500, // Delay between transitions in ms
                disableOnInteraction: false, // Autoplay won't be disabled after user interaction
                pauseOnMouseEnter: true, // Pause autoplay when mouse enters swiper container
              }}
              loop={true}
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {testimonials.map((testimony, i) => {
                return (
                  <SwiperSlide>
                    <div className="slide p">
                      <div className="relative slide-img mx-auto w-full md:w-[80vw] md:h-[80vh] h-[50vh] rounded">
                        <Image
                          className="w-full h-full rounded object-cover object-positioning"
                          src={`/images/${testimony.img}`}
                          alt="hero image"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="slide-text w-full h-full text-left absolute top-0 text-xl text-white bg-[rgba(0,0,0,.5)] flex flex-col gap-2 justify-center items-start rounded p-5">
                        <div className={`${playfairDisplay.className} text-xl`}>
                          {testimony.clientName}
                        </div>
                        <div className="stars flex gap-1">
                          <IoIosStar size={24} color="gold" />
                          <IoIosStar size={24} color="gold" />
                          <IoIosStar size={24} color="gold" />
                          <IoIosStar size={24} color="gold" />
                          <IoIosStar size={24} color="gold" />
                        </div>
                        <div className="text-sm">
                          {testimony.clientDesignation}
                        </div>
                        <div className="text-base">
                          {testimony.clientTestimony}
                        </div>
                        <div className="cta-btn text-base font-medium mt-8 py-3 px-5 w-full flex items-center justify-center rounded text-white bg-[#c19127]">
                          <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">Book Our Ushers</Link>
                        </div>
                      </div>
                    </div>

                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
