import CTA from "../components/services/CTA";
import FAQ from "../components/services/FAQ";
import Features from "../components/services/Features";
import Hero from "../components/services/Hero";
import HowItWorks from "../components/services/HowItWorks";
import InstallationProcess from "../components/services/InstallationProcess";
import { services } from "../resources/services/services";
export default function Page() {
    return (
        <div className="pt-35">
            <Hero heroProps={services[0].hero} />
            <Features features={services[0].features} />
            <HowItWorks worksprops={services[0].howItWorks} />
            <InstallationProcess installprops={services[0].installationProcess} />
            <FAQ faqs={services[0].faqs} />
            <CTA ctaprops={services[0].cta} />
        </div>
    );
}
