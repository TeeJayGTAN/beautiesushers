import Image from "next/image";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Footer from "./Footer";
const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function WorkTemplate({
  eventImage,
  eventName,
  eventLocation,
}: {
  eventImage: string;
  eventName: string;
  eventLocation?: string;
}) {
  console.log(eventName, eventLocation);
  return (
    <div className="">
      <section className="worktemplate relative h-[50vh] md:h-[65vh] flex justify-center pb-20 ">
        <Image
          width={9999}
          height={9999}
          alt={eventName}
          src={`/images/${eventImage}`}
          className="w-full h-full object-cover object-top"
          priority
        />

        <div
          className="
      text-boxtmp bg-white/95 backdrop-blur-sm text-center shadow-2xl
      text-[#171717] p-6 md:p-10 rounded-lg
      absolute 
      bottom-8 md:bottom-12 flex flex-col gap-4 md:gap-6
      w-[85vw] md:w-auto md:min-w-[500px] md:max-w-3xl
      left-1/2 -translate-x-1/2
    "
        >
          <h1 className={`${playfairDisplay.className} text-xl md:text-3xl font-semibold`}>
            {eventName}
          </h1>
          <div className="text-base md:text-xl text-[#3a3a3a]">{eventLocation}</div>
        </div>
      </section>
      <hr color="#3a3a3a" className="my-12 opacity-40 mx-4 max-w-7xl md:mx-auto" />
      <section className="px-6 flex flex-col items-center w-full max-w-4xl mx-auto gap-6 text-center mb-10">
        <h2 className={`${playfairDisplay.className} text-xl md:text-3xl text-[#c19127]`}>
          Partnering to Deliver Excellence
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-[#3a3a3a]">
          Beauties Ushers provided seamless guest management and on-ground
          coordination for <strong>{eventName}</strong> at {eventLocation}, delivering a
          polished, well-controlled event experience from arrival to close. Our
          team ensured orderly reception, guided seating, smooth venue flow, and
          attentive guest support throughout the event — maintaining
          professionalism, compliance, and visual elegance at every touchpoint.
        </p>
        <div className="cta-btn text-base font-medium mt-8 py-3 px-8 w-fit flex items-center justify-center rounded-full text-white bg-[#c19127] hover:bg-[#a67c1f] transition-colors shadow-lg">
          <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">Book Our Ushers</Link>
        </div>
      </section>
      <hr color="#3a3a3a" className="my-12 opacity-40 mx-4 max-w-7xl md:mx-auto" />
      <Footer />
    </div>
  );
}
