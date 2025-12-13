import Testimonials from "@/app/components/Testimonial";
import CTA from "../../components/services/CTA";
import FAQ from "../../components/FAQ";
import Features from "../../components/services/Features";
import Hero from "../../components/services/Hero";
import HowItWorks from "../../components/services/HowItWorks";
import InstallationProcess from "../../components/services/InstallationProcess";
import { findService } from "../../resources/services";
export default async function Page({
  params,
}: {
  params: { service: string };
}) {
  const data = await params;
  const selectedService = findService(data.service);
  return (
    <div className="pt-5 ">
      {selectedService ? (
        <div>
          <Hero heroProps={selectedService.hero} />
          <Features
            featuresHeading={selectedService.featuresHeading}
            features={selectedService.features}
          />
          <HowItWorks worksprops={selectedService.howItWorks} />
          <InstallationProcess
            installprops={selectedService.installationProcess}
          />
          <Testimonials />

          <CTA ctaprops={selectedService.cta} />

          <FAQ faqs={selectedService.faqs} />
        </div>
      ) : (
        <h1>Service not found</h1>
      )}
    </div>
  );
}
