import ContactBtn from "../ContactBtn";
const Story = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-between lg:py-10 py-5 w-[95%] mx-auto gap-10">
      <div className="flex flex-col gap-5 w-full sm:w-7/10">
        <h1 className="heading text-primary font-bold">Our Story</h1>
        <p className="text-txtColor normalText text-justify">
          HK Energy Solutions was founded to make accessing UK
          government-supported energy efficiency and renewable energy programs
          simple, reliable, and transparent for homeowners and businesses.
          Navigating government schemes can be complex, which is why we act as a
          trusted intermediary. By connecting clients with certified programs,
          we provide access to high-quality solutions such as solar PV systems,
          heat pumps, advanced home insulation, battery storage, EV charging,
          and EPC certification. Our mission is to help clients reduce energy
          costs, enhance comfort and performance, minimize environmental impact,
          and contribute to a greener, more sustainable future. With expert
          guidance, tailored solutions, and full support at every stage, we
          empower clients to make informed decisions, adopt sustainable
          technologies, and achieve long-term energy savings while meeting
          national efficiency goals.
        </p>
        <ContactBtn
          text="Contact us"
          classes="bg-primary px-8 py-3 rounded-2xl text-secondary normalText cursor-pointer"
        />
        {/* <div className="flex flex-col gap-3">
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
        </div> */}
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
