import SectionBlock from "@/components/ui/SectionBlock";
import { experience, type Role } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item} className="relative pl-4">
          <span aria-hidden className="absolute left-0 top-[0.6em] size-1 rounded-full bg-accent/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RoleCard({ role }: { role: Role }) {
  return (
    <li data-reveal className="card grid gap-2 sm:grid-cols-8 sm:gap-6 lg:-mx-6 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-subtle sm:col-span-2">{role.period}</p>

      <div className="sm:col-span-6">
        <h3 className="font-medium leading-snug text-fg">
          {role.title} ·{" "}
          {role.companyUrl ? (
            <a href={role.companyUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-baseline hover:text-accent">
              {role.company}
              <ArrowUpRight className="ml-0.5 size-3.5 self-center transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" aria-hidden />
            </a>
          ) : (
            role.company
          )}
        </h3>
        <p className="mt-1 text-sm">{role.context}</p>

        {role.groups && (
          <div className="mt-5 space-y-5">
            {role.groups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-fg">{group.title}</h4>
                <Bullets items={group.items} />
              </div>
            ))}
          </div>
        )}

        {role.highlights && (
          <div className="mt-4">
            <Bullets items={role.highlights} />
          </div>
        )}

        {role.tech && (
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
            {role.tech.map((t) => (
              <li key={t} className="pill">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <SectionBlock id="experience" title="Experience">
      <ol className="group/list space-y-12">
        {experience.map((role) => (
          <RoleCard key={`${role.company}-${role.title}`} role={role} />
        ))}
      </ol>
    </SectionBlock>
  );
}
