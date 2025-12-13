import { Phone, MapPin, Mail } from "lucide-react";
interface servicesType {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}
export const services: servicesType[] = [
  {
    title: "Service",
    links: [
      {
        name: "Solar PV Installation",
        link: "/services/solar-pv-installation",
      },
      {
        name: "Heat Pump Systems",
        link: "/services/heat-pump-systems",
      },
      {
        name: "Home Insulation",
        link: "/services/home-insulation",
      },
      {
        name: "EPC Certificates",
        link: "/services/epc-certificates",
      },
      {
        name: "EV Charging Solutions",
        link: "/services/ev-charging-solutions",
      },
    ],
  },
];

interface quicklinksType {
  title: string;
  links: {
    name: string;
    link: string;
  }[];
}
export const quiklinks: quicklinksType[] = [
  {
    title: "Quick Links",
    links: [
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
      {
        name: "FAQS",
        link: "/#faqs",
      },
    ],
  },
];
interface textType {
  title: string;
  content: string[];
}
export const text: textType[] = [
  {
    title: "EcoHome Uk",
    content: [
      "Your trusted partner for a greener,more energy-efficient home in the UK.Certified installers of renewable energy solutions.",
    ],
  },
];

export interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface ContactSection {
  title: string;
  items: ContactItem[];
}

export const contact: ContactSection = {
  title: "Contact",
  items: [
    { icon: MapPin, text: "123 Green Street, London, UK" },
    { icon: Phone, text: "+44 1234 567890" },
    { icon: Mail, text: "hello@hk.co.uk" },
  ],
};
