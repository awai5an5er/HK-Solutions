import CtaBanner from "./components/CtaBanner";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/contact/ContactForm";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <CtaBanner
        title="Ready to Slash Your Energy Bills & Go Green?"
        description="Our team is ready to provide a free, no-obligation survey to assess your home’s needs and unlock
                    full funding for your energy-efficient upgrades."
        buttonText="Book My Free Home Survey"
      />
      <ContactForm />
    </div>
  );
}
