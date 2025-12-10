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
    <section className="w-full py-20 bg-accent px-6 md:px-12">
      <h2 className="heading md:text-4xl font-extrabold text-primary text-center">
        Our Energy Services
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-3 text-txtColor normalText">
        Premium UK home energy upgrades backed by government grants & certified
        installers.
      </p>

      {/* FLEXBOX LAYOUT (3 per row) */}
      <div
        className="
                    flex flex-wrap justify-center 
                    gap-5 mt-16 max-w-7xl mx-auto
                "
      >
        {services.map((item, i) => (
          <div
            key={i}
            className="
                            w-full sm:w-[48%] lg:w-[30%] 
                            p-10 rounded-3xl border border-accent 
                            bg-secondary shadow-[0_6px_30px_rgba(0,0,0,0.06)]
                            transition-all duration-300 cursor-pointer
                            hover:shadow-[0_12px_50px_rgba(0,0,0,0.15)]
                            hover:-translate-y-2 hover:scale-[1.03]
                        "
          >
            <div className="mb-6">{item.icon}</div>

            <h3 className="subHeading font-bold text-primary">{item.title}</h3>

            <p className="text-txtColor mt-3 leading-relaxed normalText">
              {item.desc}
            </p>

            <button className="mt-6 text-primary font-semibold hover:underline flex items-center gap-1 normalText">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
