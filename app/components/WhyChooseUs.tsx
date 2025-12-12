import React from "react";
import { ShieldCheck, Banknote, ClipboardCheck, Wrench, Building2, ThumbsUp } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const StatCard = ({ icon, title, subtitle }: StatCardProps) => {
  return (
    <div className="flex gap-5 border p-5 rounded-2xl hover:shadow-xl transition-all duration-300 bg-secondary">
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
    <section className="w-[95%] mx-auto py-15">
       <div className="flex flex-col items-center gap-5">
      <h1 className="heading text-primary font-bold">Why Choose US</h1>
      <p className="text-txtColor normalText max-w-5xl">At HK Energy Solutions, we provide reliable energy upgrades that reduce bills, improve comfort, and add long term value. Our certified experts use advanced technology to deliver efficient, high quality solutions for a cleaner and more sustainable home.</p>
      </div>
      <div className=" mx-auto grid gap-8 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10">

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
          subtitle="Solutions for flats, houses & commercial"
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
