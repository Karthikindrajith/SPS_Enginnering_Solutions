"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Factory,
  HardHat,
  Menu,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Quality & Safety", href: "/quality-safety" },
  { label: "Careers", href: "/careers" },
];

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    title: "Steel Fabrication",
    description: "Precision fabrication for industrial structures.",
    href: "/capabilities/steel-fabrication",
    icon: Factory,
  },
  {
    title: "Structural Erection",
    description: "Safe and efficient on-site steel erection.",
    href: "/capabilities/structural-erection",
    icon: HardHat,
  },
  {
    title: "PEB Solutions",
    description: "Engineered building systems for modern industry.",
    href: "/capabilities/peb-solutions",
    icon: PanelsTopLeft,
  },
  {
    title: "Roofing & Cladding",
    description: "Industrial roofing and envelope solutions.",
    href: "/capabilities/roofing-cladding",
    icon: ShieldCheck,
  },
  {
    title: "Industrial Piping",
    description: "Fabrication and installation of piping systems.",
    href: "/capabilities/industrial-piping",
    icon: Wrench,
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* =========================
     SCROLL EFFECT
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     CLOSE MENU AFTER ROUTE CHANGE
  ========================= */

  useEffect(() => {
    setMenuOpen(false);
    setCapabilitiesOpen(false);
  }, [pathname]);

  /* =========================
     DISABLE BODY SCROLL
  ========================= */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =========================
     ACTIVE LINK
  ========================= */

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const capabilitiesActive = pathname.startsWith("/capabilities");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#06141f]/95 shadow-[0_15px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-b border-white/10 bg-[#06141f]/80 backdrop-blur-md"
      }`}
    >
      {/* =====================================================
          DESKTOP / TABLET NAVBAR
      ===================================================== */}

      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-500 md:px-8 xl:px-12 ${
          scrolled ? "h-[72px]" : "h-[88px]"
        }`}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label="SPS Engineering Solutions Home"
        >
         <div
    className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#70d618]/60 bg-[#071521] shadow-[0_0_20px_rgba(112,214,24,0.15)] transition-all duration-500 group-hover:border-[#70d618] group-hover:shadow-[0_0_25px_rgba(112,214,24,0.35)] ${
      scrolled
        ? "h-11 w-11"
        : "h-12 w-12"
    }`}
  >
    <Image
      src="/images/sps-final-logo.png"
      alt="SPS Engineering Solutions"
      fill
      priority
      sizes="200px"
      className="scale-[1.55] object-contain transition-transform duration-500 group-hover:scale-[0.9]"
    />
  </div>

  {/* Company Name */}
  <div className="hidden sm:block">
    <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-white">
      SPS Engineering
    </p>

    <div className="mt-1 flex items-center gap-2">
      <span className="h-px w-4 bg-[#70d618]" />

      <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400">
        Solutions
      </p>
    </div>
  </div>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="hidden h-full items-center xl:flex">
          <NavLink
            label="Home"
            href="/"
            active={isActive("/")}
          />

          <NavLink
            label="Company"
            href="/company"
            active={isActive("/company")}
          />

          {/* ===============================================
              CAPABILITIES
          =============================================== */}

          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setCapabilitiesOpen(true)}
            onMouseLeave={() => setCapabilitiesOpen(false)}
          >
            {/* Capabilities Main Button */}

            <div
              className={`group relative flex h-full items-center px-4 ${
                capabilitiesActive
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Link
                href="/capabilities"
                className="flex h-full items-center text-[13px] font-semibold tracking-[-0.01em] transition-colors duration-300"
              >
                Capabilities
              </Link>

              <button
                type="button"
                onClick={() =>
                  setCapabilitiesOpen((prev) => !prev)
                }
                className="ml-1.5 flex h-full items-center text-inherit"
                aria-label="Toggle capabilities menu"
                aria-expanded={capabilitiesOpen}
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    capabilitiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Active Line */}

              <span
                className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#70d618] transition-transform duration-300 ${
                  capabilitiesActive || capabilitiesOpen
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </div>

            {/* =============================================
                MEGA DROPDOWN
            ============================================= */}

            <div
              className={`absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                capabilitiesOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden border border-slate-200 bg-white p-3 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
                <div className="grid grid-cols-[0.9fr_1.6fr]">
                  {/* LEFT */}

                  <div className="bg-[#071521] p-7">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#70d618]">
                      Our Capabilities
                    </p>

                    <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
                      Built to deliver
                      <br />
                      industrial strength.
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      Integrated engineering, fabrication and site execution
                      solutions for demanding industrial projects.
                    </p>

                    <Link
                      href="/capabilities"
                      className="group mt-7 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.12em] !text-white transition-colors duration-300 hover:!text-[#70d618]"
                    >
                      View all capabilities

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>

                  {/* RIGHT */}

                  <div className="grid grid-cols-2 gap-1 p-3">
                    {capabilities.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group flex gap-3 p-4 transition-colors duration-300 hover:bg-slate-100"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#eff9e6] text-[#4fa900] transition-all duration-300 group-hover:bg-[#70d618] group-hover:text-[#071521]">
                            <Icon
                              size={18}
                              strokeWidth={1.8}
                            />
                          </div>

                          <div>
                            <p className="text-[13px] font-bold text-[#071521] transition-colors duration-300 group-hover:text-[#4fa900]">
                              {item.title}
                            </p>

                            <p className="mt-1 text-[11px] leading-4 text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Navigation */}

          {navigation.slice(2).map((item) => (
            <NavLink
              key={item.href}
              label={item.label}
              href={item.href}
              active={isActive(item.href)}
            />
          ))}
        </nav>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="flex items-center gap-3">
          {/* CTA */}

          <Link
            href="/contact"
            className="group hidden h-12 items-center gap-3 bg-[#70d618] px-6 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#071521] transition-all duration-300 hover:bg-white lg:inline-flex"
          >
            Start a Project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-[#70d618] hover:text-[#70d618] xl:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE / TABLET MENU
      ===================================================== */}

      <div
        className={`fixed inset-0 z-[100] bg-[#071521] transition-all duration-500 xl:hidden ${
          menuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-screen flex-col overflow-y-auto">
          {/* ===============================================
              MOBILE TOP
          =============================================== */}

          <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-5 md:px-8">
            {/* Mobile Logo */}

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center"
              aria-label="SPS Engineering Solutions Home"
            >
              <div
    className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#70d618]/60 bg-[#071521] shadow-[0_0_20px_rgba(112,214,24,0.15)] transition-all duration-500 group-hover:border-[#70d618] group-hover:shadow-[0_0_25px_rgba(112,214,24,0.35)] ${
      scrolled
        ? "h-11 w-11"
        : "h-12 w-12"
    }`}
  >
    <Image
      src="/images/sps-final-logo.png"
      alt="SPS Engineering Solutions"
      fill
      priority
      sizes="200px"
      className="scale-[1.55] object-contain transition-transform duration-500 group-hover:scale-[0.9]"
    />
  </div>

  {/* Company Name */}
  <div className="hidden sm:block">
    <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-white">
      SPS Engineering
    </p>

    <div className="mt-1 flex items-center gap-2">
      <span className="h-px w-4 bg-[#70d618]" />

      <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400">
        Solutions
      </p>
    </div>
  </div>
  

            </Link>

            {/* Close */}

            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition-colors duration-300 hover:border-[#70d618] hover:text-[#70d618]"
              aria-label="Close navigation menu"
            >
              <X size={21} />
            </button>
          </div>

          {/* ===============================================
              MOBILE NAVIGATION
          =============================================== */}

          <nav className="flex-1 px-5 py-8 md:px-8">
            <MobileLink
              number="01"
              label="Home"
              href="/"
              active={isActive("/")}
              closeMenu={() => setMenuOpen(false)}
            />

            <MobileLink
              number="02"
              label="Company"
              href="/company"
              active={isActive("/company")}
              closeMenu={() => setMenuOpen(false)}
            />

            {/* =============================================
                MOBILE CAPABILITIES
            ============================================= */}

            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() =>
                  setCapabilitiesOpen((prev) => !prev)
                }
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={capabilitiesOpen}
              >
                <div className="flex items-center gap-5">
                  <span className="text-[10px] font-bold text-[#70d618]">
                    03
                  </span>

                  <span
                    className={`text-xl font-semibold ${
                      capabilitiesActive
                        ? "text-[#70d618]"
                        : "text-white"
                    }`}
                  >
                    Capabilities
                  </span>
                </div>

                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform duration-300 ${
                    capabilitiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}

              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  capabilitiesOpen
                    ? "grid-rows-[1fr] pb-5"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0">
                  <div className="ml-10 border-l border-white/10 pl-5">
                    {capabilities.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2.5 text-sm text-slate-400 transition-colors duration-300 hover:text-[#70d618]"
                      >
                        {item.title}
                      </Link>
                    ))}

                    <Link
                      href="/capabilities"
                      onClick={() => setMenuOpen(false)}
                      className="mt-2 inline-flex items-center gap-2 py-2 text-xs font-bold uppercase tracking-wider text-[#70d618]"
                    >
                      View All

                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <MobileLink
              number="04"
              label="Industries"
              href="/industries"
              active={isActive("/industries")}
              closeMenu={() => setMenuOpen(false)}
            />

            <MobileLink
              number="05"
              label="Projects"
              href="/projects"
              active={isActive("/projects")}
              closeMenu={() => setMenuOpen(false)}
            />

            <MobileLink
              number="06"
              label="Quality & Safety"
              href="/quality-safety"
              active={isActive("/quality-safety")}
              closeMenu={() => setMenuOpen(false)}
            />

            <MobileLink
              number="07"
              label="Careers"
              href="/careers"
              active={isActive("/careers")}
              closeMenu={() => setMenuOpen(false)}
            />
          </nav>

          {/* ===============================================
              MOBILE CTA
          =============================================== */}

          <div className="border-t border-white/10 p-5 md:p-8">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex h-14 items-center justify-between bg-[#70d618] px-5 text-xs font-extrabold uppercase tracking-[0.12em] text-[#071521]"
            >
              Start Your Project

              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   DESKTOP NAV LINK
========================================================= */

function NavLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex h-full items-center px-4 text-[13px] font-semibold tracking-[-0.01em] transition-colors duration-300 ${
        active
          ? "!text-white"
          : "!text-[#cbd5e1] hover:!text-white"
      }`}
    >
      {label}

      <span
        className={`absolute bottom-0 left-4 right-4 h-[2px] origin-left bg-[#70d618] transition-transform duration-300 ${
          active
            ? "scale-x-100"
            : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

/* =========================================================
   MOBILE NAV LINK
========================================================= */

function MobileLink({
  number,
  label,
  href,
  active,
  closeMenu,
}: {
  number: string;
  label: string;
  href: string;
  active: boolean;
  closeMenu: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={closeMenu}
      className="group flex items-center justify-between border-b border-white/10 py-5"
    >
      <div className="flex items-center gap-5">
        <span className="text-[10px] font-bold text-[#70d618]">
          {number}
        </span>

        <span
          className={`text-xl font-semibold transition-colors ${
            active
              ? "text-[#70d618]"
              : "text-white group-hover:text-[#70d618]"
          }`}
        >
          {label}
        </span>
      </div>

      <ArrowUpRight
        size={17}
        className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#70d618]"
      />
    </Link>
  );
}