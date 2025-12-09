"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks, navButton, NavLink } from "../resources/Nanlinks";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ---------- 🔥 Outside Click Handler for Mobile Menu ----------
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false); // Close menu
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-accent backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-bold text-primary subHeading">
          HK Energy Solutions
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-txtColor normalText font-medium relative">
          {navLinks.map((link: NavLink) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <>
                  <button className="hover:text-primary transition flex items-center gap-1 cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-4 h-4 relative top-px" />
                  </button>

                  <div className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-2 rounded hover:bg-gray-100 hover:text-primary transition"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href || "#"}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-primary text-secondary normalText px-5 py-2 rounded-xl shadow">
          {navButton.text}
        </button>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-primary text-2xl font-bold cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-secondary shadow-lg transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6 text-txtColor normalText font-medium">
          {navLinks.map((link: NavLink, index: number) => (
            <div key={link.name}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="w-full text-left flex justify-between items-center hover:text-primary transition"
                  >
                    {link.name}
                    <span>
                      {openDropdown === index ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </button>

                  {openDropdown === index && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="hover:text-primary transition"
                          onClick={() => setIsOpen(false)} // Close when clicking item
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href || "#"}
                  className="hover:text-primary transition"
                  onClick={() => setIsOpen(false)} // Close when clicking item
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <button className="bg-primary text-secondary normalText px-5 py-2 rounded-xl shadow mt-4">
            {navButton.text}
          </button>
        </nav>
      </div>
    </header>
  );
}
