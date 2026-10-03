import Contact from "@/components/sections/Contact";
import Credentials from "@/components/sections/Credentials";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stack from "@/components/sections/Stack";
import Testimonials from "@/components/sections/Testimonials";
import RevealObserver from "@/components/ui/RevealObserver";

<<<<<<< HEAD
import { useTheme } from "@/components/ThemeProvider";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const navigation = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

const metrics = [
  { value: "5+", label: "Years building software" },
  { value: "50+", label: "Client and product projects" },
  { value: "20+", label: "Technologies used in production" },
  { value: "Top", label: "Rated on Upwork" },
];

const quickNotes = [
  { label: "Strength", value: "Backend architecture and analytical interfaces" },
  { label: "Stack", value: "TypeScript, Python, React, Node.js" },
  { label: "Focus", value: "Platforms, AI integration, and data-heavy products" },
];

const heroProjects = [
  { title: "Skygenic", note: "Bioinformatics analytics platform" },
  { title: "AskRudy", note: "Document intelligence with AI" },
];

const specialties = [
  {
    title: "Systems",
    description: "Backend architecture, APIs, streaming flows, and platform decisions that survive growth.",
    items: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
  },
  {
    title: "Interfaces",
    description: "Data-rich frontend work with clear interaction models and reliable state management.",
    items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "ECharts"],
  },
  {
    title: "Data",
    description: "Relational and document modeling for products that need speed, structure, and searchability.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
  },
  {
    title: "AI",
    description: "Practical LLM integration for workflows, search, document intelligence, and multimodal UX.",
    items: ["OpenAI", "LangChain", "Vercel AI SDK", "RAG", "Vector DB"],
  },
];

const experience = [
  {
    period: "2025 → now",
    role: "Full-Stack Developer",
    company: "Skygenic",
    summary:
      "Building a bioinformatics analytics platform end-to-end, from backend services and data flows to the TypeScript frontend used for exploration and analysis.",
    points: [
      "Led modernization into a scalable TypeScript monorepo.",
      "Delivered analytical workflows connecting ingestion, processing, and visualization.",
      "Improved performance under real-time and large-dataset workloads.",
    ],
  },
  {
    period: "2022 → 2025",
    role: "Software Developer",
    company: "Upwork",
    summary:
      "Delivered production web and mobile work across product, API, cloud, and AI-heavy engagements with strong client retention.",
    points: [
      "Earned Top Rated status for reliability and speed.",
      "Built solutions across JavaScript, Python, Node.js, AWS, and GCP.",
      "Integrated OpenAI and LangChain into client-facing products.",
    ],
  },
];

const projects = [
  {
    title: "Skygenic Platform",
    subtitle: "Bioinformatics analytics platform",
    description:
      "Interactive exploration of Nextflow pipeline outputs with workspace sessions, streaming large datasets, and multi-view analytical tooling.",
    tech: ["React", "TypeScript", "Redux Toolkit", "Node.js", "MongoDB", "GCP"],
    href: "https://skygenic.com",
    note: "Currently shipping",
  },
  {
    title: "Checkersvip.com",
    subtitle: "Competitive online checkers platform",
    description:
      "A real-time multiplayer platform designed for serious play, communication, and federation-grade attention to product detail.",
    tech: ["Next.js", "Fastify", "Socket.io", "PostgreSQL", "Prisma"],
    href: "https://checkersvip.com",
    note: "Ground-up architecture",
  },
  {
    title: "AskRudy.ai",
    subtitle: "AI document intelligence",
    description:
      "A multilingual document assistant with RAG, screenshot-based questioning, translation, and multimodal extraction flows.",
    tech: ["Next.js", "OpenAI", "LangChain", "Vercel AI SDK", "Firebase"],
    href: "https://askrudy.ai",
    note: "LLM workflow design",
  },
];

const testimonials = [
  {
    quote:
      "Ramzan is great. He is very skillful and a fast learner, just what you need in a developer.",
    author: "Mohammed Swellam",
    meta: "CEO, Geeky Air",
  },
  {
    quote:
      "Fast, active and hardworking. Ramzan architected checkersvip.com from the ground up with strong detail and design care.",
    author: "Gilberto Cisneros",
    meta: "CEO, Checkersvip.com",
  },
];

const certifications = [
  "IBM DevOps Essentials",
  "AWS Cloud Technical Essentials",
  "Meta Django Web Framework",
  "CS50 Databases with SQL",
];

