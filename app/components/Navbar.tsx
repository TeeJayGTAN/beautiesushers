"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Works", href: "/works" },
  {
    label: "Contact",
    href: "https://wa.me/2347036871870?text=Hello%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20ushering%20services.",
    isCTA: true
  }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  // Auto-close on route change
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // Outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex items-center justify-between py-2 px-8 relative z-50">
      {/* Logo */}
      <div className="w-16">
        <Image
          src="/images/busherslogo.png"
          width={100}
          height={100}
          alt="Beauties Ushers Logo"
          className="object-cover"
        />
      </div>

      {/* Toggle with rotation */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        className={`z-50 transition-transform duration-300 ${
          isMenuOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        {isMenuOpen ? (
          <IoClose size={44} className="text-white" />
        ) : (
          <HiOutlineMenu size={40} />
        )}
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
          onClick={closeMenu}
        />
      )}

      {/* Menu Panel */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 z-40 bg-[#c19127] rounded-b-2xl p-10
        transform transition-transform duration-500 ease-in-out
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col items-center justify-center gap-10 text-lg font-medium">
          {menuItems.map((item, index) => {
            const isActive =
              !item.isCTA &&
              (item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(item.href)));

            return (
              <li
                key={item.label}
                className={`transition-all duration-500
                ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={
                    item.isCTA
                      ? `flex items-center gap-2 bg-white text-[#c19127] px-6 py-3 rounded-full 
                         font-semibold shadow-md transition-all
                         ${isMenuOpen ? "animate-pulse" : ""}
                         hover:bg-[#f5e6b3]`
                      : `text-white hover:opacity-80 ${
                          isActive ? "border-b-2 border-white pb-1" : ""
                        }`
                  }
                >
                  {item.isCTA && <FaWhatsapp size={18} />}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
