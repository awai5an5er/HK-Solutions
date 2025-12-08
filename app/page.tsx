import EligibilityCalculator from "./components/EligibilityCalculator";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <EligibilityCalculator />


    </div>
  );
}
