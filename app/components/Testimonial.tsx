"use client";

import React from "react";
import { testimonials } from "../resources/testimonial";

export default function Testimonials() {
  return (
    <section className="relative py-3 md:py-10 bg-secondary overflow-hidden">
      <div className="w-[95%] mx-auto ">
        {/* Heading */}
        <div className="text-center mb-5 md:mb-10">
          <h2 className="heading font-bold text-primary pb-4">
            What Our Clients Say
          </h2>
          <p className="txtColor normalText mx-auto">
            Trusted by hundreds of satisfied customers. See why they love our
            services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 cursor-pointer">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-accent  border border-primary/40 rounded-3xl p-3 md:p-5 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Feedback */}
              <p className="txtColor normalText italic py-4">{t.feedback}</p>

              {/* Name & Role */}
              <div className="text-center pt-4">
                <p className="subHeading font-bold text-primary">{t.name}</p>
                {t.role && <p className="txtColor normalText">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Floating Blurred Circles for Premium Look */}
      {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/30 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-300/30 rounded-full filter blur-3xl"></div> */}
    </section>
  );
}
