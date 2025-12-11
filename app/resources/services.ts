// services.ts

export type Feature = {
  title: string;
  text: string;
  icon: string;
  gradient?: string;
};

export type Testimonial = {
  name: string;
  role?: string;
  feedback: string;
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
  features: Feature[];
  testimonials: Testimonial[];
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
      heading: "Solar Panel Installation & Savings",
      subHeading:
        "Harness the power of the sun to reduce your energy bills and carbon footprint.",
      backgroundImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuARZTFDetSvY-TPCqYWfhKDO6fMyWnOKLCXLzQdFwY3aYdROaNKsXZEN-IYhALf6U0Dn4TBfvcNBTGE8L5sxfPp6IwmjATRiIFgC_vCQYCHZJt1qm9kDvRDqQi1KWqejWvByZyLwt_EHsPY9Vh6c3_aWp3j7P1GNJgXQ5xgDpdVywVE2GNB38sH6O2tSM4vdEj42e2uky6QE1xNXPI0OYN7ssrTpReK-1CPvUSEmz5qYYk3Qz09fgVZpeBCyjBJzYbCxYo1IkPZztnv",
    },
    features: [
      {
        icon: "/assets/wallet.png",

        title: "Save on Bills",
        text: "Significantly lower your monthly electricity costs by generating your own power.",
        gradient: "from-green-400 to-green-600",
      },
      {
        icon: "/assets/leaf.svg",

        title: "Reduce Carbon Footprint",
        text: "Decrease your household's environmental impact with clean, green energy.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        icon: "/assets/battery.svg",

        title: "Energy Independence",
        text: "Gain more control over your energy supply and be less affected by rising grid prices.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        icon: "/assets/increase.svg",

        title: "Increase Property Value",
        text: "Homes with solar panels are more attractive to buyers and can command higher prices.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],
    howItWorks: {
      heading: "How Solar Panels Work",
      description:
        "Sunlight hits the photovoltaic (PV) cells, converting light into DC electricity. The inverter then converts it into AC electricity for your home appliances. Excess energy can be stored in batteries or fed back to the grid, reducing bills and carbon footprint.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDO_9B6tJ12DUCokUGEnwU8R4Fx1xqR05oBLrD8NEoFCMNf7X7RYkiIXkOslnV8hV0zNbGUo-jFjNIDBQ1MCMnoL5hTzsBXAZrjNlvuA5Wrum-ZmuJwqr9slyeI4Mb1ounRMLT15oa6xjg4WCUiusOxVHSJNG6xpClJkN57X9yWtpflM4NlhUGqNBigHY3vWCJtSzdYnk96dlxVh5TQW1gw7nYXz6fhEXgWXRzf-liAieoQejtUtaCt-F4A-axaBh8Z_BL2ZVPljtW4",
    },
    installationProcess: [
      {
        stepNumber: 1,
        title: "Site Assessment",
        description:
          "Our team visits your property to assess roof structure, sunlight exposure, and energy requirements.",
      },
      {
        stepNumber: 2,
        title: "System Design",
        description:
          "Custom solar panel layout tailored to your roof and energy needs including inverter sizing and optional battery storage.",
      },
      {
        stepNumber: 3,
        title: "Installation",
        description:
          "Certified engineers install panels, inverter, and optional battery systems, handling wiring, mounting, and commissioning.",
      },
    ],
    cta: {
      heading: "Ready to Switch to Solar Energy?",
      subHeading:
        "Save money, reduce electricity bills, and make your home energy-efficient.",
      buttonText: "Get a Free Quote",
    },
    faqs: [
      {
        question: "How long does the installation take?",
        answer:
          "Installation usually takes 1-3 days depending on system size and site conditions.",
      },
      {
        question: "Do I need planning permission?",
        answer:
          "Most residential solar installations don’t require planning permission, but it depends on local regulations.",
      },
      {
        question: "Will solar panels work in cloudy weather?",
        answer:
          "Yes, solar panels still generate electricity in cloudy conditions, although output may be slightly reduced.",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        role: "Homeowner",
        feedback:
          "The solar panels installation was fast and efficient. Highly recommended!",
      },
      {
        name: "Sarah Smith",
        role: "Business Owner",
        feedback:
          "Professional team, excellent service, and great aftercare support.",
      },
      {
        name: "Ali Khan",
        role: "Homeowner",
        feedback:
          "Our electricity bills dropped significantly after installing their system.",
      },
    ],
  },

  // --- Heat Pump Systems ---
  {
    name: "Heat Pump Systems",
    hero: {
      heading: "Efficient Heat Pump Installation",
      subHeading:
        "Reduce energy consumption and maintain a comfortable temperature all year round.",
      backgroundImage: "https://example.com/heatpump-hero.jpg",
    },
    features: [
      {
        title: "Lower Heating Bills",
        text: "Efficient heating reduces energy costs significantly.",
        gradient: "from-orange-400 to-orange-600",
      },
      {
        title: "Eco-Friendly",
        text: "Reduce carbon footprint with green heating solutions.",
        gradient: "from-red-400 to-red-600",
      },
      {
        title: "Reliable Comfort",
        text: "Consistent temperature and comfort for your home.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        title: "Increase Home Value",
        text: "Modern heating systems can enhance property value.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],
    howItWorks: {
      heading: "How Heat Pumps Work",
      description:
        "Heat pumps transfer heat from outside to inside efficiently, providing heating and cooling while lowering energy bills.",
      image: "https://example.com/heatpump-howitworks.jpg",
    },
    installationProcess: [
      {
        stepNumber: 1,
        title: "Site Assessment",
        description:
          "Experts evaluate your home’s heating requirements and recommend the best heat pump solution.",
      },
      {
        stepNumber: 2,
        title: "System Design",
        description:
          "Custom design and sizing of heat pump system for maximum efficiency and comfort.",
      },
      {
        stepNumber: 3,
        title: "Installation",
        description:
          "Certified engineers install the system, test it, and provide usage guidance.",
      },
    ],
    cta: {
      heading: "Upgrade to Efficient Heat Pump Systems",
      subHeading: "Reduce your bills and stay comfortable year-round.",
      buttonText: "Get a Free Quote",
    },
    faqs: [
      {
        question: "How efficient are heat pumps?",
        answer:
          "Modern heat pumps can provide 3-4 times more energy than they consume, making them very efficient.",
      },
      {
        question: "Do I need to replace my radiators?",
        answer:
          "Some systems may require larger radiators for optimal performance, but most can work with existing ones.",
      },
      {
        question: "Is maintenance required?",
        answer:
          "Heat pumps require minimal maintenance, usually an annual service check.",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        role: "Homeowner",
        feedback:
          "The solar panels installation was fast and efficient. Highly recommended!",
      },
      {
        name: "Sarah Smith",
        role: "Business Owner",
        feedback:
          "Professional team, excellent service, and great aftercare support.",
      },
      {
        name: "Ali Khan",
        role: "Homeowner",
        feedback:
          "Our electricity bills dropped significantly after installing their system.",
      },
    ],
  },

  // --- Home Insulation ---
  {
    name: "Home Insulation",
    hero: {
      heading: "Professional Home Insulation",
      subHeading:
        "Keep your home warm in winter and cool in summer while saving energy.",
      backgroundImage: "https://example.com/insulation-hero.jpg",
    },
    features: [
      {
        title: "Save on Energy",
        text: "Proper insulation reduces heating and cooling costs.",
        gradient: "from-yellow-400 to-yellow-600",
      },
      {
        title: "Comfort All Year",
        text: "Maintain ideal indoor temperature throughout the seasons.",
        gradient: "from-green-400 to-green-600",
      },
      {
        title: "Eco-Friendly",
        text: "Reduce your carbon footprint by improving energy efficiency.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        title: "Increase Home Value",
        text: "Well-insulated homes are more attractive to buyers.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],
    howItWorks: {
      heading: "How Home Insulation Works",
      description:
        "High-quality insulation materials prevent heat loss in winter and heat gain in summer, improving comfort and reducing energy bills.",
      image: "https://example.com/insulation-howitworks.jpg",
    },
    installationProcess: [
      {
        stepNumber: 1,
        title: "Assessment",
        description:
          "Experts inspect walls, attic, and floors to determine insulation needs.",
      },
      {
        stepNumber: 2,
        title: "Material Selection",
        description:
          "Select the best insulation materials based on your home and budget.",
      },
      {
        stepNumber: 3,
        title: "Installation",
        description:
          "Professionals install insulation, sealing gaps and ensuring energy efficiency.",
      },
    ],
    cta: {
      heading: "Enhance Comfort & Energy Efficiency",
      subHeading: "Upgrade your home insulation and save on bills.",
      buttonText: "Get a Free Quote",
    },
    faqs: [
      {
        question: "Which areas should be insulated first?",
        answer:
          "Roof, walls, and floors are priorities for maximum energy savings.",
      },
      {
        question: "What types of insulation are available?",
        answer:
          "Common types include cavity wall insulation, loft insulation, and external wall insulation.",
      },
      {
        question: "Will insulation reduce my energy bills?",
        answer:
          "Yes, proper insulation can significantly reduce heating and cooling costs.",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        role: "Homeowner",
        feedback:
          "The solar panels installation was fast and efficient. Highly recommended!",
      },
      {
        name: "Sarah Smith",
        role: "Business Owner",
        feedback:
          "Professional team, excellent service, and great aftercare support.",
      },
      {
        name: "Ali Khan",
        role: "Homeowner",
        feedback:
          "Our electricity bills dropped significantly after installing their system.",
      },
    ],
  },

  // --- EPC Certificates ---
  {
    name: "EPC Certificates",
    hero: {
      heading: "Energy Performance Certificates (EPC)",
      subHeading:
        "Get certified for energy efficiency compliance and property sale requirements.",
      backgroundImage: "https://example.com/epc-hero.jpg",
    },
    features: [
      {
        title: "Compliance",
        text: "Meet legal and regulatory energy efficiency standards.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        title: "Property Value",
        text: "Boost buyer confidence with a certified energy rating.",
        gradient: "from-purple-400 to-purple-600",
      },
      {
        title: "Reduce Costs",
        text: "Identify energy inefficiencies to lower bills.",
        gradient: "from-green-400 to-green-600",
      },
      {
        title: "Sustainability",
        text: "Promote eco-friendly living and responsible energy use.",
        gradient: "from-teal-400 to-teal-600",
      },
    ],
    howItWorks: {
      heading: "How EPC Works",
      description:
        "Our certified assessors evaluate your property and provide an EPC, rating your home’s energy efficiency from A to G.",
      image: "https://example.com/epc-howitworks.jpg",
    },
    installationProcess: [
      {
        stepNumber: 1,
        title: "Property Assessment",
        description:
          "Assessor visits the property and inspects energy systems and insulation.",
      },
      {
        stepNumber: 2,
        title: "Certification",
        description: "Assign energy rating and generate EPC documentation.",
      },
      {
        stepNumber: 3,
        title: "Delivery",
        description:
          "Provide certificate and recommendations for improving energy efficiency.",
      },
    ],
    cta: {
      heading: "Get Your EPC Today",
      subHeading: "Ensure compliance and boost property value.",
      buttonText: "Get a Free Quote",
    },
    faqs: [
      {
        question: "What is an EPC?",
        answer:
          "An Energy Performance Certificate (EPC) shows the energy efficiency of your property.",
      },
      {
        question: "How long is an EPC valid?",
        answer: "EPCs are valid for 10 years.",
      },
      {
        question: "Do I need an EPC to sell my home?",
        answer: "Yes, an EPC is required when selling or renting a property.",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        role: "Homeowner",
        feedback:
          "The solar panels installation was fast and efficient. Highly recommended!",
      },
      {
        name: "Sarah Smith",
        role: "Business Owner",
        feedback:
          "Professional team, excellent service, and great aftercare support.",
      },
      {
        name: "Ali Khan",
        role: "Homeowner",
        feedback:
          "Our electricity bills dropped significantly after installing their system.",
      },
    ],
  },

  // --- Battery Storage ---
  {
    name: "Battery Storage",
    hero: {
      heading: "Reliable Battery Storage Solutions",
      subHeading:
        "Store excess solar energy to use anytime and increase energy independence.",
      backgroundImage: "https://example.com/battery-hero.jpg",
    },
    features: [
      {
        title: "Backup Power",
        text: "Maintain electricity supply during outages.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        title: "Save Money",
        text: "Store excess energy for later use, reducing bills.",
        gradient: "from-green-400 to-green-600",
      },
      {
        title: "Eco-Friendly",
        text: "Maximize renewable energy usage and reduce carbon footprint.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        title: "Energy Independence",
        text: "Be less reliant on the grid and gain control over your energy.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],
    howItWorks: {
      heading: "How Battery Storage Works",
      description:
        "Excess energy generated from solar panels is stored in battery systems for use when needed, ensuring reliable power supply and cost savings.",
      image: "https://example.com/battery-howitworks.jpg",
    },
    installationProcess: [
      {
        stepNumber: 1,
        title: "Assessment",
        description: "Evaluate energy usage and storage requirements.",
      },
      {
        stepNumber: 2,
        title: "System Design",
        description:
          "Select battery capacity and design optimal configuration.",
      },
      {
        stepNumber: 3,
        title: "Installation",
        description:
          "Install batteries safely and integrate with solar or electrical systems.",
      },
    ],
    cta: {
      heading: "Secure Your Energy with Battery Storage",
      subHeading: "Store your energy and stay independent from the grid.",
      buttonText: "Get a Free Quote",
    },
    faqs: [
      {
        question: "What size battery do I need?",
        answer:
          "Battery size depends on your energy consumption and desired backup capacity.",
      },
      {
        question: "Can I store excess solar energy?",
        answer:
          "Yes, batteries allow you to store unused solar energy for use when needed.",
      },
      {
        question: "What is the lifespan of a battery?",
        answer:
          "Most batteries last 10-15 years depending on usage and maintenance.",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        role: "Homeowner",
        feedback:
          "The solar panels installation was fast and efficient. Highly recommended!",
      },
      {
        name: "Sarah Smith",
        role: "Business Owner",
        feedback:
          "Professional team, excellent service, and great aftercare support.",
      },
      {
        name: "Ali Khan",
        role: "Homeowner",
        feedback:
          "Our electricity bills dropped significantly after installing their system.",
      },
    ],
  },

  // --- EV Charging Solutions ---
  {
    name: "EV Charging Solutions",
    hero: {
      heading: "Home EV Charging Solutions",
      subHeading:
        "Charge your electric vehicle safely and efficiently at home.",
      backgroundImage: "https://example.com/evcharging-hero.jpg",
    },
    features: [
      {
        title: "Cost Savings",
        text: "Charge at home at lower electricity rates.",
        gradient: "from-green-400 to-green-600",
      },
      {
        title: "Safety",
        text: "Certified chargers for safe operation.",
        gradient: "from-blue-400 to-blue-600",
      },
      {
        title: "Convenience",
        text: "Charge anytime without visiting public stations.",
        gradient: "from-teal-400 to-teal-600",
      },
      {
        title: "Sustainability",
        text: "Promote clean mobility with home EV charging.",
        gradient: "from-purple-400 to-purple-600",
      },
    ],
    howItWorks: {
      heading: "How EV Charging Works",
      description:
        "Install a home EV charger connected to your electrical system. Easily charge your electric vehicle overnight or whenever convenient, reducing reliance on public charging stations.",
      image: "https://example.com/evcharging-howitworks.jpg",
    },
    installationProcess: [
      {
        stepNumber: 1,
        title: "Site Assessment",
        description:
          "Evaluate your home electrical setup for charger installation.",
      },
      {
        stepNumber: 2,
        title: "Charger Selection",
        description:
          "Choose the right EV charger based on your vehicle and usage.",
      },
      {
        stepNumber: 3,
        title: "Installation",
        description:
          "Professional installation, safety testing, and commissioning.",
      },
    ],
    cta: {
      heading: "Charge Your EV at Home",
      subHeading: "Enjoy safe, convenient, and sustainable charging.",
      buttonText: "Get a Free Quote",
    },
    faqs: [
      {
        question: "How fast can I charge my EV at home?",
        answer:
          "Home chargers typically provide 7-22kW, charging most EVs overnight.",
      },
      {
        question: "Do I need special wiring for an EV charger?",
        answer:
          "Yes, a certified electrician should install the charger and upgrade your electrical panel if necessary.",
      },
      {
        question: "Can I use my solar panels to charge my EV?",
        answer:
          "Yes, solar energy can be used to charge your electric vehicle, reducing grid dependency.",
      },
    ],
    testimonials: [
      {
        name: "John Doe",
        role: "Homeowner",
        feedback:
          "The solar panels installation was fast and efficient. Highly recommended!",
      },
      {
        name: "Sarah Smith",
        role: "Business Owner",
        feedback:
          "Professional team, excellent service, and great aftercare support.",
      },
      {
        name: "Ali Khan",
        role: "Homeowner",
        feedback:
          "Our electricity bills dropped significantly after installing their system.",
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
