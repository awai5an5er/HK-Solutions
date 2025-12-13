"use client";
import React from "react";
import { useState, useEffect } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "Username Required"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[0-9]{10,13}$/, "Contact Number must be 10 to 13 digits"),
  homeOwner: z.string().min(1, "Please select an option"),
  systemAge: z.string().min(1, "Please select an option"),
  fuelType: z.string().min(1, "Please select an option"),
  message: z.string().min(10, "Message is required"),
});
type FormData = z.infer<typeof userSchema>;

function Form() {
  const [submit, setSubmit] = useState(false);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string[]>>
  >({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    homeOwner: "",
    systemAge: "",
    fuelType: "",
    message: "",
  });
  useEffect(() => {
    console.log("Submit state:", submit);
  }, [submit]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = userSchema.safeParse(form);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      setSubmit(false);
      return;
    }

    setErrors({});
    setSubmit(true);
    console.log("Form submitted:", form);
  };
  return (
    <div className="bg-accent backdrop-blur-md rounded-3xl p-6 lg:p-12 md:p-5 shadow-2xl border border-accent">
      <form onSubmit={handleSubmit} className="flex flex-col md:gap-4 gap-3">
        <h3 className="subHeading font-bold text-primary">Send Us a message</h3>
        {/* NAME */}
        <div className="relative">
          <label className="relative bottom-1">Enter Full Name:</label>
          <User className="absolute top-10 left-3 text-primary w-5 h-5" />
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name[0]}</p>
        )}

        {/* EMAIL */}
        <div className="relative">
          <label className=" relative bottom-1">
            Enter your email address:
          </label>
          <Mail className="absolute top-10 left-3 text-primary w-5 h-5" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email[0]}</p>
        )}

        {/* PHONE */}
        <div className="relative">
          <label className="relative bottom-1">Enter your phone number:</label>
          <Phone className="absolute top-10 left-3 text-primary w-5 h-5" />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone[0]}</p>
        )}

        {/* homeOwner */}
        <div className="relative">
          <label className="relative bottom-1">Are you a homeowner?</label>
          <select
            title="homeOwner"
            name="homeOwner"
            value={form.homeOwner}
            onChange={handleChange}
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          >
            <option value="">-Select-</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {errors.homeOwner && (
          <p className="text-red-500 text-sm">{errors.homeOwner[0]}</p>
        )}

        {/* systemAge */}
        <div className="relative">
          <label className="relative bottom-1">
            Heating system 15 years old?
          </label>
          <select
            name="systemAge"
            value={form.systemAge}
            onChange={handleChange}
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          >
            <option value="">-Select-</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="dontKnow">Don't Know</option>
          </select>
        </div>
        {errors.systemAge && (
          <p className="text-red-500 text-sm">{errors.systemAge[0]}</p>
        )}

        {/* fueltype */}
        <div className="relative">
          <label className="relative bottom-1">
            What fuel does your home use?
          </label>
          <select
            name="fuelType"
            value={form.fuelType}
            onChange={handleChange}
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          >
            <option value="">-Select-</option>
            <option value="electric">Electric</option>
            <option value="gas">Gas</option>
            <option value="oil">Oil</option>
            <option value="solidFuel">Solid Fuel</option>
            <option value="lpg">LPG</option>
            <option value="other">Other</option>
          </select>
        </div>
        {errors.fuelType && (
          <p className="text-red-500 text-sm">{errors.fuelType[0]}</p>
        )}

        {/* MESSAGE */}
        <div className="relative">
          <label className="relative bottom-1">Enter your message:</label>
          <MessageSquare className="absolute top-9.5 left-3 text-primary w-5 h-5" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="pl-10 pt-2 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message[0]}</p>
        )}
        <button
          type="submit"
          className="mt-2 h-12 mormalText bg-primary text-secondary font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
