"use client";

import {
  Background,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  Navigation,
  TechStackSection,
  AboutSection,
  WorkSection,
} from "@/components/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-50 relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="px-4 md:px-6 lg:ml-32 lg:pl-8 pb-20 lg:pb-0">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Work Section */}
        <WorkSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
