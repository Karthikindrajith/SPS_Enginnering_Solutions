import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Automotive",
    description:
      "Structural and industrial solutions for automotive manufacturing and production facilities.",
    image: "/images/industries/automotive.jpg",
    href: "/industries/automotive",
  },
  {
    number: "02",
    title: "Warehousing & Logistics",
    description:
      "Steel building solutions designed for warehouses, logistics hubs and distribution facilities.",
    image: "/images/industries/warehouse.jpg",
    href: "/industries/warehousing-logistics",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Engineering, fabrication and erection support for demanding industrial manufacturing environments.",
    image: "/images/industries/manufacturing.jpg",
    href: "/industries/manufacturing",
  },
  {
    number: "04",
    title: "Infrastructure",
    description:
      "Structural steel solutions supporting industrial and infrastructure development projects.",
    image: "/images/industries/infrastructure.jpg",
    href: "/industries/infrastructure",
  },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      {/* Decorative Number */}
      <span className="pointer-events-none absolute -right-8 top-4 hidden select-none text-[240px] font-black leading-none tracking-[-0.08em] text-[#071521]/[0.025] xl:block">
        03
      </span>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">

        {/* Heading */}
        <div className="grid gap-8 border-b border-[#071521]/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#4fa900]">
                Industries We Serve
              </p>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Built around industry
            </p>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[38px] font-bold leading-[1.02] tracking-[-0.045em] text-[#071521] sm:text-5xl md:text-6xl lg:text-[64px]">
              Built for demanding
              <span className="block text-slate-400">
                industrial environments.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[15px] leading-7 text-slate-600">
              From manufacturing plants to logistics facilities, our
              engineering and execution capabilities adapt to the operational
              requirements of every industry we support.
            </p>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative min-h-[420px] overflow-hidden bg-[#071521] md:min-h-[500px]"
            >
              {/* Image */}
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06141f]/95 via-[#071521]/35 to-[#071521]/10 transition duration-500 group-hover:from-[#06141f]" />

              {/* Number */}
              <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center border border-white/25 bg-[#071521]/30 text-[10px] font-extrabold text-[#70d618] backdrop-blur-md md:left-8 md:top-8">
                {industry.number}
              </div>

              {/* Arrow */}
              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center border border-white/30 !text-white transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618] group-hover:!text-[#071521] md:right-8 md:top-8">
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.27em] text-[#70d618]">
                  Industry Solutions
                </p>

                <h3 className="mt-3 max-w-[500px] text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl">
                  {industry.title}
                </h3>

                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="min-h-0 overflow-hidden">
                    <p className="max-w-[500px] text-sm leading-6 text-slate-300">
                      {industry.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 h-[2px] w-10 bg-[#70d618] transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col justify-between gap-6 border-t border-[#071521]/15 pt-8 md:flex-row md:items-center">
          <p className="max-w-[650px] text-sm leading-6 text-slate-600">
            Looking for a structural or industrial solution tailored to your
            facility and project requirements?
          </p>

          <Link
            href="/industries"
            className="group inline-flex h-14 shrink-0 items-center gap-8 bg-[#071521] px-6 text-[11px] font-extrabold uppercase tracking-[0.13em] !text-white transition-all duration-300 hover:bg-[#70d618] hover:!text-[#071521]"
          >
            Explore Industries

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}