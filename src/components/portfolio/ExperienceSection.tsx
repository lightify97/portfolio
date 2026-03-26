"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Skygenic",
    period: "Aug 2025 — Present",
    description: "Building a next-generation bioinformatics analytics platform end-to-end — from Python and Node.js backends to a TypeScript/React frontend — with a focus on scalable architecture, high-performance data pipelines, and rich analytical tooling.",
    achievements: [
      "Led platform modernization to a scalable TypeScript monorepo with centralized state/data orchestration",
      "Designed and delivered end-to-end analytical workflows connecting data ingestion, processing, and visualization",
      "Implemented high-throughput data streaming and retrieval patterns for large datasets",
      "Built robust workspace/session capabilities enabling reliable multi-view analysis",
      "Executed major performance optimizations cutting unnecessary re-renders under real-time workloads"
    ],
    technologies: ["TypeScript", "React", "Redux Toolkit", "Node.js", "Express", "FastAPI", "MongoDB", "GCP", "ECharts", "Nx"]
  },
  {
    role: "Software Developer",
    company: "Upwork",
    period: "Mar 2022 — Aug 2025",
    description: "Delivered high-quality projects across diverse domains, including web and mobile applications, API development, and cloud integrations (AWS, GCP).",
    achievements: [
      "Achieved Top-Rated status, praised for skillfulness and rapid learning",
      "Completed multiple projects focusing on scalable solutions using JavaScript, Python, and Node.js",
      "Gained hands-on experience with AI integrations (OpenAI API, LangChain) and cloud platforms",
      "Earned repeated engagements through reliability, expertise, and strong communication"
    ],
    technologies: ["JavaScript", "Python", "Node.js", "Next.js", "AWS", "GCP", "OpenAI API", "LangChain"]
  }
];

const certifications = [
  {
    title: "DevOps Essentials",
    provider: "IBM",
    platform: "Coursera",
    issued: "Nov 2023",
    credentialId: "P67DLWJP2GL7",
    skills: ["CI/CD", "DevOps", "IaaC"]
  },
  {
    title: "AWS Cloud Technical Essentials",
    provider: "Amazon Web Services",
    platform: "Coursera",
    issued: "Feb 2023",
    credentialId: "EXFQ7QMJYUQQ",
    skills: ["AWS", "EC2", "S3", "IAM", "VPC"]
  },
  {
    title: "Django Web Framework",
    provider: "Meta",
    platform: "Coursera",
    issued: "Feb 2023",
    credentialId: "3YRA842UKERB",
    skills: ["Django", "Python", "MVC"]
  },
  {
    title: "Databases with SQL",
    provider: "CS50",
    platform: "HarvardX",
    issued: "May 2025",
    credentialId: "d7be6646-4c57-431e-88a9",
    skills: ["SQL", "Database", "Data Analysis"]
  }
];

// Animated timeline dot that fills up on scroll
function AnimatedTimelineDot({ index }: { index: number }) {
  const [fillPercent, setFillPercent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const timer = setInterval(() => {
            current += 2;
            if (current <= 100) {
              setFillPercent(current);
            } else {
              clearInterval(timer);
            }
          }, 20);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.8 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const dotColors = ['bg-red-500', 'bg-blue-600', 'bg-green-500', 'bg-purple-600'];
  const bgColor = dotColors[index % dotColors.length];

  return (
    <div ref={ref} className="absolute -left-[19px] top-0">
      <div className="w-8 h-8 md:w-10 md:h-10 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] overflow-hidden flex items-center justify-center">
        <div
          className={`absolute inset-0 ${bgColor} dark:${bgColor.replace('500', '600').replace('600', '500')} transition-all`}
          style={{ clipPath: `inset(0 0 ${100 - fillPercent}% 0)` }}
        />
      </div>
    </div>
  );
}

// Checklist achievement item
function ChecklistAchievement({ text, index }: { text: string; index: number }) {
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsChecked(true), index * 150);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <li ref={ref} className="flex items-start gap-4 text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
      <div className="w-6 h-6 mt-2 flex-shrink-0 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] relative overflow-hidden bg-white dark:bg-zinc-800 transition-all duration-300">
        {isChecked && (
          <>
            <div className="absolute inset-0 bg-green-500"></div>
            <Icon icon="solar:check-circle-bold" className="relative z-10 text-white" width={24} height={24} />
          </>
        )}
      </div>
      <span className="font-semibold transition-opacity duration-500" style={{ opacity: isChecked ? 1 : 0.5 }}>
        {text}
      </span>
    </li>
  );
}

