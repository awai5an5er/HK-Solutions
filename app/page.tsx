import CtaBanner from "./components/CtaBanner";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <CtaBanner />
      <ContactForm />
    </div>
  );
}
