import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <Services />
      <CtaBanner />
      <ContactForm />
      <Footer />
    </div>
  );
}
