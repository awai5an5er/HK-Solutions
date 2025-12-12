import ContactPage from "../components/contact/ContactPage";
import Form from "../components/Form";

export default function Page() {
  return (
    <div className="flex flex-col">
      <h2 className="heading font-bold text-primary text-center py-13">
        get in touch: we are here to help you
      </h2>
      <div className="w-full flex">
        <div className="w-[50%] ">
          <Form />
        </div>
        <div className="w-[50%]">
          <ContactPage />
        </div>
      </div>
    </div>
  );
}
