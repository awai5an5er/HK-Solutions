import Banner from "./components/Banner";
import CtaBanner from "./components/CtaBanner";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactForm from "./components/contact/ContactForm";
import { faqs } from "./resources/faq";

export default function Home() {
  return (
    <div>
      <Banner />
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <div id="faqs">
        <FAQ faqs={faqs} />
      </div>
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
