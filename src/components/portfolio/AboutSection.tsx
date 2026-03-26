"use client";

import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

// Animated stat counter with pop effect
function AnimatedStat({ end, suffix = "" }: { end: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPopped, setIsPopped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsPopped(true), 100);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(end.replace(/\D/g, ""));
    const incrementTime = 1500 / numericValue;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= numericValue) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-1 md:mb-2 transition-all duration-300 ${isPopped ? "scale-110" : "scale-100"}`}
    >
      {suffix === "!" ? end : <>{count}{suffix}</>}
    </div>
  );
}

// Simple skill tag without particles
function SkillTag({ skill, index }: { skill: string; index: number }) {
  const colors = [
    'bg-blue-600 text-white border-blue-600',
    'bg-red-500 text-white border-red-500',
    'bg-green-500 text-white border-green-500',
    'bg-yellow-300 text-black border-yellow-300 dark:bg-zinc-800 dark:text-white dark:border-zinc-800',
    'bg-purple-600 text-white border-purple-600',
    'bg-pink-500 text-white border-pink-500',
    'bg-indigo-600 text-white border-indigo-600',
    'bg-orange-500 text-white border-orange-500',
  ];
  const colorClass = colors[index % colors.length];

  return (
    <span
      className={`px-2 md:px-4 py-1 md:py-2 text-sm md:text-base lg:text-lg font-bold border-2 md:border-4 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:scale-105 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:md:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-0.5 transition-all ${colorClass}`}
    >
      {skill}
    </span>
  );
}

export default function AboutSection() {
  const stats = [
    { label: "Experience", value: "5+ Years" },
    { label: "Projects", value: "50+" },
    { label: "Technologies", value: "20+" },
    { label: "Upwork Rating", value: "Top Rated!" },
  ];

  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "GCP", "AI & LLM Integration"
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-white dark:bg-zinc-950">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 lg:mb-16">
        <div className="bg-yellow-300 dark:bg-zinc-800 border-3 md:border-4 border-black dark:border-white px-4 md:px-6 py-2 md:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-black dark:text-white uppercase tracking-tighter">
            About Me
          </h2>
        </div>
        <p className="mt-4 md:mt-6 text-base md:text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 font-bold">
          Full-Stack Engineer | TypeScript & Python | AI & LLM Integrations
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Introduction */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <Icon icon="solar:hand-shake-bold" className="text-yellow-500 w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 flex-shrink-0" />
            <h3 className="text-xl md:text-3xl lg:text-5xl font-black text-black dark:text-white uppercase tracking-tight">
              Hello, I&apos;m Muhammad Ramazan
            </h3>
          </div>
          <div className="space-y-4 md:space-y-6 text-sm md:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {/* Narrative flow indicators */}
            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 w-5 h-5 md:w-6 md:h-6 bg-blue-600 border-3 md:border-4 border-black dark:border-white flex items-center justify-center">
                <span className="text-white text-[10px] md:text-xs font-black">1</span>
              </div>
              <p className="bg-blue-50 dark:bg-zinc-800 border-l-4 md:border-l-8 border-blue-600 dark:border-blue-500 px-3 md:px-6 py-2 md:py-4 ml-6 md:ml-8">
                <span className="font-black text-blue-600 dark:text-blue-400">Full-Stack Engineer</span> with a strong end-to-end foundation — from designing
                <span className="font-black text-purple-600 dark:text-purple-400"> Python and Node.js backends</span> to building performant, data-rich frontends with
                <span className="font-black text-green-600 dark:text-green-400"> TypeScript and React</span>.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 w-5 h-5 md:w-6 md:h-6 bg-green-600 border-3 md:border-4 border-black dark:border-white flex items-center justify-center">
                <span className="text-white text-[10px] md:text-xs font-black">2</span>
              </div>
              <p className="bg-green-50 dark:bg-zinc-800 border-l-4 md:border-l-8 border-green-600 dark:border-green-500 px-3 md:px-6 py-2 md:py-4 ml-6 md:ml-8">
                I specialize in scalable architecture, high-throughput data pipelines, and analytical tooling — currently
                building a next-generation bioinformatics platform at Skygenic.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 w-5 h-5 md:w-6 md:h-6 bg-purple-600 border-3 md:border-4 border-black dark:border-white flex items-center justify-center">
                <span className="text-white text-[10px] md:text-xs font-black">3</span>
              </div>
              <p className="bg-purple-50 dark:bg-zinc-800 border-l-4 md:border-l-8 border-purple-600 dark:border-purple-500 px-3 md:px-6 py-2 md:py-4 ml-6 md:ml-8">
                I care deeply about clean, maintainable code and take ownership from planning through deployment —
                whether that&apos;s a greenfield feature or a platform-wide architectural shift.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Brutalist with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-6 mb-8 md:mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-3 md:px-6 py-3 md:py-6 border-3 md:border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:hover:shadow-[10px_10px_0px_0px_rgba(59,130,246,1)] dark:md:hover:shadow-[10px_10px_0px_0px_rgba(59,130,246,1)] ${
                index === 0 ? 'bg-blue-600 text-white' :
                index === 1 ? 'bg-red-500 text-white' :
                index === 2 ? 'bg-green-500 text-white' :
                'bg-yellow-300 dark:bg-zinc-800 text-black dark:text-white'
              }`}
            >
              <AnimatedStat end={stat.value} suffix={stat.value.includes('+') ? '+' : stat.value.includes('!') ? '!' : ''} />
              <div className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-wider opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills - Brutalist tags */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <div className="bg-black dark:bg-white text-white dark:text-black px-4 md:px-6 py-2 md:py-3 shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] dark:shadow-[6px_6px_0px_0px_rgba(59,130,246,1)] md:shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] dark:md:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] inline-block mb-4 md:mb-6">
            <h4 className="text-lg md:text-2xl lg:text-3xl font-black uppercase flex items-center gap-2 md:gap-3">
              <Icon icon="solar:lightning-bold" className="text-yellow-300 dark:text-yellow-500 w-5 h-5 md:w-7 md:h-7" />
              Core Technologies
            </h4>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.map((skill, index) => (
              <SkillTag key={skill} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Availability - Brutalist box with pulse */}
        <div className="bg-green-500 dark:bg-green-600 border-3 md:border-4 border-black dark:border-white px-4 md:px-8 py-3 md:py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:md:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] text-white relative overflow-hidden">
          {/* Animated pulse effect */}
          <div className="absolute inset-0 bg-white/10 animate-pulse" />
          <div className="relative flex flex-col md:flex-row items-start gap-3 md:gap-6">
            <Icon icon="solar:rocket-bold" className="flex-shrink-0 animate-bounce w-8 h-8 md:w-12 md:h-12" style={{animationDuration: "2s"}} />
            <div className="flex-1">
              <h4 className="text-xl md:text-3xl lg:text-4xl font-black mb-2 md:mb-4 uppercase">Available for Hire</h4>
              <div className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg font-bold">
                <div className="flex items-center gap-2 md:gap-3 bg-white/20 px-3 md:px-4 py-1 md:py-2 inline-block hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon icon="solar:check-circle-bold" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Open to New Opportunities</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white/20 px-3 md:px-4 py-1 md:py-2 inline-block hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon icon="solar:planet-2-bold" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Open to Relocation</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white/20 px-3 md:px-4 py-1 md:py-2 inline-block hover:bg-white/30 transition-colors cursor-pointer">
                  <Icon icon="solar:clock-circle-bold" className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Remote & On-site Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
