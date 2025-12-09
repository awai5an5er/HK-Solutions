"use client";

import { DollarSign } from "lucide-react";

type Feature = {
    title: string;
    text: string;
    gradient?: string;
};


type FeaturesProps = {
    features: Feature[];
};

export default function Features({ features }: FeaturesProps) {
    return (
        <section className="py-20 bg-brand-background-secondary">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-primary">
                        Why Choose Solar Energy?
                    </h2>
                    <p className="txtColor normalText mt-3 mx-auto text-lg">
                        Transform your home with clean, renewable energy. Discover the benefits of going solar today.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
                    {features.map((feature, i) => {
                        return (
                            <div
                                key={i}
                                className="relative flex flex-col items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Icon Circle */}
                                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 text-primary text-2xl shadow-lg">
                                    <DollarSign strokeWidth={2.5} size={28} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-primary mb-2">
                                    {feature.title}
                                </h3>

                                {/* Text */}
                                <p className="txtColor normalText">{feature.text}</p>

                                {/* Hover Border Accent */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-brand-primary opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
