"use client";
import React from "react";
import { useState } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };
  return (
    <div className="bg-accent backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-accent">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <h3 className="subHeading font-bold text-primary">Send Us a message</h3>
        {/* NAME */}
        <div className="relative">
          <label className="sr-only">Full Name</label>
          <User className="absolute top-3 left-3 text-primary w-5 h-5" />
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>

        {/* EMAIL */}
        <div className="relative">
          <label className="sr-only">Email</label>
          <Mail className="absolute top-3 left-3 text-primary w-5 h-5" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>

        {/* PHONE */}
        <div className="relative">
          <label className="sr-only">Phone</label>
          <Phone className="absolute top-3 left-3 text-primary w-5 h-5" />
          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>

        {/* MESSAGE */}
        <div className="relative">
          <label className="sr-only">Message</label>
          <MessageSquare className="absolute top-3 left-3 text-primary w-5 h-5" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="pl-10 h-12 w-full rounded-xl border-2 border-primary focus:border-primary/75 focus:ring-1 focus:ring-primary outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="mt-2 h-12 mormalText bg-primary text-secondary font-bold cursor-pointer rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
