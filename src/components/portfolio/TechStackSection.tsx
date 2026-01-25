import { Icon } from "@iconify/react";

interface TechItem {
  name: string;
  icon: string;
  category: string;
}

const techStackData: Record<string, TechItem[]> = {
  "Backend": [
    { name: "Node.js", icon: "devicon:nodejs", category: "Backend" },
    { name: "Python", icon: "devicon:python", category: "Backend" },
    { name: "Express", icon: "skill-icons:expressjs-dark", category: "Backend" },
    { name: "Django", icon: "material-icon-theme:django", category: "Backend" },
    { name: "GraphQL", icon: "logos:graphql", category: "Backend" },
    { name: "Socket.io", icon: "simple-icons:socketdotio", category: "Backend" },
  ],
  "Frontend": [
    { name: "React", icon: "skill-icons:react-dark", category: "Frontend" },
    { name: "Next.js", icon: "devicon:nextjs", category: "Frontend" },
    { name: "TypeScript", icon: "devicon:typescript", category: "Frontend" },
    { name: "JavaScript", icon: "devicon:javascript", category: "Frontend" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", category: "Frontend" },
    { name: "Flutter", icon: "devicon:flutter", category: "Frontend" },
  ],
  "Database": [
    { name: "PostgreSQL", icon: "logos:postgresql", category: "Database" },
    { name: "MongoDB", icon: "devicon:mongodb", category: "Database" },
    { name: "MySQL", icon: "logos:mysql", category: "Database" },
    { name: "Redis", icon: "devicon:redis", category: "Database" },
    { name: "Prisma", icon: "skill-icons:prisma", category: "Database" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "skill-icons:aws-light", category: "Cloud & DevOps" },
    { name: "GCP", icon: "skill-icons:gcp-light", category: "Cloud & DevOps" },
    { name: "Firebase", icon: "vscode-icons:file-type-firebase", category: "Cloud & DevOps" },
    { name: "Docker", icon: "devicon:docker", category: "Cloud & DevOps" },
    { name: "Git", icon: "devicon:git", category: "Cloud & DevOps" },
  ],
  "AI & Integration": [
    { name: "OpenAI", icon: "simple-icons:openai", category: "AI & Integration" },
    { name: "LangChain", icon: "simple-icons:langchain", category: "AI & Integration" },
    { name: "Vercel AI SDK", icon: "skill-icons:vercel-light", category: "AI & Integration" },
    { name: "Stripe", icon: "logos:stripe", category: "AI & Integration" },
    { name: "Vector DB", icon: "ph:vector-three-duotone", category: "AI & Integration" },
  ],
};

export default function TechStackSection() {
  return (
    <section id="stack" className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">Technology Stack</h2>
        <p className="text-zinc-600 dark:text-zinc-400">Technologies I use to bring ideas to life</p>
      </div>

      {/* Tech Categories */}
      <div className="space-y-12">
        {Object.entries(techStackData).map(([categoryName, techs]) => (
          <div key={categoryName}>
            <h3 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-200">{categoryName}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {techs.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2 p-4 bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-zinc-400 transition-colors"
                >
                  <Icon icon={tech.icon} width={36} height={36} />
                  <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
