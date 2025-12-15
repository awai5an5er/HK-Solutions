import { corevalues } from "@/app/resources/about";
const CoreValues = () => {
  return (
    <section className="w-[95%] mx-auto flex flex-col lg:gap-8 gap-5 justify-center items-center lg:py-10 py-5">
      <h1 className="text-primary heading font-bold">Our Core Values</h1>
      <p className="text-txtColor normalText max-w-7xl text-justify">
       At HK Energy Solutions, we are committed to helping homes and businesses access trusted, government-backed energy solutions that are reliable, sustainable, and cost-effective. Our focus is on guiding clients toward approved programs that support long-term efficiency, reduced energy costs, and a greener future.
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-10 gap-3">
        {corevalues.map((value, i) => {
          const Icon = value.icon;
          return (
            <div
              key={`${value} ${i}`}
              className="flex flex-col gap-3 bg-secondary p-5 rounded-2xl"
            >
              <Icon className="text-primary" />
              <h1 className="subHeading text-primary fonld-bold">
                {value.title}
              </h1>
              <p className="text-txtColor normalText text-justify">{value.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default CoreValues;
