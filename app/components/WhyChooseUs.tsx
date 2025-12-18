import React from "react";
import {
  ShieldCheck,
  Banknote,
  ClipboardCheck,
  Wrench,
  Building2,
  ThumbsUp,
} from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const StatCard = ({ icon, title, subtitle }: StatCardProps) => {
  return (
    <div className="flex gap-5 border p-5 rounded-2xl shadow-lg hover:scale-101 transition-all duration-300 bg-secondary">
      <div className="text-primary">{icon}</div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold subHeading text-primary">{title}</h1>
        <p className="text-txtColor normalText">{subtitle}</p>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="w-[95%] mx-auto Space">
      <div className="flex flex-col items-center gap-3 md:gap-5">
        <h1 className="heading text-primary font-bold">Why Choose US</h1>
        <p className="text-txtColor text-center normalText max-w-5xl">
          HK Energy Solutions helps homeowners access reliable, government
          backed energy upgrades that lower bills, enhance comfort, and add
          long-term value. We ensure a smooth process to approved solutions that
          support a cleaner, more efficient, and sustainable home
        </p>
      </div>
      <div
        className=" mx-auto grid gap-3 md:gap-8 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5 md:pt-10"
      >
        <StatCard
          icon={<ShieldCheck className="size-10" />}
          title="UK Certified"
          subtitle="TrustMark Approved Installers"
        />

        <StatCard
          icon={<Banknote className="size-10" />}
          title="Government Grants"
          subtitle="Access Full Funding Schemes"
        />

        <StatCard
          icon={<ClipboardCheck className="size-10" />}
          title="100% Free Survey"
          subtitle="No Hidden Charges"
        />

        {/* NEW CARDS BELOW */}

        <StatCard
          icon={<Wrench className="size-10" />}
          title="Expert Engineers"
          subtitle="Professionally trained installation team"
        />

        <StatCard
          icon={<Building2 className="size-10" />}
          title="All Home Types"
          subtitle="Solutions for flats & houses"
        />

        <StatCard
          icon={<ThumbsUp className="size-10" />}
          title="Customer Satisfaction"
          subtitle="Rated excellent by happy homeowners"
        />
      </div>
    </section>
  );
}
