import ContactPage from "../components/contact/ContactPage";
import FAQ from "../components/FAQ";
import Form from "../components/Form";
import Testimonials from "../components/Testimonial";
import { faqs } from "../resources/faq";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h2 className="heading font-bold text-primary text-center py-13">
        get in touch: we are here to help you
      </h2>
      <div className="w-full flex flex-col md:flex-row">
        <div className="md:w-[50%] ">
          <Form />
        </div>
        <div className="md:w-[50%]">
          <ContactPage />
        </div>
      </div>
      <Testimonials />
      <FAQ faqs={faqs} />
    </div>
  );
}
