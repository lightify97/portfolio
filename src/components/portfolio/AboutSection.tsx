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
    <section id="about" className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">About Me</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Crafting digital experiences with passion, precision, and purpose
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Introduction */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">👋</span>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Hello, I&apos;m Muhammad Ramazan
            </h3>
          </div>
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Developer</span> and
            <span className="font-semibold text-purple-600 dark:text-purple-400"> AI enthusiast</span> with
            <span className="font-semibold text-green-600 dark:text-green-400"> 5+ years</span> of experience crafting
            digital experiences that users love.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
            I specialize in building scalable web and mobile applications using React, Next.js, TypeScript,
            and modern development technologies. I thrive on turning complex problems into elegant solutions
            that users love.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Beyond work, I love exploring emerging technologies, contributing to open-source projects, and
            mentoring aspiring developers. I believe in continuous learning and staying at the forefront of
            technological innovation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-center"
            >
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
            <Icon icon="solar:lightning-bold" className="text-yellow-500" width={20} height={20} />
            Core Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg border border-zinc-200 dark:border-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="p-6 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-lg">
          <div className="flex items-start gap-4">
            <Icon icon="solar:rocket-bold" className="text-green-600 dark:text-green-400 mt-1" width={24} height={24} />
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Available for Hire</h4>
              <div className="space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:check-circle-bold" className="text-green-600" width={16} height={16} />
                  <span>Open to New Opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="solar:planet-2-bold" className="text-cyan-600" width={16} height={16} />
                  <span>Open to Relocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="solar:clock-circle-bold" className="text-blue-600" width={16} height={16} />
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
