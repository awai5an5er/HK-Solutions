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
      "At HK Energy Solutions, we operate with honesty and transparency, delivering dependable, sustainable, and cost-effective energy solutions that help homes and businesses achieve long-term energy efficiency.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    content:
      "We adopt advanced technologies and forward-thinking approaches to create smarter, more efficient energy systems that promote sustainable growth for our clients and the wider community.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    content:
      "Our customers are central to everything we do. We listen carefully to their needs, provide tailored energy solutions, and deliver a consistently high standard of service at every stage.",
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
