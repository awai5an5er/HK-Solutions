// services.ts

export type Feature = {
  title: string;
  text: string;
  icon: string;
  gradient?: string;
};

export type InstallationStep = {
  stepNumber: number;
  title: string;
  description: string;
};
export type faqsType = {
  question: string;
  answer: string;
};

export type ServiceData = {
  name: string;
  hero: {
    heading: string;
    subHeading: string;
    backgroundImage: string;
  };
  featuresHeading: { heading: string; subHeading: string };
  features: Feature[];
  howItWorks: {
    heading: string;
    description: string;
    image: string;
  };
  installationProcess: InstallationStep[];
  cta: {
    heading: string;
    subHeading: string;
    buttonText: string;
  };
  faqs: faqsType[];
};

export const services: ServiceData[] = [
  // --- Solar PV Installation ---

  {
    name: "Solar PV Installation",
    hero: {
      heading: "Professional Solar PV Installation for UK Homes",
      subHeading:
        "Access government-backed solar PV systems to generate clean electricity, reduce energy costs, and improve long-term efficiency through certified installations.",
      backgroundImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuARZTFDetSvY-TPCqYWfhKDO6fMyWnOKLCXLzQdFwY3aYdROaNKsXZEN-IYhALf6U0Dn4TBfvcNBTGE8L5sxfPp6IwmjATRiIFgC_vCQYCHZJt1qm9kDvRDqQi1KWqejWvByZyLwt_EHsPY9Vh6c3_aWp3j7P1GNJgXQ5xgDpdVywVE2GNB38sH6O2tSM4vdEj42e2uky6QE1xNXPI0OYN7ssrTpReK-1CPvUSEmz5qYYk3Qz09fgVZpeBCyjBJzYbCxYo1IkPZztnv",
    },

    featuresHeading: {
      heading: "Benefits of Solar PV Systems",
      subHeading:
        "Government-supported solar solutions help homeowners reduce electricity bills, increase energy efficiency, and support a sustainable future by generating clean, renewable energy.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Lower Energy Bills",
        text: "Access certified solar PV systems that reduce reliance on the grid and help lower electricity costs for your home.",
        gradient: "from-green-400 to-green-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "Cleaner Energy Choice",
        text: "Switch to renewable, government approved energy solutions and reduce your household carbon footprint.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Greater Energy Control",
        text: "Generate your own electricity and store surplus energy for later use with approved battery options.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Added Property Value",
        text: "Homes with certified solar PV systems become more energy-efficient and attractive to buyers.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],

    howItWorks: {
      heading: "How Solar PV Systems Operate",
      description:
        "Solar panels capture sunlight and convert it into usable electricity through photovoltaic cells. The energy powers your home while reducing dependency on grid electricity. Any excess power can be stored in government approved battery systems or exported back to the grid, helping to lower bills, increase efficiency, and maximize long-term savings.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO_9B6tJ12DUCokUGEnwU8R4Fx1xqR05oBLrD8NEoFCMNf7X7RYkiIXkOslnV8hV0zNbGUo-jFjNIDBQ1MCMnoL5hTzsBXAZrjNlvuA5Wrum-ZmuJwqr9slyeI4Mb1ounRMLT15oa6xjg4WCUiusOxVHSJNG6xpClJkN57X9yWtpflM4NlhUGqNBigHY3vWCJtSzdYnk96dlxVh5TQW1gw7nYXz6fhEXgWXRzf-liAieoQejtUtaCt-F4A-axaBh8Z_BL2ZVPljtW4",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Home Assessment",
        description:
          "We evaluate your roof, sunlight exposure, available space, and energy usage to identify the most suitable government-backed solar PV solution for your home.",
      },
      {
        stepNumber: 2,
        title: "System Planning",
        description:
          "A customised solar PV system is designed according to your property, energy needs, and approved government program guidelines to ensure optimal performance.",
      },
      {
        stepNumber: 3,
        title: "Expert Installation",
        description:
          "Certified installers complete the solar PV setup safely and efficiently, followed by full system testing to guarantee reliable, long-term performance.",
      },
    ],

    cta: {
      heading: "Thinking About Solar Energy?",
      subHeading:
        "Talk to our team to learn how government approved solar PV systems can reduce costs and enhance your home’s energy efficiency.",
      buttonText: "Request a Free Quote",
    },

    faqs: [
      {
        question: "How long does solar PV installation take?",
        answer:
          "Residential installations through approved programs typically take one to three days, depending on system size and property layout.",
      },
      {
        question: "Is planning permission required for solar panels?",
        answer:
          "In most cases, planning permission is not required for domestic solar PV systems installed through government approved schemes in the UK.",
      },
      {
        question: "Do solar panels work on cloudy days?",
        answer:
          "Yes, solar panels generate electricity even in cloudy conditions, although the output may be slightly lower compared to sunny days.",
      },
    ],
  },

  // --- Heat Pump Systems ---
  {
    name: "Heat Pump Systems",
    hero: {
      heading: "High Efficiency Heat Pump Installation for UK Homes",
      subHeading:
        "Access government-supported heat pump systems to enjoy reliable, cost-effective heating and comfort all year round.",
      backgroundImage: "https://example.com/heatpump-hero.jpg",
    },

    featuresHeading: {
      heading: "Benefits of Heat Pump Systems",
      subHeading:
        "Government-backed heat pumps offer an efficient alternative to traditional heating, providing comfort, cost savings, and environmental benefits.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Reduced Heating Costs",
        text: "Certified heat pump systems consume less energy than conventional boilers, helping homeowners lower long-term heating expenses.",
        gradient: "from-orange-400 to-orange-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "Low Carbon Heating",
        text: "Environmentally friendly heating solutions approved through UK government programs that reduce carbon emissions.",
        gradient: "from-red-400 to-red-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Consistent Indoor Comfort",
        text: "Provides stable and comfortable indoor temperatures throughout the year while optimising energy usage.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Improved Property Value",
        text: "Energy-efficient heating systems supported by approved programs enhance your home’s appeal and long-term value.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],

    howItWorks: {
      heading: "How Heat Pump Systems Operate",
      description:
        "Heat pumps extract renewable energy from air, ground, or water and transfer it into your home using advanced heat exchange technology. This efficient process provides reliable heating and, in many systems, cooling throughout the year while consuming minimal electricity. By optimising energy usage, homeowners connected through government approved programs reduce energy bills, lower carbon emissions, and maintain comfortable indoor temperatures year-round.",
      image: "https://example.com/heatpump-howitworks.jpg",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Home Evaluation",
        description:
          "Our team assesses your property, current heating system, and insulation to recommend the most suitable government-backed heat pump solution.",
      },
      {
        stepNumber: 2,
        title: "System Design",
        description:
          "A customised heat pump system is designed according to your home’s layout, energy needs, and approved program guidelines for optimal performance.",
      },
      {
        stepNumber: 3,
        title: "Professional Installation",
        description:
          "Certified engineers handle installation and testing to ensure safe operation and reliable performance, following government approved standards.",
      },
    ],

    cta: {
      heading: "Switch to an Energy Efficient Heating Solution",
      subHeading:
        "Upgrade your home with a government-supported heat pump system and enjoy lower energy costs all year long.",
      buttonText: "Get a Free Quote",
    },

    faqs: [
      {
        question: "How energy efficient are heat pump systems?",
        answer:
          "Heat pumps installed through approved programs are highly efficient, generating multiple units of heat for each unit of electricity consumed.",
      },
      {
        question: "Can heat pumps work with my existing heating system?",
        answer:
          "Many heat pumps can integrate with existing radiators, while minor upgrades may enhance efficiency and performance.",
      },
      {
        question: "How often does a heat pump need servicing?",
        answer:
          "Annual maintenance is recommended for government approved heat pumps to ensure ongoing efficiency and reliable performance.",
      },
    ],
  },

  // --- Home Insulation ---
  {
    name: "Home Insulation",
    hero: {
      heading: "Premium Home Insulation Solutions",
      subHeading:
        "Access government-backed insulation services to keep your home warm in winter, cool in summer, and maximise energy efficiency while reducing bills.",
      backgroundImage: "https://example.com/insulation-hero.jpg",
    },

    featuresHeading: {
      heading: "Why Invest in Home Insulation",
      subHeading:
        "Government approved insulation enhances comfort, lowers energy costs, and promotes a more sustainable and efficient home environment.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Lower Energy Costs",
        text: "Certified insulation reduces heating and cooling expenses by improving your home’s energy retention.",
        gradient: "from-yellow-400 to-yellow-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "All-Season Comfort",
        text: "Maintain stable indoor temperatures year-round, regardless of outdoor weather conditions.",
        gradient: "from-green-400 to-green-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Eco-Friendly Solution",
        text: "Enhance energy efficiency and reduce your household carbon footprint through government-supported programs.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Increase Property Value",
        text: "Well-insulated homes are more energy-efficient and attractive, potentially increasing resale value.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],

    howItWorks: {
      heading: "How Home Insulation Improves Efficiency",
      description:
        "High-quality insulation prevents heat loss in winter and heat gain in summer, keeping your home comfortable all year. By sealing gaps, reducing drafts, and improving thermal performance, approved insulation programs lower energy consumption and bills. Additionally, effective insulation reduces carbon emissions, supporting a greener, more sustainable home while delivering long-term value for homeowners.",
      image: "https://example.com/insulation-howitworks.jpg",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Comprehensive Assessment",
        description:
          "Our team evaluates your roof, walls, floors, and attic to determine the most efficient insulation plan through government-backed programs.",
      },
      {
        stepNumber: 2,
        title: "Tailored Material Selection",
        description:
          "We recommend and source the best insulation materials suited to your property, energy goals, and approved program guidelines.",
      },
      {
        stepNumber: 3,
        title: "Professional Installation",
        description:
          "Certified installers fit materials accurately, seal gaps, and ensure maximum energy efficiency in line with government standards.",
      },
    ],

    cta: {
      heading: "Upgrade Your Home Insulation Today",
      subHeading:
        "Enhance comfort, reduce energy bills, and increase your property’s value through certified programs.",
      buttonText: "Request a Free Quote",
    },

    faqs: [
      {
        question: "Which areas of the home should be insulated first?",
        answer:
          "Roofs, walls, and floors are priority areas to maximise energy savings and indoor comfort.",
      },
      {
        question: "What types of insulation are available?",
        answer:
          "We provide loft, cavity wall, solid wall, and external wall insulation tailored to each home through government-supported programs.",
      },
      {
        question: "How much can insulation reduce my energy bills?",
        answer:
          "Properly installed insulation can substantially lower heating and cooling costs, often saving homeowners hundreds of pounds annually.",
      },
    ],
  },

  // --- EPC Certificates ---
  {
    name: "EPC Certificates",
    hero: {
      heading: "Energy Performance Certificates for UK Homes",
      subHeading:
        "Access certified EPC assessments to demonstrate your property’s energy efficiency, comply with UK regulations, and guide smarter home improvements.",
      backgroundImage: "https://example.com/epc-hero.jpg",
    },

    featuresHeading: {
      heading: "Why Obtain an EPC Certificate",
      subHeading:
        "Government approved EPCs provide clear insight into your home’s energy performance, highlight improvement areas, and help homeowners make informed decisions to reduce costs and save energy.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Regulatory Compliance",
        text: "Ensure your property meets UK legal energy efficiency requirements when selling or renting through certified programs.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "Increase Property Value",
        text: "A certified EPC demonstrates efficiency to buyers, boosting confidence and making your property more attractive.",
        gradient: "from-purple-400 to-purple-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Identify Energy Savings",
        text: "Assess your home’s performance to spot inefficiencies, implement improvements, and reduce long-term energy costs via approved schemes.",
        gradient: "from-green-400 to-green-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Promote Sustainability",
        text: "An EPC encourages eco-friendly practices, helping homeowners minimise their carbon footprint and use energy responsibly.",
        gradient: "from-teal-400 to-teal-600",
      },
    ],

    howItWorks: {
      heading: "How EPC Certification Works",
      description:
        "Certified assessors evaluate your property’s heating, insulation, lighting, and energy systems. A detailed EPC rating from A (most efficient) to G (least efficient) is provided, along with personalised recommendations for improving efficiency, reducing bills, and supporting a greener home.",
      image: "https://example.com/epc-howitworks.jpg",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Comprehensive Property Assessment",
        description:
          "A certified assessor inspects all relevant systems and building features affecting energy efficiency to generate an accurate assessment.",
      },
      {
        stepNumber: 2,
        title: "Energy Rating and Certification",
        description:
          "The assessor calculates your energy performance, assigns an official EPC rating, and provides a detailed report with practical improvement guidance.",
      },
      {
        stepNumber: 3,
        title: "Delivery of EPC and Guidance",
        description:
          "Receive your certified EPC along with actionable advice for energy efficiency, helping you save money and reduce environmental impact.",
      },
    ],

    cta: {
      heading: "Obtain Your EPC Certificate Today",
      subHeading:
        "Ensure UK compliance, demonstrate your property’s energy performance, and unlock opportunities for cost savings and sustainability through certified programs.",
      buttonText: "Request a Free Quote",
    },

    faqs: [
      {
        question: "What is an EPC?",
        answer:
          "An Energy Performance Certificate (EPC) is an official document rating your property’s energy efficiency from A to G, helping homeowners and buyers understand its performance.",
      },
      {
        question: "How long is an EPC valid?",
        answer:
          "EPCs remain valid for 10 years, after which a reassessment is needed to keep your property’s rating current.",
      },
      {
        question: "Do I need an EPC to sell or rent my home?",
        answer:
          "Yes, UK law requires an EPC whenever a property is sold or rented, providing buyers or tenants with verified energy efficiency information.",
      },
    ],
  },

  // --- Battery Storage ---
  {
    name: "Battery Storage",
    hero: {
      heading: "Advanced Battery Storage Solutions for Your Home",
      subHeading:
        "Access government-supported battery storage systems to store excess renewable energy, reduce grid reliance, and maintain reliable power anytime.",
      backgroundImage: "https://example.com/battery-hero.jpg",
    },

    featuresHeading: {
      heading: "Benefits of Home Battery Storage",
      subHeading:
        "Maximise renewable energy use, gain energy independence, and ensure uninterrupted power with certified battery storage systems.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Reliable Backup Power",
        text: "Ensure continuous electricity during outages or peak demand by connecting to government approved battery systems.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "Reduce Energy Costs",
        text: "Store surplus solar or renewable energy for use during peak hours, lowering electricity bills and increasing savings.",
        gradient: "from-green-400 to-green-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Eco-Friendly Energy Management",
        text: "Optimise renewable energy usage and reduce your household carbon footprint through approved battery storage programs.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Greater Energy Independence",
        text: "Take control of your home’s energy supply, reduce grid dependence, and enjoy flexible, reliable power availability.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],

    howItWorks: {
      heading: "How Home Battery Storage Operates",
      description:
        "Battery storage systems capture excess energy from solar panels or other renewable sources and store it for later use. This allows homeowners to power their homes during evenings, cloudy days, or grid outages. Approved battery management ensures optimal energy distribution, cost savings, and uninterrupted electricity while reducing reliance on conventional energy sources.",
      image: "https://example.com/battery-howitworks.jpg",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Energy Assessment",
        description:
          "Our specialists evaluate your home’s energy consumption, renewable generation patterns, and backup needs to recommend the most suitable government-supported battery system.",
      },
      {
        stepNumber: 2,
        title: "System Design",
        description:
          "A customised battery system is designed with the right capacity and configuration to efficiently meet your household energy requirements.",
      },
      {
        stepNumber: 3,
        title: "Professional Installation",
        description:
          "Certified technicians install the system safely, integrate it with your solar or electrical setup, and provide guidance on optimal usage.",
      },
    ],

    cta: {
      heading: "Secure Your Home with Reliable Battery Storage",
      subHeading:
        "Store renewable energy, reduce energy bills, and gain greater control over your home’s electricity supply through certified programs.",
      buttonText: "Request a Free Quote",
    },

    faqs: [
      {
        question: "How do I determine the right battery size for my home?",
        answer:
          "Battery size depends on your energy use, renewable generation capacity, and backup needs. Our experts can calculate the optimal size for your home through approved programs.",
      },
      {
        question: "Can I store unused solar energy for later use?",
        answer:
          "Yes, certified home battery systems allow you to store surplus renewable energy during the day for use in the evenings, cloudy days, or outages.",
      },
      {
        question: "What is the typical lifespan of a home battery?",
        answer:
          "Modern battery systems last 10 to 15 years on average, depending on usage, maintenance, and environmental conditions.",
      },
    ],
  },

  // --- EV Charging Solutions ---
  {
    name: "EV Charging Solutions",
    hero: {
      heading: "Home Electric Vehicle Charging Solutions",
      subHeading:
        "Access certified home EV charging installations to charge safely, efficiently, and conveniently while supporting sustainable energy use.",
      backgroundImage: "https://example.com/evcharging-hero.jpg",
    },

    featuresHeading: {
      heading: "Why Install a Home EV Charger",
      subHeading:
        "Government approved EV charging solutions offer safe, reliable, and efficient home charging, reducing costs and promoting eco-friendly energy use.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Lower Charging Costs",
        text: "Charge your EV at home during off-peak hours to reduce expenses compared to public chargers, maximising long-term savings.",
        gradient: "from-green-400 to-green-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "Safe and Certified",
        text: "All installations are performed by certified professionals to ensure safety, compliance, and reliable operation.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Ultimate Convenience",
        text: "Charge your EV at home anytime, eliminating the need for public charging and providing hassle-free overnight or daytime charging.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Sustainable and Eco-Friendly",
        text: "Reduce reliance on fossil fuels and support a low-carbon lifestyle by pairing home EV charging with renewable energy sources.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],

    howItWorks: {
      heading: "How Home EV Charging Works",
      description:
        "A home EV charger is professionally installed and integrated with your electrical system through certified programs. This allows safe, efficient, and reliable vehicle charging at any time. When combined with solar PV systems, your EV can use renewable energy, lowering electricity costs and reducing grid dependence. Advanced systems also offer smart monitoring, giving full control over charging and maximising energy efficiency.",
      image: "https://example.com/evcharging-howitworks.jpg",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Comprehensive Site Assessment",
        description:
          "Experts evaluate your home’s electrical system to ensure sufficient capacity, proper wiring, and compliance with UK safety standards for EV charger installation.",
      },
      {
        stepNumber: 2,
        title: "Charger Selection",
        description:
          "We recommend the most suitable EV charger based on vehicle type, battery capacity, and household energy needs to ensure optimal performance.",
      },
      {
        stepNumber: 3,
        title: "Professional Installation",
        description:
          "Certified electricians install your charger safely, perform thorough testing, and provide guidance to ensure efficient and reliable operation.",
      },
    ],

    cta: {
      heading: "Charge Your EV Conveniently at Home",
      subHeading:
        "Enjoy safe, efficient, and sustainable home charging while saving time and energy costs through certified installations.",
      buttonText: "Request a Free Quote",
    },

    faqs: [
      {
        question: "How fast can I charge my EV at home?",
        answer:
          "Home chargers generally provide 7kW to 22kW, allowing most EVs to fully charge overnight, with faster options available depending on your setup.",
      },
      {
        question: "Do I need special wiring for a home EV charger?",
        answer:
          "Yes, certified electricians ensure your installation meets UK electrical standards and may upgrade panels or circuits if necessary for safe operation.",
      },
      {
        question: "Can I use solar panels to charge my EV?",
        answer:
          "Yes, integrating your charger with solar PV systems allows you to charge your EV using renewable energy, reducing grid reliance and cutting electricity costs.",
      },
    ],
  },
];

export const findService = (service: string) => {
  return services.find(
    (eachService) =>
      eachService.name.split(" ").join("-").toLowerCase() ===
      service.toLowerCase()
  );
};
