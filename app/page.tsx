"use client";
import Image from "next/image";

import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { HiOutlineMenu } from "react-icons/hi";
import { IoIosStar } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin   } from "react-icons/fa";

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

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

const slideEvents = [
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h1.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h2.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h3.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h4.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h5.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h6.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h7.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h8.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h9.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h10.jpeg",
  },
  {
    eventName: "Transcorp FoodBank",
    eventImage: "h11.jpeg",
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

const testimonials = [
  {
    img: "h3.jpeg",
    clientName: "Sarah Joseph",
    clientDesignation: "COO, Head of Operations",
    clientTestimony:
      "We know the importance of projecting a positive and professional corporate image of your brand to delegates and speakers. Our experienced and professional Conference Assistants would manage the efficient running of registration, badge scanning, etc. at your conference.",
  },
  {
    img: "h1.jpeg",
    clientName: "Sheikh Ibrahim Jafar",
    clientDesignation: "COO, Head of Operations",
    clientTestimony:
      "We know the importance of projecting a positive and professional corporate image of your brand to delegates and speakers. Our experienced and professional Conference Assistants would manage the efficient running of registration, badge scanning, etc. at your conference.",
  },
  {
    img: "h6.jpeg",
    clientName: "Jonathan Presley",
    clientDesignation: "COO, Head of Operations",
    clientTestimony:
      "We know the importance of projecting a positive and professional corporate image of your brand to delegates and speakers. Our experienced and professional Conference Assistants would manage the efficient running of registration, badge scanning, etc. at your conference.",
  },
  {
    img: "h11.jpeg",
    clientName: "Tony Olumelu",
    clientDesignation: "COO, Head of Operations",
    clientTestimony:
      "We know the importance of projecting a positive and professional corporate image of your brand to delegates and speakers. Our experienced and professional Conference Assistants would manage the efficient running of registration, badge scanning, etc. at your conference.",
  },
  {
    img: "h10.jpeg",
    clientName: "John Abraham",
    clientDesignation: "COO, Head of Operations",
    clientTestimony:
      "We know the importance of projecting a positive and professional corporate image of your brand to delegates and speakers. Our experienced and professional Conference Assistants would manage the efficient running of registration, badge scanning, etc. at your conference.",
  },
];

export default function Home() {
  return (
    <div className="">
      <header>
        <div className="topbar w-full text-sm bg-[#c19127] text-white text-center py-2">
          <span>beautiesushers@yahoo.co.uk</span>
        </div>
        <nav className="flex items-center justify-between py-2 px-8 ">
          <div className="navlogo w-16">
            <Image
              className="w-full h-full object-cover -mt-1"
              src={"/images/busherslogo.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div className="hamburger-menu">
            <HiOutlineMenu size={24} />
          </div>
        </nav>
      </header>
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
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="slide-text w-full md:w-[80vw] text-center absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-xl text-white bg-amber-500 p-5 rounded">
                      {slide.eventName}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
        <section className="px-8 my-20">
          <div className="img-welcome mb-8 rounded overflow-hidden">
            <Image className="w-full h-full " src={`/images/h19.jpeg`} alt="welcome pic" height={100} width={100} />
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
            Book Our Ushers
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
                      height={100}
                      width={100}
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
            Book Our Ushers
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
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
            <div className="brand">
              <Image
                className="w-[100px]"
                src={`/images/transcorp.png`}
                alt="welcome pic"
                height={100}
                width={100}
              />
            </div>
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
                      <div className="slide-text w-full h-full text-left absolute top-0 text-xl text-white bg-[rgba(0,0,0,.45)] flex flex-col gap-2 justify-center items-start rounded p-5">
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
                          Book Our Ushers
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
              <li>About</li>
              <li>Services</li>
              <li>Book Us Now</li>
            </ul>
        </div>
        <div className="footercol3 flex flex-col gap-8">
          <div className=" flex flex-col gap-4">
            <h4 className={`${playfairDisplay.className} text-lg`}>Contact Us</h4>
            <ul className="text-base text-[#3a3a3a] max-w-xs">
              <li>h142, Road 234, Abuja</li>
              <li>+234 802 432 3232</li>
              <li>beautiesushers@yahoo.co.uk</li>
              <li>Chat On Whatsapp</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className={`${playfairDisplay.className} text-lg`}>Follow Us</h4>
            <ul className="social links flex gap-4">
              <li><FaFacebook  size={28} color=""/></li>
              <li><FaInstagram size={28} color=""/></li>
              <li><FaLinkedin  size={28} color=""/></li>
            </ul>
          </div>
        </div>
        <div className="footercol4 pb-12">
          <div className="flex flex-col gap-4">
            <h4 className={`${playfairDisplay.className} text-lg`}>Request a Quote</h4>
            <p className="text-base max-w-xs">
              Request a quote for our ushers and we would be in touch
              immediately
            </p>
            <div className="cta-btn text-base font-medium mt-2 py-3 px-5 w-fit flex items-center justify-center rounded text-white bg-[#c19127]">
              Book Our Ushers
            </div>
          </div>
        </div>
        <span className="py-4 text-xs w-full text-center mx-auto text-[#3a3a3a]">
          Copyright 2025 Beauties Ushers. All Rights Reserved |{" "}
          <span className="opacity-70">Privacy Policy </span>{" "}
        </span>
      </footer>
    </div>
  );
}
