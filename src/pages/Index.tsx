import Navbar from "@/components/portfolio/Navbar";
import ParticleField from "@/components/portfolio/ParticleField";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import OpenSourceSection from "@/components/portfolio/OpenSourceSection";
import CompetitiveSection from "@/components/portfolio/CompetitiveSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import GitHubGraph from "@/components/portfolio/GitHubGraph";
import BlogSection from "@/components/portfolio/BlogSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleField />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GitHubGraph />
      <OpenSourceSection />
      <CompetitiveSection />
      <CertificationsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
