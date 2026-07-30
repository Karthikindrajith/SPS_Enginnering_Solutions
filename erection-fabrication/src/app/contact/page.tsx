"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  createEnquiry,
  EnquiryData,
} from "@/services/enquiryApi";

import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  TriangleAlert,
} from "lucide-react";

import {
  FormEvent,
  ReactNode,
  useState,
} from "react";

/* =========================================================
   PROJECT TYPES
========================================================= */

const projectTypes = [
  {
    label: "Steel Fabrication",
    value: "steel_fabrication",
  },
  {
    label: "Structural Erection",
    value: "structural_erection",
  },
  {
    label: "PEB Solutions",
    value: "peb_solutions",
  },
  {
    label: "Roofing & Cladding",
    value: "roofing_cladding",
  },
  {
    label: "Industrial Piping",
    value: "industrial_piping",
  },
  {
    label: "Other",
    value: "other",
  },
];

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = event.currentTarget;

    const formData = new FormData(form);

    const data: EnquiryData = {
      company: String(
        formData.get("company") || ""
      ).trim(),

      name: String(
        formData.get("name") || ""
      ).trim(),

      email: String(
        formData.get("email") || ""
      ).trim(),

      phone: String(
        formData.get("phone") || ""
      ).trim(),

      service: String(
        formData.get("service") || ""
      ),

      location: String(
        formData.get("location") || ""
      ).trim(),

      timeline: String(
        formData.get("timeline") || ""
      ).trim(),

      facility: String(
        formData.get("facility") || ""
      ).trim(),

      message: String(
        formData.get("message") || ""
      ).trim(),
    };

    try {
      await createEnquiry(data);

      setSuccess(
        "Thank you! Your project enquiry has been submitted successfully. Our team will contact you soon."
      );

      form.reset();
    } catch (err) {
      console.error("Enquiry submit error:", err);

      setError(
        "Unable to submit your enquiry. Please check your details and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      <main className="bg-[#f5f7f8]">

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-24 md:pt-44 lg:pb-28 lg:pt-48">

          {/* Background Number */}

          <div className="pointer-events-none absolute -right-10 top-16 hidden select-none text-[220px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
            07
          </div>

          {/* Vertical Decoration */}

          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.06] xl:block" />

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">

            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

              {/* ================= LEFT ================= */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    Start a Project
                  </p>

                </div>

                <h1 className="mt-8 max-w-[950px] text-[48px] font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]">

                  Let&apos;s build

                  <span className="block text-[#70d618]">
                    something strong.
                  </span>

                </h1>

              </div>

              {/* ================= RIGHT ================= */}

              <div className="border-l border-white/15 pl-0 lg:pl-8">

                <p className="max-w-[520px] text-[15px] leading-7 text-slate-300 md:text-base md:leading-8">

                  Tell us about your fabrication, erection or industrial
                  project requirements. Share the scope and our team can
                  review the details and continue the conversation.

                </p>

                <div className="mt-7 flex items-center gap-3">

                  <span className="h-2 w-2 bg-[#70d618]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Engineering • Fabrication • Erection
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            CONTACT AREA
        =================================================== */}

        <section className="py-16 md:py-24 lg:py-28">

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">

            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] xl:gap-16">

              {/* =================================================
                  LEFT CONTACT INFORMATION
              ================================================= */}

              <div>

                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Contact Information
                </p>

                <h2 className="mt-5 max-w-[450px] text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-[#071521] md:text-5xl">

                  Start the conversation with our team.

                </h2>

                <p className="mt-6 max-w-[480px] text-sm leading-7 text-slate-600">

                  Whether you are planning a new industrial facility,
                  structural expansion or fabrication requirement, send us
                  the project details to get started.

                </p>

                {/* Contact Details */}

                <div className="mt-10 border-t border-[#071521]/15">

                  <ContactItem
                    icon={<Phone size={20} />}
                    label="Project Enquiries"
                    value="Request a Callback"
                  />

                  <ContactItem
                    icon={<Mail size={20} />}
                    label="Email"
                    value="Send Project Enquiry"
                  />

                  <ContactItem
                    icon={<MapPin size={20} />}
                    label="Location"
                    value="Tamil Nadu, India"
                  />

                  <ContactItem
                    icon={<Clock3 size={20} />}
                    label="Working Hours"
                    value="Monday — Saturday"
                  />

                </div>

                {/* Project Information */}

                <div className="mt-9 bg-[#071521] p-7 md:p-8">

                  <div className="flex items-center gap-3">

                    <Building2
                      size={20}
                      className="text-[#70d618]"
                    />

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#70d618]">
                      Project Information
                    </p>

                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">

                    For faster project evaluation, include your project
                    location, required service, expected timeline and a brief
                    description of the scope.

                  </p>

                </div>

              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <div className="bg-white p-6 shadow-[0_20px_60px_rgba(7,21,33,0.08)] sm:p-8 md:p-10 lg:p-12">

                {/* Form Header */}

                <div className="flex flex-col justify-between gap-5 border-b border-[#071521]/10 pb-8 sm:flex-row sm:items-end">

                  <div>

                    <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#4fa900]">
                      Project Enquiry
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#071521] md:text-4xl">
                      Tell us about your project.
                    </h2>

                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    * Required fields
                  </p>

                </div>

                {/* =================================================
                    FORM START
                ================================================= */}

                <form
                  className="mt-9"
                  onSubmit={handleSubmit}
                >

                  <div className="grid gap-x-6 gap-y-7 md:grid-cols-2">

                    {/* Company */}

                    <FormField
                      label="Company Name"
                      name="company"
                      placeholder="Your company name"
                      disabled={loading}
                    />

                    {/* Name */}

                    <FormField
                      label="Contact Person"
                      name="name"
                      placeholder="Full name"
                      required
                      disabled={loading}
                    />

                    {/* Email */}

                    <FormField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                      disabled={loading}
                    />

                    {/* Phone */}

                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      disabled={loading}
                    />

                    {/* =================================================
                        PROJECT TYPE
                    ================================================= */}

                    <div>

                      <label
                        htmlFor="service"
                        className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#071521]"
                      >
                        Project Type *
                      </label>

                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        disabled={loading}
                        className="mt-3 h-14 w-full border border-[#071521]/15 bg-[#f8f9fa] px-4 text-sm text-[#071521] outline-none transition focus:border-[#70d618] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                      >

                        <option
                          value=""
                          disabled
                        >
                          Select a service
                        </option>

                        {projectTypes.map((type) => (

                          <option
                            key={type.value}
                            value={type.value}
                          >
                            {type.label}
                          </option>

                        ))}

                      </select>

                    </div>

                    {/* Location */}

                    <FormField
                      label="Project Location"
                      name="location"
                      placeholder="City / State"
                      disabled={loading}
                    />

                    {/* Timeline */}

                    <FormField
                      label="Expected Timeline"
                      name="timeline"
                      placeholder="Example: 3 months"
                      disabled={loading}
                    />

                    {/* Facility */}

                    <FormField
                      label="Project / Facility"
                      name="facility"
                      placeholder="Factory, warehouse, plant..."
                      disabled={loading}
                    />

                  </div>

                  {/* =================================================
                      MESSAGE
                  ================================================= */}

                  <div className="mt-7">

                    <label
                      htmlFor="message"
                      className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#071521]"
                    >
                      Project Details *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      disabled={loading}
                      placeholder="Tell us about the project scope, requirements and any important details..."
                      className="mt-3 w-full resize-none border border-[#071521]/15 bg-[#f8f9fa] p-4 text-sm leading-6 text-[#071521] outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                    />

                  </div>

                  {/* =================================================
                      SUCCESS MESSAGE
                  ================================================= */}

                  {success && (

                    <div className="mt-7 flex items-start gap-3 border border-[#70d618]/30 bg-[#70d618]/10 p-4">

                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-[#4fa900]"
                      />

                      <div>

                        <p className="text-sm font-bold text-[#367600]">
                          Enquiry Submitted
                        </p>

                        <p className="mt-1 text-xs leading-5 text-[#4b7000]">
                          {success}
                        </p>

                      </div>

                    </div>

                  )}

                  {/* =================================================
                      ERROR MESSAGE
                  ================================================= */}

                  {error && (

                    <div className="mt-7 flex items-start gap-3 border border-red-200 bg-red-50 p-4">

                      <TriangleAlert
                        size={20}
                        className="mt-0.5 shrink-0 text-red-500"
                      />

                      <div>

                        <p className="text-sm font-bold text-red-700">
                          Submission Failed
                        </p>

                        <p className="mt-1 text-xs leading-5 text-red-600">
                          {error}
                        </p>

                      </div>

                    </div>

                  )}

                  {/* =================================================
                      SUBMIT AREA
                  ================================================= */}

                  <div className="mt-8 flex flex-col justify-between gap-6 border-t border-[#071521]/10 pt-8 sm:flex-row sm:items-center">

                    <p className="max-w-[350px] text-xs leading-5 text-slate-500">

                      By submitting this form, you agree that SPS Engineering
                      may contact you regarding your project enquiry.

                    </p>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex h-14 shrink-0 items-center justify-between gap-10 bg-[#071521] px-6 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#70d618] hover:text-[#071521] disabled:cursor-not-allowed disabled:opacity-60"
                    >

                      {loading
                        ? "Sending..."
                        : "Send Enquiry"}

                      <ArrowUpRight
                        size={17}
                        className={`transition-transform duration-300 ${
                          loading
                            ? ""
                            : "group-hover:translate-x-1 group-hover:-translate-y-1"
                        }`}
                      />

                    </button>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            BOTTOM STRIP
        =================================================== */}

        <section className="bg-white">

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">

            <div className="grid border-x border-t border-[#071521]/10 md:grid-cols-3">

              <BottomItem
                number="01"
                title="Share Requirements"
                text="Tell us what needs to be built."
              />

              <BottomItem
                number="02"
                title="Project Review"
                text="Our team reviews the project scope."
              />

              <BottomItem
                number="03"
                title="Next Steps"
                text="We continue with technical discussion."
              />

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#071521]"
      >

        {label}

        {required && " *"}

      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        className="mt-3 h-14 w-full border border-[#071521]/15 bg-[#f8f9fa] px-4 text-sm text-[#071521] outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      />

    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-5 border-b border-[#071521]/15 py-6">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#eaf7df] text-[#4fa900]">

        {icon}

      </div>

      <div>

        <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-bold text-[#071521]">
          {value}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   BOTTOM ITEM
========================================================= */

function BottomItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-[#071521]/10 p-7 last:border-b-0 md:border-b-0 md:border-r md:p-8 md:last:border-r-0">

      <p className="text-[9px] font-black text-[#4fa900]">
        {number}
      </p>

      <h3 className="mt-4 text-lg font-bold text-[#071521]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>

    </div>
  );
}