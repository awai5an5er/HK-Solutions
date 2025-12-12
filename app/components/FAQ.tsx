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

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-2">
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
                <div className="bg-secondary border border-txtColor rounded-xl p-8">
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
