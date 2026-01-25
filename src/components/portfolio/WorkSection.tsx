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
    <section id="work" className="py-16 md:py-24 bg-zinc-100 dark:bg-zinc-800 border-b-8 border-black dark:border-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <div className="bg-purple-600 dark:bg-purple-500 text-white border-4 border-black dark:border-white px-6 py-4 md:px-10 md:py-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Work
          </h2>
        </div>
        <p className="mt-6 text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 font-bold">
          Featured projects and client testimonials
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Projects */}
        <div className="mb-16 md:mb-20">
          <div className="bg-pink-500 dark:bg-pink-600 text-white border-4 border-black dark:border-white px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
              <Icon icon="solar:folder-bold" width={28} height={28} />
              Projects
            </h3>
          </div>
          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-zinc-900 border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:shadow-[16px_16px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all overflow-hidden">
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${project.gradient} p-6 md:p-8 text-white`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-black/30 border-2 border-white px-4 py-1">
                        <span className="text-sm md:text-base font-black uppercase tracking-wider">
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-tight">{project.title}</h4>
                    <p className="text-xl md:text-2xl font-bold text-white/90">{project.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed font-semibold">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <div className="bg-yellow-300 dark:bg-zinc-800 border-4 border-black dark:border-white px-5 py-2 md:px-6 md:py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] inline-block mb-4">
                        <h5 className="text-xl md:text-2xl font-black uppercase">Technologies</h5>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 text-base md:text-lg font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all text-lg md:text-xl font-black uppercase tracking-wider"
                    >
                      <Icon icon="solar:arrow-up-outline" width={20} height={20} />
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
          <div className="bg-green-500 dark:bg-green-600 text-white border-4 border-black dark:border-white px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] inline-block mb-8">
            <h3 className="text-2xl md:text-3xl font-black uppercase flex items-center gap-3">
              <Icon icon="solar:users-group-rounded-bold" width={28} height={28} />
              Testimonials
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => {
              const testimonialColors = [
                'bg-blue-50 dark:bg-zinc-900 border-blue-600 dark:border-blue-500',
                'bg-green-50 dark:bg-zinc-900 border-green-600 dark:border-green-500',
              ];
              const testimonialColor = testimonial.featured
                ? 'bg-yellow-300 dark:bg-zinc-900 border-yellow-500 dark:border-yellow-500'
                : testimonialColors[index % testimonialColors.length];

              return (
                <div
                  key={index}
                  className={`p-6 md:p-8 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all ${testimonialColor} border-t-8`}
                >
                  {testimonial.featured && (
                    <div className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 inline-block mb-4 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] dark:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]">
                      <Icon icon="solar:star-bold" width={18} height={18} className="text-yellow-300 dark:text-yellow-500" />
                      <span className="text-sm font-black uppercase tracking-wider">Featured</span>
                    </div>
                  )}
                  <blockquote className="text-lg md:text-xl text-zinc-800 dark:text-zinc-200 mb-6 leading-relaxed font-bold">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-zinc-900 dark:text-white mb-1">{testimonial.author}</div>
                    <div className="text-base md:text-lg font-bold text-zinc-700 dark:text-zinc-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    {testimonial.project && (
                      <div className="text-sm md:text-base font-bold text-zinc-600 dark:text-zinc-500 mt-2 uppercase tracking-wider">
                        Project: {testimonial.project}
                      </div>
                    )}
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
