import ContactForm from "../components/contact/ContactForm";
import ContactPage from "../components/contact/ContactPage";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h2 className="heading font-bold text-primary text-center py-13">
        get in touch: we are here to help you
      </h2>
      <div className="w-full flex">
        <div className="w-[60%] ">
          <ContactForm hideLeft={true} />
        </div>
        <div className="w-[40%]">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}
