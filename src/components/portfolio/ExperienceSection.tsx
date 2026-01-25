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
    <section id="experience" className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Experience</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          My professional journey and credentials
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-8 flex items-center gap-2">
            <Icon icon="solar:briefcase-bold" className="text-blue-600 dark:text-blue-400" width={24} height={24} />
            Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-zinc-200 dark:border-zinc-800 last:pb-0">
                {/* Timeline dot - sharp square for brutalist design */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-500 -translate-x-[8px]" />

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{exp.period}</div>
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{exp.role}</h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                  </div>

                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{exp.description}</p>

                  <div>
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2 flex items-center gap-2">
                      <Icon icon="solar:cup-star-bold" className="text-amber-500" width={18} height={18} />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-700 dark:text-zinc-300">
                          <div className="w-1.5 h-1.5 bg-green-500 mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2 flex items-center gap-2">
                      <Icon icon="solar:code-bold" className="text-purple-500" width={18} height={18} />
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-2 border-zinc-200 dark:border-zinc-700"
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
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-8 flex items-center gap-2">
            <Icon icon="solar:verified-check-bold" className="text-green-600 dark:text-green-400" width={24} height={24} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-5 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{cert.title}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{cert.provider} • {cert.platform}</p>
                  </div>
                  <Icon icon="solar:verified-check-bold" className="text-blue-500 flex-shrink-0" width={20} height={20} />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                    <Icon icon="solar:calendar-bold" width={14} height={14} />
                    <span>{cert.issued}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-2 border-zinc-200 dark:border-zinc-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
