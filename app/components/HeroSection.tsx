import React from "react";
import ContactBtn from "./ContactBtn";
import { navButton } from "../resources/Nanlinks";
export default function HeroSection() {
  return (
    <section className="flex w-[95%] flex-col-reverse md:flex-row mx-auto h-auto md:h-[90vh] py-10">
      <div className="h-[50vh] md:h-auto w-full md:w-1/2 flex flex-col justify-center gap-5 md:gap-10">
        <h1 className="heading text-primary font-extrabold">
          Slash your energy bills & upgrade your home
        </h1>
        <span className="normalText text-txtColor">
          Transform your home with reliable and energy efficient solutions designed to reduce your utility costs and improve long term comfort. At HK Energy Solutions, we provide high quality services including solar PV installation, heat pump systems, home insulation, and more to help you create a safer, greener, and more efficient living space.
        </span>
        <div>
          <ContactBtn 
             
             text="Book Free Survey"
             classes="normalText bg-primary px-7 py-3 rounded-2xl text-secondary cursor-pointer"
                />
         
        </div>
      </div>
      <div className="w-full h-[40vh] md:h-auto md:w-1/2 bg-[url('/assets/hero.webp')] bg-no-repeat bg-cover bg-center rounded-2xl">
        {/* <img className="w-2/3" src="/assets/hero.webp" alt="" /> */}
      </div>
    </section>
  );
}
