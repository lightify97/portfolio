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
    <section id="stack" className="py-16 md:py-24 bg-yellow-300 dark:bg-zinc-800 border-b-8 border-black dark:border-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <div className="bg-red-500 dark:bg-red-600 border-4 border-black dark:border-white px-6 py-4 md:px-10 md:py-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] inline-block">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Technology Stack
          </h2>
        </div>
        <p className="mt-6 text-xl md:text-2xl text-zinc-800 dark:text-zinc-200 font-bold">
          Technologies I use to bring ideas to life
        </p>
      </div>

      {/* Tech Categories */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-16">
        {Object.entries(techStackData).map(([categoryName, techs], categoryIndex) => {
          const categoryColors = [
            'bg-blue-600',
            'bg-green-500',
            'bg-purple-600',
            'bg-pink-500',
            'bg-indigo-600',
          ];
          const bgColor = categoryColors[categoryIndex % categoryColors.length];

          return (
            <div key={categoryName}>
              <h3 className={`inline-block ${bgColor} text-white border-4 border-black dark:border-white px-6 py-3 md:px-8 md:py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 md:mb-8`}>
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {techs.map((tech, index) => {
                  const techColors = [
                    'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white',
                    'bg-blue-50 dark:bg-zinc-800 text-blue-900 dark:text-blue-100',
                    'bg-green-50 dark:bg-zinc-800 text-green-900 dark:text-green-100',
                    'bg-purple-50 dark:bg-zinc-800 text-purple-900 dark:text-purple-100',
                    'bg-pink-50 dark:bg-zinc-800 text-pink-900 dark:text-pink-100',
                    'bg-yellow-100 dark:bg-zinc-800 text-yellow-900 dark:text-yellow-100',
                  ];
                  const techColor = techColors[index % techColors.length];

                  return (
                    <div
                      key={tech.name}
                      className={`${techColor} border-4 border-black dark:border-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(59,130,246,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(59,130,246,1)] hover:-translate-y-1 transition-all flex flex-col items-center gap-3`}
                    >
                      <Icon icon={tech.icon} width={48} height={48} />
                      <span className="text-base md:text-lg font-bold text-center uppercase tracking-wide">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
