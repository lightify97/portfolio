import { Icon } from "@iconify/react";

export default function AboutSection() {
  const stats = [
    { label: "Experience", value: "5+ Years" },
    { label: "Projects", value: "50+" },
    { label: "Technologies", value: "20+" },
    { label: "Upwork Rating", value: "Top Rated" },
  ];

  const skills = [
    "AI Integration", "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "UI/UX Design"
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b-8 border-black dark:border-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <div className="bg-yellow-300 dark:bg-zinc-800 border-4 border-black dark:border-white px-6 py-4 md:px-10 md:py-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white uppercase tracking-tighter">
            About Me
          </h2>
        </div>
        <p className="mt-6 text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-bold">
          Crafting digital experiences with passion, precision, and purpose
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Introduction */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl md:text-6xl">👋</span>
            <h3 className="text-3xl md:text-5xl font-black text-black dark:text-white uppercase tracking-tight">
              Hello, I&apos;m Muhammad Ramazan
            </h3>
          </div>
          <div className="space-y-6 text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p className="bg-blue-50 dark:bg-zinc-800 border-l-8 border-blue-600 dark:border-blue-500 px-6 py-4">
              A passionate <span className="font-black text-blue-600 dark:text-blue-400">Full Stack Developer</span> and
              <span className="font-black text-purple-600 dark:text-purple-400"> AI enthusiast</span> with
              <span className="font-black text-green-600 dark:text-green-400"> 5+ years</span> of experience crafting
              digital experiences that users love.
            </p>
            <p className="bg-green-50 dark:bg-zinc-800 border-l-8 border-green-600 dark:border-green-500 px-6 py-4">
              I specialize in building scalable web and mobile applications using React, Next.js, TypeScript,
              and modern development technologies. I thrive on turning complex problems into elegant solutions
              that users love.
            </p>
            <p className="bg-purple-50 dark:bg-zinc-800 border-l-8 border-purple-600 dark:border-purple-500 px-6 py-4">
              Beyond work, I love exploring emerging technologies, contributing to open-source projects, and
              mentoring aspiring developers. I believe in continuous learning and staying at the forefront of
              technological innovation.
            </p>
          </div>
        </div>

        {/* Stats Grid - Brutalist with hard shadows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-6 py-6 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] ${
                index === 0 ? 'bg-blue-600 text-white' :
                index === 1 ? 'bg-red-500 text-white' :
                index === 2 ? 'bg-green-500 text-white' :
                'bg-yellow-300 dark:bg-zinc-800 text-black dark:text-white'
              }`}
            >
              <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-bold uppercase tracking-wider opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills - Brutalist tags */}
        <div className="mb-12 md:mb-16">
          <div className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(234,179,8,1)] dark:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] inline-block mb-6">
            <h4 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
              <Icon icon="solar:lightning-bold" className="text-yellow-300 dark:text-yellow-500" width={28} height={28} />
              Core Technologies
            </h4>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => {
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
                  key={skill}
                  className={`px-4 py-2 text-base md:text-lg font-bold border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] ${colorClass}`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>

        {/* Availability - Brutalist box */}
        <div className="bg-green-500 dark:bg-green-600 border-4 border-black dark:border-white px-8 py-6 md:px-12 md:py-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] text-white">
          <div className="flex items-start gap-6">
            <Icon icon="solar:rocket-bold" className="flex-shrink-0" width={48} height={48} />
            <div className="flex-1">
              <h4 className="text-3xl md:text-4xl font-black mb-4 uppercase">Available for Hire</h4>
              <div className="space-y-3 text-base md:text-lg font-bold">
                <div className="flex items-center gap-3 bg-white/20 px-4 py-2 inline-block">
                  <Icon icon="solar:check-circle-bold" width={20} height={20} />
                  <span>Open to New Opportunities</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 px-4 py-2 inline-block">
                  <Icon icon="solar:planet-2-bold" width={20} height={20} />
                  <span>Open to Relocation</span>
                </div>
                <div className="flex items-center gap-3 bg-white/20 px-4 py-2 inline-block">
                  <Icon icon="solar:clock-circle-bold" width={20} height={20} />
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
