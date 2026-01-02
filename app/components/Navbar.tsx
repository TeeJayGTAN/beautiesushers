"use client"
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between py-2 px-8 relative">
          <div className="navlogo w-16">
            <Image
              className="w-full h-full object-cover -mt-1"
              src={"/images/busherslogo.png"}
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <div className="hamburger-menu cursor-pointer z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={48} color="white"/> : <HiOutlineMenu size={40} />}
          </div>
          <div className={`menu-items-container bg-[#c19127] h-[50vh] p-10 w-full rounded-bl-2xl ${isMenuOpen ? 'translate-x-20 ': 'translate-x-100'} absolute  top-0  transition-all duration-500 z-10 `}>
            <ul className="menu-items flex flex-col w-full h-full justify-center gap-10 text-[#ffffff] text-lg ">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="/works">Our Works</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
        </nav>
    )
}