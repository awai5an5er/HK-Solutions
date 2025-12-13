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
        "Generate clean electricity, reduce rising energy costs, and improve long term efficiency with expertly installed solar PV systems.",
      backgroundImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuARZTFDetSvY-TPCqYWfhKDO6fMyWnOKLCXLzQdFwY3aYdROaNKsXZEN-IYhALf6U0Dn4TBfvcNBTGE8L5sxfPp6IwmjATRiIFgC_vCQYCHZJt1qm9kDvRDqQi1KWqejWvByZyLwt_EHsPY9Vh6c3_aWp3j7P1GNJgXQ5xgDpdVywVE2GNB38sH6O2tSM4vdEj42e2uky6QE1xNXPI0OYN7ssrTpReK-1CPvUSEmz5qYYk3Qz09fgVZpeBCyjBJzYbCxYo1IkPZztnv",
    },

    featuresHeading: {
      heading: "Benefits of Solar PV Systems",
      subHeading:
        "Solar energy helps homeowners lower electricity bills while increasing efficiency and sustainability by generating clean, renewable power that reduces reliance on the grid and supports long term energy savings.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Lower Energy Bills",
        text: "Produce your own electricity and significantly reduce reliance on expensive grid power.",
        gradient: "from-green-400 to-green-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "Cleaner Energy Choice",
        text: "Switch to renewable energy and reduce household carbon emissions for a greener future.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Greater Energy Control",
        text: "Use generated power during the day or store excess energy for later use with battery options.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Added Property Value",
        text: "Energy efficient homes with solar installations are more attractive to buyers.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],

    howItWorks: {
      heading: "How Solar PV Systems Operate",
      description:
        "Solar panels capture daylight and convert it into usable electricity through photovoltaic cells. This clean energy is used to power your home throughout the day, reducing reliance on grid electricity. Any surplus energy can be stored in battery systems for later use or exported back to the grid, helping to lower electricity bills, improve energy efficiency, and increase long term savings.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO_9B6tJ12DUCokUGEnwU8R4Fx1xqR05oBLrD8NEoFCMNf7X7RYkiIXkOslnV8hV0zNbGUo-jFjNIDBQ1MCMnoL5hTzsBXAZrjNlvuA5Wrum-ZmuJwqr9slyeI4Mb1ounRMLT15oa6xjg4WCUiusOxVHSJNG6xpClJkN57X9yWtpflM4NlhUGqNBigHY3vWCJtSzdYnk96dlxVh5TQW1gw7nYXz6fhEXgWXRzf-liAieoQejtUtaCt-F4A-axaBh8Z_BL2ZVPljtW4",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Home Assessment",
        description:
          "We assess your roof condition, available space, sunlight exposure, and household energy usage to determine the most efficient solar PV solution for your home.",
      },
      {
        stepNumber: 2,
        title: "System Planning",
        description:
          "A customised solar PV system is carefully designed to match your property layout, energy needs, and long term performance goals.",
      },
      {
        stepNumber: 3,
        title: "Expert Installation",
        description:
          "Our certified installers complete the installation safely and efficiently, followed by full system testing to ensure optimal performance.",
      },
    ],

    cta: {
      heading: "Thinking About Solar Energy?",
      subHeading:
        "Speak with our experts and discover how solar PV can reduce costs and improve home efficiency.",
      buttonText: "Request a Free Quote",
    },

    faqs: [
      {
        question: "How long does solar PV installation take?",
        answer:
          "Most residential installations are completed within one to three days, depending on system size.",
      },
      {
        question: "Is planning permission required for solar panels?",
        answer:
          "In most cases, planning permission is not required for domestic solar installations in the UK.",
      },
      {
        question: "Do solar panels work during cloudy days?",
        answer:
          "Yes, solar panels continue to generate electricity in cloudy conditions, although output may vary.",
      },
    ],
  },

  // --- Heat Pump Systems ---
  {
    name: "Heat Pump Systems",
    hero: {
      heading: "High Efficiency Heat Pump Installation for UK Homes",
      subHeading:
        "Enjoy reliable, low-cost heating with modern heat pump systems designed to deliver comfort throughout the year.",
      backgroundImage: "https://example.com/heatpump-hero.jpg",
    },

    featuresHeading: {
      heading: "Benefits of Heat Pump Systems",
      subHeading:
        "Heat pumps provide an energy efficient alternative to traditional heating, offering comfort, savings, and sustainability.",
    },

    features: [
      {
        icon: "/assets/wallet.png",
        title: "Reduced Heating Costs",
        text: "Heat pumps use less energy than conventional boilers, helping lower long term heating bills.",
        gradient: "from-orange-400 to-orange-600",
      },
      {
        icon: "/assets/leaf.svg",
        title: "Low Carbon Heating",
        text: "An environmentally friendly heating solution that helps reduce carbon emissions.",
        gradient: "from-red-400 to-red-600",
      },
      {
        icon: "/assets/battery.svg",
        title: "Consistent Indoor Comfort",
        text: "Delivers steady and comfortable temperatures throughout the home in all seasons.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/increase.svg",
        title: "Improved Property Value",
        text: "Energy efficient heating systems can increase the overall appeal and value of your home.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],

    howItWorks: {
      heading: "How Heat Pump Systems Operate",
      description:
        "Heat pumps extract renewable heat from the air, ground, or water and transfer it into your home using advanced heat exchange technology. This highly efficient process provides consistent and reliable heating and, in many systems, cooling throughout the year while consuming minimal electricity. By optimising energy use, heat pumps help homeowners lower energy bills, reduce carbon emissions, and maintain comfortable indoor temperatures in every season, offering a sustainable and cost-effective alternative to traditional heating systems.",
      image: "https://example.com/heatpump-howitworks.jpg",
    },

    installationProcess: [
      {
        stepNumber: 1,
        title: "Home Evaluation",
        description:
          "Our specialists assess your property, existing heating system, and insulation to determine the most suitable heat pump solution.",
      },
      {
        stepNumber: 2,
        title: "System Design",
        description:
          "We design a customised heat pump system sized to meet your home’s heating needs efficiently.",
      },
      {
        stepNumber: 3,
        title: "Professional Installation",
        description:
          "Certified engineers install and test the system, ensuring safe operation and optimal performance.",
      },
    ],

    cta: {
      heading: "Switch to an Energy Efficient Heating Solution",
      subHeading:
        "Upgrade your home with a modern heat pump system and enjoy lower energy costs all year round.",
      buttonText: "Get a Free Quote",
    },

    faqs: [
      {
        question: "How energy efficient are heat pump systems?",
        answer:
          "Heat pumps are highly efficient and can produce several units of heat for every unit of electricity used.",
      },
      {
        question: "Can heat pumps work with my existing heating system?",
        answer:
          "In many cases, heat pumps can work with existing radiators, although minor upgrades may improve performance.",
      },
      {
        question: "How often does a heat pump need servicing?",
        answer:
          "Heat pumps require minimal maintenance, with an annual service recommended to ensure efficiency.",
      },
    ],
  },

  // --- Home Insulation ---
 {
  name: "Home Insulation",
  hero: {
    heading: "Premium Home Insulation Solutions",
    subHeading:
      "Keep your home warm during winter and cool during summer while maximising energy efficiency and reducing bills.",
    backgroundImage: "https://example.com/insulation-hero.jpg",
  },

  featuresHeading: {
    heading: "Why Invest in Home Insulation",
    subHeading:
      "High-performance insulation enhances comfort, reduces energy costs, and supports a more sustainable home environment.",
  },

  features: [
    {
      icon: "/assets/wallet.png",
      title: "Lower Energy Costs",
      text: "Reduce heating and cooling bills by improving your home’s energy retention.",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: "/assets/leaf.svg",
      title: "All-Season Comfort",
      text: "Maintain consistent indoor temperatures throughout the year, regardless of weather.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: "/assets/battery.svg",
      title: "Eco-Friendly Solution",
      text: "Enhance energy efficiency and minimise your household carbon footprint.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "/assets/increase.svg",
      title: "Increase Property Value",
      text: "Well-insulated homes are more desirable and can attract higher resale value.",
      gradient: "from-purple-400 to-purple-600",
    },
  ],

  howItWorks: {
    heading: "How Home Insulation Improves Efficiency",
    description:
      "Premium insulation materials prevent heat loss in winter and heat gain in summer, maintaining a stable and comfortable indoor environment year-round. By sealing gaps, reducing drafts, and enhancing overall thermal performance, high-quality insulation improves comfort, lowers energy consumption, and significantly cuts heating and cooling costs. In addition, effective insulation contributes to a greener home by reducing carbon emissions and increasing energy efficiency, making it a long-term investment that benefits both homeowners and the environment.",
    image: "https://example.com/insulation-howitworks.jpg",
  },

  installationProcess: [
    {
      stepNumber: 1,
      title: "Comprehensive Assessment",
      description:
        "Our experts inspect your roof, walls, floors, and attic to determine insulation requirements for maximum efficiency.",
    },
    {
      stepNumber: 2,
      title: "Tailored Material Selection",
      description:
        "We recommend and source the best insulation materials suited to your property, energy goals, and budget.",
    },
    {
      stepNumber: 3,
      title: "Professional Installation",
      description:
        "Certified installers fit insulation materials accurately, seal gaps, and ensure optimal energy performance.",
    },
  ],

  cta: {
    heading: "Upgrade Your Home Insulation Today",
    subHeading: "Enhance comfort, reduce energy bills, and increase your property’s value.",
    buttonText: "Request a Free Quote",
  },

  faqs: [
    {
      question: "Which areas of the home should be insulated first?",
      answer:
        "The roof, walls, and floors are priority areas to maximise energy savings and comfort.",
    },
    {
      question: "What types of insulation are available?",
      answer:
        "We offer loft insulation, cavity wall insulation, solid wall insulation, and external wall insulation tailored to your home.",
    },
    {
      question: "How much can insulation reduce my energy bills?",
      answer:
        "Proper insulation can significantly lower heating and cooling costs, often saving homeowners hundreds annually.",
    },
  ],
},


  // --- EPC Certificates ---
 {
  name: "EPC Certificates",
  hero: {
    heading: "Energy Performance Certificates (EPC) for UK Homes",
    subHeading:
      "Obtain a certified EPC to demonstrate your property’s energy efficiency, comply with regulations, and support smarter home improvements.",
    backgroundImage: "https://example.com/epc-hero.jpg",
  },

  featuresHeading: {
    heading: "Why Obtain an EPC Certificate",
    subHeading:
      "A reliable EPC provides insight into your home’s energy performance, highlights areas for improvement, and helps you make informed decisions to save energy and reduce costs.",
  },

  features: [
    {
      icon: "/assets/wallet.png",
      title: "Regulatory Compliance",
      text: "Meet UK legal and regulatory requirements for energy efficiency, ensuring your property is compliant when selling or renting.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "/assets/leaf.svg",
      title: "Increase Property Value",
      text: "A certified EPC demonstrates energy efficiency to potential buyers, enhancing confidence and making your property more attractive.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: "/assets/battery.svg",
      title: "Identify Energy Savings",
      text: "Assess your home’s energy performance to identify inefficiencies, implement improvements, and reduce long-term energy costs.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: "/assets/increase.svg",
      title: "Promote Sustainability",
      text: "An EPC encourages eco-friendly practices, helping homeowners minimise carbon footprint and adopt responsible energy use.",
      gradient: "from-teal-400 to-teal-600",
    },
  ],

  howItWorks: {
    heading: "How EPC Certification Works",
    description:
      "Our certified energy assessors conduct a thorough evaluation of your property, including heating, insulation, lighting, and other energy systems. Based on the assessment, we generate a detailed EPC rating from A (most efficient) to G (least efficient), along with personalised recommendations for improving energy efficiency, reducing bills, and enhancing sustainability.",
    image: "https://example.com/epc-howitworks.jpg",
  },

  installationProcess: [
    {
      stepNumber: 1,
      title: "Comprehensive Property Assessment",
      description:
        "A certified assessor visits your home to inspect all relevant energy systems, insulation, and building features that impact efficiency.",
    },
    {
      stepNumber: 2,
      title: "Energy Rating and Certification",
      description:
        "The assessor calculates your property’s energy performance, assigns an EPC rating, and produces a detailed report with actionable recommendations.",
    },
    {
      stepNumber: 3,
      title: "Delivery of EPC and Guidance",
      description:
        "You receive your official EPC certificate along with practical advice for energy efficiency improvements, helping you save money and reduce your environmental impact.",
    },
  ],

  cta: {
    heading: "Obtain Your EPC Certificate Today",
    subHeading:
      "Ensure compliance with UK regulations, demonstrate your property’s energy performance, and unlock opportunities for energy savings and sustainability.",
    buttonText: "Request a Free Quote",
  },

  faqs: [
    {
      question: "What is an EPC?",
      answer:
        "An Energy Performance Certificate (EPC) is an official document that rates your property’s energy efficiency on a scale from A to G, helping homeowners and buyers understand its energy performance.",
    },
    {
      question: "How long is an EPC valid?",
      answer:
        "EPCs are valid for 10 years, after which a reassessment is required to ensure your property’s energy rating remains up to date.",
    },
    {
      question: "Do I need an EPC to sell or rent my home?",
      answer:
        "Yes, an EPC is legally required in the UK whenever a property is sold or rented, providing buyers or tenants with information on its energy efficiency.",
    },
  ],
},


  // --- Battery Storage ---
  {
  name: "Battery Storage",
  hero: {
    heading: "Advanced Battery Storage Solutions for Your Home",
    subHeading:
      "Store excess solar energy efficiently, reduce reliance on the grid, and maintain a reliable power supply anytime you need it.",
    backgroundImage: "https://example.com/battery-hero.jpg",
  },

  featuresHeading: {
    heading: "Benefits of Home Battery Storage",
    subHeading:
      "Maximise your renewable energy usage, increase energy independence, and enjoy uninterrupted power with reliable battery systems.",
  },

  features: [
    {
      icon: "/assets/wallet.png",
      title: "Reliable Backup Power",
      text: "Ensure your home has a continuous electricity supply during outages or peak demand periods, protecting essential appliances and devices.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "/assets/leaf.svg",
      title: "Reduce Energy Costs",
      text: "Store surplus energy generated from solar panels to use during peak hours, reducing electricity bills and maximising savings.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: "/assets/battery.svg",
      title: "Eco-Friendly Energy Management",
      text: "Optimise renewable energy usage and minimise your household carbon footprint by storing and using clean energy effectively.",
      gradient: "from-teal-400 to-teal-600",
    },
    {
      icon: "/assets/increase.svg",
      title: "Greater Energy Independence",
      text: "Take control of your home energy supply, reduce dependency on the grid, and enjoy more flexibility and security in power usage.",
      gradient: "from-purple-400 to-purple-600",
    },
  ],

  howItWorks: {
    heading: "How Home Battery Storage Operates",
    description:
      "Battery storage systems capture excess energy produced by solar panels or other renewable sources and store it for later use. This allows homeowners to power their homes during evenings, cloudy days, or grid outages. Advanced battery management ensures optimal energy distribution, cost savings, and continuous availability of electricity while reducing reliance on conventional energy sources.",
    image: "https://example.com/battery-howitworks.jpg",
  },

  installationProcess: [
    {
      stepNumber: 1,
      title: "Energy Assessment",
      description:
        "Our specialists evaluate your household energy consumption, solar generation patterns, and backup needs to determine the right battery solution.",
    },
    {
      stepNumber: 2,
      title: "System Design",
      description:
        "We design a customised battery system with appropriate capacity and configuration to meet your energy requirements efficiently.",
    },
    {
      stepNumber: 3,
      title: "Professional Installation",
      description:
        "Certified technicians install the batteries safely, integrate them with your solar or electrical system, and provide guidance on optimal usage.",
    },
  ],

  cta: {
    heading: "Secure Your Home with Reliable Battery Storage",
    subHeading:
      "Store clean energy, reduce bills, and enjoy greater control over your home’s power supply.",
    buttonText: "Request a Free Quote",
  },

  faqs: [
    {
      question: "How do I determine the right battery size for my home?",
      answer:
        "The ideal battery size depends on your energy consumption, solar generation capacity, and desired backup duration. Our experts can calculate the perfect size for your needs.",
    },
    {
      question: "Can I store unused solar energy for later use?",
      answer:
        "Yes, home battery systems allow you to store excess solar energy generated during the day and use it during evenings, cloudy days, or power outages.",
    },
    {
      question: "What is the typical lifespan of a home battery?",
      answer:
        "Most modern battery systems last between 10 to 15 years, depending on usage patterns, maintenance, and environmental conditions.",
    },
  ],
},


  // --- EV Charging Solutions ---
  {
  name: "EV Charging Solutions",
  hero: {
    heading: "Home Electric Vehicle (EV) Charging Solutions",
    subHeading:
      "Charge your electric vehicle safely, efficiently, and conveniently at home, supporting clean mobility and energy savings.",
    backgroundImage: "https://example.com/evcharging-hero.jpg",
  },

  featuresHeading: {
    heading: "Why Install a Home EV Charger",
    subHeading:
      "Modern EV charging solutions offer faster, safer, and smarter charging at home, providing convenience, cost savings, and sustainable energy management.",
  },

  features: [
    {
      icon: "/assets/wallet.png",
      title: "Lower Charging Costs",
      text: "Charge your EV at home using off-peak electricity rates, reducing costs compared to public charging stations and saving money in the long term.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: "/assets/leaf.svg",
      title: "Safe and Certified",
      text: "All home chargers are installed by certified professionals to ensure safety, compliance, and reliable operation for your vehicle and household.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: "/assets/battery.svg",
      title: "Ultimate Convenience",
      text: "Charge your EV whenever you need without visiting public charging points, enabling hassle-free overnight or flexible daytime charging at home.",
      gradient: "from-teal-400 to-teal-600",
    },
    {
      icon: "/assets/increase.svg",
      title: "Sustainable and Eco-Friendly",
      text: "Using a home EV charger reduces reliance on fossil fuels, promotes clean energy usage, and contributes to a greener, low-carbon lifestyle.",
      gradient: "from-purple-400 to-purple-600",
    },
  ],

  howItWorks: {
    heading: "How Home EV Charging Works",
    description:
      "A home EV charger is professionally installed and integrated with your electrical system, allowing your electric vehicle to charge safely, efficiently, and reliably. You can charge overnight, during off-peak hours, or whenever it’s most convenient for your schedule. When paired with solar panels, your EV can be powered by clean, renewable energy, reducing reliance on the grid, lowering electricity costs, and contributing to a greener, more sustainable home energy setup. Advanced charging systems also allow monitoring and smart energy management, giving you full control over your vehicle’s charging while maximising efficiency and cost savings.",
    image: "https://example.com/evcharging-howitworks.jpg",
  },

  installationProcess: [
    {
      stepNumber: 1,
      title: "Comprehensive Site Assessment",
      description:
        "Our experts evaluate your home electrical setup, ensuring sufficient capacity, proper wiring, and compliance with UK safety standards for charger installation.",
    },
    {
      stepNumber: 2,
      title: "Charger Selection",
      description:
        "We help you choose the most suitable EV charger based on your vehicle type, battery size, and household energy usage for optimal performance.",
    },
    {
      stepNumber: 3,
      title: "Professional Installation",
      description:
        "Certified electricians install your EV charger safely, conduct thorough testing, and provide guidance on usage to ensure efficient, reliable, and safe operation.",
    },
  ],

  cta: {
    heading: "Charge Your EV Conveniently at Home",
    subHeading:
      "Experience safe, efficient, and sustainable charging while saving time and reducing energy costs with a professionally installed home EV charger.",
    buttonText: "Request a Free Quote",
  },

  faqs: [
    {
      question: "How fast can I charge my EV at home?",
      answer:
        "Home chargers typically provide between 7kW and 22kW, allowing most EVs to be fully charged overnight, with faster options available depending on your setup.",
    },
    {
      question: "Do I need special wiring for a home EV charger?",
      answer:
        "Yes, a certified electrician installs the charger to meet UK electrical standards and may upgrade your panel or circuits if necessary to ensure safe operation.",
    },
    {
      question: "Can I use solar panels to charge my EV?",
      answer:
        "Absolutely. By integrating your EV charger with a solar PV system, you can charge your electric vehicle using clean, renewable energy, reducing grid reliance and lowering electricity costs.",
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
