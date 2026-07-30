import {
  ArrowDownRight,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  HardHat,
  PackageCheck,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Engineering",
    subtitle: "Plan with precision",
    description:
      "Project requirements are reviewed and coordinated to establish a clear execution plan before fabrication begins.",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Fabrication",
    subtitle: "Build with accuracy",
    description:
      "Structural components are fabricated through controlled workshop processes focused on dimensional accuracy and quality.",
    icon: Factory,
  },
  {
    number: "03",
    title: "Quality Control",
    subtitle: "Verify every stage",
    description:
      "Inspection and quality checks are integrated throughout fabrication to ensure components meet project requirements.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Site Erection",
    subtitle: "Execute safely",
    description:
      "Coordinated site teams carry out structural erection with disciplined planning, safety and execution control.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Handover",
    subtitle: "Deliver with confidence",
    description:
      "Final verification and project coordination bring the execution cycle to a controlled and dependable handover.",
    icon: PackageCheck,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#071521] py-20 md:py-28 lg:py-32">
      {/* Background number */}
      <span className="pointer-events-none absolute -right-10 top-5 hidden select-none text-[240px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
        05
      </span>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
        {/* Header */}
        <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                How We Deliver
              </p>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              One disciplined process
            </p>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[38px] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              From engineering
              <span className="block text-slate-500">
                to final handover.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-slate-400">
              A connected execution process brings engineering, fabrication,
              quality and site operations together to support predictable
              project delivery.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="absolute left-0 right-0 top-[39px] hidden h-px bg-white/15 xl:block" />

          <div className="grid md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative border-b border-white/15 py-8 md:border-r md:px-7 md:first:pl-0 xl:border-b-0 xl:py-0"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center border border-white/20 bg-[#071521] transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618]">
                    <Icon
                      size={28}
                      strokeWidth={1.5}
                      className="text-[#70d618] transition-colors duration-300 group-hover:text-[#071521]"
                    />
                  </div>

                  {/* Number */}
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#70d618]">
                      STEP {step.number}
                    </span>

                    {index < processSteps.length - 1 && (
                      <ArrowDownRight
                        size={16}
                        className="text-white/20 transition-all duration-300 group-hover:text-[#70d618]"
                      />
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {step.subtitle}
                  </p>

                  <p className="mt-5 max-w-[280px] text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-7 h-[2px] w-8 bg-white/15 transition-all duration-500 group-hover:w-16 group-hover:bg-[#70d618]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 grid gap-7 border-t border-white/15 pt-9 md:grid-cols-[auto_1fr] md:items-center md:gap-10">
          <div>
            <p className="text-5xl font-bold tracking-[-0.05em] text-[#70d618]">
              01
            </p>

            <p className="mt-1 text-[9px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
              Integrated workflow
            </p>
          </div>

          <p className="max-w-[850px] text-lg font-semibold leading-8 text-white md:text-xl">
            One coordinated team. One controlled workflow. From the first
            engineering decision to the final structure on site.
          </p>
        </div>
      </div>
    </section>
  );
}