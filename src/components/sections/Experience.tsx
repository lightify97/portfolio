import Section from "@/components/ui/Section";
import { experience, type Role } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="relative pl-5 leading-relaxed text-muted">
          <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-2.5 bg-subtle" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <article data-reveal className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
      <p className="pt-1 font-mono text-sm text-subtle">{role.period}</p>

      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          {role.title}
          <span className="text-muted"> · </span>
          {role.companyUrl ? (
            <a href={role.companyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5 hover:text-accent">
              {role.company}
              <ArrowUpRight className="size-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
            </a>
          ) : (
            role.company
          )}
        </h3>
        <p className="mt-1 text-muted">{role.context}</p>

        {role.groups && (
          <div className="mt-6 grid gap-x-10 gap-y-7 lg:grid-cols-2">
            {role.groups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-sm font-medium text-fg">{group.title}</h4>
                <Bullets items={group.items} />
              </div>
            ))}
          </div>
        )}

        {role.highlights && (
          <div className="mt-5">
            <Bullets items={role.highlights} />
          </div>
        )}

        {role.tech && (
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
            {role.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Experience" intro="Where I've worked, and what I shipped there.">
      <div className="space-y-16">
        {experience.map((role) => (
          <RoleEntry key={`${role.company}-${role.title}`} role={role} />
        ))}
      </div>
    </Section>
  );
}
