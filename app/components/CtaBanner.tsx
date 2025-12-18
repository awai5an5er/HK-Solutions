import ContactBtn from "./ContactBtn";
interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
}

export default function CtaBanner({
  title,
  description,
  buttonText,
}: CtaBannerProps) {
  return (
    <section className="Space">
      <div className="w-[95%] mx-auto rounded-3xl bg-primary md:p-10 p-5">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="heading text-secondary font-bold text-center mx-auto ">
            {title}
          </h2>

          <p className="normalText text-secondary max-w-4xl mx-auto text-center">
            {description}
          </p>
        </div>
        <div className="flex justify-center md:pt-6 pt-3">
          <ContactBtn
            text={buttonText}
            classes="bg-accent px-8 py-3 rounded-2xl normalText text-primary font-medium cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}
