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
    name: "Michael Brown",
    feedback:
      "From installation to maintenance, everything was seamless and efficient.",
  },
];
