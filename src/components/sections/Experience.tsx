import SectionTitle from "@/components/ui/SectionTitle";
import { experience } from "@/data/profile";
import { Plus } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="wrap">
        <SectionTitle index="01" title="Experience" note="Open a role to see what I shipped there." />

        <div data-reveal>
          {experience.map((role, i) => (
            <details key={role.company} open={i === 0} className="group border-b border-line">
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-7 md:grid-cols-[200px_1fr_260px_auto] md:py-9 [&::-webkit-details-marker]:hidden">
                <span className="tag hidden md:block">{role.period}</span>
                <span className="text-[clamp(1.6rem,3.6vw,2.8rem)] font-semibold leading-none tracking-[-0.03em] transition-colors duration-300 group-hover:text-accent">
                  {role.title}
                </span>
                <span className="hidden text-lg text-muted md:block">{role.company}</span>
                <span className="row-span-2 inline-flex size-11 items-center justify-center rounded-full border border-fg/20 transition-all duration-500 ease-smooth group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-ink md:row-span-1">
                  <Plus className="size-5" aria-hidden />
                </span>
                <span className="tag md:hidden">
                  {role.company} · {role.period}
                </span>
              </summary>

              <div className="pb-12 md:pl-[224px]">
                <p className="max-w-2xl text-lg text-muted">{role.context}</p>

                {role.groups && (
                  <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
                    {role.groups.map((group, gi) => (
                      <div key={group.title}>
                        <p className="tag mb-4 text-fg">
                          <span className="text-accent">{String(gi + 1).padStart(2, "0")}</span> {group.title}
                        </p>
                        <ul className="space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="border-t border-line pt-3 leading-relaxed text-muted">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {role.highlights && (
                  <ul className="mt-8 max-w-3xl space-y-3">
                    {role.highlights.map((item) => (
                      <li key={item} className="border-t border-line pt-3 leading-relaxed text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {role.tech && <p className="tag mt-10 leading-loose">{role.tech.join("  /  ")}</p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
