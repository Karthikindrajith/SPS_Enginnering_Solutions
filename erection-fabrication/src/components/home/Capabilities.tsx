"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Steel Fabrication",
    description:
      "Precision fabrication of structural steel components engineered for strength, accuracy and dependable site assembly.",
    image: "/images/capabilities/fabrication.jpg",
    href: "/capabilities/steel-fabrication",
  },
  {
    number: "02",
    title: "Structural Erection",
    description:
      "Safe and coordinated erection of structural steel systems with disciplined planning and efficient site execution.",
    image: "/images/capabilities/erection.jpg",
    href: "/capabilities/structural-erection",
  },
  {
    number: "03",
    title: "PEB Solutions",
    description:
      "Pre-engineered building solutions designed for industrial facilities, warehouses and modern infrastructure.",
    image: "/images/capabilities/peb.jpg",
    href: "/capabilities/peb-solutions",
  },
  {
    number: "04",
    title: "Roofing & Cladding",
    description:
      "Industrial roofing and cladding systems built to deliver protection, performance and a complete building envelope.",
    image: "/images/capabilities/roofing.jpg",
    href: "/capabilities/roofing-cladding",
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCapability = capabilities[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#071521] py-20 md:py-28 lg:py-32">
      {/* Decorative number */}
      <span className="pointer-events-none absolute -right-8 top-4 hidden select-none text-[240px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
        02
      </span>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
        {/* Top Heading */}
        <div className="grid gap-8 border-b border-white/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                Our Capabilities
              </p>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Integrated industrial solutions
            </p>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[38px] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              From workshop precision
              <span className="block text-slate-500">
                to site execution.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-slate-400">
              Integrated fabrication and erection capabilities designed to
              support industrial projects from engineered components through
              final site installation.
            </p>
          </div>
        </div>

        {/* Main Area */}
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 xl:gap-20">
          {/* Capability List */}
          <div>
            {capabilities.map((capability, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={capability.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group w-full border-b border-white/15 py-7 text-left first:border-t"
                >
                  <div className="grid grid-cols-[35px_1fr_auto] gap-3 sm:grid-cols-[45px_1fr_auto] sm:gap-5">
                    {/* Number */}
                    <span
                      className={`pt-1 text-[10px] font-extrabold transition-colors duration-300 ${
                        active ? "text-[#70d618]" : "text-slate-600"
                      }`}
                    >
                      {capability.number}
                    </span>

                    {/* Text */}
                    <div>
                      <h3
                        className={`text-xl font-bold tracking-[-0.025em] transition-colors duration-300 md:text-2xl ${
                          active
                            ? "text-white"
                            : "text-slate-400 group-hover:text-white"
                        }`}
                      >
                        {capability.title}
                      </h3>

                      <div
                        className={`grid transition-all duration-500 ${
                          active
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <p className="max-w-[500px] pt-4 text-sm leading-6 text-slate-400">
                            {capability.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`flex h-10 w-10 items-center justify-center border transition-all duration-300 ${
                        active
                          ? "border-[#70d618] bg-[#70d618] text-[#071521]"
                          : "border-white/15 text-slate-500 group-hover:border-white/40 group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight
                        size={17}
                        className={`transition-transform duration-300 ${
                          active ? "translate-x-0.5 -translate-y-0.5" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}

            {/* All Capabilities CTA */}
            <Link
              href="/capabilities"
              className="group mt-9 inline-flex h-14 items-center gap-8 bg-[#70d618] px-6 text-[11px] font-extrabold uppercase tracking-[0.13em] !text-[#071521] transition-all duration-300 hover:bg-white"
            >
              Explore All Capabilities

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden md:min-h-[570px] lg:h-full lg:min-h-[620px]">
              {capabilities.map((capability, index) => (
                <Image
                  key={capability.image}
                  src={capability.image}
                  alt={capability.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={`object-cover transition-all duration-700 ${
                    activeIndex === index
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-105 opacity-0"
                  }`}
                />
              ))}

              {/* Image overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/80 via-transparent to-[#071521]/10" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#071521]/25 to-transparent" />

              {/* Active number */}
              <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center border border-white/25 bg-[#071521]/60 text-sm font-extrabold text-[#70d618] backdrop-blur-md md:left-8 md:top-8">
                {activeCapability.number}
              </div>

              {/* Bottom image info */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                  SPS Engineering Capability
                </p>

                <div className="mt-3 flex items-end justify-between gap-5">
                  <h3 className="max-w-[500px] text-2xl font-bold tracking-[-0.03em] text-white md:text-4xl">
                    {activeCapability.title}
                  </h3>

                  <Link
                    href={activeCapability.href}
                    aria-label={`Explore ${activeCapability.title}`}
                    className="group flex h-12 w-12 shrink-0 items-center justify-center bg-white !text-[#071521] transition-all duration-300 hover:bg-[#70d618]"
                  >
                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Green decoration */}
            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-b-[10px] border-l-[10px] border-[#70d618] xl:block" />
          </div>
        </div>
      </div>
    </section>
  );
}