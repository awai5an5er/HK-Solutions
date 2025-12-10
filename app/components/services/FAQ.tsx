"use client";

import { useState } from "react";

export default function FAQ({
  faqs,
}: {
  faqs: {
    question: string;
    answer: string;
  }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="heading text-primary font-bold text-center pb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 cursor-pointer">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-primary cursor-pointer border border-secondary rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left cursor-pointer"
              >
                <span className="normalText font-semibold text-secondary cursor-pointer">
                  {faq.question}
                </span>
                <span className="normalText text-secondary font-bold text-xl leading-none">
                  {openIndex === i ? "-" : "+"}
                </span>
              </button>

              {
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openIndex === i ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-secondary normalText leading-relaxed cursor-pointer">
                    {faq.answer}
                  </p>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
