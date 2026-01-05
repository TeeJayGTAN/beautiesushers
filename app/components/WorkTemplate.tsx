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
      <section className="worktemplate relative h-[40vh] flex justify-center pb-20 ">
        <Image
          width={9999}
          height={9999}
          alt={eventName}
          src={`/images/${eventImage}`}
          className="w-full h-full object-cover object-top"
        />

        <div
          className="
      text-boxtmp bg-white text-center shadow-2xl
      text-[#171717] p-6 rounded
      absolute 
      bottom-4 flex flex-col gap-5
      w-[70vw]
    "
        >
          <div className={`${playfairDisplay.className} text-xl`}>
            {eventName}
          </div>
          <div className="text-lg text-[#3a3a3a]">{eventLocation}</div>
        </div>
      </section>
      <hr color="#3a3a3a" className="my-12 opacity-40 mx-4" />
      <section className="px-4 flex flex-col items-center w-full mx-auto  gap-4 text-center ">
        <h2 className={`${playfairDisplay.className} text-xl text-[#c19127]`}>
          Partnering to Deliver Excellence
        </h2>
        <p className="">
          Beauties Ushers provided seamless guest management and on-ground
          coordination for {eventName} at {eventLocation}, delivering a
          polished, well-controlled event experience from arrival to close. Our
          team ensured orderly reception, guided seating, smooth venue flow, and
          attentive guest support throughout the event — maintaining
          professionalism, compliance, and visual elegance at every touchpoint.
        </p>
        <div className="cta-btn text-base font-medium mt-5 py-3 px-5 w-fit flex items-center justify-center rounded text-white bg-[#c19127]">
          <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">Book Our Ushers</Link>
        </div>
      </section>
      <hr color="#3a3a3a" className="my-12 opacity-40 mx-4" />
      <Footer/>
    </div>
  );
}
