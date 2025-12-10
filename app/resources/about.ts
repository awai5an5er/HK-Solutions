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
      "To become the most trusted and respected automotive repair workshop in Dubai and across the UAE, recognized for excellence in service, customer satisfaction, and innovative solutions that set the benchmark for the automotive industry.",
  },
  {
    heading: "OUR MISSION",
    description:
      "We aim to achieve our vision by fostering a safe and supportive workplace for our team, maintaining high ethical standards, creating opportunities for growth, and delivering outstanding service to our customers, partners, and clients throughout the UAE and Middle East.",
  },
];
interface corevaluesType{
  icon:LucideIcon;
  title:string;
  content:string;
}
export const corevalues:corevaluesType[]=[
     {
      icon:ShieldCheck,
      title:"Integrity",
      content:"At HK Solution Energy, we are committed to delivering reliable, sustainable, and cost-effective energy solutions that empower homes and businesses for a greener future."
     },
     {
      icon:Lightbulb,
      title:"Innovation",
      content:"We embrace cutting-edge technologies and creative solutions to deliver smarter, more efficient energy systems, driving sustainable progress for our clients and communities."
     },
     {
      icon:Users,
      title:"Customer Focus",
      content:"Our customers are at the heart of everything we do. We prioritize their needs, deliver personalized solutions, and ensure an exceptional experience with every interaction."
     }
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
