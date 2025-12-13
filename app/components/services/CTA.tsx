"use client";
import ContactBtn from "../ContactBtn";
export default function CTA({
  ctaprops,
}: {
  ctaprops: {
    heading: string;
    subHeading: string;
    buttonText: string;
  };
}) {
  return (
    <section className="lg:p-6 p-4 mb-5 w-full border rounded-2xl mx-auto   bg-primary    text-secondary">
      <div className=" flex flex-col md:flex-row items-center justify-between ">
        <div className="pb-5 md:pb-0">
          <h2 className="heading font-bold text-center">{ctaprops.heading}</h2>
          <p className="normalText mt-4 lg:text-start text-center">
            {ctaprops.subHeading}
          </p>
        </div>

        <ContactBtn
          text={ctaprops.buttonText}
          classes="bg-white text-primary font-semibold lg:px-8 lg:py-4 p-4 rounded-full shadow hover:bg-gray-100 transition"
        />
      </div>
    </section>
  );
}
