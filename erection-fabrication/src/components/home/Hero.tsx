"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   HERO SECTION
========================================================= */

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#071521]"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <Image
        src="/images/hero/hero-main.jpg"
        alt="Structural steel erection at an industrial construction site"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}

      <div className="absolute inset-0 bg-[#071521]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#06141f]/95 via-[#071521]/70 to-[#071521]/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#06141f]/90 via-transparent to-[#06141f]/30" />

      {/* =====================================================
          FLOATING BACKGROUND EFFECTS
      ===================================================== */}

      {/* Large Green Glow */}

      <div className="hero-float-slow pointer-events-none absolute -right-32 top-[15%] h-[450px] w-[450px] rounded-full bg-[#70d618]/10 blur-[130px]" />

      {/* Bottom Glow */}

      <div className="hero-float-reverse pointer-events-none absolute -bottom-40 left-[28%] h-[400px] w-[400px] rounded-full bg-[#70d618]/5 blur-[130px]" />

      {/* Large Outline Square */}

      <div className="hero-float pointer-events-none absolute right-[8%] top-[25%] hidden h-20 w-20 rotate-12 border border-[#70d618]/20 xl:block" />

      {/* Small Outline Square */}

      <div className="hero-float-reverse pointer-events-none absolute right-[32%] top-[20%] hidden h-7 w-7 rotate-45 border border-white/15 lg:block" />

      {/* Floating Green Dot */}

      <div className="hero-float-small pointer-events-none absolute right-[20%] top-[55%] hidden h-2 w-2 rounded-full bg-[#70d618] shadow-[0_0_25px_rgba(112,214,24,0.8)] xl:block" />

      {/* =====================================================
          DECORATIVE VERTICAL LINE
      ===================================================== */}

      <div className="absolute bottom-0 left-[8%] top-0 hidden w-px bg-white/10 xl:block" />

      <div className="absolute left-[8%] top-[35%] hidden h-24 w-px bg-[#70d618]/60 shadow-[0_0_15px_rgba(112,214,24,0.6)] xl:block" />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-5 pb-20 pt-32 md:px-8 lg:pt-36 xl:px-12">
        <div className="grid w-full items-end gap-14 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px]">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="max-w-[920px]">

            {/* Small Label */}

            <div className="hero-fade-up mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618] sm:text-xs">
                Engineering • Fabrication • Erection
              </p>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h1 className="hero-fade-up hero-delay-1 max-w-[900px] text-[44px] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl md:text-[68px] lg:text-[72px] xl:text-[82px]">
              Engineered for

              <span className="relative block w-fit text-[#70d618]">
                strength.

                <span className="absolute -bottom-2 left-0 h-[3px] w-[35%] bg-[#70d618]/50" />
              </span>

              Built for industry.
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p className="hero-fade-up hero-delay-2 mt-8 max-w-[650px] text-[15px] leading-7 text-slate-300 md:text-[17px] md:leading-8">
              End-to-end structural steel fabrication, erection and industrial
              engineering solutions built around safety, precision and
              dependable project execution.
            </p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <div className="hero-fade-up hero-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">

              {/* Explore Capabilities */}

              <Link
                href="/capabilities"
                className="group inline-flex h-14 items-center justify-between gap-8 bg-[#70d618] px-6 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#071521] shadow-[0_12px_35px_rgba(112,214,24,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(112,214,24,0.25)]"
              >
                Explore Capabilities

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              {/* View Projects */}

              <Link
                href="/projects"
                className="group inline-flex h-14 items-center justify-between gap-8 border border-white/40 bg-[#071521]/35 px-6 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#071521] hover:shadow-[0_18px_45px_rgba(0,0,0,0.25)]"
              >
                View Projects

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* =================================================
                TRUST ITEMS
            ================================================= */}

            <div className="hero-fade-up hero-delay-4 mt-10 flex flex-wrap gap-3 border-t border-white/15 pt-6 sm:gap-x-5">
              <TrustItem text="Precision Fabrication" />

              <TrustItem text="Safe Site Execution" />

              <TrustItem text="Quality Driven" />
            </div>
          </div>

          {/* =================================================
              RIGHT STATS CARD
          ================================================= */}

          <div className="hero-stat-float relative hidden lg:block">

            {/* Card Glow */}

            <div className="pointer-events-none absolute -inset-8 bg-[#70d618]/5 blur-[55px]" />

            {/* Glass Card */}

            <div className="relative overflow-hidden border border-white/15 bg-[#071521]/55 px-7 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">

              {/* Top Accent */}

              <div className="absolute left-0 top-0 h-[3px] w-24 bg-[#70d618]" />

              {/* Right Accent */}

              <div className="absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-[#70d618]/70 via-white/10 to-transparent" />

              {/* Heading */}

              <p className="text-[9px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                Built on Performance
              </p>

              {/* =================================================
                  COUNTER STATS
              ================================================= */}

              <div className="mt-6">
                <HeroStat
                  value={150}
                  suffix="+"
                  label="Projects Delivered"
                />

                <HeroStat
                  value={10}
                  suffix="+"
                  label="Years of Experience"
                />

                <HeroStat
                  value={50}
                  suffix="+"
                  label="Industrial Clients"
                  last
                />
              </div>

              {/* Discover */}

              <Link
                href="/company"
                className="group mt-7 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:text-[#70d618]"
              >
                Discover SPS

                <ArrowUpRight
                  size={15}
                  className="text-[#70d618] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              {/* Decorative SPS */}

              <p className="pointer-events-none absolute -bottom-2 right-2 text-[46px] font-black tracking-[-0.08em] text-white/[0.025]">
                SPS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="absolute bottom-7 right-5 z-20 hidden items-center gap-3 md:flex md:right-8 xl:right-12">
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/50">
          Scroll to explore
        </span>

        <div className="hero-scroll flex h-10 w-10 items-center justify-center border border-white/20 bg-[#071521]/30 text-[#70d618] backdrop-blur-md">
          <ArrowDown size={15} />
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`

        /* =========================
           FLOAT
        ========================= */

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        /* =========================
           REVERSE FLOAT
        ========================= */

        @keyframes heroFloatReverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(15px) rotate(6deg);
          }
        }

        /* =========================
           SMALL FLOAT
        ========================= */

        @keyframes heroFloatSmall {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.4;
          }

          50% {
            transform: translateY(-25px);
            opacity: 1;
          }
        }

        /* =========================
           STATS CARD FLOAT
        ========================= */

        @keyframes heroStatFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        /* =========================
           SCROLL ARROW
        ========================= */

        @keyframes heroScroll {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(7px);
          }
        }

        /* =========================
           CONTENT LOAD
        ========================= */

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================
           CLASSES
        ========================= */

        .hero-float {
          animation: heroFloat 5s ease-in-out infinite;
        }

        .hero-float-slow {
          animation: heroFloat 8s ease-in-out infinite;
        }

        .hero-float-reverse {
          animation: heroFloatReverse 7s ease-in-out infinite;
        }

        .hero-float-small {
          animation: heroFloatSmall 4s ease-in-out infinite;
        }

        .hero-stat-float {
          animation: heroStatFloat 5s ease-in-out infinite;
        }

        .hero-scroll {
          animation: heroScroll 1.7s ease-in-out infinite;
        }

        .hero-fade-up {
          opacity: 0;
          animation: heroFadeUp 0.8s ease forwards;
        }

        /* =========================
           DELAYS
        ========================= */

        .hero-delay-1 {
          animation-delay: 0.12s;
        }

        .hero-delay-2 {
          animation-delay: 0.24s;
        }

        .hero-delay-3 {
          animation-delay: 0.36s;
        }

        .hero-delay-4 {
          animation-delay: 0.48s;
        }

        /* =========================
           ACCESSIBILITY
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .hero-float,
          .hero-float-slow,
          .hero-float-reverse,
          .hero-float-small,
          .hero-stat-float,
          .hero-scroll,
          .hero-fade-up {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({ text }: { text: string }) {
  return (
    <div className="group flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#70d618]/40 hover:bg-[#70d618]/10 hover:text-white">
      <CheckCircle2
        size={15}
        className="shrink-0 text-[#70d618] transition-transform duration-300 group-hover:scale-110"
      />

      <span>{text}</span>
    </div>
  );
}

/* =========================================================
   HERO STAT COUNTER
========================================================= */

function HeroStat({
  value,
  suffix = "",
  label,
  last = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  last?: boolean;
}) {
  const [count, setCount] = useState(0);

  const statRef = useRef<HTMLDivElement | null>(null);

  const hasAnimated = useRef(false);

  /* =======================================================
     COUNT UP WHEN STAT BECOMES VISIBLE
  ======================================================= */

  useEffect(() => {
    const element = statRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) {
          return;
        }

        hasAnimated.current = true;

        const duration = 2200;

        const startTime = performance.now();

        let animationFrame = 0;

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;

          const progress = Math.min(
            elapsed / duration,
            1
          );

          /*
           * Ease-out cubic
           * Starts fast and finishes smoothly
           */

          const easedProgress =
            1 - Math.pow(1 - progress, 3);

          const currentValue = Math.floor(
            value * easedProgress
          );

          setCount(currentValue);

          if (progress < 1) {
            animationFrame =
              requestAnimationFrame(animate);
          } else {
            setCount(value);
          }
        };

        animationFrame =
          requestAnimationFrame(animate);

        observer.unobserve(element);
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return (
    <div
      ref={statRef}
      className={`group py-5 ${
        !last
          ? "border-b border-white/15"
          : ""
      }`}
    >
      <div className="flex items-end justify-between gap-4">

        {/* NUMBER */}

        <p className="text-4xl font-bold tracking-[-0.04em] text-white transition-all duration-300 group-hover:translate-x-1">
          <span>
            {count}
          </span>

          <span className="text-[#70d618]">
            {suffix}
          </span>
        </p>

        {/* DOT */}

        <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#70d618] opacity-40 transition-all duration-300 group-hover:scale-150 group-hover:opacity-100" />
      </div>

      {/* LABEL */}

      <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
        {label}
      </p>
    </div>
  );
}