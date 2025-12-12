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
    <section className="py-10 mb-5 w-[95%] border rounded-2xl mx-auto   bg-primary    text-secondary">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="pb-8 md:mb-0">
          <h2 className="heading font-bold">{ctaprops.heading}</h2>
          <p className="normalText mt-4 max-w-md">{ctaprops.subHeading}</p>
        </div>

        <ContactBtn
          text={ctaprops.buttonText}
          classes="bg-white text-primary font-semibold px-8 py-4 rounded-full shadow hover:bg-gray-100 transition"
        />
      </div>
    </section>
  );
}
