import { Sun, Flame, Layers, FileCheck, Battery } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Solar PV Installation",
      desc: "Government approved solar PV solutions that help homeowners generate clean energy and reduce long-term electricity costs.",
      icon: <Sun className="w-14 h-14 text-primary" />,
    },
    {
      title: "Heat Pump Systems",
      desc: "UK government supported heat pump programs designed to lower heating expenses while maintaining year-round home comfort.",
      icon: <Flame className="w-14 h-14 text-primary" />,
    },
    {
      title: "Home Insulation",
      desc: "Certified insulation services accessed through government schemes to improve efficiency and minimise heat loss.",
      icon: <Layers className="w-14 h-14 text-primary" />,
    },
    {
      title: "EPC Certificates",
      desc: "Official EPC assessments arranged through approved UK providers to meet compliance and energy standards.",
      icon: <FileCheck className="w-14 h-14 text-primary" />,
    },
    {
      title: "Battery Storage",
      desc: "Government backed battery storage options that allow homeowners to store energy for smarter daily use.",
      icon: <Battery className="w-14 h-14 text-primary" />,
    },
    {
      title: "EV Charging Solutions",
      desc: "Access approved EV charging installations through UK government programs for safe and reliable home charging.",
      icon: <Battery className="w-14 h-14 text-primary" />,
    },
  ];

  return (
    <section className="">
      <div className="bg-accent py-7 md:py-15">
        <div className="flex flex-col gap-8 md:gap-12 w-[95%] mx-auto ">
          <div className="flex flex-col text-center items-center gap-3">
            <h2 className="heading font-extrabold text-primary ">
              Our Energy Solutions
            </h2>

            <p className=" text-txtColor  max-w-5xl  normalText">
              Reliable, government backed energy solutions that improve comfort,
              reduce costs, and help UK homeowners access certified programs for
              a more efficient and sustainable home.
            </p>
          </div>
          {/* FLEXBOX LAYOUT (3 per row) */}

          <div className="flex gap-3 md:gap-8 justify-around sm:justify-between flex-wrap">
            {services.map((item, i) => (
              <div
                key={`${item} ${i}`}
                className="bg-secondary flex flex-col gap-5 p-5 w-full sm:w-[47%]  lg:w-[30%] rounded-2xl "
              >
                <div className="">{item.icon}</div>

                <h3 className="subHeading font-bold text-primary">
                  {item.title}
                </h3>

                <p className="text-txtColor normalText">{item.desc}</p>

                <button className=" text-primary font-semibold flex items-center cursor-pointer normalText">
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
