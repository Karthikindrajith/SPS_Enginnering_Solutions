import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  HardHat,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const qualitySteps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Material Verification",
    text: "Project materials and requirements are reviewed before fabrication activities progress.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Dimensional Inspection",
    text: "Fabricated components are checked against required dimensions and project specifications.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Process Control",
    text: "Defined fabrication processes support consistent workmanship throughout production.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Final Verification",
    text: "Completed work is reviewed before components move forward to dispatch or site execution.",
  },
];

const safetyItems = [
  "Pre-work planning",
  "Personal protective equipment",
  "Site coordination",
  "Safe lifting practices",
  "Work-area control",
  "Execution supervision",
];

export default function QualitySafetyPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-28 md:pt-44 lg:pt-48">
          <span className="pointer-events-none absolute -right-10 top-16 hidden select-none text-[230px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
            05
          </span>

          <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/[0.06] xl:block" />

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    Quality & Safety
                  </p>
                </div>

                <h1 className="mt-8 max-w-[950px] text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[84px]">
                  Built right.
                  <span className="block text-[#70d618]">
                    Executed safely.
                  </span>
                </h1>
              </div>

              <div className="border-l border-white/15 lg:pl-9">
                <p className="max-w-[520px] text-[15px] leading-8 text-slate-300">
                  Quality control and responsible site practices are integrated
                  into our approach from workshop fabrication through
                  structural erection.
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#70d618]" />

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    Quality • Safety • Execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMMITMENT ================= */}
        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              {/* Image */}
              <div className="relative min-h-[500px] overflow-hidden md:min-h-[650px]">
                <Image
                  src="/images/quality-safety/quality-safety.jpg"
                  alt="Industrial structural steel project execution"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <ShieldCheck
                    size={32}
                    strokeWidth={1.5}
                    className="text-[#70d618]"
                  />

                  <p className="mt-5 max-w-[500px] text-2xl font-bold leading-tight text-white md:text-3xl">
                    Quality and safety are part of the execution process.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-8 xl:pl-16">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Our Commitment
                </p>

                <h2 className="mt-5 max-w-[700px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Control at every
                  <span className="block text-slate-400">
                    critical stage.
                  </span>
                </h2>

                <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-slate-600">
                  Structural projects depend on consistent execution. Our
                  approach places quality checks and safe working practices
                  throughout fabrication and erection activities.
                </p>

                <p className="mt-5 max-w-[650px] text-[15px] leading-8 text-slate-600">
                  From reviewing requirements to final verification, each
                  project stage is coordinated with attention to workmanship,
                  site conditions and execution responsibility.
                </p>

                <div className="mt-10 grid gap-px bg-[#071521]/15 sm:grid-cols-2">
                  <CommitmentBox
                    number="01"
                    title="Quality"
                    text="Controlled fabrication"
                  />

                  <CommitmentBox
                    number="02"
                    title="Safety"
                    text="Responsible execution"
                  />

                  <CommitmentBox
                    number="03"
                    title="Inspection"
                    text="Stage-based verification"
                  />

                  <CommitmentBox
                    number="04"
                    title="Control"
                    text="Coordinated workflow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= QUALITY CONTROL ================= */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-10 border-b border-[#071521]/15 pb-14 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Quality Control
                </p>

                <h2 className="mt-5 max-w-[700px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Inspect.
                  <span className="block text-slate-400">
                    Verify. Deliver.
                  </span>
                </h2>
              </div>

              <p className="max-w-[620px] text-[15px] leading-8 text-slate-600 lg:justify-self-end">
                Quality control is integrated throughout the fabrication
                workflow to support dimensional accuracy and consistent
                project execution.
              </p>
            </div>

            <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Quality Image */}
              <div className="relative min-h-[480px] overflow-hidden lg:min-h-[650px]">
                <Image
                  src="/images/quality-safety/quality-control.jpg"
                  alt="Structural steel fabrication quality inspection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#70d618]">
                    Workshop Quality
                  </p>

                  <h3 className="mt-3 max-w-[450px] text-2xl font-bold text-white md:text-3xl">
                    Accuracy before components reach the site.
                  </h3>
                </div>
              </div>

              {/* Steps */}
              <div className="bg-[#071521]">
                {qualitySteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="group grid gap-5 border-b border-white/10 p-7 last:border-b-0 sm:grid-cols-[65px_1fr_auto] sm:items-center md:p-9"
                    >
                      <div className="flex h-14 w-14 items-center justify-center border border-white/15 text-[#70d618] transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618] group-hover:text-[#071521]">
                        <Icon size={22} strokeWidth={1.6} />
                      </div>

                      <div>
                        <p className="text-[8px] font-black tracking-[0.2em] text-[#70d618]">
                          CONTROL {step.number}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                          {step.title}
                        </h3>

                        <p className="mt-3 max-w-[520px] text-sm leading-6 text-slate-400">
                          {step.text}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="hidden text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#70d618] sm:block"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SITE SAFETY ================= */}
        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              {/* Content */}
              <div className="lg:pr-10 xl:pr-16">
                <div className="flex items-center gap-3">
                  <HardHat
                    size={20}
                    className="text-[#4fa900]"
                  />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                    Site Safety
                  </p>
                </div>

                <h2 className="mt-6 max-w-[650px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                  Plan the work.
                  <span className="block text-slate-400">
                    Execute responsibly.
                  </span>
                </h2>

                <p className="mt-7 max-w-[620px] text-[15px] leading-8 text-slate-600">
                  Structural erection involves lifting, working at height and
                  coordinated site activity. Safe execution begins with
                  planning and continues through every stage of the work.
                </p>

                <div className="mt-9 grid sm:grid-cols-2">
                  {safetyItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-b border-[#071521]/15 py-4 sm:odd:mr-6"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#4fa900]"
                      />

                      <p className="text-sm font-bold text-[#071521]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative min-h-[500px] overflow-hidden md:min-h-[650px]">
                <Image
                  src="/images/quality-safety/site-safety.jpg"
                  alt="Workers following safety practices during steel erection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/85 via-transparent to-transparent" />

                <div className="absolute left-6 top-6 bg-[#70d618] p-5 text-[#071521] md:left-8 md:top-8">
                  <HardHat size={27} />

                  <p className="mt-3 text-[9px] font-black uppercase tracking-[0.18em]">
                    Safety First
                  </p>
                </div>

                <div className="absolute bottom-0 p-8 md:p-10">
                  <p className="max-w-[500px] text-2xl font-bold leading-tight text-white md:text-3xl">
                    Safe execution supports predictable project delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL STATEMENT ================= */}
        <section className="relative overflow-hidden bg-[#071521] py-20 text-white md:py-28">
          <div className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[160px] font-black tracking-[-0.07em] text-white/[0.018] xl:block">
            ZERO COMPROMISE
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                  Our Standard
                </p>

                <h2 className="mt-6 max-w-[900px] text-4xl font-bold leading-[1.02] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                  Quality in the workshop.
                  <span className="block text-[#70d618]">
                    Responsibility on site.
                  </span>
                </h2>
              </div>

              <div className="border-l border-white/15 lg:pl-8">
                <p className="text-sm leading-7 text-slate-400">
                  A disciplined project workflow connects fabrication quality,
                  inspection, safety and site execution from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-[#70d618]">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#071521]/60">
                Build With Confidence
              </p>

              <h2 className="mt-4 max-w-[850px] text-3xl font-bold leading-tight tracking-[-0.045em] text-[#071521] md:text-5xl">
                Have a structural project
                <span className="block">
                  that needs the right execution?
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

function CommitmentBox({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group bg-white p-6 transition-colors duration-300 hover:bg-[#071521]">
      <p className="text-[8px] font-black tracking-[0.2em] text-[#4fa900] group-hover:text-[#70d618]">
        {number}
      </p>

      <h3 className="mt-4 text-lg font-bold text-[#071521] transition-colors group-hover:text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-slate-500 transition-colors group-hover:text-slate-400">
        {text}
      </p>
    </div>
  );
}