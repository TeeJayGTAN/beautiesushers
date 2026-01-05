"use client"
import Link from "next/link";
import { slugify } from "../utils/slugify";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Image from "next/image";

//seo
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works | Event Ushering Projects & Experience",
  description:
    "Explore our portfolio of successful weddings, corporate events, conferences, and special occasions handled by Beauties Ushers.",
};

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required module styles
import "swiper/css/autoplay";

// Import modules
import { Autoplay } from "swiper/modules";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { IoIosStar } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Footer from "../components/Footer"

const eventWorks = [
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
    eventLocation: "Oriental Hotel, Lagos",
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
    eventLocation: "Nicon Luxury, Abuja",
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { testimonials } from "../data/testimonials";
import { brands } from "../data/brands";


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
    eventName: "5th Edition Connected Africa Summit & 12 Edition Connected Banking Summit 2024",
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
    eventName: "48th agm and 47th Scientific Conference of OPHTHALMOLOGical society of Nigeria",
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
    eventName: "International Exhibition of Pharmaceutical Medical & Healthcare Industry in Ghana 2022",
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

export const slugEventWorks = eventWorks.map((eventWork) => {
  return {
    ...eventWork,
    slug: slugify(eventWork.eventName),
  };
});
console.log(slugEventWorks);
export default function WorkPage() {
  return (
    <div className="">
      <section className="works-hero flex items-center justify-center rounded px-4">
        <h1 className={`${playfairDisplay.className} text-2xl z-5 text-white`}>
          Our Works
        </h1>
      </section>
      <section className={`my-12 text-center mx-auto text-[#3a3a3a] px-4`}>
        <p>
          Our forte lies in international and luxury Events. We have staffed
          West Africa conferences and exhibitions in Nigeria working with
          renowned event organizers, premium brands and businesses from UK, USA,
          Italy, Russia, France, Germany, China, Austria, Poland, Spain, UAE,
          Turkey, Saudi Arabia, Qatar, Serbia, Bulgaria, Pakistan, Vietnam,
          Egypt, Hong Kong, Indonesia, India, South Africa, Kenya and Nigeria
        </p>
      </section>
      <hr color="#3a3a3a" className="mb-12 opacity-40" />
      <section className={`case-studies px-4`}>
        <h2
          className={`${playfairDisplay.className} text-2xl mb-8 text-center w-full mx-auto`}
        >
          Case Studies
        </h2>
        <ul className="case-studies-list flex flex-col gap-10">
          {slugEventWorks.map((eventWork, index) => (
            <li key={index} className="cursor-pointer">
              <Link
                className="flex flex-col gap-2"
                href={`/works/${eventWork.slug}`}
              >
                <div className="img-wrapperworks relative w-full h-75 overflow-hidden rounded">
                  <Image
                    width={9999}
                    height={9999}
                    alt={eventWork.eventName}
                    src={`/images/${eventWork.eventImage}`}
                    className="rounded w-full h-full object-cover object-center"
                  />
                  <p className="bg-[#c19127] text-white absolute bottom-0 w-full text-center p-3 rounded-bl rounded-br">
                    {eventWork.eventName}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <hr color="#3a3a3a" className="mt-12 opacity-40" />
      <section className="my-12 px-4">
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
      </section>
      <hr color="#3a3a3a" className="mb-12 opacity-40" />
      <div className="our-testimonials mt-14 px-4">
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
       <Footer/>
    </div>
  );
}
