import Section from "@/components/ui/Section";
import { projects } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects" index="02" title="Projects" intro="Selected client work, built end to end and running in production.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            data-reveal
            className="group relative flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-subtle sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0 after:rounded-xl">
                  {project.name}
                </a>
              </h3>
              <ArrowUpRight
                className="size-5 shrink-0 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden
              />
            </div>
            <p className="mt-1 font-mono text-xs text-subtle">{project.url.replace("https://", "")}</p>

            <p className="mt-5 leading-relaxed text-muted">{project.summary}</p>

            <ul className="mt-5 space-y-2 text-sm text-muted">
              {project.points.map((point) => (
                <li key={point} className="relative pl-5">
                  <span aria-hidden className="absolute left-0 top-[0.65em] h-px w-2.5 bg-subtle" />
                  {point}
                </li>
              ))}
            </ul>

            <ul className="mt-auto flex flex-wrap gap-1.5 pt-8" aria-label="Technologies">
              {project.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
