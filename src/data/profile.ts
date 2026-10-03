// Single source of truth for the portfolio's content.
// Keep this in sync with the master CV (public/CV.pdf).

export const profile = {
  name: "Muhammad Ramazan",
  role: "Full Stack Software Engineer",
  location: "Islamabad, Pakistan",
  email: "mramazan1@yahoo.com",
  siteUrl: "https://mramazan.dev",
  cvUrl: "/CV.pdf",
  availability: "Open to new opportunities",
  headline:
    "I build complete products, from the data layer to the interface, and make sure they stay reliable as they grow.",
  summary:
    "Full stack engineer with 4+ years of experience shipping web applications, APIs and AI-powered features. I currently work at Skygenic on a bioinformatics analytics platform. Before that, I spent three years as a Top Rated freelancer on Upwork, where clients came back for reliable delivery and clear communication.",
  socials: {
    github: "https://github.com/lightify97",
    linkedin: "https://www.linkedin.com/in/m-ramazan",
    upwork: "https://www.upwork.com/freelancers/~01efb11e04a657fbaf",
  },
};

export const stats = [
  { value: "4+ years", label: "Building production software" },
  { value: "10+ projects", label: "Delivered for clients" },
  { value: "Top Rated", label: "On Upwork" },
];

export type HighlightGroup = { title: string; items: string[] };

export type Role = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  context: string;
  highlights?: string[];
  groups?: HighlightGroup[];
  tech?: string[];
};

