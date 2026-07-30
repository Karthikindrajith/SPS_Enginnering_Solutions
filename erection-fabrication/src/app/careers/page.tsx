"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Loader2,
  MapPin,
  RefreshCw,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
   PAGE
========================================================= */

export default function CareersPage() {
  const [jobs, setJobs] = useState<JobOpening[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =======================================================
     FETCH JOBS
  ======================================================= */

  async function fetchJobs() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(
          `Unable to load jobs. Status: ${response.status}`
        );
      }

      const data: JobOpening[] = await response.json();

      console.log("Career openings:", data);

      setJobs(data);
    } catch (err) {
      console.error("Career API Error:", err);

      setError(
        "Unable to load current job openings. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  /* =======================================================
     DATE FORMAT
  ======================================================= */

  function formatDate(date: string | null) {
    if (!date) return "";

    const parsedDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden bg-[#071521] pb-24 pt-36 text-white md:pb-32 md:pt-44">
          {/* DECORATION */}

          <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full border border-white/[0.04]" />

          <div className="absolute -right-20 top-20 h-[350px] w-[350px] rounded-full border border-white/[0.04]" />

          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.05] xl:block" />

          <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="max-w-[950px]">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#70d618]" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                  Careers
                </p>
              </div>

              <h1 className="mt-7 text-5xl font-bold leading-[0.98] tracking-[-0.05em] md:text-7xl lg:text-[86px]">
                Build your career
                <span className="block text-slate-500">
                  with SPS.
                </span>
              </h1>

              <p className="mt-8 max-w-[700px] text-[15px] leading-8 text-slate-400 md:text-base">
                Join SPS Engineering Solutions and work with a team
                delivering engineering, fabrication and industrial
                solutions for challenging projects.
              </p>

              <a
                href="#openings"
                className="group mt-10 inline-flex h-14 items-center justify-between gap-12 bg-[#70d618] px-6 text-[10px] font-extrabold uppercase tracking-[0.16em] !text-[#071521] transition hover:bg-white"
              >
                View Open Positions

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </section>

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-8 lg:grid-cols-[0.7fr_1.3fr] xl:px-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#70d618]" />

                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#4fa900]">
                  Work With Us
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                SPS Engineering Solutions
              </p>
            </div>

            <div>
              <h2 className="max-w-[900px] text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#071521] md:text-5xl">
                Engineering careers built around
                <span className="text-[#58b90c]">
                  {" "}
                  real projects and real responsibility.
                </span>
              </h2>

              <p className="mt-7 max-w-[850px] text-[15px] leading-8 text-slate-600">
                We are looking for people who value quality,
                collaboration and practical engineering. Whether you
                work in engineering, project execution, fabrication
                or operations, your contribution helps us deliver
                reliable solutions to our clients.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            VALUES
        ================================================= */}

        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="mb-12">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#4fa900]">
                Why SPS
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-[#071521] md:text-5xl">
                Where you can contribute.
              </h2>
            </div>

            <div className="grid border-l border-t border-[#071521]/10 md:grid-cols-3">
              <div className="border-b border-r border-[#071521]/10 bg-white p-8 md:p-10">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#4fa900]">
                  01
                </p>

                <h3 className="mt-8 text-xl font-bold text-[#071521]">
                  Engineering
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Work on practical engineering challenges and
                  contribute to solutions designed for real industrial
                  requirements.
                </p>
              </div>

              <div className="border-b border-r border-[#071521]/10 bg-white p-8 md:p-10">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#4fa900]">
                  02
                </p>

                <h3 className="mt-8 text-xl font-bold text-[#071521]">
                  Project Execution
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Coordinate teams, schedules and site activities to
                  help projects move safely and efficiently from plan
                  to completion.
                </p>
              </div>

              <div className="border-b border-r border-[#071521]/10 bg-white p-8 md:p-10">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#4fa900]">
                  03
                </p>

                <h3 className="mt-8 text-xl font-bold text-[#071521]">
                  Fabrication & Operations
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Turn engineering requirements into quality
                  fabrication and dependable industrial execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            CURRENT OPENINGS
        ================================================= */}

        <section
          id="openings"
          className="scroll-mt-24 bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            {/* HEADER */}

            <div className="grid gap-8 border-b border-[#071521]/15 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-8 bg-[#70d618]" />

                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#4fa900]">
                    Join The Team
                  </p>
                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Current openings.
                </h2>

                <p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-500">
                  Explore current opportunities at SPS Engineering
                  Solutions and find the position that matches your
                  experience.
                </p>
              </div>

              {!loading && !error && jobs.length > 0 && (
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                    Open Positions
                  </p>

                  <p className="mt-2 text-3xl font-bold text-[#071521]">
                    {jobs.length.toString().padStart(2, "0")}
                  </p>
                </div>
              )}
            </div>

            {/* =============================================
                LOADING
            ============================================= */}

            {loading && (
              <div className="flex min-h-[300px] items-center justify-center">
                <div className="text-center">
                  <Loader2
                    size={30}
                    className="mx-auto animate-spin text-[#4fa900]"
                  />

                  <p className="mt-5 text-sm text-slate-500">
                    Loading current opportunities...
                  </p>
                </div>
              </div>
            )}

            {/* =============================================
                ERROR
            ============================================= */}

            {!loading && error && (
              <div className="mt-10 border border-red-200 bg-red-50 p-8 md:p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                  Unable To Load Openings
                </p>

                <p className="mt-3 text-sm leading-7 text-red-700">
                  {error}
                </p>

                <button
                  type="button"
                  onClick={fetchJobs}
                  className="mt-6 inline-flex cursor-pointer items-center gap-3 bg-[#071521] px-5 py-3 text-[9px] font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#70d618] hover:text-[#071521]"
                >
                  <RefreshCw size={15} />

                  Try Again
                </button>
              </div>
            )}

            {/* =============================================
                EMPTY
            ============================================= */}

            {!loading && !error && jobs.length === 0 && (
              <div className="mt-10 bg-[#f5f7f8] p-10 text-center md:p-16">
                <BriefcaseBusiness
                  size={34}
                  strokeWidth={1.4}
                  className="mx-auto text-[#4fa900]"
                />

                <h3 className="mt-6 text-2xl font-bold text-[#071521]">
                  No current openings.
                </h3>

                <p className="mx-auto mt-4 max-w-[550px] text-sm leading-7 text-slate-500">
                  We do not have any active positions at the moment.
                  Please check this page again for future opportunities.
                </p>
              </div>
            )}

            {/* =============================================
                JOBS
            ============================================= */}

            {!loading && !error && jobs.length > 0 && (
              <div className="mt-10 grid gap-5">
                {jobs.map((job, index) => (
                  <article
                    key={job.id}
                    className="group border border-[#071521]/10 bg-[#f7f8f9] transition duration-300 hover:border-[#70d618] hover:bg-white hover:shadow-[0_20px_60px_rgba(7,21,33,0.07)]"
                  >
                    <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[70px_1fr_auto] lg:items-center lg:p-10">
                      {/* NUMBER */}

                      <div className="hidden lg:block">
                        <p className="text-[10px] font-black tracking-[0.2em] text-slate-400">
                          {(index + 1).toString().padStart(2, "0")}
                        </p>
                      </div>

                      {/* JOB CONTENT */}

                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#4fa900]">
                            {job.department || "SPS Engineering"}
                          </p>

                          {job.job_type && (
                            <>
                              <span className="h-1 w-1 rounded-full bg-slate-300" />

                              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-slate-400">
                                {job.job_type}
                              </p>
                            </>
                          )}
                        </div>

                        <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[#071521] transition group-hover:text-[#4fa900] md:text-3xl">
                          {job.title}
                        </h3>

                        {/* JOB META */}

                        <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4">
                          {job.location && (
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <MapPin
                                size={15}
                                className="text-[#4fa900]"
                              />

                              {job.location}
                            </div>
                          )}

                          {job.experience && (
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <BriefcaseBusiness
                                size={15}
                                className="text-[#4fa900]"
                              />

                              {job.experience}
                            </div>
                          )}

                          {job.qualification && (
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <GraduationCap
                                size={16}
                                className="text-[#4fa900]"
                              />

                              {job.qualification}
                            </div>
                          )}

                          {job.last_date && (
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <CalendarDays
                                size={15}
                                className="text-[#4fa900]"
                              />

                              Apply by {formatDate(job.last_date)}
                            </div>
                          )}
                        </div>

                        {/* DESCRIPTION */}

                        {job.description && (
                          <p className="mt-6 max-w-[850px] text-sm leading-7 text-slate-500">
                            {job.description.length > 180
                              ? `${job.description.substring(0, 180)}...`
                              : job.description}
                          </p>
                        )}

                        {/* SKILLS */}

                        {job.skills && (
                          <p className="mt-4 text-xs leading-6 text-slate-400">
                            <span className="font-bold text-[#071521]">
                              Skills:
                            </span>{" "}
                            {job.skills}
                          </p>
                        )}
                      </div>

                      {/* BUTTON */}

                      <div>
                        <Link
                          href={`/careers/${job.id}`}
                          className="group/button inline-flex h-14 min-w-[190px] items-center justify-between gap-8 bg-[#071521] px-5 text-[9px] font-extrabold uppercase tracking-[0.15em] !text-white transition hover:bg-[#70d618] hover:!text-[#071521]"
                        >
                          View Position

                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover/button:-translate-y-1 group-hover/button:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* =================================================
            BOTTOM CTA
        ================================================= */}

        <section className="bg-[#071521] py-20 text-white md:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#70d618]">
                SPS Engineering Solutions
              </p>

              <h2 className="mt-5 max-w-[800px] text-3xl font-bold leading-[1.08] tracking-[-0.04em] md:text-5xl">
                Ready to build something meaningful with us?
              </h2>

              <p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-400">
                Explore our current opportunities and apply for a
                position that matches your experience and skills.
              </p>
            </div>

            <a
              href="#openings"
              className="group inline-flex h-16 items-center justify-between gap-12 bg-[#70d618] px-7 text-[10px] font-extrabold uppercase tracking-[0.16em] !text-[#071521] transition hover:bg-white"
            >
              Explore Openings

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}