import Image from "next/image";
import Link from "next/link";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/* ========================================
   COMPANY LINKS
======================================== */

const companyLinks = [
  { label: "Company", href: "/company" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Quality & Safety", href: "/quality-safety" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ========================================
   CAPABILITY LINKS
======================================== */

const capabilityLinks = [
  {
    label: "Steel Fabrication",
    href: "/capabilities/steel-fabrication",
  },
  {
    label: "Structural Erection",
    href: "/capabilities/structural-erection",
  },
  {
    label: "PEB Solutions",
    href: "/capabilities/peb-solutions",
  },
  {
    label: "Roofing & Cladding",
    href: "/capabilities/roofing-cladding",
  },
  {
    label: "Industrial Piping",
    href: "/capabilities/industrial-piping",
  },
];

/* ========================================
   FOOTER
======================================== */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06121c] text-white">
      {/* ========================================
          LARGE BACKGROUND TEXT
      ======================================== */}

      <div className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap text-[190px] font-black leading-none tracking-[-0.08em] text-white/[0.018] xl:block">
        SPS ENGINEERING
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
        {/* ========================================
            MAIN FOOTER
        ======================================== */}

        <div className="grid gap-14 border-b border-white/10 py-16 md:py-20 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr] lg:gap-10 lg:py-24">
          {/* ========================================
              BRAND
          ======================================== */}

          <div>
            {/* ========================================
                LOGO
            ======================================== */}

            <Link
              href="/"
              className="group inline-flex items-center"
              aria-label="SPS Engineering Solutions Home"
            >
              <Image
                src="/images/sps-fabrication-logo.png"
                alt="SPS Engineering Solutions"
                width={320}
                height={120}
                className="h-auto w-[190px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:w-[220px] lg:w-[240px]"
              />
            </Link>

            {/* Description */}

            <p className="mt-8 max-w-[360px] text-sm leading-7 text-slate-400">
              Structural steel fabrication, erection and industrial
              engineering solutions built around precision, safety and
              dependable project execution.
            </p>

            {/* Accent */}

            <div className="mt-8 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#70d618]">
                Engineered for strength
              </p>
            </div>

            {/* ========================================
                SOCIAL MEDIA
            ======================================== */}

            <div className="mt-10">
              <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-slate-500">
                Follow Us
              </p>

              <div className="mt-4 flex items-center gap-3">
                {/* ====================================
                    INSTAGRAM
                ==================================== */}

                <a
                  href="https://www.instagram.com/YOUR_USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="group flex h-11 w-11 items-center justify-center border border-white/15 !text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#70d618] hover:bg-[#70d618] hover:!text-[#071521]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-[18px] w-[18px] fill-current transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM17.5 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                  </svg>
                </a>

                {/* ====================================
                    WHATSAPP
                ==================================== */}

                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="group flex h-11 w-11 items-center justify-center border border-white/15 !text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#70d618] hover:bg-[#70d618] hover:!text-[#071521]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-[19px] w-[19px] fill-current transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M12.04 2C6.52 2 2.03 6.48 2.03 12c0 1.76.46 3.48 1.33 5L2 22l5.12-1.34A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.04.8.81-2.96-.2-.31A8.15 8.15 0 0 1 3.87 12c0-4.5 3.67-8.17 8.17-8.17A8.16 8.16 0 0 1 20.2 12c0 4.5-3.66 8.18-8.16 8.18Zm4.48-6.12c-.25-.12-1.46-.72-1.68-.8-.23-.08-.4-.12-.56.12-.17.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.23a7.43 7.43 0 0 1-1.38-1.72c-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.16 1.75 2.67 4.24 3.75.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
                  </svg>
                </a>

                {/* ====================================
                    LINKEDIN
                ==================================== */}

                <a
                  href="https://www.linkedin.com/company/YOUR_COMPANY"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="group flex h-11 w-11 items-center justify-center border border-white/15 !text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#70d618] hover:bg-[#70d618] hover:!text-[#071521]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-[18px] w-[18px] fill-current transition-transform duration-300 group-hover:scale-110"
                  >
                    <path d="M6.5 8.5H3V20h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM9 8.5V20h3.5v-5.7c0-1.5.28-2.95 2.15-2.95 1.84 0 1.86 1.72 1.86 3.05V20H20v-6.32c0-3.1-.67-5.48-4.29-5.48-1.74 0-2.9.95-3.37 1.85h-.05V8.5H9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ========================================
              COMPANY LINKS
          ======================================== */}

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#70d618]">
              Company
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm font-semibold !text-slate-400 transition-colors duration-300 hover:!text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* ========================================
              CAPABILITIES
          ======================================== */}

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#70d618]">
              Capabilities
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              {capabilityLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm font-semibold !text-slate-400 transition-colors duration-300 hover:!text-white"
                >
                  {link.label}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* ========================================
              GET IN TOUCH
          ======================================== */}

          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#70d618]">
              Get In Touch
            </p>

            <div className="mt-7 space-y-6">
              {/* OFFICE */}

              <div className="flex items-start gap-4">
  <MapPin
    size={18}
    className="mt-1 shrink-0 text-[#70d618]"
  />

  <div>
    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-500">
      Office Address
    </p>

    <p className="mt-2 max-w-[280px] text-sm leading-6 text-slate-400">
      SPS Engineering Solutions
      <br />
      62/19,10th Ave,Ashok Nagar
      <br />
      Chennai,Tamil Nadu 600083
      <br />
      India
    </p>
  </div>
</div>

              {/* PHONE */}

              <Link
                href="/contact"
                className="group flex items-start gap-4"
              >
                <Phone
                  size={17}
                  className="mt-1 shrink-0 text-[#70d618]"
                />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                    Project Enquiries
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-white">
                    Request a Callback
                  </p>
                </div>
              </Link>

              {/* EMAIL */}

              <Link
                href="/contact"
                className="group flex items-start gap-4"
              >
                <Mail
                  size={17}
                  className="mt-1 shrink-0 text-[#70d618]"
                />

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                    Email
                  </p>

                  <p className="mt-2 text-sm font-semibold text-slate-400 transition-colors duration-300 group-hover:text-white">
                    Send Project Enquiry
                  </p>
                </div>
              </Link>
            </div>

            {/* START PROJECT */}

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#70d618] pb-2 text-[9px] font-extrabold uppercase tracking-[0.18em] !text-white transition-colors duration-300 hover:!text-[#70d618]"
            >
              For the Enquiry

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* ========================================
            BOTTOM FOOTER
        ======================================== */}

        <div className="flex flex-col gap-6 py-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-[10px] font-semibold text-slate-500">
              © {new Date().getFullYear()} SPS Engineering Solutions. All
              rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-[10px] font-semibold !text-slate-500 transition-colors duration-300 hover:!text-white"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="text-[10px] font-semibold !text-slate-500 transition-colors duration-300 hover:!text-white"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* BACK TO TOP */}

          <a
            href="#top"
            className="group flex w-fit items-center gap-3 text-[9px] font-extrabold uppercase tracking-[0.18em] !text-slate-400 transition-colors duration-300 hover:!text-white"
          >
            Back to top

            <span className="flex h-9 w-9 items-center justify-center border border-white/15 transition-all duration-300 group-hover:border-[#70d618] group-hover:bg-[#70d618] group-hover:text-[#071521]">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}