"use client";

type Feature = {
  icon: string;
  title: string;
  text: string;
  gradient?: string;
};

type FeaturesProps = {
  features: Feature[];
  featuresHeading: { heading: string; subHeading: string };
};

export default function Features({ features, featuresHeading }: FeaturesProps) {
  return (
    <section className="Space">
    <div className="my-5 lg:py-10 py-5 bg-accent rounded-2xl">
      <div className="px-4">
        {/* Heading */}
        <div className="text-center lg:py-4 ">
          <h2 className="heading font-bold text-primary">
            {featuresHeading.heading}
          </h2>
          <p className="txtColor normalText py-3">
            {featuresHeading.subHeading}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-3 md:gap-10">
          {features.map((feature, i) => {
            return (
              <div
                key={i}
                className="relative flex flex-col items-start p-4 md:p-7 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon Circle */}

                <div className="w-14 h-14  rounded-full bg-primary/10 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="subHeading font-bold text-primary pb-2">
                  {feature.title}
                </h3>

                {/* Text */}
                <p className="txtColor normalText">{feature.text}</p>

                {/* Hover Border Accent */}
                <div className="absolute inset-0 rounded-2xl border-2 border-brand-primary opacity-0 hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
}
