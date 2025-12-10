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
        <section className="py-8 sm:py-6">
            <div className="mx-auto px-4">
                <h2 className="heading text-primary font-bold text-center pb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border rounded-lg p-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center text-left"
                            >
                                <span className="normalText font-semibold ">{faq.question}</span>
                                <span className="normalText  cursor-pointer">{openIndex === i ? "-" : "+"}</span>
                            </button>

                            {openIndex === i && (
                                <p className="mt-3 text-primary">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
