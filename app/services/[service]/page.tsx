import Testimonials from "@/app/components/Testimonial";
import FAQ from "../../components/FAQ";
import Features from "../../components/Services/Features";
import Hero from "../../components/Services/Hero";
import HowItWorks from "../../components/Services/HowItWorks";
import InstallationProcess from "../../components/Services/InstallationProcess";
import { findService } from "../../resources/services";
import CtaBanner from "@/app/components/CtaBanner";
export default async function Page({
  params,
}: {
  params: { service: string };
}) {
  const data = await params;
  const selectedService = findService(data.service);
  return (
    <div>
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
          <CtaBanner
            title={selectedService.cta.heading}
            description={selectedService.cta.subHeading}
            buttonText={selectedService.cta.buttonText}
          />

          <FAQ faqs={selectedService.faqs} />
        </div>
      ) : (
        <div className="h-[50vh] flex justify-center items-center">
          <h1 className="heading">404 : Page not found!</h1>
        </div>
      )}
    </div>
  );
}
