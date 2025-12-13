import { missionvision } from "@/app/resources/about";
const MissionVision = () => {
  return (
    <section className="w-[95%] mx-auto flex flex-col gap-3 md:flex-row md:gap-10 lg:py-10 my-5">
      {missionvision.map((value, i) => (
        <div
          key={`${value} ${i}`}
          className={`flex flex-col w-full  px-6 lg:py-8 py-5 items-start bg-accent rounded-2xl md:px-10 gap-5 md:py-10 border border-secondary
            `}
        >
          <h1 className="subHeading font-bold text-primary">{value.heading}</h1>
          <p className="normalText text-txtColor">{value.description}</p>
        </div>
      ))}
    </section>
  );
};
export default MissionVision;
