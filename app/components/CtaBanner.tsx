import React from "react";

export default function CtaBanner() {
    return (
        <section className="w-full px-6 py-8 md:py-8">
            <div
                className="
                    max-w-6xl mx-auto 
                    rounded-2xl 
                    bg-linear-to-r from-green-700 to-green-500
                    p-8 md:p-12
                    text-center text-white
                    shadow-xl
                "
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug">
                    Ready to Slash Your Energy Bills & Go Green?
                </h2>

                <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
                    Our team is ready to provide a free, no-obligation survey to assess your home’s needs and unlock
                    full funding for your energy-efficient upgrades.
                </p>

                <button
                    className="
                        mt-8
                        mx-auto
                        flex items-center justify-center
                        h-12 sm:h-14 px-6 sm:px-10
                        rounded-xl
                        bg-white text-green-700
                        text-base sm:text-lg font-bold
                        shadow-lg hover:bg-opacity-90
                        transition-all
                    "
                >
                    Book My Free Home Survey
                </button>
            </div>
        </section>
    );
}
