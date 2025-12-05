'use client'
import React, { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-green-800">HK Energy Solutions</h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-green-700 transition">Home</a>
                    <a href="#" className="hover:text-green-700 transition">Services</a>
                    <a href="#" className="hover:text-green-700 transition">Grants</a>
                    <a href="#" className="hover:text-green-700 transition">About</a>
                    <a href="#" className="hover:text-green-700 transition">Case Studies</a>
                    <a href="#" className="hover:text-green-700 transition">Contact</a>
                </nav>

                {/* Desktop Button */}
                <button className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-xl shadow hover:bg-green-800 transition">
                    Book Free Survey
                </button>

                {/* Mobile Hamburger */}
                <div className="md:hidden text-green-800 text-3xl font-bold cursor-pointer" onClick={toggleMenu}>
                    ☰
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white shadow-lg transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <nav className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
                    <a href="#" className="hover:text-green-700 transition">Home</a>
                    <a href="#" className="hover:text-green-700 transition">Services</a>
                    <a href="#" className="hover:text-green-700 transition">Grants</a>
                    <a href="#" className="hover:text-green-700 transition">About</a>
                    <a href="#" className="hover:text-green-700 transition">Case Studies</a>
                    <a href="#" className="hover:text-green-700 transition">Contact</a>
                    <button className="bg-green-700 text-white px-5 py-2 rounded-xl shadow hover:bg-green-800 transition mt-4">
                        Book Free Survey
                    </button>
                </nav>
            </div>
        </header>
    );
}