type FormStatus = "idle" | "success" | "error" | "config";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-[var(--ink)] hover:-translate-y-0.5 hover:border-[var(--accent)]"
      aria-label="Toggle theme"
    >
      <Icon
        icon={theme === "dark" ? "solar:sun-2-bold" : "solar:moon-bold"}
        width={18}
        height={18}
      />
    </button>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="section-label-row">
        <span className="soft-accent-label">{eyebrow}</span>
        <span className="section-index">{index}</span>
        <span className="soft-divider" />
      </div>
      <h2 className="display-title mt-5 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      <p className="body-copy mt-4 max-w-[62ch]">
        {description}
      </p>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article
      className="paper-card page-reveal flex h-full flex-col p-6 sm:p-8"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="tiny-note">{project.note}</p>
          <h3 className="display-title mt-3 text-3xl sm:text-4xl">{project.title}</h3>
          <p className="mono-nav mt-2 text-[var(--muted)]">
            {project.subtitle}
          </p>
        </div>
        <span className="mono-nav rounded-full border border-[var(--line)] px-3 py-1 text-[var(--muted)]">
          Live
        </span>
      </div>

      <p className="body-copy mt-6 flex-1">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="badge-pill">
            {item}
          </span>
        ))}
      </div>

      <Link
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="line-link mt-8 inline-flex w-fit items-center gap-2"
      >
        Visit project
        <Icon icon="solar:arrow-right-up-linear" width={18} height={18} />
      </Link>
    </article>
  );
}

