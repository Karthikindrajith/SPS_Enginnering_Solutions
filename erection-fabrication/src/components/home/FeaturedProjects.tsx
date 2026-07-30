import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Industrial Manufacturing Facility",
    category: "Structural Steel",
    location: "Tamil Nadu, India",
    image: "/images/projects/project-01.jpg",
    href: "/projects/industrial-manufacturing-facility",
  },
  {
    number: "02",
    title: "Logistics & Warehouse Facility",
    category: "PEB Solutions",
    location: "Karnataka, India",
    image: "/images/projects/project-02.jpg",
    href: "/projects/logistics-warehouse-facility",
  },
  {
    number: "03",
    title: "Heavy Engineering Structure",
    category: "Fabrication & Erection",
    location: "Tamil Nadu, India",
    image: "/images/projects/project-03.jpg",
    href: "/projects/heavy-engineering-structure",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#f3f5f6] py-20 md:py-28 lg:py-32">
      {/* Background Number */}
      <span className="pointer-events-none absolute -right-10 top-5 hidden select-none text-[240px] font-black leading-none tracking-[-0.08em] text-[#071521]/[0.025] xl:block">
        04
      </span>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8 xl:px-12">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#071521]/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#70d618]" />

              <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#4fa900]">
                Featured Projects
              </p>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Our work in the field
            </p>
          </div>

          <div className="flex flex-col justify-between gap-7 xl:flex-row xl:items-end">
            <div>
              <h2 className="max-w-[850px] text-[38px] font-bold leading-[1.02] tracking-[-0.045em] text-[#071521] sm:text-5xl md:text-6xl lg:text-[64px]">
                Engineered on paper.
                <span className="block text-slate-400">
                  Proven on site.
                </span>
              </h2>

              <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-slate-600">
                Explore selected projects that reflect our approach to
                fabrication quality, coordinated execution and industrial
                project delivery.
              </p>
            </div>

            <Link
              href="/projects"
              className="group inline-flex shrink-0 items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.13em] !text-[#071521]"
            >
              View All Projects

              <span className="flex h-10 w-10 items-center justify-center bg-[#071521] !text-white transition-all duration-300 group-hover:bg-[#70d618] group-hover:!text-[#071521]">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {/* Main Project */}
          <ProjectCard
            project={projects[0]}
            className="min-h-[520px] lg:col-span-7 lg:min-h-[680px]"
            featured
          />

          {/* Right Projects */}
          <div className="grid gap-5 lg:col-span-5">
            <ProjectCard
              project={projects[1]}
              className="min-h-[400px] lg:min-h-0"
            />

            <ProjectCard
              project={projects[2]}
              className="min-h-[400px] lg:min-h-0"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 grid gap-8 border-t border-[#071521]/15 pt-9 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex max-w-[700px] gap-5">
            <span className="mt-2 h-[2px] w-8 shrink-0 bg-[#70d618]" />

            <p className="text-sm leading-7 text-slate-600">
              Every project brings different engineering, fabrication and site
              requirements. Our execution approach is built around the demands
              of the project rather than a one-size-fits-all process.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex h-14 items-center justify-between gap-8 bg-[#071521] px-6 text-[11px] font-extrabold uppercase tracking-[0.13em] !text-white transition-all duration-300 hover:bg-[#70d618] hover:!text-[#071521]"
          >
            Discuss Your Project

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

type Project = {
  number: string;
  title: string;
  category: string;
  location: string;
  image: string;
  href: string;
};

function ProjectCard({
  project,
  className,
  featured = false,
}: {
  project: Project;
  className?: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={project.href}
      className={`group relative block overflow-hidden bg-[#071521] ${className ?? ""}`}
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06141f]/95 via-[#071521]/20 to-transparent transition-all duration-500 group-hover:from-[#06141f]" />

      {/* Number */}
      <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center border border-white/25 bg-[#071521]/40 text-[10px] font-extrabold text-[#70d618] backdrop-blur-md md:left-8 md:top-8">
        {project.number}
      </div>

      {/* Arrow */}
      <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center bg-white !text-[#071521] transition-all duration-300 group-hover:bg-[#70d618] md:right-8 md:top-8">
        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      {/* Bottom Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 lg:p-10">
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#70d618]">
            {project.category}
          </p>

          <span className="h-1 w-1 rounded-full bg-white/40" />

          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-300">
            {project.location}
          </p>
        </div>

        <h3
          className={`max-w-[650px] font-bold leading-[1.05] tracking-[-0.04em] text-white ${
            featured
              ? "text-3xl md:text-5xl"
              : "text-2xl md:text-3xl"
          }`}
        >
          {project.title}
        </h3>

        <div className="mt-6 h-[2px] w-10 bg-[#70d618] transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}