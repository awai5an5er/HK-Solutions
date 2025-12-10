"use client";

import { InstallationStep } from "@/app/resources/services";

export default function InstallationProcess({
  installprops,
}: {
  installprops: InstallationStep[];
}) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Installation Process
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {installprops.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-white p-8 shadow-lg rounded-xl flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full text-xl font-bold">
                {step.stepNumber}
              </div>
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="txtColor mt-3 text-justify">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
