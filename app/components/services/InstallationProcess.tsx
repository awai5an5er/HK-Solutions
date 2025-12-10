"use client";

import { InstallationStep } from "@/app/resources/services";

export default function InstallationProcess({
  installprops,
}: {
  installprops: InstallationStep[];
}) {
  return (
    <section className="py-20 bg-accent">
      <div className="mx-auto px-4">
        <h2 className="heading font-bold text-center pb-8 text-primary">
          Installation Process
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {installprops.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-secondary p-8 shadow-lg rounded-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold">
                {step.stepNumber}
              </div>
              <h3 className="subHeading txtColor font-semibold pt-4">{step.title}</h3>
              <p className="txtColor normalText pt-3 text-justify">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
