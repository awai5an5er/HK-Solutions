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

function Form({
  popup,
  setPopup,
}: {
  popup?: boolean;
  setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
    <div
      className={`${
        popup &&
        "fixed z-40 w-9/10 h-[75vh] overflow-y-scroll md:w-2/3 lg:w-1/2 scroll-smooth inset-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      } bg-accent backdrop-blur-md rounded-lg ${
        popup ? "p-6 lg:p-8 " : "p-6 lg:p-12 md:mx-0 mx-3"
      } shadow-2xl border border-accent`}
    >
      {popup && setPopup && (
        <span
          onClick={() => setPopup(false)}
          className="text-center absolute right-7/100 top-4/100 md:right-5/100 md:top-5/100 z-10 rounded-2xl px-2 cursor-pointer"
        >
          X
        </span>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:gap-4 gap-3 h-full justify-around"
      >
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
            className="
      px-5 pr-12 h-12 w-full
      rounded-xl cursor-pointer
      border-2 border-primary
      focus:border-primary/75
      focus:ring-1 focus:ring-primary
      outline-none transition
      appearance-none
    "
          >
            <option value="">-Select-</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-7/10 -translate-y-1/2 text-primary">
            ▼
          </span>
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
            className="
      px-5 pr-12 h-12 w-full
      rounded-xl cursor-pointer
      border-2 border-primary
      focus:border-primary/75
      focus:ring-1 focus:ring-primary
      outline-none transition
      appearance-none
    "
          >
            <option value="">-Select-</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="dontKnow">{"Don't Know"}</option>
          </select>
          <span className="pointer-events-none absolute right-4 top-7/10 -translate-y-1/2 text-primary">
            ▼
          </span>
        </div>
        {errors.systemAge && (
          <p className="text-red-500 text-sm">{errors.systemAge[0]}</p>
        )}

        {/* fueltype */}
        <div className="relative">
          <label className="relative bottom-1">
            What fuel does your home use?
          </label>
          <div className="relative w-full">
            <select
              name="fuelType"
              value={form.fuelType}
              onChange={handleChange}
              className="
      px-5 pr-12 h-12 w-full
      rounded-xl cursor-pointer
      border-2 border-primary
      focus:border-primary/75
      focus:ring-1 focus:ring-primary
      outline-none transition
      appearance-none
    "
            >
              <option value="">-Select-</option>
              <option value="electric">Electric</option>
              <option value="gas">Gas</option>
              <option value="oil">Oil</option>
              <option value="solidFuel">Solid Fuel</option>
              <option value="lpg">LPG</option>
              <option value="other">Other</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary">
              ▼
            </span>
          </div>
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
        <div className="pb-5">
          <button
            type="submit"
            className="w-full py-3 mormalText bg-primary text-secondary cursor-pointer font-bold rounded-xl hover:text-accent transition-transform"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