// Expandable job card
function ExpandableJobCard({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-12 pb-12 border-l-8 border-black dark:border-white last:pb-0">
      <AnimatedTimelineDot index={index} />

      <div className="space-y-6">
        <div>
          <div className="text-sm md:text-base font-bold text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">{exp.period}</div>
          <h4 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase tracking-tight">{exp.role}</h4>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold">{exp.company}</p>
        </div>

        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-100 dark:bg-zinc-800 border-l-8 border-blue-600 dark:border-blue-500 px-6 py-4">
          {exp.description}
        </p>

        {/* Expandable achievements */}
        <div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-yellow-300 dark:bg-zinc-800 border-4 border-black dark:border-white px-5 py-2 md:px-6 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] inline-block mb-4 hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <h5 className="text-xl md:text-2xl font-black uppercase flex items-center gap-2">
              <Icon icon="solar:cup-star-bold" className="text-amber-600" width={24} height={24} />
              Key Achievements
            </h5>
            <Icon icon={isExpanded ? "solar:alt-arrow-up-bold" : "solar:alt-arrow-down-bold"} width={20} height={20} />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <ul className="space-y-3 pl-4">
              {exp.achievements.map((achievement, i) => (
                <ChecklistAchievement key={i} text={achievement} index={i} />
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-purple-600 dark:bg-purple-500 text-white border-4 border-black dark:border-white px-5 py-2 md:px-6 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] inline-block mb-4">
            <h5 className="text-xl md:text-2xl font-black uppercase flex items-center gap-2">
              <Icon icon="solar:code-bold" width={24} height={24} />
              Technologies
            </h5>
          </div>
          <div className="flex flex-wrap gap-3">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-base md:text-lg font-bold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-0.5 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Certification card with shine effect
function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const certColors = [
    'bg-blue-50 dark:bg-zinc-800 border-blue-600 dark:border-blue-500',
    'bg-green-50 dark:bg-zinc-800 border-green-600 dark:border-green-500',
    'bg-purple-50 dark:bg-zinc-800 border-purple-600 dark:border-purple-500',
    'bg-pink-50 dark:bg-zinc-800 border-pink-600 dark:border-pink-500',
  ];
  const certColor = certColors[index % certColors.length];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-6 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all ${certColor} border-t-8 relative overflow-hidden`}
    >
      {/* Shine effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-700 ${
          isHovered ? 'translate-x-full' : '-translate-x-full'
        }`}
        style={{ width: '50%' }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h4 className="text-xl md:text-2xl font-black text-zinc-900 dark:text-white">{cert.title}</h4>
            <p className="text-base md:text-lg font-bold text-zinc-700 dark:text-zinc-300">{cert.provider} • {cert.platform}</p>
          </div>
          <Icon icon="solar:verified-check-bold" className="text-blue-600 dark:text-blue-500 flex-shrink-0" width={32} height={32} />
        </div>
        <div className="space-y-3 text-base md:text-lg">
          <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 font-semibold">
            <Icon icon="solar:calendar-bold" width={18} height={18} />
            <span>{cert.issued}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm md:text-base font-bold bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 md:py-16 lg:py-24 bg-white dark:bg-zinc-950">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 lg:mb-16">
        <div className="bg-green-500 dark:bg-green-600 border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
            Experience
          </h2>
        </div>
        <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 font-bold">
          My professional journey and credentials
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Work Experience */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="bg-blue-600 dark:bg-blue-500 text-white border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-black uppercase flex items-center gap-2 md:gap-3">
              <Icon icon="solar:briefcase-bold" className="w-5 h-5 md:w-7 md:h-7" />
              Work Experience
            </h3>
          </div>
          <div className="space-y-6 md:space-y-8 lg:space-y-12">
            {experience.map((exp, index) => (
              <ExpandableJobCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="bg-purple-600 dark:bg-purple-500 text-white border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-6 md:mb-8">
            <h3 className="text-lg md:text-2xl lg:text-3xl font-black uppercase flex items-center gap-2 md:gap-3">
              <Icon icon="solar:verified-check-bold" className="w-5 h-5 md:w-7 md:h-7" />
              Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
