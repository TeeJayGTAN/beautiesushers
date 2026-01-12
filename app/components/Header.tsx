"use client"
import { FaEnvelope } from "react-icons/fa"
import Navbar from "./Navbar"
import Link from "next/link"




export default function Header() {
  return (
    <header>
      <div className=" topbar w-full text-sm bg-[#c19127] text-white text-center py-2">
        <Link className="flex items-center justify-center gap-2 underline" href="mailto:beautiesushers@yahoo.co.uk">
          <FaEnvelope className="text-[#c19127]" color="white" />
          <span>beautiesushers@yahoo.co.uk</span>
        </Link>
      </div>
      <Navbar />
    </header>
  )
}