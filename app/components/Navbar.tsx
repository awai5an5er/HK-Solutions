"use client";
import React, { useState } from "react";
import Link from "next/link";
import { navLinks, navButton, NavLink } from "../resources/Nanlinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-accent backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-bold text-primary subHeading">
          HK Energy Solutions
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-txtColor normalText font-medium">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:block bg-primary text-secondary normalText px-5 py-2 rounded-xl shadow transition cursor-pointer">
          {navButton.text}
        </button>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-primary subHeading font-bold cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-secondary shadow-lg transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6 text-txtColor normalText font-medium">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-primary text-secondary normalText px-5 py-2 rounded-xl shadow transition mt-4">
            {navButton.text}
          </button>
        </nav>
      </div>
    </header>
  );
}
