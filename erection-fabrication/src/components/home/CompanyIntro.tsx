import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";

const strengths = [
  "Structural Steel Fabrication",
  "Industrial Erection",
  "Quality Controlled Execution",
  "Safety Focused Operations",
];

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden bg-[#f5f7f8] py-20 md:py-28 lg:py-32">

      {/* Decorative number */}
      <span className="pointer-events-none absolute right-[-30px] top-5 hidden select-none text-[220px] font-black leading-none tracking-[-0.08em] text-[#071521]/[0.025] xl:block">
        01
      </span>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">

        {/* Top heading */}
        <div className="grid gap-8 border-b border-[#071521]/15 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#4fa900]">
                Who We Are
              </p>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Engineering with purpose
            </p>
          </div>

          <h2 className="max-w-[850px] text-[38px] font-bold leading-[1.02] tracking-[-0.045em] text-[#071521] sm:text-5xl md:text-6xl lg:text-[64px]">
            More than fabrication.
            <span className="block text-slate-400">
              We build certainty.
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">

          {/* Image */}
          <div className="relative">

            <div className="relative min-h-[430px] overflow-hidden md:min-h-[560px]">
              <Image
                src="/images/company/company-main1.jpg"
                alt="Steel fabrication and engineering operations"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/55 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-0 left-0 bg-[#071521] px-6 py-5 md:px-8">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#70d618]">
                  From Workshop to Site
                </p>

                <p className="mt-2 max-w-[260px] text-sm font-semibold leading-6 text-white">
                  Integrated execution from precision fabrication through
                  final erection.
                </p>
              </div>
            </div>

            {/* Green block */}
            <div className="absolute -bottom-6 -right-3 hidden h-28 w-28 bg-[#70d618] md:block xl:-right-6" />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">

            <p className="text-[17px] font-semibold leading-8 text-[#071521] md:text-xl md:leading-9">
              SPS Engineering delivers structural steel fabrication and
              erection solutions for industrial projects where precision,
              safety and dependable execution matter.
            </p>

            <p className="mt-6 text-[15px] leading-7 text-slate-600">
              From engineering coordination and workshop fabrication to
              on-site erection and project handover, our approach brings every
              stage together under one disciplined process. The result is
              stronger quality control, clearer accountability and efficient
              project delivery.
            </p>

            {/* Strengths */}
            <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-start gap-3 border-t border-[#071521]/10 pt-4"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-[#70d618] text-[#071521]">
                    <Check size={12} strokeWidth={3} />
                  </div>

                  <p className="text-sm font-bold leading-5 text-[#071521]">
                    {strength}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/company"
                className="group inline-flex h-14 items-center gap-8 bg-[#071521] px-6 text-[11px] font-extrabold uppercase tracking-[0.13em] !text-white transition-all duration-300 hover:bg-[#70d618] hover:!text-[#071521]"
              >
                Discover Our Company

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            {/* Bottom statement */}
            <div className="mt-12 border-l-2 border-[#70d618] pl-5">
              <p className="max-w-[500px] text-sm italic leading-7 text-slate-500">
                Built around engineering discipline, workshop capability and
                responsible site execution.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}