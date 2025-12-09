import { services, quiklinks, text, contact } from "../resources/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="w-[95%] flex mx-auto justify-around md:justify-between flex-wrap gap-3 md:gap-10 py-10">
        {text.map((value, i) => (
          <div
            key={`${value} ${i}`}
            className="flex flex-col gap-3 w-9/20 sm:w-1/4 md:w-1/5"
          >
            <span className="subHeading text-secondary font-bold">
              {value.title}
            </span>
            <p className="normalText text-secondary">{value.content}</p>
            <div className="flex gap-5 text-secondary normalText font-bold">
              {value.socials.map((items, index) => (
                <span key={`${items} ${index}`}>{items}</span>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-3 w-9/20 sm:w-auto">
          <span className="subHeading text-secondary font-bold">
            {services[0].title}
          </span>

          <ul className="flex flex-col gap-2">
            {services[0].links.map(({ name, link }, i) => (
              <li
                key={`${name} ${link} ${i}`}
                className="text-secondary normalText"
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 w-9/20 sm:w-auto">
          <span className="subHeading text-secondary font-bold">
            {quiklinks[0].title}
          </span>
          <ul className="flex flex-col gap-2">
            {quiklinks[0].links.map(({ name, link }, i) => (
              <li
                key={`${name} ${link} ${i}`}
                className="text-secondary normalText"
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 w-1/2 sm:w-auto">
          <span className="subHeading text-secondary font-bold">
            {contact.title}
          </span>

          {contact.items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex gap-3 items-center text-secondary">
              <Icon />
              <span className="normalText text-secondary">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-secondary" />
      <div className="w-[95%] text-center py-5 text-secondary font-bold normalText">
        @2025 EcoHome UK, All right reserved | Privacy Policy
      </div>
    </footer>
  );
};
export default Footer;
