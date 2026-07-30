import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  HardHat,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const departments = [
  {
    number: "01",
    icon: Settings,
    title: "Engineering",
    description:
      "Engineering, detailing and technical coordination supporting structural and industrial project requirements.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Fabrication",
    description:
      "Workshop roles involved in fabrication, production coordination and structural steel execution.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Site Execution",
    description:
      "Site teams coordinating structural erection, project activities and field execution.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality & Safety",
    description:
      "Roles supporting quality inspection, process control and responsible site practices.",
  },
];

const workPrinciples = [
  {
    number: "01",
    title: "Responsibility",
    text: "Take ownership of the work and understand how your contribution affects project execution.",
  },
  {
    number: "02",
    title: "Teamwork",
    text: "Engineering, fabrication and site teams work together to solve practical project challenges.",
  },
  {
    number: "03",
    title: "Learning",
    text: "Build technical knowledge through practical exposure to industrial engineering and execution.",
  },
  {
    number: "04",
    title: "Safety",
    text: "Responsible working practices remain an essential part of workshop and site activities.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-28 md:pt-44 lg:pt-48">
          <span className="pointer-events-none absolute -right-10 top-16 hidden select-none text-[230px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
            06
          </span>

          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.06] xl:block" />

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    Careers at SPS
                  </p>
                </div>

                <h1 className="mt-8 max-w-[1000px] text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[84px]">
                  Build structures.
                  <span className="block text-[#70d618]">
                    Build your career.
                  </span>
                </h1>
              </div>

              <div className="border-l border-white/15 lg:pl-9">
                <p className="max-w-[520px] text-[15px] leading-8 text-slate-300">
                  Explore opportunities to work across engineering,
                  fabrication, quality and structural project execution.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#70d618]" />

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    Engineering • Fabrication • Execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}
        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Work With Us
                </p>

                <h2 className="mt-5 max-w-[600px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Work that becomes
                  <span className="block text-slate-400">
                    something real.
                  </span>
                </h2>
              </div>

              <div className="lg:pt-3">
                <p className="max-w-[720px] text-[15px] leading-8 text-slate-600">
                  Industrial engineering connects drawings, materials,
                  fabrication and people on site. Careers in this environment
                  offer practical exposure to how structures move from
                  planning to execution.
                </p>

                <p className="mt-5 max-w-[720px] text-[15px] leading-8 text-slate-600">
                  We value people who approach their work with responsibility,
                  technical curiosity and respect for quality and safety.
                </p>

                <div className="mt-10 flex items-center gap-5 border-t border-[#071521]/15 pt-7">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-[#70d618] text-[#071521]">
                    <Users size={23} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#4fa900]">
                      One Team
                    </p>

                    <p className="mt-1 text-lg font-bold text-[#071521]">
                      Workshop to project site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DEPARTMENTS ================= */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-10 border-b border-[#071521]/15 pb-14 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Where You Can Contribute
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Different disciplines.
                  <span className="block text-slate-400">
                    One project goal.
                  </span>
                </h2>
              </div>

              <p className="max-w-[600px] text-[15px] leading-8 text-slate-600 lg:justify-self-end">
                Industrial projects bring together technical and operational
                teams across workshop and site environments.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-[#071521]/15 md:grid-cols-2 xl:grid-cols-4">
              {departments.map((department) => {
                const Icon = department.icon;

                return (
                  <article
                    key={department.number}
                    className="group min-h-[390px] bg-[#f8f9fa] p-7 transition-colors duration-500 hover:bg-[#071521] md:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center border border-[#071521]/15 text-[#4fa900] transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618] group-hover:text-[#071521]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <span className="text-[9px] font-black tracking-[0.18em] text-slate-400">
                        {department.number}
                      </span>
                    </div>

                    <h3 className="mt-16 text-2xl font-bold text-[#071521] transition-colors group-hover:text-white">
                      {department.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-400">
                      {department.description}
                    </p>

                    <div className="mt-8 h-[2px] w-8 bg-[#70d618] transition-all duration-500 group-hover:w-16" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= CULTURE ================= */}
        <section className="bg-[#071521] py-20 text-white md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="lg:sticky lg:top-32">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                    How We Work
                  </p>

                  <h2 className="mt-5 max-w-[600px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] md:text-6xl">
                    Strong work starts
                    <span className="block text-slate-500">
                      with strong habits.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-[520px] text-sm leading-7 text-slate-400">
                    The same discipline required to build industrial
                    structures applies to how teams communicate, learn and
                    take responsibility.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10">
                {workPrinciples.map((item) => (
                  <div
                    key={item.number}
                    className="group grid gap-5 border-b border-white/10 py-8 md:grid-cols-[70px_0.5fr_1fr] md:items-start md:py-10"
                  >
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#70d618]">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="max-w-[520px] text-sm leading-7 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= OPEN POSITIONS ================= */}
        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Join The Team
                </p>

                <h2 className="mt-5 max-w-[600px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Career
                  <span className="block text-slate-400">
                    opportunities.
                  </span>
                </h2>
              </div>

              <div className="bg-white p-7 shadow-[0_20px_60px_rgba(7,21,33,0.06)] md:p-10 lg:p-12">
                <div className="flex h-14 w-14 items-center justify-center bg-[#eaf7df] text-[#4fa900]">
                  <BriefcaseBusiness size={24} strokeWidth={1.7} />
                </div>

                <p className="mt-8 text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#4fa900]">
                  Open Positions
                </p>

                <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#071521]">
                  Interested in joining SPS?
                </h3>

                <p className="mt-5 max-w-[650px] text-sm leading-7 text-slate-600">
                  Current opportunities can be shared here as positions become
                  available. You can also contact our team regarding career
                  enquiries.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex h-14 items-center gap-10 bg-[#071521] px-6 text-[10px] font-extrabold uppercase tracking-[0.15em] !text-white transition hover:bg-[#70d618] hover:!text-[#071521]"
                >
                  Career Enquiry

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="relative overflow-hidden bg-[#70d618]">
          <div className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[150px] font-black tracking-[-0.07em] text-[#071521]/[0.035] xl:block">
            BUILD WITH US
          </div>

          <div className="relative mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#071521]/60">
                SPS Engineering
              </p>

              <h2 className="mt-4 max-w-[850px] text-3xl font-bold leading-tight tracking-[-0.045em] text-[#071521] md:text-5xl">
                Ready to build your
                <span className="block">next chapter?</span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-16 items-center justify-between gap-12 bg-[#071521] px-7 text-[10px] font-extrabold uppercase tracking-[0.16em] !text-white transition hover:bg-white hover:!text-[#071521]"
            >
              Contact Us

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}