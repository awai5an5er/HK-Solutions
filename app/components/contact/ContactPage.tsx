import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="md:p-8 p-5 shadow-xl rounded-xl mx-auto text-center">
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
          <p className="normalText text-primary">hello@hk.co.uk</p>
        </div>

        <div className="flex flex-row py-2 gap-3">
          <MapPin className=" text-primary w-5 h-5" />
          <p className="normalText text-primary">
            123 Green Street, London, UK
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center py-5">
        <h2 className="subHeading text-primary font-bold pb-3">
          Our Operations Hours
        </h2>

        <div className="flex flex-row py-2 gap-3 ">
          <p className="normalText text-primary">Monday-Thursday</p>
          <p className="normalText text-primary">9:00 AM - 5:00 PM</p>
        </div>

        <div className="flex flex-row py-2 gap-3">
          <p className="normalText text-primary">Saturday</p>
          <p className="normalText text-primary">10:00 AM - 2:00 PM</p>
        </div>

        <div className="flex flex-row py-2 gap-3 ">
          <p className="normalText text-primary">Sunday</p>
          <p className="normalText text-primary">Closed</p>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-lg overflow-hidden h-60 shadow-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1198.689093853261!2d55.36501520203905!3d25.17217144182619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67ec76d0ae0b%3A0x482ba993ace9d7aa!2sSpeed%20Full%20Auto%20Garage!5e0!3m2!1sen!2s!4v1764074839736!5m2!1sen!2s"
          width="100%"
          height="100%"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
