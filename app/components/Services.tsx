import React from "react";
import { Sun, Flame, Layers, FileCheck, Battery } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Solar PV Installation",
      desc: "High-efficiency solar systems designed to lower your energy bills and boost home value.",
      icon: <Sun className="w-14 h-14 text-primary" />,
    },
    {
      title: "Heat Pump Systems",
      desc: "Eco-friendly air-source and ground-source heat pumps backed by UK grants.",
      icon: <Flame className="w-14 h-14 text-primary" />,
    },
    {
      title: "Home Insulation",
      desc: "Premium loft, cavity, and solid-wall insulation to maximise heat retention.",
      icon: <Layers className="w-14 h-14 text-primary" />,
    },
    {
      title: "EPC Certificates",
      desc: "Fast and reliable EPC inspections for landlords and UK homeowners.",
      icon: <FileCheck className="w-14 h-14 text-primary" />,
    },
    {
      title: "Battery Storage",
      desc: "Store excess solar energy and power your home even after sunset efficiently.",
      icon: <Battery className="w-14 h-14 text-primary" />,
    },
    {
      title: "EV Charging Solutions",
      desc: "Smart and fast EV home chargers installed by certified UK professionals.",
      icon: <Battery className="w-14 h-14 text-primary" />,
    },
  ];

  return (
    <section className="">
    <div className="bg-accent py-20">
      <div className="flex flex-col gap-20 w-[95%] mx-auto ">
      <div className="flex flex-col items-center gap-5">
      <h2 className="heading  font-extrabold text-primary ">
        Our Energy Services
      </h2>

      <p className=" text-txtColor normalText text-center">
        Premium UK home energy upgrades backed by government grants & certified
        installers.
      </p>
</div>
      {/* FLEXBOX LAYOUT (3 per row) */}

      <div className="flex gap-8 justify-around sm:justify-between flex-wrap">
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
