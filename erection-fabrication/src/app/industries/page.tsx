import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Factory,
  HardHat,
  PackageOpen,
  Settings,
  Warehouse,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const industries = [
  {
    number: "01",
    icon: Factory,
    title: "Manufacturing",
    subtitle: "Industrial Facilities",
    description:
      "Structural steel solutions supporting manufacturing plants, production facilities and industrial expansion requirements.",
  },
  {
    number: "02",
    icon: Warehouse,
    title: "Warehousing",
    subtitle: "Storage & Logistics",
    description:
      "Steel structures and building systems designed for warehouses, logistics facilities and large-span storage requirements.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Automotive",
    subtitle: "Production Infrastructure",
    description:
      "Fabrication and structural execution supporting automotive manufacturing, assembly and related industrial facilities.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Infrastructure",
    subtitle: "Structural Development",
    description:
      "Fabricated structural systems for infrastructure and engineering projects requiring coordinated workshop and site execution.",
  },
  {
    number: "05",
    icon: HardHat,
    title: "Industrial Plants",
    subtitle: "Heavy Engineering",
    description:
      "Structural fabrication and erection capabilities supporting industrial plants, process facilities and equipment structures.",
  },
  {
    number: "06",
    icon: PackageOpen,
    title: "Logistics",
    subtitle: "Distribution Facilities",
    description:
      "Industrial building solutions for distribution centers, storage hubs and modern logistics infrastructure.",
  },
];

const strengths = [
  "Structural Steel Fabrication",
  "Site Erection",
  "PEB Structures",
  "Roofing & Cladding",
  "Industrial Piping",
  "Project Coordination",
];

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-28 md:pt-44 lg:pt-48">
          {/* Background Number */}
          <div className="pointer-events-none absolute -right-10 top-16 hidden select-none text-[230px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
            03
          </div>

          {/* Vertical Line */}
          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.06] xl:block" />

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    Industries We Serve
                  </p>
                </div>

                <h1 className="mt-8 max-w-[950px] text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[84px]">
                  Built for
                  <span className="block text-[#70d618]">
                    industrial demands.
                  </span>
                </h1>
              </div>

              {/* Right */}
              <div className="border-l border-white/15 lg:pl-9">
                <p className="max-w-[520px] text-[15px] leading-8 text-slate-300">
                  Structural steel and industrial engineering capabilities
                  supporting manufacturing, warehousing, infrastructure and
                  complex industrial facilities.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#70d618]" />

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    Engineered around project requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-10 border-b border-[#071521]/15 pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Sector Experience
                </p>

                <h2 className="mt-5 max-w-[650px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Different industries.
                  <span className="block text-slate-400">
                    One execution standard.
                  </span>
                </h2>
              </div>

              <p className="max-w-[700px] text-[15px] leading-8 text-slate-600 lg:justify-self-end">
                Every industrial project has different structural,
                operational and site requirements. Our approach combines
                fabrication and erection capabilities around the needs of each
                facility.
              </p>
            </div>

            {/* INDUSTRY GRID */}
            <div className="mt-14 grid gap-px bg-[#071521]/15 md:grid-cols-2 xl:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article
                    key={industry.number}
                    className="group relative min-h-[390px] overflow-hidden bg-white p-7 transition-colors duration-500 hover:bg-[#071521] md:p-9"
                  >
                    {/* Accent */}
                    <div className="absolute left-0 top-0 h-1 w-0 bg-[#70d618] transition-all duration-500 group-hover:w-full" />

                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center border border-[#071521]/15 text-[#4fa900] transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618] group-hover:text-[#071521]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <span className="text-[9px] font-black tracking-[0.18em] text-slate-400">
                        {industry.number}
                      </span>
                    </div>

                    <div className="mt-16">
                      <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#4fa900] transition-colors group-hover:text-[#70d618]">
                        {industry.subtitle}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#071521] transition-colors group-hover:text-white">
                        {industry.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-400">
                        {industry.description}
                      </p>
                    </div>

                    <div className="absolute bottom-8 left-7 h-[2px] w-8 bg-[#70d618] transition-all duration-500 group-hover:w-20 md:left-9" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CAPABILITY CONNECTION */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              {/* Left */}
              <div className="lg:sticky lg:top-28">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Integrated Capability
                </p>

                <h2 className="mt-5 max-w-[600px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Supporting projects
                  <span className="block text-slate-400">
                    from shop to site.
                  </span>
                </h2>

                <p className="mt-7 max-w-[570px] text-[15px] leading-8 text-slate-600">
                  Industrial requirements often involve multiple disciplines.
                  Our capability structure allows fabrication, erection and
                  related building systems to work within one coordinated
                  project approach.
                </p>

                <Link
                  href="/capabilities"
                  className="group mt-9 inline-flex h-14 items-center gap-8 bg-[#071521] px-6 text-[10px] font-extrabold uppercase tracking-[0.14em] !text-white transition hover:bg-[#70d618] hover:!text-[#071521]"
                >
                  Explore Capabilities

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              {/* Right */}
              <div className="border-t border-[#071521]/15">
                {strengths.map((strength, index) => (
                  <div
                    key={strength}
                    className="group flex items-center justify-between border-b border-[#071521]/15 py-7"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-[9px] font-black text-[#4fa900]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#071521] md:text-2xl">
                        {strength}
                      </h3>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#4fa900]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DARK STATEMENT */}
        <section className="relative overflow-hidden bg-[#071521] py-20 text-white md:py-28">
          <div className="pointer-events-none absolute -bottom-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[170px] font-black tracking-[-0.07em] text-white/[0.018] xl:block">
            INDUSTRIES
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
              <h2 className="max-w-[900px] text-4xl font-bold leading-[1.03] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                Industrial structures require more than steel.
                <span className="block text-[#70d618]">
                  They require execution.
                </span>
              </h2>

              <p className="max-w-[500px] text-sm leading-7 text-slate-400 lg:justify-self-end">
                From workshop fabrication through site erection, every stage
                depends on planning, coordination, quality and safety.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#70d618]">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#071521]/60">
                Your Industry
              </p>

              <h2 className="mt-4 max-w-[850px] text-3xl font-bold leading-tight tracking-[-0.045em] text-[#071521] md:text-5xl">
                Planning an industrial project?
                <span className="block">
                  Talk to our team.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-16 items-center justify-between gap-12 bg-[#071521] px-7 text-[10px] font-extrabold uppercase tracking-[0.16em] !text-white transition hover:bg-white hover:!text-[#071521]"
            >
              Start a Project

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