import React from "react";
interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function CtaBanner({title,description,buttonText}:CtaBannerProps) {
    return (
        <section className="w-full px-6 py-8 md:py-10">
            <div
                className="
                    max-w-6xl mx-auto 
                    rounded-2xl 
                    bg-linear-to-r from-primary to-primary/60
                    p-8 md:p-12
                    text-center text-secondary
                    shadow-xl
                "
            >
                <h2 className="heading font-bold tracking-tight leading-snug">
                    {title}
                </h2>

                <p className="mt-4 max-w-2xl mx-auto normalText  opacity-90 leading-relaxed">
                    {description}
                </p>

                <button
                    className="
                        mt-8
                        mx-auto
                        flex items-center justify-center
                        h-12 sm:h-14 px-6 sm:px-10
                        rounded-xl
                        bg-accent text-primary font-bold
                        shadow-lg hover:bg-opacity-90
                        transition-all normalText
                    "
                >
                    {buttonText}
                </button>
            </div>
        </section>
    );
}
