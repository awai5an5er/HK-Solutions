import React from "react";

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-32 md:pt-40 bg-gradient-to-br from-green-50 to-white">
            <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight">
                    Slash Your Energy Bills & Upgrade Your Home
                </h2>
                <p className="mt-4 text-gray-700 text-lg">
                    100% funded UK home energy improvements — insulation, solar, heat pumps
                    and more with government-backed grants.
                </p>

                <div className="mt-6 flex gap-4">
                    <button className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition">
                        Book Free Survey
                    </button>
                    <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl hover:bg-green-100 transition">
                        Check Eligibility
                    </button>
                </div>


            </div>

            <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <img
                    src="/hero-eco-home.png"
                    alt="Eco Friendly UK Home"
                    className="w-[90%] md:w-[80%] drop-shadow-xl"
                />
            </div>
        </section>
    );
}
