export type NavLink = {
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/heat-pump-systems" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// Optional: Button data
export type NavButton = {
  text: string;
  href?: string; // optional if it's a link
};

export const navButton: NavButton = {
  text: "Book Free Survey",
  href: "#", // change to actual link if needed
};
