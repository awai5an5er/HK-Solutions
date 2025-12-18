"use client";

import React from "react";
import { testimonials } from "../resources/testimonial";

export default function Testimonials() {
  return (
    <section className="">
      <div className="w-[95%] mx-auto flex flex-col gap-5 Space">
        {/* Heading */}
        <div className="flex flex-col items-center gap-5">
          <h2 className="heading font-bold text-primary">
            What Our Clients Say
          </h2>
          <p className="text-txtColor normalText mx-auto">
            Trusted by hundreds of satisfied customers. See why they love our
            services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex gap-2  md:gap-3  flex-wrap justify-between">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-accent flex flex-col gap-5 p-5 rounded-2xl w-full md:w-[49%] lg:w-[24%] shadow-lg justify-between"
            >
              {/* Feedback */}
              <p className="normalText text-txtColor">{t.feedback}</p>

              {/* Name & Role */}
              <div className=" flex flex-col">
                <p className="subHeading text-primary font-bold">{t.name}</p>
                {t.role && <p className="normalText text-txtColor">{t.role}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
