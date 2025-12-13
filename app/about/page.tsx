import Banner from "../components/About/Banner";
import CoreValues from "../components/About/CoreValues";
import MissionVision from "../components/About/MissionVision";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import CtaBanner from "../components/CtaBanner";
const AboutPage = () => {
  return (
    <>
      <Banner />
      <Story />
      <div className="bg-accent">
        <CoreValues />
      </div>
      <div className="lg:mt-10 mt-5">
        <CtaBanner
          title="Looking to Upgrade Your Home’s Energy Efficiency?"
          description="Learn how HK Solution Energy can transform your home with innovative, eco-friendly solutions tailored to your needs."
          buttonText="Get Quote"
        />
      </div>
      <MissionVision />

      <Team />
    </>
  );
};
export default AboutPage;
