import React from "react";
import { ShieldCheck, Banknote, ClipboardCheck } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const StatCard = ({ icon, title, subtitle }: StatCardProps) => {
  return (
    <div
      className="
            flex items-center gap-5 
            p-6 rounded-2xl border border-primary 
            bg-secondery shadow-[0_4px_20px_rgba(0,0,0,0.05)]
            hover:shadow-[0_6px_30px_rgba(0,0,0,0.10)]
            transition-all duration-300 hover:-translate-y-1
            "
    >
      <div className="text-primary">{icon}</div>

      <div>
        <p className="font-bold normalText text-primary">{title}</p>
        <p className="text-txtColor normalText mt-1">{subtitle}</p>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="w-full px-6 py-3 md:px-12 max-w-7xl mx-auto">
      {/* FLEXBOX ONLY */}
      <div className="flex flex-wrap gap-8 sm:gap-5 justify-center">
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          <StatCard
            icon={<ShieldCheck className="w-12 h-12" />}
            title="UK Certified"
            subtitle="TrustMark Approved Installers"
          />
        </div>

        <div className="w-full sm:w-[48%] lg:w-[30%]">
          <StatCard
            icon={<Banknote className="w-12 h-12" />}
            title="Government Grants"
            subtitle="Access Full Funding Schemes"
          />
        </div>

        <div className="w-full sm:w-[48%] lg:w-[35%]">
          <StatCard
            icon={<ClipboardCheck className="w-12 h-12" />}
            title="100% Free Survey"
            subtitle="No Obligation, No Hidden Costs"
          />
        </div>
      </div>
    </section>
  );
}
