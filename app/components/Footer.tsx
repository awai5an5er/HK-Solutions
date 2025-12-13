import { Facebook, Instagram, Twitter } from "lucide-react";
import { services, quiklinks, text, contact } from "../resources/footer";
import Link from "next/link";

const Footer = () => {
  const socialMedia = [
    { icon: Facebook },
    { icon: Instagram },
    { icon: Twitter },
  ];
  return (
    <footer className="bg-primary">
      <div
        className="
        w-[95%] mx-auto py-3 md:py-10 
        flex flex-wrap 
        md:justify-between 
        md:gap-10
      "
      >
        {text.map((value, i) => (
          <div
            key={i}
            className="
              flex flex-col gap-3
              w-1/2 md:w-[22%]
            "
          >
            <span className="subHeading text-secondary font-bold">
              {value.title}
            </span>

            <p className="normalText text-secondary">{value.content}</p>
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
            w-1/2 md:w-[22%]
          "
        >
          <span className="subHeading text-secondary font-bold">
            {contact.title}
          </span>

          {contact.items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex gap-3 items-end text-secondary">
              <Icon />
              <span className="normalText">{text}</span>
            </div>
          ))}
          <div className="flex gap-5 text-secondary normalText font-bold">
            {socialMedia.map(({ icon: Icon }, index) => (
              <div className="p-2 bg-secondary rounded-full" key={index}>
                <Icon size={15} className="text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <hr className="border-secondary" />
      <div className="w-[95%] text-center mx-auto py-5 text-secondary font-bold normalText">
        © 2025 {new Date().getFullYear()} UK — All rights reserved | Privacy
        Policy
      </div>
    </footer>
  );
};

export default Footer;
