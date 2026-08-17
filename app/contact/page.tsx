"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingMessenger from "@/components/FloatingMessenger";

import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  Wrench,
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Website Service Request - ${
      form.service || "Air Conditioning Service"
    }`;

    const body = `
NEW SERVICE REQUEST
===================

CUSTOMER INFORMATION

Name:
${form.name}

Company:
${form.company || "N/A"}

Phone:
${form.phone}

Email:
${form.email}

SERVICE INFORMATION

Service Required:
${form.service}

Location:
${form.location}

Message / Service Details:
${form.message}

===================

Submitted through:
Coolmate Maintenance & Solutions Co. Website
`;

    const mailto = `mailto:info@coolmateco.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <>
      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

      <Navbar />

      <main className="w-full bg-white">

        {/* ===================================================== */}
        {/* CONTACT HERO */}
        {/* ===================================================== */}

        <section
          className="
            relative
            min-h-[500px]
            overflow-hidden
            bg-[#08213D]
            lg:min-h-[600px]
          "
        >
          {/* Hero Photo */}

          <Image
            src="/images/contact/contact-hero.jpg"
            alt="Professional air conditioning technician"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-[#061A31]/65" />

          {/* Gradient */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#061A31]/90
              via-[#08213D]/60
              to-transparent
            "
          />

          {/* Hero Content */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[500px]
              items-center
              lg:min-h-[600px]
            "
          >
            <div
              className="
                mx-auto
                w-full
                max-w-7xl
                px-6
                lg:px-10
              "
            >
              <div className="max-w-4xl">

                {/* Accent */}

                <div
                  className="
                    mb-6
                    h-1
                    w-14
                    rounded-full
                    bg-[#1683FF]
                  "
                />

                {/* Label */}

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#4EA8FF]
                    sm:text-base
                  "
                >
                  Contact Us
                </p>

                {/* Heading */}

                <h1
                  className="
                    mt-4
                    text-4xl
                    font-bold
                    leading-tight
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                    xl:text-7xl
                  "
                >
                  Get in Touch With

                  <span className="block text-[#1683FF]">
                    Our Experts
                  </span>
                </h1>

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-base
                    leading-7
                    text-slate-200
                    sm:text-lg
                    sm:leading-8
                    lg:text-xl
                  "
                >
                  Whether you need preventive maintenance,
                  troubleshooting, repair, cleaning, or installation,
                  our professional team is ready to help keep your
                  air conditioning systems operating efficiently.
                </p>

              </div>
            </div>
          </div>
        </section>


        {/* ===================================================== */}
        {/* CONTACT INFORMATION + FORM */}
        {/* ===================================================== */}

        <section
          className="
            bg-[#EAF2F9]
            py-16
            lg:py-24
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-7xl
              gap-12
              px-6
              lg:grid-cols-2
              lg:gap-20
              lg:px-10
            "
          >

            {/* ================================================= */}
            {/* CONTACT INFORMATION */}
            {/* ================================================= */}

            <div>

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Contact Information
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  leading-tight
                  text-[#08213D]
                  lg:text-4xl
                "
              >
                Let's Talk About

                <span className="block text-[#1683FF]">
                  Your Air Conditioning Needs
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-600
                "
              >
                Contact Coolmate Maintenance & Solutions Co. for
                professional air conditioning maintenance,
                troubleshooting, repair, cleaning, and installation
                services.
              </p>


              {/* ================================================= */}
              {/* CONTACT DETAILS */}
              {/* ================================================= */}

              <div className="mt-10 space-y-7">

                {/* PHONE */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#08213D]
                      text-white
                    "
                  >
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="font-bold text-[#08213D]">
                      Phone
                    </p>

                    <a
                      href="tel:+639959279906"
                      className="
                        mt-1
                        block
                        text-sm
                        text-slate-600
                        transition
                        hover:text-[#1683FF]
                      "
                    >
                      0995 927 9906
                    </a>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#08213D]
                      text-white
                    "
                  >
                    <Mail className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="font-bold text-[#08213D]">
                      Email
                    </p>

                    <a
                      href="mailto:info@coolmateco.com"
                      className="
                        mt-1
                        block
                        text-sm
                        text-slate-600
                        transition
                        hover:text-[#1683FF]
                      "
                    >
                      info@coolmateco.com
                    </a>

                  </div>

                </div>


                {/* LOCATION */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#08213D]
                      text-white
                    "
                  >
                    <MapPin className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="font-bold text-[#08213D]">
                      Service Area
                    </p>

                    <p
                      className="
                        mt-1
                        max-w-md
                        text-sm
                        leading-6
                        text-slate-600
                      "
                    >
                      Cavite, Metro Manila, Laguna, Batangas
                      and nearby areas.
                    </p>

                  </div>

                </div>


                {/* BUSINESS HOURS */}

                <div className="flex items-start gap-4">

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#08213D]
                      text-white
                    "
                  >
                    <Clock className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="font-bold text-[#08213D]">
                      Business Hours
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      Monday - Saturday
                    </p>

                    <p className="text-sm text-slate-600">
                      8:00 AM - 5:00 PM
                    </p>

                  </div>

                </div>

              </div>


              <p
                className="
                  mt-8
                  text-sm
                  font-medium
                  text-slate-600
                "
              >
                Emergency service support may be available upon
                request.
              </p>

            </div>


            {/* ================================================= */}
            {/* REQUEST SERVICE FORM */}
            {/* ================================================= */}

            <div
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-[0_15px_45px_rgba(8,33,61,0.12)]
                sm:p-8
              "
            >

              {/* FORM HEADER */}

              <div className="mb-7">

                <p
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#1683FF]
                  "
                >
                  Request Service
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-[#08213D]
                    sm:text-3xl
                  "
                >
                  Tell Us How We Can Help
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  Complete the form and our team will get back
                  to you.
                </p>

              </div>


              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* FULL NAME */}

                <div>

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-[#08213D]
                    "
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1683FF]
                      focus:ring-2
                      focus:ring-[#1683FF]/20
                    "
                  />

                </div>


                {/* COMPANY */}

                <div>

                  <label
                    htmlFor="company"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-[#08213D]
                    "
                  >
                    Company
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1683FF]
                      focus:ring-2
                      focus:ring-[#1683FF]/20
                    "
                  />

                </div>


                {/* PHONE + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="phone"
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#08213D]
                      "
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="09XX XXX XXXX"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#1683FF]
                        focus:ring-2
                        focus:ring-[#1683FF]/20
                      "
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="email"
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-[#08213D]
                      "
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="
                        w-full
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-3
                        text-sm
                        text-slate-900
                        outline-none
                        transition
                        placeholder:text-slate-400
                        focus:border-[#1683FF]
                        focus:ring-2
                        focus:ring-[#1683FF]/20
                      "
                    />

                  </div>

                </div>


                {/* SERVICE */}

                <div>

                  <label
                    htmlFor="service"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-[#08213D]
                    "
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      focus:border-[#1683FF]
                      focus:ring-2
                      focus:ring-[#1683FF]/20
                    "
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Air Conditioning Preventive Maintenance">
                      Air Conditioning Preventive Maintenance
                    </option>

                    <option value="Air Conditioning General Cleaning">
                      Air Conditioning General Cleaning
                    </option>

                    <option value="Air Conditioning Repair">
                      Air Conditioning Repair
                    </option>

                    <option value="Air Conditioning Troubleshooting">
                      Air Conditioning Troubleshooting
                    </option>

                    <option value="VRF Maintenance & Repair">
                      VRF Maintenance & Repair
                    </option>

                    <option value="Air Conditioning Sales & Installation">
                      Air Conditioning Sales & Installation
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* LOCATION */}

                <div>

                  <label
                    htmlFor="location"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-[#08213D]
                    "
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Project / service location"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1683FF]
                      focus:ring-2
                      focus:ring-[#1683FF]/20
                    "
                  />

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-[#08213D]
                    "
                  >
                    Message / Service Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your air conditioning system or service requirement..."
                    className="
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-slate-300
                      bg-white
                      px-4
                      py-3
                      text-sm
                      text-slate-900
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-[#1683FF]
                      focus:ring-2
                      focus:ring-[#1683FF]/20
                    "
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#1683FF]
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#0B72E5]
                    hover:shadow-[0_10px_30px_rgba(22,131,255,0.25)]
                  "
                >
                  <Send className="h-4 w-4" />

                  Request Service
                </button>

              </form>

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* WHY CONTACT COOLMATE */}
        {/* ===================================================== */}

        <section className="bg-white py-16 lg:py-20">

          <div
            className="
              mx-auto
              max-w-7xl
              px-6
              lg:px-10
            "
          >

            <div className="max-w-4xl">

              <p
                className="
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#1683FF]
                "
              >
                Why Choose Coolmate
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  text-[#08213D]
                  lg:text-4xl
                "
              >
                Why Contact Coolmate?
              </h2>

              <div className="mt-7 space-y-4">

                {[
                  "Quick Response Time",
                  "Professional Technical Support",
                  "Experienced & Certified Team",
                  "Reliable Maintenance Solutions",
                  "Customer-Focused Service",
                ].map((reason) => (

                  <div
                    key={reason}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      className="
                        h-5
                        w-5
                        shrink-0
                        text-[#1683FF]
                      "
                    />

                    <span className="text-sm text-slate-700">
                      {reason}
                    </span>

                  </div>

                ))}

              </div>

              <p
                className="
                  mt-7
                  max-w-3xl
                  text-base
                  leading-7
                  text-slate-600
                "
              >
                We aim to respond to all inquiries promptly and
                provide professional solutions tailored to your
                air conditioning requirements.
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================== */}
        {/* IMMEDIATE TECHNICAL ASSISTANCE */}
        {/* ===================================================== */}

        <section
          className="
            relative
            overflow-hidden
            bg-[#08213D]
            py-20
          "
        >

          {/* Background Photo */}

          <Image
            src="/images/contact/contact-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="
              object-cover
              object-center
              opacity-30
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-[#061A31]/80" />

          {/* Content */}

          <div
            className="
              relative
              z-10
              mx-auto
              max-w-7xl
              px-6
              lg:px-10
            "
          >

            <div className="max-w-3xl">

              <Wrench
                className="
                  h-9
                  w-9
                  text-[#4EA8FF]
                "
              />

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  text-white
                  sm:text-4xl
                "
              >
                Need Immediate Technical Assistance?
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-slate-200
                "
              >
                Our team is ready to assist you with preventive
                maintenance, troubleshooting, repair, cleaning,
                installation, and other air conditioning
                requirements.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <Footer />


      {/* ===================================================== */}
      {/* FLOATING MESSENGER */}
      {/* ===================================================== */}

      <FloatingMessenger />

    </>
  );
}