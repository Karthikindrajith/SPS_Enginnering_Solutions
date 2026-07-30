"use client";

import {
  ChangeEvent,
  FormEvent,
  useState,
} from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Loader2,
} from "lucide-react";


/* =========================================================
   APPLICATION API
========================================================= */

const APPLICATION_API =
  "https://backend.spsengineeringsolutions.site/api/careers/apply/";


/* =========================================================
   TYPES
========================================================= */

interface ApplyFormProps {
  jobId: number;
  jobTitle: string;
}


interface FormState {
  name: string;
  email: string;
  phone: string;
  experience: string;
  current_location: string;
  message: string;
}


const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  current_location: "",
  message: "",
};


/* =========================================================
   COMPONENT
========================================================= */

export default function ApplyForm({
  jobId,
  jobTitle,
}: ApplyFormProps) {

  const [form, setForm] =
    useState<FormState>(initialForm);

  const [resume, setResume] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");


  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {

    const { name, value } =
      event.target;


    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));


    if (success) {
      setSuccess(false);
    }

  }


  /* =======================================================
     RESUME
  ======================================================= */

  function handleResume(
    event: ChangeEvent<HTMLInputElement>
  ) {

    setError("");
    setSuccess(false);


    const file =
      event.target.files?.[0];


    if (!file) {

      setResume(null);

      return;

    }


    /* FILE EXTENSION */

    const allowedExtensions = [
      "pdf",
      "doc",
      "docx",
    ];


    const extension =
      file.name
        .split(".")
        .pop()
        ?.toLowerCase();


    if (
      !extension ||
      !allowedExtensions.includes(extension)
    ) {

      setError(
        "Resume must be PDF, DOC or DOCX."
      );


      event.target.value = "";

      setResume(null);

      return;

    }


    /* FILE SIZE */

    const maxSize =
      5 * 1024 * 1024;


    if (file.size > maxSize) {

      setError(
        "Resume size must be less than 5 MB."
      );


      event.target.value = "";

      setResume(null);

      return;

    }


    setResume(file);

  }


  /* =======================================================
     SUBMIT
  ======================================================= */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();


    setError("");
    setSuccess(false);


    if (!resume) {

      setError(
        "Please upload your resume."
      );

      return;

    }


    try {

      setLoading(true);


      /* FORM DATA */

      const formData =
        new FormData();


      formData.append(
        "job",
        String(jobId)
      );


      formData.append(
        "name",
        form.name.trim()
      );


      formData.append(
        "email",
        form.email.trim()
      );


      formData.append(
        "phone",
        form.phone.trim()
      );


      formData.append(
        "experience",
        form.experience.trim()
      );


      formData.append(
        "current_location",
        form.current_location.trim()
      );


      formData.append(
        "message",
        form.message.trim()
      );


      formData.append(
        "resume",
        resume
      );


      /* API */

      const response =
        await fetch(
          APPLICATION_API,
          {
            method: "POST",

            /*
             IMPORTANT:
             Content-Type manually set panna vendaam.

             Browser automatically:
             multipart/form-data + boundary
             set pannum.
            */

            body: formData,
          }
        );


      let data: Record<string, unknown> = {};


      try {

        data =
          await response.json();

      } catch {

        // API JSON return pannala na
        // empty object maintain pannuvom.

      }


      /* API ERROR */

      if (!response.ok) {

        console.error(
          "Application API Error:",
          data
        );


        const values =
          Object.values(data);


        const firstError =
          values.length > 0
            ? values[0]
            : null;


        if (Array.isArray(firstError)) {

          throw new Error(
            String(firstError[0])
          );

        }


        if (
          typeof firstError === "string"
        ) {

          throw new Error(firstError);

        }


        throw new Error(
          "Unable to submit application. Please check your details and try again."
        );

      }


      /* SUCCESS */

      setSuccess(true);


      setForm(initialForm);


      setResume(null);


      const fileInput =
        document.getElementById(
          "resume"
        ) as HTMLInputElement | null;


      if (fileInput) {

        fileInput.value = "";

      }


    } catch (err) {

      console.error(err);


      if (err instanceof Error) {

        setError(err.message);

      } else {

        setError(
          "Unable to submit application. Please try again."
        );

      }

    } finally {

      setLoading(false);

    }

  }


  /* =======================================================
     UI
  ======================================================= */

  return (

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 text-[#071521] shadow-[0_25px_80px_rgba(0,0,0,0.15)] md:p-10 lg:p-12"
    >


      {/* =================================================
          FORM HEADER
      ================================================= */}

      <div className="border-b border-[#071521]/10 pb-8">


        <div className="flex items-center gap-3">

          <span className="h-[2px] w-8 bg-[#70d618]" />


          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#4fa900]">
            Application Form
          </p>

        </div>


        <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] md:text-3xl">

          Apply for {jobTitle}

        </h3>


        <p className="mt-3 text-sm leading-7 text-slate-500">

          Complete the form below and attach
          your latest resume.

        </p>

      </div>


      {/* =================================================
          INPUTS
      ================================================= */}

      <div className="mt-8 grid gap-6 md:grid-cols-2">


        {/* NAME */}

        <div>

          <label
            htmlFor="name"
            className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
          >
            Full Name *
          </label>


          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Your full name"
            className="mt-3 h-14 w-full border border-[#071521]/15 bg-[#f7f8f9] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white"
          />

        </div>


        {/* EMAIL */}

        <div>

          <label
            htmlFor="email"
            className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
          >
            Email Address *
          </label>


          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="mt-3 h-14 w-full border border-[#071521]/15 bg-[#f7f8f9] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white"
          />

        </div>


        {/* PHONE */}

        <div>

          <label
            htmlFor="phone"
            className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
          >
            Phone Number *
          </label>


          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className="mt-3 h-14 w-full border border-[#071521]/15 bg-[#f7f8f9] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white"
          />

        </div>


        {/* EXPERIENCE */}

        <div>

          <label
            htmlFor="experience"
            className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
          >
            Experience
          </label>


          <input
            id="experience"
            name="experience"
            type="text"
            value={form.experience}
            onChange={handleChange}
            placeholder="Example: 3 Years"
            className="mt-3 h-14 w-full border border-[#071521]/15 bg-[#f7f8f9] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white"
          />

        </div>


        {/* CURRENT LOCATION */}

        <div className="md:col-span-2">

          <label
            htmlFor="current_location"
            className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
          >
            Current Location
          </label>


          <input
            id="current_location"
            name="current_location"
            type="text"
            value={form.current_location}
            onChange={handleChange}
            autoComplete="address-level2"
            placeholder="Example: Hosur, Tamil Nadu"
            className="mt-3 h-14 w-full border border-[#071521]/15 bg-[#f7f8f9] px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white"
          />

        </div>


        {/* MESSAGE */}

        <div className="md:col-span-2">

          <label
            htmlFor="message"
            className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
          >
            Message
          </label>


          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us briefly about your experience..."
            className="mt-3 w-full resize-none border border-[#071521]/15 bg-[#f7f8f9] p-4 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-[#70d618] focus:bg-white"
          />

        </div>


        {/* =================================================
            RESUME
        ================================================= */}

        <div className="md:col-span-2">

          <label
            htmlFor="resume"
            className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-500"
          >
            Resume *
          </label>


          <div className="mt-3 border border-dashed border-[#071521]/25 bg-[#f7f8f9] p-6">


            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">


              <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#eaf7df] text-[#4fa900]">

                <FileText
                  size={20}
                  strokeWidth={1.7}
                />

              </div>


              <div className="min-w-0 flex-1">


                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResume}
                  required
                  className="block w-full cursor-pointer text-sm text-slate-600 file:mr-4 file:cursor-pointer file:border-0 file:bg-[#071521] file:px-4 file:py-3 file:text-[9px] file:font-extrabold file:uppercase file:tracking-[0.12em] file:text-white"
                />


                <p className="mt-3 text-xs text-slate-400">

                  PDF, DOC or DOCX • Maximum 5 MB

                </p>

              </div>

            </div>


            {/* SELECTED FILE */}

            {resume && (

              <div className="mt-5 border-t border-[#071521]/10 pt-4">

                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                  Selected Resume
                </p>


                <p className="mt-1 break-all text-sm font-semibold text-[#4fa900]">

                  {resume.name}

                </p>

              </div>

            )}

          </div>

        </div>

      </div>


      {/* =================================================
          ERROR
      ================================================= */}

      {error && (

        <div
          role="alert"
          className="mt-6 border-l-4 border-red-500 bg-red-50 p-4"
        >

          <p className="text-sm font-semibold text-red-700">
            {error}
          </p>

        </div>

      )}


      {/* =================================================
          SUCCESS
      ================================================= */}

      {success && (

        <div
          role="status"
          className="mt-6 flex gap-3 border-l-4 border-[#70d618] bg-[#f0fae8] p-4"
        >

          <CheckCircle2
            size={20}
            className="mt-0.5 shrink-0 text-[#4fa900]"
          />


          <div>

            <p className="text-sm font-bold text-[#071521]">

              Application submitted successfully.

            </p>


            <p className="mt-1 text-xs leading-6 text-slate-600">

              Thank you for applying for {jobTitle}.
              Our team will review your application.

            </p>

          </div>

        </div>

      )}


      {/* =================================================
          SUBMIT
      ================================================= */}

      <div className="mt-8 border-t border-[#071521]/10 pt-8">


        <button
          type="submit"
          disabled={loading}
          className="group inline-flex h-14 cursor-pointer items-center justify-between gap-10 bg-[#70d618] px-6 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#071521] transition hover:bg-[#071521] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >

          {loading ? (

            <>
              Submitting

              <Loader2
                size={17}
                className="animate-spin"
              />
            </>

          ) : (

            <>
              Submit Application


              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </>

          )}

        </button>


        <p className="mt-4 text-xs leading-6 text-slate-400">

          By submitting this form, you confirm that
          the information provided is accurate.

        </p>

      </div>

    </form>

  );
}