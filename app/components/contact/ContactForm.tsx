"use client";
import React, { useState } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import Form from "../Form";

export default function ContactForm() {
  return (
    <section className="">
      <div className="flex flex-col sm:flex-row w-[95%] justify-between mx-auto gap-8 py-15">
        {/* LEFT INFO PANEL */}
        <div
          className={`w-full sm:w-[50%] md:w-[45%] lg:w-1/2 flex flex-col justify-center`}
        >
          <h2 className="heading font-extrabold text-primary leading-tight">
            Contact Our Energy Experts
          </h2>
          <p className="mt-4 text-txtColor normalText">
            Reduce your energy bills and upgrade your home with our UK-backed
            solutions. Fill the form and our certified team will reach out.
          </p>

          <div className="mt-8 space-y-4 text-txtColor">
            <p className="flex items-center gap-3 text-txtColor normalText">
              <span className="text-primary">
                <User />
              </span>
              12 King Street, Manchester, UK
            </p>
            <p className="flex items-center gap-3 text-txtColor normalText">
              <span className="text-primary">
                <Phone />
              </span>
              +44 7523 123456
            </p>
            <p className="flex items-center gap-3 text-txtColor normalText">
              <span className="text-primary">
                <Mail />
              </span>
              support@hkenergysolutions.co.uk
            </p>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="w-full sm:w-[50%] md:w-[45%] lg:w-1/2 relative">
          <div className="absolute inset-0 bg-primary rounded-3xl blur-xl opacity-20 -z-10"></div>
          <Form />
        </div>
      </div>
    </section>
  );
}
