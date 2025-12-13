import { milestones } from "@/app/resources/about";
const Story = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between lg:py-10 py-5 w-[95%] mx-auto gap-10">
      <div className="flex flex-col gap-5 w-full sm:w-1/2">
        <h1 className="heading text-primary font-bold">Our Story</h1>
        <p className="text-txtColor normalText">
          HK Energy Solutions was established with a clear mission to make
          sustainable and renewable energy solutions accessible, reliable, and
          efficient for homes and businesses. With proven expertise in solar PV
          installation, heat pump systems, home insulation, and energy-efficient
          technologies, we deliver tailored solutions that reduce energy costs,
          minimize environmental impact, and support our clients in building a
          cleaner, more sustainable future.
        </p>
        <div className="flex flex-col gap-3">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex gap-3 items-start">
                <Icon className="w-6 h-6 text-primary mt-1" />
                <div className="flex flex-col">
                  <span className="text-txtColor normalText">{item.title}</span>
                  {item.subtitle && (
                    <span className="text-gray-500 normalText">
                      {item.subtitle}
                    </span>
                  )}
                  <span className="italic normalText">{item.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center ">
        <img
          src="/assets/hero.webp"
          alt=""
          className="w-full object-cover object-center rounded-2xl"
        />
      </div>
    </section>
  );
};
export default Story;
