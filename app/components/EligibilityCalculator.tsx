'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function EligibilityCalculator() {
    const [postcode, setPostcode] = useState("");
    const [propertyType, setPropertyType] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Postcode:", postcode, "Property Type:", propertyType);
    };

    return (
        <section className="w-full px-6 py-20 lg:py-28 bg-white">
            <div
                className="
                    max-w-6xl mx-auto 
                    flex flex-col lg:flex-row 
                    gap-10 
                    bg-white dark:bg-primary/10
                    rounded-2xl shadow-xl 
                    p-8 md:p-12
                "
            >

                {/* LEFT — FORM */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                >
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary">
                        Check Your Eligibility
                    </h3>

                    <p className="mt-3 text-gray-600 dark:text-text-dark/70 max-w-md">
                        Find out if you qualify for government funding in under 60 seconds.
                        Enter your details below to get started.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5 max-w-md">
                        <div>
                            <input
                                id="postcode"
                                type="text"
                                placeholder="Enter Your Postcode"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
                                className="
                                    w-full h-14 px-4 text-lg
                                    rounded-xl border border-gray-300 dark:border-primary/30 
                                    bg-background-light dark:bg-background-dark 
                                    focus:ring-2 focus:ring-primary focus:border-primary
                                    transition-all
                                "
                            />
                        </div>

                        <div>
                            <select
                                id="property-type"
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                                className="
                                    w-full h-14 px-4 text-lg
                                    rounded-xl border border-gray-300 dark:border-primary/30 
                                    bg-background-light dark:bg-background-dark 
                                    focus:ring-2 focus:ring-primary focus:border-primary
                                    transition-all
                                "
                            >
                                <option value="">Select Property Type</option>
                                <option>Detached House</option>
                                <option>Semi-Detached House</option>
                                <option>Terraced House</option>
                                <option>Flat / Apartment</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="
                                w-full h-14 rounded-xl text-lg font-bold
                                bg-primary text-white
                                shadow-lg shadow-primary/30
                                transition-all 
                                hover:bg-primary/90 hover:scale-[1.01]
                            "
                        >
                            Check Eligibility Now
                        </button>
                    </form>
                </motion.div>

                {/* RIGHT — SAVINGS CARD */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="
                        flex-1 text-center 
                        bg-linear-to-br from-green-50 to-green-100 
                        dark:from-secondary/20 dark:to-primary/20
                        p-10 rounded-2xl 
                        shadow-md
                        flex flex-col items-center justify-center
                    "
                >
                    <p className="text-lg font-semibold text-green-800">
                        Potential Annual Savings
                    </p>

                    <p className="text-5xl lg:text-6xl font-extrabold text-primary mt-2 mb-2">
                        £1,200+
                    </p>

                    <p className="text-sm text-gray-600 dark:text-text-dark/70 max-w-xs">
                        Based on a typical 3-bedroom semi-detached home with solar panels and insulation.
                    </p>

                    {/* IMPROVED CURVED MINI CHART */}
                    <div className="mt-8 w-full flex justify-center">
                        <svg width="240" height="120">
                            <path
                                d="M10 90 Q 80 40 150 70 T 230 30"
                                stroke="#1B5E20"
                                strokeWidth="5"
                                fill="none"
                                className="drop-shadow-lg"
                            />
                        </svg>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
