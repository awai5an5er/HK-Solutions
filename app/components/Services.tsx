import React from "react";
import { Sun, Flame, Layers, FileCheck, Battery } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Solar PV Installation",
         desc: "Advanced solar PV systems that deliver maximum energy generation and long-term savings.",
      icon: <Sun className="w-14 h-14 text-primary" />,
    },
    {
      title: "Heat Pump Systems",
     desc: "Efficient air-source and ground-source heat pumps designed to cut heating costs and improve comfort.",
      icon: <Flame className="w-14 h-14 text-primary" />,
    },
    {
      title: "Home Insulation",
      desc: "High-quality loft, cavity, and solid-wall insulation that boosts efficiency and reduces heat loss.",
      icon: <Layers className="w-14 h-14 text-primary" />,
    },
    {
      title: "EPC Certificates",
      desc: "Professional and accurate EPC assessments for landlords, homeowners, and property sellers.",
      icon: <FileCheck className="w-14 h-14 text-primary" />,
    },
    {
      title: "Battery Storage",
        desc: "Smart battery storage solutions that let you save excess solar power for reliable, round-the-clock use.",
      icon: <Battery className="w-14 h-14 text-primary" />,
    },
    {
      title: "EV Charging Solutions",
     desc: "Fast and reliable EV home charging installations carried out by certified UK technicians.",
      icon: <Battery className="w-14 h-14 text-primary" />,
    },
  ];

  return (
    <section className="">
    <div className="bg-accent py-7 md:py-15">
      <div className="flex flex-col gap-8 md:gap-12 w-[95%] mx-auto ">
      <div className="flex flex-col items-center gap-5">
      <h2 className="heading  font-extrabold text-primary  ">
        Our Energy Solutions
      </h2>

      <p className=" text-txtColor max-w-5xl  normalText">
       Reliable and efficient home energy upgrades designed to improve comfort, reduce costs, and enhance long term performance. Our certified experts deliver tailored solutions that boost your home's energy efficiency, increase property value, and provide lasting savings for years to come.
      </p>
</div>
      {/* FLEXBOX LAYOUT (3 per row) */}

      <div className="flex gap-3 md:gap-8 justify-around sm:justify-between flex-wrap">
        {services.map((item, i) => (
          <div key={`${item} ${i}`} className="bg-secondary flex flex-col gap-5 p-5 w-full sm:w-[47%]  lg:w-[30%] rounded-2xl ">
            <div className="">{item.icon}</div>

            <h3 className="subHeading font-bold text-primary">{item.title}</h3>

            <p className="text-txtColor normalText">
              {item.desc}
            </p>

            <button className=" text-primary font-semibold hover:underline flex items-center  normalText">
              Learn More →
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
    </section>
  );
}
