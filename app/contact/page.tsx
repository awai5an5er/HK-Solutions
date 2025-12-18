import ContactPage from "../components/contact/ContactPage";
import FAQ from "../components/FAQ";
import Form from "../components/Form";
import Testimonials from "../components/Testimonial";
import { faqs } from "../resources/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Home Energy Solutions UK",
  description:
    "Get in touch with our UK home energy experts for advice, consultations, and professional services including insulation, battery storage, and EV charging solutions",
};

export default function Page() {
  return (
    <div className="w-[95%] mx-auto flex flex-col items-center justify-center">
      <h2 className="heading font-bold text-primary text-center py-5 md:py-10 leading-12">
        Get in touch <br></br>{" "}
        <span className="text-primary font-medium heading">
          we are here to help you
        </span>
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="md:w-[48%] w-full">
          <Form />
        </div>
        <div className="md:w-[48%] w-full border-primary">
          <ContactPage />
        </div>
      </div>
      
        <Testimonials />
    
      <FAQ faqs={faqs} />
    </div>
  );
}