export default function PortfolioPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  const completion =
    [formData.name, formData.email, formData.message].filter((field) => field.trim().length > 0)
      .length / 3;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("config");
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "lightify6@gmail.com",
        },
        publicKey
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("Email send failed", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio-shell min-h-screen text-[var(--ink)]">
      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--panel)] backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="tiny-note">Muhammad Ramazan</p>
              <p className="mt-1 text-sm text-[var(--muted)] sm:text-base">
                Full-stack engineer focused on thoughtful systems and interfaces.
              </p>
            </div>
            <ThemeButton />
          </div>

          <nav className="mono-nav mt-4 flex gap-5 overflow-x-auto pb-1 text-[var(--muted)]">
            {navigation.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="line-link whitespace-nowrap">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-10 lg:pt-14">
        <section className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.85fr)] lg:gap-10">
          <div className="paper-panel page-reveal p-7 sm:p-10 lg:p-12">
            <div className="section-label-row">
              <span className="soft-accent-label">Edition 2026</span>
              <span className="section-index">Intro</span>
              <span className="soft-divider" />
              <span>Portfolio dossier</span>
            </div>

            <h1 className="display-title mt-8 text-5xl leading-[0.94] sm:text-6xl lg:text-[5.85rem]">
              Muhammad
              <br />
              Ramazan
            </h1>

            <p className="lede-copy mt-8">
              I build software for teams working across product, data, and AI, with equal attention
              to backend structure and frontend clarity.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#contact" className="mono-button rounded-full bg-[var(--ink)] px-6 py-3 text-[var(--paper)]">
                Start a conversation
              </Link>
              <Link href="/CV.pdf" className="mono-button rounded-full border border-[var(--line)] px-6 py-3 hover:border-[var(--accent)]">
                Download CV
              </Link>
            </div>

            <div className="mt-12 grid gap-4 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
              <div className="soft-accent-block">
                <p className="tiny-note">Currently</p>
                <p className="support-copy mt-2">
                  Shipping a next-generation analytics platform at Skygenic.
                </p>
              </div>
              <div className="soft-accent-block">
                <p className="tiny-note">Focus</p>
                <p className="support-copy mt-2">
                  TypeScript, Python, platform work, and AI-enabled product flows.
                </p>
              </div>
              <div className="soft-accent-block">
                <p className="tiny-note">Availability</p>
                <p className="support-copy mt-2">
                  Open to strong product, platform, and full-stack opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-4">
            <div
              className="paper-card page-reveal flex-[0.9] p-6 sm:p-7"
              style={{ animationDelay: "120ms" }}
            >
              <p className="soft-accent-label">At a glance</p>
              <div className="mt-4 space-y-4">
                {quickNotes.map((item) => (
                  <div key={item.label} className="soft-accent-block border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0">
                    <p className="mono-nav accent-meta">{item.label}</p>
                    <p className="support-copy mt-2">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="paper-card page-reveal flex flex-1 flex-col p-6 sm:p-7"
              style={{ animationDelay: "220ms" }}
            >
              <div className="grid gap-6">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="soft-accent-label">Selected work</p>
                    <span className="h-px flex-1 bg-[var(--line)]" />
                  </div>
                  <div className="mt-4 grid gap-4">
                    {heroProjects.map((project) => (
                      <div
                        key={project.title}
                        className="soft-accent-block border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0"
                      >
                        <p className="mono-nav accent-meta">{project.title}</p>
                        <p className="support-copy mt-2">{project.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[var(--line)] pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="soft-accent-label">Links</p>
                    <span className="h-px flex-1 bg-[var(--line)]" />
                  </div>
                  <div className="mt-4 space-y-3">
                    <Link
                      href="https://github.com/lightify97"
                      target="_blank"
                      rel="noreferrer"
                      className="line-link flex items-center justify-between"
                    >
                      <span>GitHub</span>
                      <Icon icon="solar:arrow-right-up-linear" width={18} height={18} />
                    </Link>
                    <Link
                      href="https://linkedin.com/in/m-ramazan"
                      target="_blank"
                      rel="noreferrer"
                      className="line-link flex items-center justify-between"
                    >
                      <span>LinkedIn</span>
                      <Icon icon="solar:arrow-right-up-linear" width={18} height={18} />
                    </Link>
                    <Link
                      href="mailto:lightify6@gmail.com"
                      className="line-link flex items-center justify-between"
                    >
                      <span>Email</span>
                      <Icon icon="solar:arrow-right-up-linear" width={18} height={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="pt-20 sm:pt-24">
          <SectionHeading
            index="01"
            eyebrow="About"
            title="End-to-end engineering with a product instinct."
            description="I like work that forces clear thinking: backend design, hard data problems, analytical frontends, and product details that determine whether software feels dependable."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <div className="paper-panel page-reveal p-7 sm:p-9">
              <div className="body-copy space-y-5">
                <p>
                  My background spans platform engineering, client delivery, and AI-assisted
                  product work. I am comfortable moving from system design and APIs into a
                  TypeScript frontend without treating either side as an afterthought.
                </p>
                <p>
                  The through-line is maintainability. I care about software that remains
                  understandable after launch, especially when requirements expand and teams grow.
                </p>
                <p>
                  Current work at Skygenic centers on large datasets, analytical workflows, and rich
                  user interfaces. That blend suits me: technical depth, real constraints, and room
                  for product judgment.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="paper-card metric-card page-reveal p-6"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <p className="display-title text-4xl sm:text-5xl">{metric.value}</p>
                  <p className="mono-nav accent-meta mt-3">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="pt-20 sm:pt-24">
          <SectionHeading
            index="02"
            eyebrow="Stack"
            title="A practical stack shaped by real projects."
            description="The tools matter less than the judgment behind them, but these are the technologies I reach for most often when the work has to scale."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {specialties.map((specialty, index) => (
              <article
                key={specialty.title}
                className="paper-card page-reveal p-6 sm:p-7"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="tiny-note accent-meta">{specialty.title}</p>
                <h3 className="display-title mt-3 text-3xl">{specialty.title}</h3>
                <p className="body-copy mt-4">
                  {specialty.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {specialty.items.map((item) => (
                    <span key={item} className="badge-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="pt-20 sm:pt-24">
          <SectionHeading
            index="03"
            eyebrow="Experience"
            title="Recent roles with architecture-level ownership."
            description="Most of my best work sits at the intersection of structure, scale, and user-facing outcomes."
          />

          <div className="mt-10 space-y-5">
            {experience.map((item, index) => (
              <article
                key={item.company}
                className="paper-panel page-reveal grid gap-6 p-7 sm:p-9 lg:grid-cols-[180px_minmax(0,1fr)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="soft-accent-block border-b border-[var(--line)] pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-6">
                  <p className="tiny-note">{item.period}</p>
                  <p className="mono-nav accent-meta mt-3">
                    {item.company}
                  </p>
                </div>

                <div>
                  <h3 className="display-title text-3xl sm:text-4xl">{item.role}</h3>
                  <p className="body-copy mt-4">
                    {item.summary}
                  </p>
                  <ul className="list-copy mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="pt-20 sm:pt-24">
          <SectionHeading
            index="04"
            eyebrow="Selected Work"
            title="Projects that show range without feeling scattered."
            description="I prefer a tight set of examples that say something precise about how I work."
          />

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="grid gap-5 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <blockquote
                  key={testimonial.author}
                  className="paper-card page-reveal p-6 sm:p-7"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="body-copy text-[var(--ink)]">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 border-t border-[var(--line)] pt-4">
                    <p className="mono-nav accent-meta">
                      {testimonial.author}
                    </p>
                    <p className="support-copy mt-1">{testimonial.meta}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            <aside className="paper-card page-reveal p-6 sm:p-7" style={{ animationDelay: "180ms" }}>
              <p className="tiny-note accent-meta">Credentials</p>
              <h3 className="display-title mt-3 text-3xl">Selected certifications</h3>
              <ul className="mt-6 space-y-3">
                {certifications.map((item) => (
                  <li key={item} className="support-copy flex items-start gap-3">
                    <Icon icon="solar:verified-check-bold" width={18} height={18} className="mt-1 text-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="contact" className="pt-20 sm:pt-24">
          <SectionHeading
            index="05"
            eyebrow="Contact"
            title="If the work is serious, I’m interested."
            description="The best fit is usually product or platform work with meaningful complexity, but I’m open to strong freelance and full-time opportunities."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="grid gap-5">
              <div className="paper-panel page-reveal p-7 sm:p-9">
                <p className="tiny-note">Direct</p>
                <div className="mt-5 space-y-4">
                  <Link href="mailto:lightify6@gmail.com" className="line-link flex items-center justify-between">
                    <span>lightify6@gmail.com</span>
                    <Icon icon="solar:arrow-right-up-linear" width={18} height={18} />
                  </Link>
                  <Link href="/CV.pdf" className="line-link flex items-center justify-between">
                    <span>Curriculum vitae</span>
                    <Icon icon="solar:download-linear" width={18} height={18} />
                  </Link>
                  <Link
                    href="https://github.com/lightify97"
                    target="_blank"
                    rel="noreferrer"
                    className="line-link flex items-center justify-between"
                  >
                    <span>Code samples</span>
                    <Icon icon="solar:arrow-right-up-linear" width={18} height={18} />
                  </Link>
                </div>
              </div>

              <div className="paper-card page-reveal p-7 sm:p-9" style={{ animationDelay: "120ms" }}>
                <p className="tiny-note">Good fits</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge-pill">Platform engineering</span>
                  <span className="badge-pill">Analytical products</span>
                  <span className="badge-pill">Full-stack product builds</span>
                  <span className="badge-pill">AI integration</span>
                </div>
              </div>
            </div>

            <form className="paper-panel page-reveal p-7 sm:p-9" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between gap-4">
                <p className="tiny-note">Message</p>
                <span className="support-copy">{Math.round(completion * 100)}% ready</span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--paper-strong)]">
                <div
                  className="h-full rounded-full bg-[var(--accent)] transition-all duration-300"
                  style={{ width: `${completion * 100}%` }}
                />
              </div>

              <div className="mt-8 grid gap-5">
                <label className="grid gap-2">
                  <span className="tiny-note">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, name: event.target.value }))
                    }
                    className="field-input"
                    placeholder="Your name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="tiny-note">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, email: event.target.value }))
                    }
                    className="field-input"
                    placeholder="you@company.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="tiny-note">Project note</span>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((current) => ({ ...current, message: event.target.value }))
                    }
                    className="field-input min-h-40 resize-y"
                    placeholder="What are you building, and what do you need help with?"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mono-button rounded-full bg-[var(--ink)] px-6 py-3 text-[var(--paper)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending" : "Send message"}
                </button>

                {status === "success" && (
                  <p className="support-copy">
                    Message sent. I&apos;ll get back to you soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="support-copy">
                    Send failed. Email me directly at lightify6@gmail.com.
                  </p>
                )}
                {status === "config" && (
                  <p className="support-copy">
                    Email service is not configured here yet. Use the direct email link instead.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
=======
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Experience />
        <Stack />
        <Testimonials />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05] dark:opacity-[0.07]" />
      <RevealObserver />
    </>
  );
}
>>>>>>> origin/claude/practical-ptolemy-3wc9zo