export const experience: Role[] = [
  {
    title: "Full Stack Engineer",
    company: "Skygenic",
    period: "Aug 2025 — Present",
    context: "Bioinformatics analytics and knowledge-graph platform for testing scientific hypotheses.",
    groups: [
      {
        title: "Product & frontend",
        items: [
          "Designed, built and deployed a full-stack analytics platform for exploring pipeline outputs through interactive visualizations, session workspaces and visual pipeline tooling.",
          "Built React / TypeScript dashboards, a visual pipeline builder and an AI chat UI.",
          "Migrated the platform to an Nx monorepo with centralized state management, improving velocity and maintainability.",
          "Led performance work across frontend and backend that removed unnecessary re-renders and kept the app stable under real-time streaming.",
        ],
      },
      {
        title: "Backend & data",
        items: [
          "Architected the backend on Temporal, orchestrating hypothesis evaluation across five Python services.",
          "Built a crash-safe ETL for 40M+ records and designed the graph data model with a bioinformatician.",
          "Implemented streaming and retrieval patterns for large CSV / TSV datasets, improving latency and responsiveness.",
          "Built the FastAPI / PostgreSQL REST API and closed a cross-tenant data-exposure hole.",
        ],
      },
      {
        title: "AI features",
        items: [
          "Shipped LLM features: structured-output reports, a GraphRAG agent, streaming chat and MCP tools.",
        ],
      },
      {
        title: "Reliability & delivery",
        items: [
          "Added observability: status-aware indexing, incremental refresh and operational endpoints for production troubleshooting.",
          "Delivered access-controlled file operations and artifact lifecycle management.",
          "Added a transactional outbox and contract tests that caught silent cross-service failures.",
          "Ran Docker and CI/CD deployments to dev and prod, and wrote design specs and performance benchmarks for the team.",
        ],
      },
    ],
    tech: ["TypeScript", "React", "Redux Toolkit", "Nx", "Python", "FastAPI", "Node.js", "PostgreSQL", "Neo4j", "Temporal", "GCP", "Docker"],
  },
  {
    title: "Full Stack Developer (Freelance)",
    company: "Upwork",
    companyUrl: "https://www.upwork.com/freelancers/~01efb11e04a657fbaf",
    period: "Mar 2022 — Aug 2025",
    context: "Web applications, APIs and AI features for startups and small businesses.",
    highlights: [
      "Delivered 10+ web, mobile, API and cloud projects for clients on AWS and GCP.",
      "Built scalable APIs, real-time features and complete full-stack products end to end.",
      "Built AI integrations, including RAG pipelines and LLM-powered workflow automation.",
      "Worked closely with clients to turn requirements into production features, earning repeat engagements.",
      "Earned and maintained Top Rated status through reliable delivery and clear communication.",
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "Python", "FastAPI", "OpenAI API", "LangChain", "AWS", "GCP"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit", "Nx", "Vite", "Tailwind", "Material UI", "ECharts", "D3", "Blockly"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Fastify", "FastAPI", "Django", "GraphQL", "Prisma", "SQLAlchemy", "Celery", "Socket.io"],
  },
  {
    group: "Distributed systems",
    items: ["Temporal", "RabbitMQ", "WebSockets", "SSE"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Neo4j", "BigQuery", "Firebase"],
  },
  {
    group: "AI / LLM",
    items: ["OpenAI API", "LangChain", "LangGraph", "Vercel AI SDK", "RAG", "MCP"],
  },
  {
    group: "DevOps & testing",
    items: ["Docker", "AWS", "GCP", "GitHub Actions", "Jenkins", "nginx", "Linux", "Git", "Vitest", "pytest"],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "It's been great to work with him! Fast, active and hardworking. Ramzan architected checkersvip.com from the ground up with great attention to detail and great design. He is a great team player and a great developer.",
    author: "Gilberto Cisneros",
    role: "CEO",
    company: "Checkersvip.com",
  },
  {
    quote:
      "Ramzan produced some really amazing work on the backend. He demonstrated his proficiency and efficiency by using Node.js and JavaScript to successfully import a very large dataset into a MySQL database.",
    author: "Arnel Bisnar",
    role: "Product Manager",
    company: "Solid Lift Parts Inc",
  },
  {
    quote:
      "We had a fantastic experience working with him on a recent project. He consistently delivered high-quality work, showed exceptional attention to detail, and communicated effectively throughout the process.",
    author: "Jacek Jllaskowski",
    role: "Project Manager",
    company: "Golem",
  },
  {
    quote: "Ramzan is great! He is very skillful and a fast learner, just what you need in a developer.",
    author: "Mohammed Swellam",
    role: "CEO",
    company: "Geeky Air",
  },
];

export const education = [
  {
    degree: "Master of Computer Science (MCS)",
    school: "Virtual University of Pakistan",
    url: "https://www.vu.edu.pk",
    period: "2021 — 2023",
  },
  {
    degree: "B.Sc. Computer Science",
    school: "Quaid-i-Azam University",
    url: "https://qau.edu.pk",
    period: "2015 — 2018",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  platform: string;
  issued: string;
  image?: string;
};

export const certificates: Certificate[] = [
  { title: "Databases with SQL (CS50)", issuer: "Harvard", platform: "edX", issued: "May 2025", image: "/certificates/CS50_SQL.png" },
  { title: "DevOps Essentials", issuer: "IBM", platform: "Coursera", issued: "Nov 2023", image: "/certificates/P67DLWJP2GL7_DEVOPS.png" },
  { title: "AWS Cloud Technical Essentials", issuer: "AWS", platform: "Coursera", issued: "Feb 2023", image: "/certificates/EXFQ7QMJYUQQ_AWS.png" },
  { title: "Django Web Framework", issuer: "Meta", platform: "Coursera", issued: "Feb 2023", image: "/certificates/3YRA842UKERB_DJANGO.png" },
  { title: "Introduction to Databases for Back-End Development", issuer: "Meta", platform: "Coursera", issued: "Feb 2023", image: "/certificates/5FNQEGLH78UD_DATABASES_FOR_BACKEND.png" },
  { title: "Introduction to Databases", issuer: "Meta", platform: "Coursera", issued: "Feb 2023", image: "/certificates/N9LJFAWZXTMA_DATABASES.png" },
  { title: "Introduction to Back-End Development", issuer: "Meta", platform: "Coursera", issued: "Jan 2023", image: "/certificates/2Y8NRQC5MP96_INTRO_BE.png" },
  { title: "Programming in Python", issuer: "Meta", platform: "Coursera", issued: "Jan 2023", image: "/certificates/2AUUVS958L5Y_PYTHON.png" },
  { title: "Version Control", issuer: "Meta", platform: "Coursera", issued: "Jan 2023", image: "/certificates/BLGJKHN6UTSF_version_control.png" },
  { title: "Git and GitHub Essentials", issuer: "IBM", platform: "Coursera", issued: "Jan 2023", image: "/certificates/YYQL3U4QAZJF_GIT_GITHUB.png" },
  { title: "Web Development with HTML, CSS & JavaScript", issuer: "IBM", platform: "Coursera", issued: "Jan 2023", image: "/certificates/3UPD6SABRD3B_INTRO_WEB.png" },
  { title: "Introduction to Cloud Computing", issuer: "IBM", platform: "Coursera", issued: "Jan 2023" },
  { title: "Foundations: Data, Data, Everywhere", issuer: "Google", platform: "Coursera", issued: "Nov 2022", image: "/certificates/6RUAYHXFV5XZ_Foundations_data.png" },
];

export const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];
