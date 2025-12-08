'use client';
import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";

export default function PremiumContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <section className="w-full px-6 py-20 md:py-28 bg-gray-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

                {/* LEFT INFO PANEL */}
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl font-extrabold text-green-800 leading-tight">
                        Contact Our Energy Experts
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg">
                        Reduce your energy bills and upgrade your home with our UK-backed solutions. Fill the form and our certified team will reach out.
                    </p>

                    <div className="mt-8 space-y-4 text-gray-700">
                        <p className="flex items-center gap-3 text-base md:text-lg">
                            <span className="text-green-700"><User /></span>
                            12 King Street, Manchester, UK
                        </p>
                        <p className="flex items-center gap-3 text-base md:text-lg">
                            <span className="text-green-700"><Phone /></span>
                            +44 7523 123456
                        </p>
                        <p className="flex items-center gap-3 text-base md:text-lg">
                            <span className="text-green-700"><Mail /></span>
                            support@hkenergysolutions.co.uk
                        </p>
                    </div>
                </div>

                {/* RIGHT FORM PANEL */}
                <div className="md:w-1/2 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-500 rounded-3xl blur-xl opacity-20 -z-10"></div>
                    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-green-100">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {/* NAME */}
                            <div className="relative">
                                <label className="sr-only">Full Name</label>
                                <User className="absolute top-3 left-3 text-green-700 w-5 h-5" />
                                <input
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="pl-10 h-12 w-full rounded-xl border border-gray-300 focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none transition"
                                />
                            </div>

                            {/* EMAIL */}
                            <div className="relative">
                                <label className="sr-only">Email</label>
                                <Mail className="absolute top-3 left-3 text-green-700 w-5 h-5" />
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="pl-10 h-12 w-full rounded-xl border border-gray-300 focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none transition"
                                />
                            </div>

                            {/* PHONE */}
                            <div className="relative">
                                <label className="sr-only">Phone</label>
                                <Phone className="absolute top-3 left-3 text-green-700 w-5 h-5" />
                                <input
                                    name="phone"
                                    type="text"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    className="pl-10 h-12 w-full rounded-xl border border-gray-300 focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none transition"
                                />
                            </div>

                            {/* MESSAGE */}
                            <div className="relative">
                                <label className="sr-only">Message</label>
                                <MessageSquare className="absolute top-3 left-3 text-green-700 w-5 h-5" />
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows={5}
                                    className="pl-10 w-full rounded-xl border border-gray-300 focus:border-green-700 focus:ring-1 focus:ring-green-700 outline-none transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-2 h-12 bg-linear-to-r from-green-700 to-green-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
