import { services, quiklinks, text, contact } from "../resources/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div
        className="
        w-[95%] mx-auto py-3 md:py-10 
        flex flex-wrap 
        md:justify-between
        gap-3 
        md:gap-10
      
      "
      >
        {text.map((value, i) => (
          <div
            key={i}
            className="
            md:mb-0 mb-4
              flex flex-col md;gap-3 gap-0
              w-full md:w-[22%]
            "
          >
            <span className="subHeading text-secondary font-bold">
              {value.title}
            </span>

            <p className="normalText text-secondary pe-2">{value.content}</p>
          </div>
        ))}

        {/* SERVICES */}
        <div
          className="
            hidden md:flex flex-col gap-3
            w-full md:w-[22%]
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
            hidden md:flex flex-col gap-3
            w-full md:w-[22%]
          "
        >
          <span className="hidden md:block subHeading text-secondary font-bold">
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
            w-full md:w-[22%]
          "
        >
          <span className="subHeading text-secondary font-bold">
            {contact.title}
          </span>

          {contact.items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex gap-2 items-end text-secondary">
              <Icon />
              <span className="normalText">{text}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-secondary" />
      <div className="w-[95%] text-center mx-auto py-2 text-secondary font-bold normalText">
        © {new Date().getFullYear()} UK — All rights reserved | Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;
