import { milestones } from "@/app/resources/about";
const Story = () => {
  return (
    <section className="flex flex-col lg:items-center lg:flex-row justify-between lg:py-10 py-5 w-[95%] mx-auto gap-10">
      <div className="flex flex-col  gap-2 w-full lg:w-1/2">
        <h1 className="heading text-primary font-bold">
          {" "}
          Transform Your Home with Government-Backed Energy Solutions
        </h1>
        <p className="text-txtColor normalText">
          Upgrade your home effortlessly with UK government-supported services
          designed to reduce energy costs, enhance comfort, and improve
          sustainability. At HK Energy Solutions, we act as your trusted
          intermediary, connecting homeowners with certified programs for solar
          PV installations, heat pump systems, home insulation, battery storage,
          EV charging, and EPC certification.Our team ensures a smooth process
          from start to finish, helping you access high-quality services
          approved by the UK government. Enjoy lower utility bills, a reduced
          carbon footprint, and a safer, greener home all while benefiting from
          solutions tailored to your energy and efficiency goals.
        </p>
      </div>

      <div className="flex justify-center ">
        <img
          src="/assets/hero.webp"
          alt=""
          className="w-full object-cover object-contain object-center rounded-2xl"
        />
      </div>
    </section>
  );
};
export default Story;
