// Single source of truth for the portfolio's content.
// Keep this in sync with the master CV (public/CV.pdf).

export const profile = {
  name: "Muhammad Ramazan",
  role: "Backend Software Engineer",
  location: "Islamabad, Pakistan",
  email: "mramazan1@yahoo.com",
  siteUrl: "https://mramazan.dev",
  cvUrl: "/CV.pdf",
  availability: "Available for freelance projects",
  headline:
    "I build backend systems that hold up in production: data pipelines, distributed workflows and LLM-powered products.",
  summary:
    "Backend engineer with 4+ years of experience. I'm currently building a biomedical knowledge-graph platform at Skygenic in Python, on Temporal, Neo4j and PostgreSQL. I also work across the stack in TypeScript and React, and I'm a Top Rated freelancer on Upwork, known for reliable delivery and clear communication.",
  socials: {
    github: "https://github.com/lightify97",
    linkedin: "https://www.linkedin.com/in/m-ramazan",
    upwork: "https://www.upwork.com/freelancers/~01efb11e04a657fbaf",
  },
};

export const stats = [
  { value: "4+ yrs", label: "Building production software" },
  { value: "40M+", label: "Records in a crash-safe ETL" },
  { value: "0 → 93%", label: "Cross-source gene matching" },
  { value: "Top Rated", label: "On Upwork, with repeat clients" },
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
    title: "Software Engineer",
    company: "Skygenic",
    period: "Oct 2025 — Present",
    context: "Biomedical knowledge-graph platform for testing scientific hypotheses.",
    groups: [
      {
        title: "Architecture & performance",
        items: [
          "Architected the backend on Temporal, orchestrating hypothesis evaluation across five Python services.",
          "Cut Temporal payloads 20× with a gzip codec, turning failing multi-scan requests into 2.5 s runs.",
          "Scaled Neo4j graph analytics to 92K results in 21 s with parallel Temporal child workflows.",
          "Added a transactional outbox and contract tests that caught silent cross-service failures.",
        ],
      },
      {
        title: "Data & knowledge graph",
        items: [
          "Built a crash-safe Temporal ETL for 40M+ records, lifting cross-source gene matching from 0% to 93%.",
          "Designed the graph data model with a bioinformatician, unifying 100 relationship types into 61.",
        ],
      },
      {
        title: "APIs & AI",
        items: [
          "Built the FastAPI / PostgreSQL REST API and closed a cross-tenant data-exposure hole.",
          "Shipped LLM features: structured-output reports, a GraphRAG agent, streaming chat and MCP tools.",
        ],
      },
      {
        title: "Delivery",
        items: [
          "Ran Docker Compose and Jenkins CI/CD deployments to dev and prod behind an nginx gateway.",
          "Built React / TypeScript dashboards, a visual pipeline builder and an AI chat UI in an Nx monorepo.",
          "Wrote design specs, risk assessments and end-to-end performance benchmarks for the team.",
        ],
      },
    ],
    tech: ["Python", "Temporal", "Neo4j", "PostgreSQL", "FastAPI", "LangGraph", "React", "Docker", "Jenkins"],
  },
  {
    title: "Software Developer (Freelance)",
    company: "Upwork",
    companyUrl: "https://www.upwork.com/freelancers/~01efb11e04a657fbaf",
    period: "Mar 2022 — Present",
    context: "Independent engineering for startups and small businesses.",
    highlights: [
      "Delivered 10+ web, mobile, API and AWS / GCP projects in JavaScript, Python and Node.js.",
      "Built AI integrations with the OpenAI API and LangChain.",
      "Earned Top Rated status and repeat clients by clarifying requirements and delivering reliably.",
    ],
    tech: ["Node.js", "TypeScript", "Next.js", "Python", "OpenAI API", "LangChain", "AWS", "GCP"],
  },
  {
    title: "HIMS Master Trainer / PACS Specialist",
    company: "Armed Forces Institute of Radiology & Imaging",
    companyUrl: "https://afiri.org",
    period: "Jul 2019 — Present",
    context: "PEMH, Rawalpindi. Hospital information and medical imaging systems.",
    highlights: [
      "Led the move from paper records to integrated HIMS / PACS systems as master trainer and support lead.",
      "Integrated 45+ radiology machines (CT, MRI, X-Ray, Ultrasound) and monitored the integrations.",
    ],
  },
];

export type Project = {
  name: string;
  url: string;
  summary: string;
  points: string[];
  tech: string[];
};

export const projects: Project[] = [
  {
    name: "Checkersvip.com",
    url: "https://checkersvip.com",
    summary:
      "A live multiplayer American checkers platform with real-time play and chat, pending approval from the American Checkers Federation.",
    points: [
      "Architected the platform from the ground up, frontend to backend",
      "Real-time game state and chat over Socket.io, backed by Redis",
      "Drag-and-drop board built with DnDKit",
    ],
    tech: ["Next.js", "Tailwind", "Fastify", "Socket.io", "Redis", "PostgreSQL", "Prisma"],
  },
  {
    name: "AskRudy.ai",
    url: "https://askrudy.ai",
    summary:
      "A RAG chatbot for multilingual documents, with translation and screenshot Q&A powered by OpenAI vision.",
    points: [
      "Retrieval-augmented answers grounded in uploaded documents",
      "Screenshot questions answered with OpenAI's multimodal models",
      "Subscriptions and billing handled with Stripe",
    ],
    tech: ["Next.js", "Vercel AI SDK", "LangChain", "OpenAI API", "Firebase", "Stripe"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Cypher"] },
  {
    group: "Backend",
    items: ["FastAPI", "SQLAlchemy", "Alembic", "Celery", "Node.js", "Express", "Fastify", "Django", "GraphQL", "Prisma"],
  },
  {
    group: "Distributed systems",
    items: ["Temporal", "RabbitMQ", "Redis", "Transactional outbox", "SSE", "WebSockets"],
  },
  {
    group: "Data",
    items: ["PostgreSQL (pgvector)", "Neo4j (GDS, APOC)", "MySQL", "MongoDB", "Knowledge-graph ETL"],
  },
  {
    group: "AI / LLM",
    items: ["LangGraph", "LangChain", "OpenAI API", "MCP", "RAG", "GraphRAG", "GILDA", "scispaCy"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Redux Toolkit", "Nx", "Vite", "Tailwind", "Material UI", "ECharts"],
  },
  {
    group: "DevOps & testing",
    items: ["Docker", "Git", "Jenkins", "GitHub Actions", "nginx", "Linux", "AWS", "GCP", "pytest", "Vitest"],
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
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];
