import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Hammer,
  Layers3,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const capabilities = [
  {
    number: "01",
    icon: Factory,
    title: "Steel Fabrication",
    subtitle: "Precision workshop manufacturing",
    description:
      "Structural steel components fabricated through controlled workshop processes focused on dimensional accuracy, quality and dependable project execution.",
    href: "/capabilities/steel-fabrication",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Structural Erection",
    subtitle: "Disciplined site execution",
    description:
      "Coordinated erection of structural steel systems with planning, site control and safety integrated throughout the execution process.",
    href: "/capabilities/structural-erection",
  },
  {
    number: "03",
    icon: Building2,
    title: "PEB Solutions",
    subtitle: "Industrial building solutions",
    description:
      "Integrated pre-engineered building solutions supporting industrial facilities, warehouses and project-specific structural requirements.",
    href: "/capabilities/peb-solutions",
  },
  {
    number: "04",
    icon: Layers3,
    title: "Roofing & Cladding",
    subtitle: "Complete building envelope",
    description:
      "Roofing and cladding systems coordinated with structural requirements to create durable and efficient industrial building envelopes.",
    href: "/capabilities/roofing-cladding",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "Review project requirements, drawings, site conditions and execution expectations.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Coordinate engineering, fabrication requirements, resources and execution sequence.",
  },
  {
    number: "03",
    title: "Execute",
    text: "Fabricate and erect through controlled processes focused on quality and safety.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Complete verification, coordination and project handover with disciplined execution.",
  },
];

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-28 md:pt-44 lg:pt-48">
          <div className="pointer-events-none absolute -right-10 top-16 hidden select-none text-[230px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
            02
          </div>

          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.06] xl:block" />

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    Our Capabilities
                  </p>
                </div>

                <h1 className="mt-8 max-w-[950px] text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[84px]">
                  From steel to
                  <span className="block text-[#70d618]">
                    finished structure.
                  </span>
                </h1>
              </div>

              <div className="border-l border-white/15 lg:pl-9">
                <p className="max-w-[520px] text-[15px] leading-8 text-slate-300">
                  Integrated structural steel capabilities covering workshop
                  fabrication, site erection, pre-engineered buildings and
                  industrial roofing systems.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#70d618]" />

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    One coordinated execution approach
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
                  What We Do
                </p>

                <h2 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-5xl">
                  Capability across
                  <span className="block text-slate-400">
                    the build cycle.
                  </span>
                </h2>
              </div>

              <p className="max-w-[720px] text-[15px] leading-8 text-slate-600 lg:justify-self-end">
                Our capabilities connect fabrication and site execution within
                a coordinated workflow. This provides clearer project control
                from initial requirements through structural completion.
              </p>
            </div>

            {/* CAPABILITY CARDS */}
            <div className="mt-14 grid gap-px bg-[#071521]/15 md:grid-cols-2">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    href={item.href}
                    key={item.number}
                    className="group relative overflow-hidden bg-white p-7 md:p-10 lg:p-12"
                  >
                    <div className="absolute right-0 top-0 h-0 w-1 bg-[#70d618] transition-all duration-500 group-hover:h-full" />

                    <div className="flex items-start justify-between">
                      <div className="flex h-16 w-16 items-center justify-center border border-[#071521]/15 text-[#4fa900] transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618] group-hover:text-[#071521]">
                        <Icon size={27} strokeWidth={1.5} />
                      </div>

                      <span className="text-[10px] font-black tracking-[0.18em] text-slate-400">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-10 text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#4fa900]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-[#071521] md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-[570px] text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-9 flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#071521]">
                      Explore Capability

                      <ArrowUpRight
                        size={16}
                        className="text-[#4fa900] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#071521] py-20 text-white md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                  Execution Process
                </p>

                <h2 className="mt-5 max-w-[650px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] md:text-6xl">
                  One process.
                  <span className="block text-slate-500">
                    Clear responsibility.
                  </span>
                </h2>
              </div>

              <p className="max-w-[600px] text-sm leading-7 text-slate-400 lg:justify-self-end">
                Project requirements move through a structured workflow
                designed to maintain coordination between engineering,
                fabrication, quality and site teams.
              </p>
            </div>

            <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="group min-h-[330px] border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.035] md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.2em] text-[#70d618]">
                      STEP {item.number}
                    </span>

                    <ArrowRight
                      size={16}
                      className="text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#70d618]"
                    />
                  </div>

                  <h3 className="mt-16 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>

                  <div className="mt-8 h-px w-8 bg-slate-600 transition-all duration-500 group-hover:w-16 group-hover:bg-[#70d618]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#70d618]">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#071521]/60">
                Have a Project?
              </p>

              <h2 className="mt-4 max-w-[850px] text-3xl font-bold leading-tight tracking-[-0.045em] text-[#071521] md:text-5xl">
                Tell us what needs to be engineered, fabricated and built.
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