import Image from "next/image";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { IoIosStar } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
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
      <section className="worktemplate relative h-[35vh] flex justify-center pb-20 ">
        <Image
          width={9999}
          height={9999}
          alt={eventName}
          src={`/images/${eventImage}`}
          className="w-full h-full object-cover"
        />

        <div
          className="
      text-boxtmp bg-white text-center shadow-2xl
      text-[#171717] p-6 rounded
      absolute 
      bottom-4 flex flex-col gap-5
    "
        >
          <div className={`${playfairDisplay.className} text-2xl`}>
            {eventName}
          </div>
          <div className="text-xl">{eventLocation}</div>
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
          <h4 className={`${playfairDisplay.className} text-lg`}>
            Quick Links
          </h4>
          <ul className="text-base text-[#3a3a3a] ">
            <li>About</li>
            <li>Services</li>
            <li>Book Us Now</li>
          </ul>
        </div>
        <div className="footercol3 flex flex-col gap-8">
          <div className=" flex flex-col gap-4">
            <h4 className={`${playfairDisplay.className} text-lg`}>
              Contact Us
            </h4>
            <ul className="text-base text-[#3a3a3a] max-w-xs">
              <li>h142, Road 234, Abuja</li>
              <li>+234 802 432 3232</li>
              <li>beautiesushers@yahoo.co.uk</li>
              <li>Chat On Whatsapp</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className={`${playfairDisplay.className} text-lg`}>
              Follow Us
            </h4>
            <ul className="social links flex gap-4">
              <li>
                <FaFacebook size={28} color="" />
              </li>
              <li>
                <FaInstagram size={28} color="" />
              </li>
              <li>
                <FaLinkedin size={28} color="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footercol4 pb-12">
          <div className="flex flex-col gap-4">
            <h4 className={`${playfairDisplay.className} text-lg`}>
              Request a Quote
            </h4>
            <p className="text-base max-w-xs">
              Request a quote for our ushers and we would be in touch
              immediately
            </p>
            <div className="cta-btn text-base font-medium mt-2 py-3 px-5 w-fit flex items-center justify-center rounded text-white bg-[#c19127]">
              <Link href="https://wa.me/+2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.">Book Our Ushers</Link>
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
