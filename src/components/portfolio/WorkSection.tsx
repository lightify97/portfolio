"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Checkersvip.com",
    subtitle: "Professional Online Checkers Platform",
    description: "A comprehensive multiplayer American checkers platform designed for competitive play with real-time communication capabilities.",
    tech: ["Next.js", "Fastify", "Socket.io", "PostgreSQL", "Prisma"],
    live: "https://checkersvip.com",
    gradient: "from-blue-500 to-cyan-500",
    status: "Live",
  },
  {
    title: "AskRudy.ai",
    subtitle: "AI-Powered Document Intelligence Platform",
    description: "An advanced RAG-based AI chatbot that revolutionizes document interaction through multilingual translation and intelligent conversation capabilities.",
    tech: ["Next.js", "Vercel AI SDK", "LangChain", "OpenAI", "Pinecone"],
    live: "https://askrudy.ai",
    gradient: "from-purple-500 to-pink-500",
    status: "Live",
  }
];

const testimonials = [
  {
    content: "Ramzan is great! He is very skillful and fast learner, just what you need in a developer.",
    author: "Mohammed Swellam",
    role: "CEO",
    company: "Geeky Air",
    project: "Events based Web App",
    featured: true
  },
  {
    content: "It's been great to work with him! Fast, active and hardworking! Ramzan architected checkersvip.com from ground up with great attention to detail and great design.",
    author: "Gilberto Cisneros",
    role: "CEO",
    company: "Checkersvip.com",
    project: "JavaScript Applications",
  }
];

// Simple project card without 3D tilt
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group">
      <div
        className="bg-white dark:bg-zinc-900 border-3 md:border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(59,130,246,1)] dark:md:hover:shadow-[16px_16px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all overflow-hidden"
      >
        {/* Header */}
        <div className={`bg-gradient-to-br ${project.gradient} p-4 md:p-6 lg:p-8 text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

          <div className="relative flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full animate-ping" style={{ animationDuration: "2s" }} />
              <div className="bg-black/30 border-2 border-white px-2 md:px-4 py-0.5 md:py-1 relative">
                <span className="text-xs md:text-sm lg:text-base font-black uppercase tracking-wider flex items-center gap-1.5 md:gap-2">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
          <h4 className="text-xl md:text-3xl lg:text-4xl font-black mb-1 md:mb-2 uppercase tracking-tight">{project.title}</h4>
          <p className="text-base md:text-xl lg:text-2xl font-bold text-white/90">{project.subtitle}</p>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 lg:p-8">
          <p className="text-sm md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 mb-4 md:mb-6 leading-relaxed font-semibold">
            {project.description}
          </p>

          <div className="mb-4 md:mb-6">
            <div className="bg-yellow-300 dark:bg-zinc-800 border-3 md:border-4 border-black dark:border-white px-3 md:px-5 py-1 md:py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] inline-block mb-3 md:mb-4">
              <h5 className="text-base md:text-xl lg:text-2xl font-black uppercase">Technologies</h5>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base lg:text-lg font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border-2 md:border-4 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:md:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <Link
            href={project.live}
            target="_blank"
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-4 bg-blue-600 hover:bg-blue-700 text-white border-3 md:border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all text-sm md:text-lg lg:text-xl font-black uppercase tracking-wider group-hover:scale-105"
          >
            <Icon icon="solar:arrow-up-outline" className="w-4 h-4 md:w-5 md:h-5" />
            Live Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

// Testimonial card with slide-in animation
function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonialColors = [
    'bg-blue-50 dark:bg-zinc-900 border-blue-600 dark:border-blue-500',
    'bg-green-50 dark:bg-zinc-900 border-green-600 dark:border-green-500',
  ];
  const testimonialColor = testimonial.featured
    ? 'bg-yellow-300 dark:bg-zinc-900 border-yellow-500 dark:border-yellow-500'
    : testimonialColors[index % testimonialColors.length];

  return (
    <div
      ref={ref}
      className={`p-4 md:p-6 lg:p-8 border-3 md:border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(59,130,246,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:md:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all ${testimonialColor} border-t-6 md:border-t-8 ${
        isVisible ? (index % 2 === 0 ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-100') : (index % 2 === 0 ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0')
      } transition-all duration-700`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {testimonial.featured && (
        <div className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-3 md:px-4 py-1 md:py-2 inline-block mb-3 md:mb-4 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] dark:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] animate-pulse" style={{ animationDuration: "3s" }}>
          <Icon icon="solar:star-bold" className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 dark:text-yellow-500" />
          <span className="text-xs md:text-sm font-black uppercase tracking-wider">Featured</span>
        </div>
      )}
      <blockquote className="text-sm md:text-lg lg:text-xl text-zinc-800 dark:text-zinc-200 mb-4 md:mb-6 leading-relaxed font-black">
        &ldquo;{testimonial.content}&rdquo;
      </blockquote>
      <div>
        <div className="text-lg md:text-2xl lg:text-3xl font-black text-zinc-900 dark:text-white mb-0.5 md:mb-1">{testimonial.author}</div>
        <div className="text-sm md:text-base lg:text-lg font-bold text-zinc-700 dark:text-zinc-400">
          {testimonial.role}, {testimonial.company}
        </div>
        {testimonial.project && (
          <div className="text-xs md:text-sm lg:text-base font-bold text-zinc-600 dark:text-zinc-500 mt-1 md:mt-2 uppercase tracking-wider">
            Project: {testimonial.project}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="py-12 md:py-16 lg:py-24 bg-white dark:bg-zinc-950">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 lg:mb-16">
        <div className="bg-purple-600 dark:bg-purple-500 text-white border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter">
            Work
          </h2>
        </div>
        <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl text-zinc-800 dark:text-zinc-200 font-bold">
          Featured projects and client testimonials
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Projects */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="bg-pink-500 dark:bg-pink-600 text-white border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-black uppercase flex items-center gap-2 md:gap-3">
              <Icon icon="solar:folder-bold" className="w-5 h-5 md:w-7 md:h-7" />
              Projects
            </h3>
          </div>
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="bg-green-500 dark:bg-green-600 text-white border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-black uppercase flex items-center gap-2 md:gap-3">
              <Icon icon="solar:users-group-rounded-bold" className="w-5 h-5 md:w-7 md:h-7" />
              Testimonials
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
