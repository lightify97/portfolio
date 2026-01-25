import { Icon } from "@iconify/react";
import Link from "next/link";

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

export default function WorkSection() {
  return (
    <section id="work" className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Work</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Featured projects and client testimonials
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-8 flex items-center gap-2">
            <Icon icon="solar:folder-bold" className="text-purple-600 dark:text-purple-400" width={24} height={24} />
            Projects
          </h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${project.gradient} p-6 text-white`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                    <h4 className="text-2xl font-bold mb-1">{project.title}</h4>
                    <p className="text-white/90 font-medium">{project.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg border border-zinc-200 dark:border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                    >
                      <Icon icon="solar:arrow-up-outline" width={16} height={16} />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-8 flex items-center gap-2">
            <Icon icon="solar:users-group-rounded-bold" className="text-green-600 dark:text-green-400" width={24} height={24} />
            Testimonials
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-5 bg-white dark:bg-zinc-900 border rounded-lg transition-colors ${
                  testimonial.featured
                    ? "border-blue-300 dark:border-blue-700"
                    : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {testimonial.featured && (
                  <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-medium mb-3">
                    <Icon icon="solar:star-bold" width={14} height={14} />
                    Featured
                  </div>
                )}
                <blockquote className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">{testimonial.author}</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  {testimonial.project && (
                    <div className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                      Project: {testimonial.project}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
