import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="p-10 bg-accent rounded-xl mx-auto text-center">
      <div className="flex flex-col items-center">
        <h2 className="subHeading text-primary font-bold pb-3">
          Our Contact Details
        </h2>

        <div className="flex flex-row py-2 gap-3">
          <Phone className=" text-primary w-5 h-5" />
          <p className="text-primary">+44 1234 567890</p>
        </div>

        <div className="flex flex-row py-2 gap-3">
          <Mail className=" text-primary w-5 h-5" />
          <p className="text-primary">hello@hk.co.uk</p>
        </div>

        <div className="flex flex-row py-2 gap-3">
          <MapPin className=" text-primary w-5 h-5" />
          <p className="text-primary">123 Green Street, London, UK</p>
        </div>
      </div>

      <div className="flex flex-col items-center py-10">
        <h2 className="subHeading text-primary font-bold pb-3">
          Our Operations Hours
        </h2>

        <div className="flex flex-row py-2 gap-3 ">
          <p className="text-primary">Monday-Thursday</p>
          <p className="text-primary">9:00 AM - 5:00 PM</p>
        </div>

        <div className="flex flex-row py-2 gap-3">
          <p className="text-primary">Saturday</p>
          <p className="text-primary">10:00 AM - 2:00 PM</p>
        </div>

        <div className="flex flex-row py-2 gap-3 ">
          <p className="text-primary">Sunday</p>
          <p className="text-primary">Closed</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
