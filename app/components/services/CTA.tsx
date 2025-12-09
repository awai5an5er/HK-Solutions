"use client";

export default function CTA({ ctaprops }:
    {
        ctaprops: {
            heading: string;
            subHeading: string;
            buttonText: string;
        }
    }
) {
    return (
        <section className="py-20 mb-10 mx-15  bg-primary    text-white">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">

                <div className="mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        {ctaprops.heading}
                    </h2>
                    <p className="text-lg mt-4 max-w-md">
                        {ctaprops.subHeading}

                    </p>
                </div>

                <a
                    href="#"
                    className="bg-white text-primary font-semibold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition"
                >
                    {ctaprops.buttonText}
                </a>

            </div>
        </section>
    );
}
