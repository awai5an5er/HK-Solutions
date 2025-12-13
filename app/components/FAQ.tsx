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
    <section className="lg:py-10 py-4">
      <div className="max-w-5xl mx-auto lg:px-4 px-2">
        <h2 className="heading text-primary font-bold text-center lg:pb-10 pb-4">
          Frequently Asked Questions
        </h2>

        <div className="lg:space-y-4 space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="lg:space-y-2 space-y-0">
              {/* Question Box */}
              <div
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="bg-primary border border-secondary rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex justify-between items-center cursor-pointer"
              >
                <span className="normalText font-semibold text-secondary">
                  {faq.question}
                </span>

                <span className="normalText text-secondary font-bold text-xl">
                  {openIndex === i ? "-" : "+"}
                </span>
              </div>

              {/* Answer Box (Separate) */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="bg-accent border border-txtColor rounded-xl lg:p-8 p-4">
                  <p className="text-txtColor normalText leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
