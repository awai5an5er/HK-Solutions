import type { LucideIcon } from "lucide-react";
import { ShieldCheck, Lightbulb, Users } from "lucide-react";
interface missionvisionType {
  heading: string;
  description: string;
}
export const missionvision: missionvisionType[] = [
  {
    heading: "OUR VISION",
    description:
      "To become one of the most trusted and respected energy solutions providers in the United Kingdom, recognized for service excellence, customer satisfaction, and innovative approaches that set high standards within the renewable and home energy sector.",
  },
  {
    heading: "OUR MISSION",
    description:
      "We strive to achieve our vision by creating a safe and supportive working environment for our team, upholding strong ethical and professional standards, encouraging continuous growth and development, and delivering outstanding energy solutions to homeowners and businesses across the United Kingdom.",
  },
];
interface corevaluesType {
  icon: LucideIcon;
  title: string;
  content: string;
}
export const corevalues: corevaluesType[] = [
  {
  icon: ShieldCheck,
  title: "Integrity",
  content:
    "We operate with transparency and professionalism, guiding homeowners and businesses toward trusted, government-approved energy programs that support long-term efficiency and reliability.",
},
{
  icon: Lightbulb,
  title: "Innovation",
  content:
    "We stay aligned with evolving government initiatives and modern energy technologies to help clients access smarter, more efficient solutions for a sustainable future.",
},
{
  icon: Users,
  title: "Customer Focus",
  content:
    "Our clients come first. We provide clear guidance, tailored support, and a smooth experience while connecting customers with approved energy solutions that meet their needs.",
},

];

import { Flag, Zap, Globe } from "lucide-react";

export interface MilestoneType {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  year: string;
}

export const milestones: MilestoneType[] = [
  {
    icon: Flag,
    title: "Company Founded",
    subtitle: "",
    year: "2018",
  },
  {
    icon: Zap,
    title: "10 Homes Retrofitted",
    subtitle: "",
    year: "2021",
  },
  {
    icon: Globe,
    title: "National Expansion",
    subtitle: "",
    year: "2023",
  },
];
export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Alex Carter",
    role: "Founder & CEO",
    image: "/assets/team1.jpeg",
  },
  {
    name: "Sophia Lee",
    role: "CTO",
    image: "/assets/team1.jpeg",
  },
  {
    name: "Michael Brown",
    role: "Lead Engineer",
    image: "/assets/team1.jpeg",
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    image: "/assets/team1.jpeg",
  },
];
