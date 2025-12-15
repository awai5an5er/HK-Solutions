"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks, navButton, NavLink } from "../resources/Nanlinks";
import { ChevronDown, ChevronUp } from "lucide-react";
import ContactBtn from "./ContactBtn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const hamBurgerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // ---------- 🔥 Outside Click Handler for Mobile Menu ----------
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !hamBurgerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-primary backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-secondary subHeading">
          HK Energy Solutions
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-secondary normalText font-medium relative">
          {navLinks.map((link: NavLink) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <>
                  <button className="flex items-center gap-1 cursor-pointer">
                    {link.name}
                    <ChevronDown className="w-4 h-4 relative top-px" />
                  </button>

                  <div className="absolute left-0 top-full mt-2 w-56 bg-accent text-primary shadow-lg rounded-lg p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-3 py-4 rounded hover-underline"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link href={link.href || "#"}>{link.name}</Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Button */}
        <ContactBtn
          text={navButton.text}
          classes="hidden lg:block bg-secondary text-primary cursor-pointer font-bold normalText px-5 py-2 rounded-xl shadow"
        />

        {/* Mobile Hamburger */}
        <div
          ref={hamBurgerRef}
          className="lg:hidden text-secondary text-2xl font-bold cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden absolute w-full bg-primary shadow-lg transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6 text-primary bg-accent normalText font-medium">
          {navLinks.map((link: NavLink, index: number) => (
            <div key={link.name}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                    className="w-full text-left flex justify-between items-center"
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
                          onClick={() => setIsOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={link.href || "#"} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div
            onClick={() => isOpen && setIsOpen(false)}
            className="flex justify-center"
          >
            <ContactBtn
              text={navButton.text}
              classes="bg-primary text-accent normalText px-5 py-2 rounded-xl shadow mt-4"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
