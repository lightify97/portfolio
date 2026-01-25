import { Icon } from "@iconify/react";

const experience = [
  {
    role: "Software Developer",
    company: "Upwork",
    period: "Jan 2020 — Present",
    description: "Delivered high-quality projects across diverse domains, including web and mobile applications, API development, and cloud integrations (AWS, GCP).",
    achievements: [
      "Achieved Top-Rated status with a 91% job success score",
      "Completed 10+ projects focusing on scalable solutions",
      "Consistently praised for skillfulness, quick learning, and strong communication",
      "Earned repeated engagements through reliability and expertise"
    ],
    technologies: ["JavaScript", "Python", "Node.js", "AWS", "GCP", "OpenAI API", "LangChain"]
  },
  {
    role: "HIMS Master Trainer / PACS Specialist",
    company: "Public Health Organization, Islamabad",
    period: "Jul 2019 — Present",
    description: "Spearheaded organizational transformation from paper-based manual systems to completely integrated HIMS and PACS (Picture Archiving and Communication System).",
    achievements: [
      "Led integration of 45+ radiology machines (CT, MRI, X-Ray, Ultrasound)",
      "Ensured active monitoring for integration issues",
      "Acted as master trainer and led support team",
      "Communicated issues and requirements to backend teams"
    ],
    technologies: ["HIMS", "PACS", "System Integration", "Healthcare IT", "Training & Support"]
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

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b-8 border-black dark:border-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <div className="bg-green-500 dark:bg-green-600 border-4 border-black dark:border-white px-6 py-4 md:px-10 md:py-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Experience
          </h2>
        </div>
        <p className="mt-6 text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-bold">
          My professional journey and credentials
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Work Experience */}
        <div className="mb-16 md:mb-20">
          <div className="bg-blue-600 dark:bg-blue-500 text-white border-4 border-black dark:border-white px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
              <Icon icon="solar:briefcase-bold" width={28} height={28} />
              Work Experience
            </h3>
          </div>
          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12 pb-8 md:pb-12 border-l-8 border-black dark:border-white last:pb-0">
                {/* Timeline dot - brutalist square */}
                <div className="absolute left-0 top-0 w-6 h-6 md:w-8 md:h-8 bg-red-500 dark:bg-red-600 -translate-x-[12px] md:-translate-x-[16px] border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"></div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm md:text-base font-bold text-zinc-600 dark:text-zinc-400 mb-2 uppercase tracking-wider">{exp.period}</div>
                    <h4 className="text-3xl md:text-4xl font-black text-black dark:text-white uppercase tracking-tight">{exp.role}</h4>
                    <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold">{exp.company}</p>
                  </div>

                  <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed bg-zinc-100 dark:bg-zinc-800 border-l-8 border-blue-600 dark:border-blue-500 px-6 py-4">
                    {exp.description}
                  </p>

                  <div>
                    <div className="bg-yellow-300 dark:bg-zinc-800 border-4 border-black dark:border-white px-5 py-2 md:px-6 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] inline-block mb-4">
                      <h5 className="text-xl md:text-2xl font-black uppercase flex items-center gap-2">
                        <Icon icon="solar:cup-star-bold" className="text-amber-600" width={24} height={24} />
                        Key Achievements
                      </h5>
                    </div>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-4 text-lg md:text-xl text-zinc-700 dark:text-zinc-300">
                          <div className="w-3 h-3 bg-green-500 mt-2 flex-shrink-0 border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"></div>
                          <span className="font-semibold">{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
                          className="px-4 py-2 text-base md:text-lg font-bold bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="bg-purple-600 dark:bg-purple-500 text-white border-4 border-black dark:border-white px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
              <Icon icon="solar:verified-check-bold" width={28} height={28} />
              Certifications
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const certColors = [
                'bg-blue-50 dark:bg-zinc-800 border-blue-600 dark:border-blue-500',
                'bg-green-50 dark:bg-zinc-800 border-green-600 dark:border-green-500',
                'bg-purple-50 dark:bg-zinc-800 border-purple-600 dark:border-purple-500',
                'bg-pink-50 dark:bg-zinc-800 border-pink-600 dark:border-pink-500',
              ];
              const certColor = certColors[index % certColors.length];

              return (
                <div
                  key={index}
                  className={`p-6 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all ${certColor} border-t-8`}
                >
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
