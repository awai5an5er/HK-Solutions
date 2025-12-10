"use client";

import { useState } from "react";

export default function FAQ({ faqs }:
    {
        faqs: {
            question: string;
            answer: string;
        }[]
    }
) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl text-primary md:text-4xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border rounded-lg p-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center text-left"
                            >
                                <span className="text-lg font-semibold ">{faq.question}</span>
                                <span className="text-xl  cursor-pointer">{openIndex === i ? "-" : "+"}</span>
                            </button>

                            {openIndex === i && (
                                <p className="mt-3 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
