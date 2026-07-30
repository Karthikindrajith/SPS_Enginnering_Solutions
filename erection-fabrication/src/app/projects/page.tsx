import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Building2,
  Factory,
  HardHat,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
  {
    number: "01",
    category: "Steel Fabrication",
    title: "Industrial Manufacturing Facility",
    location: "Industrial Project",
    image: "/images/projects/project-01.jpg",
    size: "large",
  },
  {
    number: "02",
    category: "Structural Erection",
    title: "Heavy Steel Structure",
    location: "Industrial Project",
    image: "/images/projects/project-02.jpg",
    size: "normal",
  },
  {
    number: "03",
    category: "PEB Solutions",
    title: "Large Span Warehouse",
    location: "Industrial Project",
    image: "/images/projects/project-03.jpg",
    size: "normal",
  },
  {
    number: "04",
    category: "Industrial Structures",
    title: "Production Facility Expansion",
    location: "Industrial Project",
    image: "/images/projects/project-04.jpg",
    size: "normal",
  },
  {
    number: "05",
    category: "Roofing & Cladding",
    title: "Industrial Building Envelope",
    location: "Industrial Project",
    image: "/images/projects/project-05.jpg",
    size: "normal",
  },
  {
    number: "06",
    category: "Fabrication & Erection",
    title: "Integrated Steel Project",
    location: "Industrial Project",
    image: "/images/projects/project-06.jpg",
    size: "large",
  },
];

const capabilities = [
  {
    icon: Factory,
    title: "Fabrication",
    text: "Controlled workshop fabrication for structural steel requirements.",
  },
  {
    icon: HardHat,
    title: "Erection",
    text: "Coordinated structural erection focused on safe site execution.",
  },
  {
    icon: Building2,
    title: "Industrial Buildings",
    text: "Integrated structural solutions for industrial facilities.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-28 md:pt-44 lg:pt-48">
          <span className="pointer-events-none absolute -right-10 top-16 hidden select-none text-[230px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
            04
          </span>

          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.06] xl:block" />

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    Selected Projects
                  </p>
                </div>

                <h1 className="mt-8 max-w-[950px] text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[84px]">
                  Steel transformed
                  <span className="block text-[#70d618]">
                    into execution.
                  </span>
                </h1>
              </div>

              <div className="border-l border-white/15 lg:pl-9">
                <p className="max-w-[520px] text-[15px] leading-8 text-slate-300">
                  Explore structural fabrication, erection and industrial
                  building work across a range of project requirements.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#70d618]" />

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    Fabrication • Erection • Industrial Structures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT INTRO */}
        <section className="bg-[#f5f7f8] pb-14 pt-20 md:pt-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-10 border-b border-[#071521]/15 pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Our Work
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Built for the
                  <span className="block text-slate-400">
                    real world.
                  </span>
                </h2>
              </div>

              <p className="max-w-[700px] text-[15px] leading-8 text-slate-600 lg:justify-self-end">
                Every project requires coordination between engineering,
                fabrication, quality and site execution. Our work reflects a
                practical approach to industrial steel construction.
              </p>
            </div>

            {/* Filter-style labels */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "All Projects",
                "Fabrication",
                "Erection",
                "PEB",
                "Roofing & Cladding",
              ].map((item, index) => (
                <span
                  key={item}
                  className={`px-5 py-3 text-[9px] font-extrabold uppercase tracking-[0.16em] ${
                    index === 0
                      ? "bg-[#071521] text-white"
                      : "border border-[#071521]/15 bg-white text-[#071521]"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT GRID */}
        <section className="bg-[#f5f7f8] pb-20 md:pb-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.number}
                  className={`group relative overflow-hidden bg-[#071521] ${
                    project.size === "large"
                      ? "min-h-[520px] md:min-h-[650px]"
                      : "min-h-[440px] md:min-h-[540px]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/95 via-[#071521]/20 to-[#071521]/5" />
                  <div className="absolute inset-0 bg-[#071521]/0 transition-colors duration-500 group-hover:bg-[#071521]/15" />

                  {/* Number */}
                  <div className="absolute left-6 top-6 md:left-8 md:top-8">
                    <span className="flex h-12 w-12 items-center justify-center border border-white/25 bg-[#071521]/50 text-[10px] font-black tracking-[0.12em] text-white backdrop-blur-md">
                      {project.number}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-6 top-6 md:right-8 md:top-8">
                    <div className="flex h-12 w-12 items-center justify-center bg-[#70d618] text-[#071521] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowUpRight size={19} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#70d618]">
                      {project.category}
                    </p>

                    <h3 className="mt-4 max-w-[600px] text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-4xl">
                      {project.title}
                    </h3>

                    <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                        {project.location}
                      </p>

                      <ArrowDownRight
                        size={16}
                        className="text-white/50 transition-colors group-hover:text-[#70d618]"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-7 max-w-[700px] text-xs leading-6 text-slate-500">
              Project imagery and descriptions can be updated with verified SPS
              Engineering portfolio information before production launch.
            </p>
          </div>
        </section>

        {/* EXECUTION CAPABILITY */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Behind Every Project
                </p>

                <h2 className="mt-5 max-w-[620px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Capability that
                  <span className="block text-slate-400">
                    reaches the site.
                  </span>
                </h2>

                <p className="mt-7 max-w-[560px] text-[15px] leading-8 text-slate-600">
                  Successful structural projects depend on more than
                  fabrication alone. Planning, quality and site coordination
                  connect every stage of delivery.
                </p>
              </div>

              <div className="border-t border-[#071521]/15">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group grid gap-5 border-b border-[#071521]/15 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center"
                    >
                      <div className="flex h-14 w-14 items-center justify-center border border-[#071521]/15 text-[#4fa900] transition-all duration-300 group-hover:bg-[#70d618] group-hover:text-[#071521]">
                        <Icon size={22} strokeWidth={1.6} />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[8px] font-black text-[#4fa900]">
                            0{index + 1}
                          </span>

                          <h3 className="text-xl font-bold text-[#071521] md:text-2xl">
                            {item.title}
                          </h3>
                        </div>

                        <p className="mt-2 max-w-[550px] text-sm leading-6 text-slate-500">
                          {item.text}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="hidden text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#4fa900] sm:block"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#70d618]">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#071521]/60">
                Your Project Could Be Next
              </p>

              <h2 className="mt-4 max-w-[850px] text-3xl font-bold leading-tight tracking-[-0.045em] text-[#071521] md:text-5xl">
                Have a structure that needs
                <span className="block">
                  to move from drawing to site?
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-16 items-center justify-between gap-12 bg-[#071521] px-7 text-[10px] font-extrabold uppercase tracking-[0.16em] !text-white transition hover:bg-white hover:!text-[#071521]"
            >
              Discuss Your Project

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