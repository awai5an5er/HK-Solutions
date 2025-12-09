import { Phone, MapPin, Mail } from "lucide-react";
interface servicesType{
  title:string;
  links:{
    name:string;
    link:string;
    }[];
}
export const services:servicesType[]=[
  {
    title:"Service",
    links:[
      {
         name:"Solar PV Panels",
        link:"/"
      },
      {
        name:"Air Source Heat Pumps",
        link:"/"
      },
      {
         name:"Home insulation",
        link:"/"
      },
      {
        name:"Battery Storage",
        link:"/"
      },
      {
         name:"EV Charging",
        link:"/"
      }
    ]
  },
];

interface quicklinksType{
    title:string;
    links:{
    name:string;
    link:string;
    }[];
}
export const quiklinks:quicklinksType[]=[
   {
    title:"Quick Links",
    links:[
      {
         name:"About Us",
        link:"/"
      },
      {
        name:"Government Grants",
        link:"/"
      },
      {
         name:"Case Studies",
        link:"/"
      },
      {
         name:"Contact Us",
        link:"/"
      },
      {
         name:"FAQS",
        link:"/"
      }
    ]
  }
];
interface textType{
  title:string;
  content:string[];
  socials:string[];
}
export const text:textType[]=[
  {
     title:"EcoHome Uk",
     content:["Your trusted partner for a greener,more energy-efficient home in the UK.Certified installers of renewable energy solutions."],
    socials:[
      "FB","IN","TW"
    ]
},
]; 



export interface ContactItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

export interface ContactSection {
  title: string;
  items: ContactItem[];
}

export const contact: ContactSection = {
  title: "Contact",
  items: [
    { icon: MapPin, text: "123 Green Street, London, UK" },
    { icon: Phone, text: "+44 1234 567890" },
    { icon: Mail, text: "hello@ecohomeuk.co.uk" },
  ],
};
