export default function HowItWorks({
  worksprops,
}: {
  worksprops: {
    heading: string;
    description: string;
    image: string;
  };
}) {
  return (
    <section className="flex justify-center Space ">
      <div className="w-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div>
          <h2 className="text-primary heading font-bold pb-3">
            {worksprops.heading}
          </h2>
          <p className="txtColor normalText leading-relaxed">
            {worksprops.description}
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img className="w-full object-cover" src={worksprops.image} />
        </div>
      </div>
    </section>
  );
}
