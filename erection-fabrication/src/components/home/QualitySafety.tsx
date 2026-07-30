import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  HardHat,
  ShieldCheck,
} from "lucide-react";

const standards = [
  {
    number: "01",
    title: "Quality",
    subtitle: "Built to specification",
    description:
      "Controlled fabrication, dimensional checks and systematic inspections help ensure every component meets project requirements.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Safety",
    subtitle: "Safety at every stage",
    description:
      "From workshop operations to site erection, our execution approach prioritizes safe planning, responsible practices and disciplined coordination.",
    icon: HardHat,
  },
  {
    number: "03",
    title: "Compliance",
    subtitle: "Controlled execution",
    description:
      "Defined procedures, project documentation and execution controls support consistent quality throughout the project lifecycle.",
    icon: ShieldCheck,
  },
];

export default function QualitySafety() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7f8] py-20 md:py-28 lg:py-32">
      {/* Background Number */}
      <span className="pointer-events-none absolute -right-10 top-4 hidden select-none text-[240px] font-black leading-none tracking-[-0.08em] text-[#071521]/[0.025] xl:block">
        06
      </span>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#071521]/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#4fa900]">
                Quality & Safety
              </p>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Standards without compromise
            </p>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[38px] font-bold leading-[1.02] tracking-[-0.045em] text-[#071521] sm:text-5xl md:text-6xl lg:text-[64px]">
              Built right.
              <span className="block text-slate-400">
                Built safe.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-slate-600">
              Quality and safety are integrated into how we plan, fabricate
              and execute our work — from the workshop floor through final
              erection on site.
            </p>
          </div>
        </div>

        {/* Main Layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
          {/* Left Image */}
          <div className="relative min-h-[500px] overflow-hidden lg:min-h-[720px]">
            <Image
              src="/images/quality-safety/quality-safety.jpg"
              alt="Industrial steel construction safety and quality operations"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-[#071521]/15 to-transparent" />

            {/* Top badge */}
            <div className="absolute left-6 top-6 border border-white/20 bg-[#071521]/70 px-5 py-4 backdrop-blur-md md:left-8 md:top-8">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  size={19}
                  className="text-[#70d618]"
                />

                <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-white">
                  Controlled Execution
                </p>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 lg:p-12">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                SPS Engineering
              </p>

              <h3 className="mt-4 max-w-[600px] text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white md:text-5xl">
                Safety is part of the process,
                not an afterthought.
              </h3>

              <div className="mt-7 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-[#70d618]" />

                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                  Workshop to site
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col bg-white">
            {standards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative flex flex-1 border-b border-[#071521]/10 p-7 transition-colors duration-300 last:border-b-0 hover:bg-[#071521] md:p-9 lg:p-10"
                >
                  <div className="grid w-full grid-cols-[auto_1fr] gap-5 md:gap-7">
                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#071521]/15 text-[#4fa900] transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618] group-hover:text-[#071521]">
                      <Icon size={23} strokeWidth={1.6} />
                    </div>

                    <div>
                      {/* Number */}
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#4fa900] group-hover:text-[#70d618]">
                          Standard {item.number}
                        </p>

                        <ArrowUpRight
                          size={16}
                          className="text-[#071521]/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#70d618]"
                        />
                      </div>

                      <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-[#071521] transition-colors duration-300 group-hover:text-white md:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {item.subtitle}
                      </p>

                      <p className="mt-5 max-w-[520px] text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <Link
              href="/quality-safety"
              className="group flex min-h-20 items-center justify-between bg-[#70d618] px-7 !text-[#071521] transition-colors duration-300 hover:bg-[#071521] hover:!text-white md:px-10"
            >
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">
                  Our Commitment
                </p>

                <p className="mt-1 text-sm font-extrabold uppercase tracking-[0.08em]">
                  Explore Quality & Safety
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="grid border-x border-b border-[#071521]/10 sm:grid-cols-3">
          {[
            ["01", "Quality Driven"],
            ["02", "Safety Focused"],
            ["03", "Execution Controlled"],
          ].map(([number, label]) => (
            <div
              key={number}
              className="flex items-center gap-4 border-b border-[#071521]/10 px-6 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <span className="text-[9px] font-black text-[#4fa900]">
                {number}
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#071521]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}