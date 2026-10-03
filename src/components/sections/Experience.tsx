import Section from "@/components/ui/Section";
import { experience, type Role } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="relative pl-5 text-[0.95rem] leading-relaxed text-muted">
          <span aria-hidden className="absolute left-0 top-[0.8em] h-px w-2.5 bg-accent/60" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <article data-reveal className="grid gap-5 border-t border-line pt-10 first:border-t-0 first:pt-0 md:grid-cols-[220px_1fr] md:gap-12">
      <p className="text-sm tabular-nums text-subtle md:pt-2.5">{role.period}</p>

      <div>
        <h3 className="font-serif text-[1.75rem] leading-tight tracking-tight">{role.title}</h3>
        <p className="mt-2 text-muted">
          {role.companyUrl ? (
            <a href={role.companyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5 font-medium text-fg hover:text-accent">
              {role.company}
              <ArrowUpRight className="size-3.5 text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
            </a>
          ) : (
            <span className="font-medium text-fg">{role.company}</span>
          )}
          <span className="mx-2 text-line">—</span>
          {role.context}
        </p>

        {role.groups && (
          <div className="mt-10 grid gap-x-14 gap-y-10 lg:grid-cols-2">
            {role.groups.map((group) => (
              <div key={group.title}>
                <h4 className="eyebrow mb-4">{group.title}</h4>
                <Bullets items={group.items} />
              </div>
            ))}
          </div>
        )}

        {role.highlights && (
          <div className="mt-8">
            <Bullets items={role.highlights} />
          </div>
        )}

        {role.tech && (
          <ul className="dotlist mt-10 text-sm text-subtle" aria-label="Technologies">
            {role.tech.map((t) => (
              <li key={t}>{t}</li>
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
