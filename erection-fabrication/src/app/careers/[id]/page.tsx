import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ApplyForm from "./ApplyForm";


/* =========================================================
   API
========================================================= */

const API_URL =
  "https://backend.spsengineeringsolutions.site/api/careers/";


/* =========================================================
   TYPES
========================================================= */

interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  job_type: string;
  experience: string;
  qualification: string;
  skills: string;
  description: string;
  last_date: string | null;
  created_at: string;
  updated_at: string;
}


/* =========================================================
   GET SINGLE JOB
========================================================= */

async function getJob(
  id: string
): Promise<JobOpening | null> {
  try {
    const response = await fetch(
      `${API_URL}${id}/`,
      {
        cache: "no-store",
      }
    );

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      console.error(
        "Job API Error:",
        response.status
      );

      return null;
    }

    const data: JobOpening =
      await response.json();

    return data;

  } catch (error) {
    console.error(
      "Unable to load job:",
      error
    );

    return null;
  }
}


/* =========================================================
   PAGE
========================================================= */

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const job = await getJob(id);


  if (!job) {
    notFound();
  }


  return (
    <>
      <Navbar />

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-24 md:pt-44">

          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.06] xl:block" />


          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">


            {/* BACK */}

            <Link
              href="/careers"
              className="inline-flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.2em] !text-slate-400 transition hover:!text-[#70d618]"
            >

              <ArrowLeft size={15} />

              Back to Careers

            </Link>


            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">


              {/* TITLE */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-10 bg-[#70d618]" />


                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">

                    {job.department ||
                      "SPS Engineering"}

                  </p>

                </div>


                <h1 className="mt-6 max-w-[950px] text-5xl font-bold leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">

                  {job.title}

                </h1>


                {/* BASIC DETAILS */}

                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">


                  <div className="flex items-center gap-2 text-sm text-slate-300">

                    <MapPin
                      size={16}
                      className="text-[#70d618]"
                    />

                    {job.location}

                  </div>


                  <div className="flex items-center gap-2 text-sm text-slate-300">

                    <BriefcaseBusiness
                      size={16}
                      className="text-[#70d618]"
                    />

                    {job.job_type}

                  </div>


                  {job.experience && (

                    <div className="flex items-center gap-2 text-sm text-slate-300">

                      <CalendarDays
                        size={16}
                        className="text-[#70d618]"
                      />

                      {job.experience}

                    </div>

                  )}

                </div>

              </div>


              {/* APPLY BUTTON */}

              <a
                href="#apply"
                className="group inline-flex h-16 items-center justify-between gap-12 bg-[#70d618] px-7 text-[10px] font-extrabold uppercase tracking-[0.16em] !text-[#071521] transition hover:bg-white"
              >

                Apply Now


                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </a>

            </div>

          </div>

        </section>


        {/* =================================================
            JOB DETAILS
        ================================================= */}

        <section className="bg-[#f5f7f8] py-20 md:py-28">

          <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-8 lg:grid-cols-[1fr_360px] xl:px-12">


            {/* =============================================
                LEFT CONTENT
            ============================================= */}

            <div>

              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#4fa900]">
                About The Position
              </p>


              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#071521] md:text-5xl">
                Job description.
              </h2>


              <p className="mt-8 whitespace-pre-line text-[15px] leading-8 text-slate-600">

                {job.description}

              </p>


              {/* SKILLS */}

              {job.skills && (

                <div className="mt-14 border-t border-[#071521]/15 pt-10">

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#4fa900]">
                    Required Skills
                  </p>


                  <h3 className="mt-4 text-2xl font-bold text-[#071521]">
                    Skills & capabilities
                  </h3>


                  <p className="mt-5 whitespace-pre-line text-[15px] leading-8 text-slate-600">

                    {job.skills}

                  </p>

                </div>

              )}


              {/* QUALIFICATION */}

              {job.qualification && (

                <div className="mt-14 border-t border-[#071521]/15 pt-10">

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#4fa900]">
                    Qualification
                  </p>


                  <h3 className="mt-4 text-2xl font-bold text-[#071521]">
                    Education requirement
                  </h3>


                  <p className="mt-5 text-[15px] leading-8 text-slate-600">

                    {job.qualification}

                  </p>

                </div>

              )}

            </div>


            {/* =============================================
                RIGHT DETAILS CARD
            ============================================= */}

            <aside>

              <div className="bg-white p-7 shadow-[0_20px_60px_rgba(7,21,33,0.06)] md:p-8">


                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#4fa900]">
                  Position Details
                </p>


                <div className="mt-7 space-y-7">


                  {/* LOCATION */}

                  <div className="flex gap-4">

                    <MapPin
                      size={19}
                      className="mt-1 shrink-0 text-[#4fa900]"
                    />


                    <div>

                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                        Location
                      </p>


                      <p className="mt-1 text-sm font-bold text-[#071521]">
                        {job.location}
                      </p>

                    </div>

                  </div>


                  {/* JOB TYPE */}

                  <div className="flex gap-4">

                    <BriefcaseBusiness
                      size={19}
                      className="mt-1 shrink-0 text-[#4fa900]"
                    />


                    <div>

                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                        Job Type
                      </p>


                      <p className="mt-1 text-sm font-bold text-[#071521]">
                        {job.job_type}
                      </p>

                    </div>

                  </div>


                  {/* EXPERIENCE */}

                  {job.experience && (

                    <div className="flex gap-4">

                      <CalendarDays
                        size={19}
                        className="mt-1 shrink-0 text-[#4fa900]"
                      />


                      <div>

                        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                          Experience
                        </p>


                        <p className="mt-1 text-sm font-bold text-[#071521]">
                          {job.experience}
                        </p>

                      </div>

                    </div>

                  )}


                  {/* QUALIFICATION */}

                  {job.qualification && (

                    <div className="flex gap-4">

                      <GraduationCap
                        size={19}
                        className="mt-1 shrink-0 text-[#4fa900]"
                      />


                      <div>

                        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                          Qualification
                        </p>


                        <p className="mt-1 text-sm font-bold text-[#071521]">
                          {job.qualification}
                        </p>

                      </div>

                    </div>

                  )}


                  {/* LAST DATE */}

                  {job.last_date && (

                    <div className="border-t border-[#071521]/10 pt-6">

                      <p className="text-[9px] font-black uppercase tracking-[0.15em] text-slate-400">
                        Application Deadline
                      </p>


                      <p className="mt-2 text-sm font-bold text-[#071521]">
                        {job.last_date}
                      </p>

                    </div>

                  )}

                </div>


                {/* CARD APPLY */}

                <a
                  href="#apply"
                  className="group mt-8 flex h-14 items-center justify-between bg-[#071521] px-5 text-[9px] font-extrabold uppercase tracking-[0.15em] !text-white transition hover:bg-[#70d618] hover:!text-[#071521]"
                >

                  Apply for Position


                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </a>

              </div>

            </aside>

          </div>

        </section>


        {/* =================================================
            APPLY FORM
        ================================================= */}

        <section
          id="apply"
          className="scroll-mt-24 bg-[#071521] py-20 text-white md:py-28"
        >

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">


            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">


              {/* LEFT */}

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-[2px] w-10 bg-[#70d618]" />


                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                    Apply
                  </p>

                </div>


                <h2 className="mt-6 text-4xl font-bold leading-[1.03] tracking-[-0.045em] md:text-6xl">

                  Join the

                  <span className="block text-slate-500">
                    SPS team.
                  </span>

                </h2>


                <p className="mt-7 max-w-[450px] text-sm leading-7 text-slate-400">

                  Apply for the{" "}

                  <span className="font-semibold text-white">
                    {job.title}
                  </span>{" "}

                  position by submitting your details and latest resume.

                </p>


                <div className="mt-10 border-t border-white/10 pt-7">

                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-500">
                    Position
                  </p>


                  <p className="mt-2 text-lg font-bold text-white">
                    {job.title}
                  </p>


                  <p className="mt-2 text-sm text-slate-400">
                    {job.location} • {job.job_type}
                  </p>

                </div>

              </div>


              {/* FORM */}

              <ApplyForm
                jobId={job.id}
                jobTitle={job.title}
              />

            </div>

          </div>

        </section>

      </main>


      <Footer />

    </>
  );
}