import Image from "next/image";
import Footer from "./components/Footer";
import { Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
import { brands } from "./data/brands";
import HeroSlider from "./components/HeroSlider";
import TestimonialsSlider from "./components/TestimonialsSlider";

export const metadata: Metadata = {
  title: "Professional Ushering Services for Corporate Events & Weddings",
  description:
    "Beauties Ushers provides professional ushering services for weddings, corporate events, conferences, and special occasions with excellence and attention to detail.",
};

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

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

export default function Home() {
  return (
    <div className={`relative`}>
      <main className="w-full">
        <section className="hero">
          <HeroSlider />
        </section>

        <section id="about" className="px-8 my-20 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="img-welcome mb-8 md:mb-0 rounded overflow-hidden w-full md:w-1/2 h-[400px] md:h-[500px]">
              <Image
                className="w-full h-full object-cover"
                src={`/images/h19.jpeg`}
                alt="welcome pic"
                height={1000}
                width={1000}
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <div
                className={`heading ${playfairDisplay.className} text-2xl md:text-3xl lg:text-4xl text-[#171717] `}
              >
                Where Beauty Meets Professionalism
              </div>
              <div className={`body-text mt-5 text-[#3a3a3a] text-lg leading-relaxed`}>
                At Beauties Ushers, we understand that first impressions matter. Our
                team of carefully selected and professionally trained ushers bring
                poise, warmth, and attention to detail to every event. Whether it’s
                a grand wedding, corporate function, church program, or private
                celebration, we ensure your guests feel welcomed, guided, and valued
                from start to finish
              </div>
              <div className="cta-btn text-base font-medium mt-8 py-3 px-8 w-fit flex items-center justify-center rounded text-white bg-[#c19127] hover:bg-[#a67c1f] transition-colors">
                <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
                  Book Our Ushers
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center w-full justify-center gap-y-10 py-10 bg-gray-50/50">
          <div
            className={` heading ${playfairDisplay.className} text-2xl md:text-3xl lg:text-4xl mb-5`}
          >
            Our Event Staffing Services
          </div>
          <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] max-w-7xl mx-auto">
            {services.map((service, i) => {
              return (
                <div
                  className="services-card flex flex-col items-center text-center gap-y-4 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  key={i}
                >
                  <div className="imgg w-full h-64 overflow-hidden rounded-md">
                    <Image
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      src={`/images/${service.img}`}
                      alt={service.title}
                      height={600}
                      width={600}
                    />
                  </div>
                  <div
                    className={`text-[#171717] text-xl font-semibold ${playfairDisplay.className} mt-2`}
                  >
                    {service.title}
                  </div>
                  <div className="talk text-sm text-[#3a3a3a] leading-relaxed">
                    {service.text}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cta-btn text-base font-medium mt-5 py-3 px-8 w-fit flex items-center justify-center rounded text-white bg-[#c19127] hover:bg-[#a67c1f] transition-colors">
            <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">
              Book Our Ushers
            </Link>
          </div>
        </section>

        <section className="my-20 px-8 max-w-7xl mx-auto">
          <div className={`heading ${playfairDisplay.className} text-2xl md:text-3xl lg:text-4xl text-center mb-10`}>
            Trusted by Clients Who Value Excellence
          </div>
          <div className="nations grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-5 text-center">
            <div className="nation p-3 bg-gray-50 rounded">UK</div>
            <div className="nation p-3 bg-gray-50 rounded">USA</div>
            <div className="nation p-3 bg-gray-50 rounded">Nigeria</div>
            <div className="nation p-3 bg-gray-50 rounded">Dubai</div>
            <div className="nation p-3 bg-gray-50 rounded">Egypt</div>
            <div className="nation p-3 bg-gray-50 rounded">Uganda</div>
            <div className="nation p-3 bg-gray-50 rounded">South-Africa</div>
            <div className="nation p-3 bg-gray-50 rounded">Malaysia</div>
            <div className="nation p-3 bg-gray-50 rounded">Malawi</div>
            <div className="nation p-3 bg-gray-50 rounded">India</div>
            <div className="nation p-3 bg-gray-50 rounded">Zimbabwe</div>
            <div className="nation p-3 bg-gray-50 rounded">Indonesia</div>
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

          <div className="our-testimonials mt-24 w-full max-w-6xl mx-auto">
            <TestimonialsSlider />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
