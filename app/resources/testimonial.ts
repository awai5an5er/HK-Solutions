export type Testimonial = {
  name: string;
  role?: string;
  feedback: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "Homeowner",
    feedback:
      "Their energy solutions have significantly reduced my electricity bills.",
  },
  {
    name: "Jane Smith",
    role: "Property Manager",
    feedback:
      "Professional, reliable, and highly knowledgeable team. Highly recommended!",
  },
  {
    name: "Michael Alex",
    role: "Manager",
    feedback:
      "From installation to maintenance, everything was seamless and efficient.",
  },
 {
  name: "Daniel Carter",
  role: "Operations Director",
  feedback:
    "The entire experience, from installation to aftercare, was efficient, reliable, and handled with great professionalism.",
},
  
];
