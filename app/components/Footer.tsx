import { services, quiklinks, text, contact } from "../resources/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div
        className="
        w-[95%] mx-auto py-10 
        flex flex-wrap 
        justify-center md:justify-between 
        gap-10
      "
      >
        {text.map((value, i) => (
          <div
            key={i}
            className="
              flex flex-col gap-3
              w-full sm:w-[45%] md:w-[22%]
            "
          >
            <span className="subHeading text-secondary font-bold">
              {value.title}
            </span>

            <p className="normalText text-secondary">{value.content}</p>

            <div className="flex gap-5 text-secondary normalText font-bold">
              {value.socials.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        ))}

        {/* SERVICES */}
        <div
          className="
            flex flex-col gap-3
            w-full sm:w-[45%] md:w-[22%]
          "
        >
          <span className="subHeading text-secondary font-bold">
            {services[0].title}
          </span>

          <ul className="flex flex-col gap-2">
            {services[0].links.map(({ name, link }, i) => (
              <li key={i} className="text-secondary normalText">
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="
            flex flex-col gap-3
            w-full sm:w-[45%] md:w-[22%]
          "
        >
          <span className="subHeading text-secondary font-bold">
            {quiklinks[0].title}
          </span>

          <ul className="flex flex-col gap-2">
            {quiklinks[0].links.map(({ name, link }, i) => (
              <li key={i} className="text-secondary normalText">
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div
          className="
            flex flex-col gap-3
            w-full sm:w-[45%] md:w-[22%]
          "
        >
          <span className="subHeading text-secondary font-bold">
            {contact.title}
          </span>

          {contact.items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex gap-3 items-center text-secondary">
              <Icon />
              <span className="normalText">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <hr className="border-secondary" />
      <div className="w-[95%] text-center mx-auto py-5 text-secondary font-bold normalText">
        © 2025 EcoHome UK — All rights reserved | Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
