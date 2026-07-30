import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Factory,
  Mail,
  Phone,
} from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="relative overflow-hidden bg-[#70d618]">
      {/* Decorative background text */}
      <div className="pointer-events-none absolute -bottom-10 left-0 hidden select-none whitespace-nowrap text-[190px] font-black leading-none tracking-[-0.08em] text-[#071521]/[0.04] xl:block">
        ENGINEERING
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
        {/* Main CTA */}
        <div className="grid min-h-[600px] lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left */}
          <div className="flex flex-col justify-center border-[#071521]/20 py-20 lg:border-r lg:py-28 lg:pr-16 xl:pr-24">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#071521]" />

              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#071521]">
                Start a Project
              </p>
            </div>

            <h2 className="mt-8 max-w-[900px] text-[48px] font-bold leading-[0.95] tracking-[-0.055em] text-[#071521] sm:text-6xl md:text-7xl xl:text-[88px]">
              Have a project
              <span className="block">in mind?</span>

              <span className="mt-3 block text-white">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mt-9 max-w-[650px] text-[16px] font-medium leading-8 text-[#071521]/75 md:text-lg">
              Tell us about your structural steel, fabrication or erection
              requirements. Our team can review your project and discuss the
              right execution approach.
            </p>

            {/* Main CTA Button */}
            <div className="mt-10">
              <Link
                href="/contact"
                className="group inline-flex min-h-16 items-center justify-between gap-12 bg-[#071521] px-7 text-[11px] font-extrabold uppercase tracking-[0.14em] !text-white transition-all duration-300 hover:bg-white hover:!text-[#071521] md:px-9"
              >
                Discuss Your Project

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center border-t border-[#071521]/20 py-14 lg:border-t-0 lg:py-28 lg:pl-14 xl:pl-20">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#071521]/55">
              Project Enquiries
            </p>

            <h3 className="mt-5 max-w-[430px] text-3xl font-bold leading-tight tracking-[-0.04em] text-[#071521] md:text-4xl">
              Start the conversation with our engineering team.
            </h3>

            {/* Contact items */}
            <div className="mt-10 border-t border-[#071521]/20">
              <Link
                href="/contact"
                className="group flex items-center justify-between gap-5 border-b border-[#071521]/20 py-6 !text-[#071521]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#071521]/25">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#071521]/50">
                      Send an enquiry
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      Project Requirements
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-between gap-5 border-b border-[#071521]/20 py-6 !text-[#071521]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#071521]/25">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#071521]/50">
                      Talk to our team
                    </p>

                    <p className="mt-1 text-sm font-bold">
                      Request a Callback
                    </p>
                  </div>
                </div>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Small message */}
            <div className="mt-8 flex gap-4">
              <span className="mt-2 h-[2px] w-8 shrink-0 bg-[#071521]" />

              <p className="max-w-[380px] text-sm leading-6 text-[#071521]/65">
                Share your project scope, location and requirements, and our
                team will get back to you.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom capability strip */}
        <div className="relative grid border-t border-[#071521]/20 sm:grid-cols-2 lg:grid-cols-4">
          <CTAItem
            number="01"
            title="Engineering"
            subtitle="Project coordination"
            icon={<Building2 size={19} />}
          />

          <CTAItem
            number="02"
            title="Fabrication"
            subtitle="Workshop execution"
            icon={<Factory size={19} />}
          />

          <CTAItem
            number="03"
            title="Erection"
            subtitle="Site execution"
            icon={<Building2 size={19} />}
          />

          <CTAItem
            number="04"
            title="PEB Solutions"
            subtitle="Industrial buildings"
            icon={<Factory size={19} />}
          />
        </div>
      </div>
    </section>
  );
}

function CTAItem({
  number,
  title,
  subtitle,
  icon,
}: {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group flex items-center gap-4 border-b border-[#071521]/20 py-7 sm:px-6 sm:odd:border-r lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#071521]/25 text-[#071521] transition-all duration-300 group-hover:bg-[#071521] group-hover:text-[#70d618]">
        {icon}
      </div>

      <div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-black text-[#071521]/45">
            {number}
          </span>

          <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#071521]">
            {title}
          </p>
        </div>

        <p className="mt-1 text-[10px] font-semibold text-[#071521]/55">
          {subtitle}
        </p>
      </div>
    </div>
  );
}