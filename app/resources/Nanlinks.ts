export type SubMenuLink = {
  name: string;
  href: string;
};

export type NavLink = {
  name: string;
  href?: string;
  submenu?: SubMenuLink[];
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },

  {
    name: "Services",
    submenu: [
      { name: "Solar PV Installation", href: "/services/solar-pv-installation" },
      { name: "Heat Pump Systems", href: "/services/heat-pump-systems" },
      { name: "Home Insulation", href: "/services/home-insulation" },
      { name: "EPC Certificates", href: "/services/epc-certificates" },
      { name: "Battery Storage", href: "/services/battery-storage" },
      { name: "EV Charging Solutions", href: "/services/ev-charging-solutions" },
    ],
  },

  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Optional: Button data
export type NavButton = {
  text: string;
  href?: string;
};

export const navButton: NavButton = {
  text: "Book Free Survey",
  href: "#",
};
