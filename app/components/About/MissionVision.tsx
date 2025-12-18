import { missionvision } from "@/app/resources/about";
const MissionVision = () => {
  return (
    <section className="w-[95%] mx-auto flex flex-col gap-3 md:flex-row md:gap-5 Space">
      {missionvision.map((value, i) => (
        <div
          key={`${value} ${i}`}
          className={`flex flex-col w-full  px-6 lg:py-8 py-5 items-start bg-accent rounded-2xl  gap-5  border border-secondary
            `}
        >
          <h1 className="subHeading font-bold text-primary">{value.heading}</h1>
          <p className="normalText text-txtColor text-justify">{value.description}</p>
        </div>
      ))}
    </section>
  );
};
export default MissionVision;
