import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import {
  capabilities,
  getCapability,
} from "@/data/capabilities";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return capabilities.map((capability) => ({
    slug: capability.slug,
  }));
}

export default async function CapabilityDetailPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const capability = getCapability(slug);

  if (!capability) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#071521] pb-20 pt-36 text-white md:pb-28 md:pt-44 lg:pt-48">
          {/* Background Number */}
          <span className="pointer-events-none absolute -right-10 top-16 hidden select-none text-[230px] font-black leading-none tracking-[-0.08em] text-white/[0.025] xl:block">
            {capability.number}
          </span>

          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            {/* Back */}
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.2em] !text-slate-400 transition hover:!text-white"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              All Capabilities
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-[2px] w-10 bg-[#70d618]" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#70d618]">
                    {capability.eyebrow}
                  </p>
                </div>

                <h1 className="mt-8 max-w-[1000px] text-5xl font-bold leading-[0.95] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px]">
                  {capability.title}

                  <span className="block text-[#70d618]">
                    {capability.highlight}
                  </span>
                </h1>
              </div>

              {/* Right */}
              <div className="border-l border-white/15 lg:pl-9">
                <p className="max-w-[520px] text-[15px] leading-8 text-slate-300">
                  {capability.description}
                </p>

                <div className="mt-7 flex items-center gap-3">
                  <span className="h-2 w-2 bg-[#70d618]" />

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                    SPS Engineering Capability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= IMAGE / INTRO ================= */}
        <section className="bg-[#f5f7f8] py-20 md:py-28">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:px-12">
            {/* Image */}
            <div className="relative min-h-[480px] overflow-hidden md:min-h-[650px]">
              <Image
                src={capability.image}
                alt={capability.eyebrow}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 md:p-10">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#70d618]">
                  Capability {capability.number}
                </p>

                <h2 className="mt-3 max-w-[500px] text-2xl font-bold text-white md:text-3xl">
                  {capability.eyebrow}
                </h2>
              </div>
            </div>

            {/* Intro */}
            <div className="lg:pl-8 xl:pl-14">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                Overview
              </p>

              <h2 className="mt-5 max-w-[650px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[#071521] md:text-6xl">
                Capability built around
                <span className="block text-slate-400">
                  project execution.
                </span>
              </h2>

              <p className="mt-7 max-w-[650px] text-[15px] leading-8 text-slate-600">
                {capability.intro}
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex h-14 items-center gap-10 bg-[#071521] px-6 text-[10px] font-extrabold uppercase tracking-[0.15em] !text-white transition hover:bg-[#70d618] hover:!text-[#071521]"
              >
                Discuss Your Project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div className="grid gap-10 border-b border-[#071521]/15 pb-14 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#4fa900]">
                  Scope
                </p>

                <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-[#071521] md:text-6xl">
                  What this capability
                  <span className="block text-slate-400">
                    can include.
                  </span>
                </h2>
              </div>

              <p className="max-w-[570px] text-sm leading-7 text-slate-600 lg:justify-self-end">
                Project scope varies depending on engineering requirements,
                site conditions and the services required for execution.
              </p>
            </div>

            <div className="mt-12 grid gap-px bg-[#071521]/15 md:grid-cols-2 lg:grid-cols-3">
              {capability.services.map((service, index) => (
                <div
                  key={service}
                  className="group bg-[#f8f9fa] p-7 transition-colors duration-300 hover:bg-[#071521] md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center bg-[#70d618] text-[#071521]">
                      <Check size={15} strokeWidth={3} />
                    </span>

                    <span className="text-[8px] font-black text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-[#071521] transition-colors group-hover:text-white">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="bg-[#071521] py-20 text-white md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                Execution Workflow
              </p>

              <h2 className="mt-5 max-w-[800px] text-4xl font-bold leading-[1.04] tracking-[-0.045em] md:text-6xl">
                From requirement
                <span className="block text-slate-500">
                  to execution.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-2 xl:grid-cols-4">
              {capability.process.map((step) => (
                <div
                  key={step.number}
                  className="group min-h-[330px] border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-white/[0.035] md:p-9"
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#70d618]">
                    Step {step.number}
                  </span>

                  <h3 className="mt-16 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {step.description}
                  </p>

                  <div className="mt-8 h-[2px] w-8 bg-slate-600 transition-all duration-500 group-hover:w-16 group-hover:bg-[#70d618]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-[#70d618]">
          <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center xl:px-12">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#071521]/60">
                Start A Conversation
              </p>

              <h2 className="mt-4 max-w-[850px] text-3xl font-bold leading-tight tracking-[-0.045em] text-[#071521] md:text-5xl">
                Need {capability.eyebrow.toLowerCase()}
                <span className="block">
                  for your next project?
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