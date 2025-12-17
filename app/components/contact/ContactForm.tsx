import { User, Mail, Phone } from "lucide-react";
import Form from "../Form";

export default function ContactForm() {
  return (
    <section className="">
      <div className="flex flex-col sm:flex-row w-[95%] justify-between mx-auto gap-8 py-5 md:py-10">
        {/* LEFT INFO PANEL */}
        <div
          className={`w-full sm:w-[50%] md:w-[45%] lg:w-1/2 flex flex-col justify-center `}
        >
          <h2 className="heading font-extrabold text-primary leading-tight">
            Contact Our Energy Experts
          </h2>
          <p className="py-2 text-txtColor normalText">
            Reduce your energy bills and upgrade your home with our UK-backed
            solutions. Fill the form and our certified team will reach out.
          </p>

          <div className="py-2 space-y-3 text-txtColor">
            <p className="flex items-center gap-3 text-txtColor normalText">
              <span className="text-primary">
                <User />
              </span>
              12 King Street, Manchester, UK
            </p>
            <p className="flex items-center gap-3 text-txtColor normalText">
              <span className="text-primary">
                <Phone />
              </span>
              +44 7523 123456
            </p>
            <p className="flex items-center gap-3 text-txtColor normalText">
              <span className="text-primary">
                <Mail />
              </span>
              support@hk
            </p>
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-60 shadow-lg lg:mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1198.689093853261!2d55.36501520203905!3d25.17217144182619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67ec76d0ae0b%3A0x482ba993ace9d7aa!2sSpeed%20Full%20Auto%20Garage!5e0!3m2!1sen!2s!4v1764074839736!5m2!1sen!2s"
                width="100%"
                height="100%"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="w-full sm:w-[50%] md:w-[45%] lg:w-1/2 relative">
          <Form />
        </div>
      </div>
    </section>
  );
}
