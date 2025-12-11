import { section } from "framer-motion/client";
import React from "react";
interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function CtaBanner({title,description,buttonText}:CtaBannerProps) {
    return (
        <section className="">
        <div className="w-[95%] mx-auto rounded-3xl bg-primary p-10">
            <div className="flex flex-col gap-5 items-center">
                <h2 className="heading text-secondary font-bold ">
                    {title}
                </h2>

                <p className="normalText text-secondary max-w-4xl text-center">
                    {description}
                </p>
             </div>
             <div className="flex justify-center pt-10">
                <button className="bg-accent px-8 py-3 rounded-2xl text-primary font-medium ">
                    {buttonText}
                </button>
                
            </div>
        </div>
        </section>
    );
}
