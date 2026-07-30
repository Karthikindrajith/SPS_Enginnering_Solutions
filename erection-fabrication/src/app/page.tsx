import Capabilities from "@/components/home/Capabilities";
import CompanyIntro from "@/components/home/CompanyIntro";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import ProjectCTA from "@/components/home/ProjectCTA";
import QualitySafety from "@/components/home/QualitySafety";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CompanyIntro />
        <Capabilities/>
        <Industries/>
        <FeaturedProjects/>
        <Process/>
        <QualitySafety/>
        <ProjectCTA/>
      </main>
      <Footer/>
    </>
  );
}