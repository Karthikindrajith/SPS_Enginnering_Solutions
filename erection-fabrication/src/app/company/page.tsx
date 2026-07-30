import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowUpRight,
  Check,
  Factory,
  HardHat,
  ShieldCheck,
  Target,
} from "lucide-react";

const values = [
  {
    icon: Target,
    number: "01",
    title: "Precision",
    text: "Engineering and fabrication decisions focused on accuracy, coordination and dependable execution.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality",
    text: "Controlled processes and inspection throughout fabrication and project execution.",
  },
  {
    icon: HardHat,
    number: "03",
    title: "Safety",
    text: "Responsible planning and disciplined site practices integrated into every stage of execution.",
  },
  {
    icon: Factory,
    number: "04",
    title: "Capability",
    text: "Workshop fabrication and site execution brought together through one coordinated approach.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-28 md:pt-44 lg:pt-48">
          <div className="pointer-events-none absolute -right-10 top-20 hidden select-none text-[220px] font-black leading-none text-white/[0.025] xl:block">
            01
          </div>

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    About SPS Engineering
                  </p>
                </div>

                <h1 className="mt-8 max-w-[900px] text-5xl font-bold leading-[0.96] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]">
                  Built around
                  <span className="block text-[#70d618]">
                    engineering discipline.
                  </span>
                </h1>
              </div>

              <div className="border-l border-white/15 lg:pl-9">
                <p className="max-w-[520px] text-[15px] leading-8 text-slate-300">
                  SPS Engineering delivers structural steel fabrication,
                  erection and industrial engineering solutions through
                  coordinated planning, controlled fabrication and responsible
                  site execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPANY INTRO */}
        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center xl:px-12">
            {/* Image */}
            <div className="relative min-h-[480px] overflow-hidden md:min-h-[620px]">
              <Image
                src="/images/company/company.jpg"
                alt="SPS Engineering industrial fabrication facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/75 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 max-w-[380px] bg-[#071521] p-7 md:p-9">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#70d618]">
                  Workshop to Site
                </p>

                <p className="mt-4 text-xl font-bold leading-8 text-white">
                  One coordinated approach from fabrication through erection.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8 xl:pl-16">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                Who We Are
              </p>

              <h2 className="mt-5 max-w-[650px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-5xl lg:text-6xl">
                Engineering capability.
                <span className="block text-slate-400">
                  Execution responsibility.
                </span>
              </h2>

              <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-slate-600">
                Our approach connects engineering coordination, structural
                fabrication, quality control and site erection within a
                disciplined project workflow.
              </p>

              <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-slate-600">
                By maintaining visibility across the project lifecycle, we
                focus on fabrication accuracy, safe execution and dependable
                delivery for industrial requirements.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Structural Steel Fabrication",
                  "Industrial Erection",
                  "Quality Controlled Execution",
                  "Safety Focused Operations",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-[#071521]/15 py-4"
                  >
                    <span className="flex h-5 w-5 items-center justify-center bg-[#70d618] text-[#071521]">
                      <Check size={13} strokeWidth={3} />
                    </span>

                    <p className="text-sm font-bold text-[#071521]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-8 border-b border-[#071521]/15 pb-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  What Drives Us
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Built on strong
                  <span className="block text-slate-400">
                    fundamentals.
                  </span>
                </h2>
              </div>

              <p className="max-w-[600px] text-[15px] leading-8 text-slate-600 lg:justify-self-end">
                The principles behind our work influence how projects are
                planned, fabricated, inspected and executed on site.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.number}
                    className="group border-b border-[#071521]/15 p-7 first:pl-0 md:border-r xl:border-b-0 xl:p-9 xl:first:pl-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center border border-[#071521]/15 text-[#4fa900] transition duration-300 group-hover:bg-[#70d618] group-hover:text-[#071521]">
                        <Icon size={23} strokeWidth={1.6} />
                      </div>

                      <span className="text-[9px] font-black text-slate-400">
                        {value.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-[#071521]">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {value.text}
                    </p>

                    <div className="mt-7 h-[2px] w-8 bg-[#70d618] transition-all duration-500 group-hover:w-16" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#071521]">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#70d618]">
                Work With SPS
              </p>

              <h2 className="mt-4 max-w-[800px] text-3xl font-bold tracking-[-0.04em] text-white md:text-5xl">
                Have an industrial project to discuss?
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex h-16 items-center justify-between gap-10 bg-[#70d618] px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] !text-[#071521] transition hover:bg-white"
            >
              Start a Project

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}