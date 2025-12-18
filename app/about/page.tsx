import Banner from "../components/About/Banner";
import CoreValues from "../components/About/CoreValues";
import MissionVision from "../components/About/MissionVision";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import ContactForm from "../components/contact/ContactForm";
import CtaBanner from "../components/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - UK Home Energy Experts",
  description:
    "Learn about our mission to provide sustainable and efficient home energy solutions across the UK. Expert guidance for insulation, battery storage, and EV charging",
};

const AboutPage = () => {
  return (
    <> 
      <Banner />
      <Story />
    
        <CoreValues />
    
        <CtaBanner
          title="Looking to Upgrade Your Home’s Energy Efficiency?"
          description="Learn how HK Solution Energy can transform your home with innovative, eco-friendly solutions tailored to your needs."
          buttonText="Get Quote"
        />

      <MissionVision />

      <Team />
      <ContactForm />
    </>
  );
};
export default AboutPage;
