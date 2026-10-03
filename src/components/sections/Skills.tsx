import SectionBlock from "@/components/ui/SectionBlock";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <SectionBlock id="skills" title="Skills">
      <dl data-reveal className="space-y-6">
        {skills.map((row) => (
          <div key={row.group} className="grid gap-2 sm:grid-cols-8 sm:gap-6">
            <dt className="text-xs font-semibold uppercase tracking-wide text-fg sm:col-span-2 sm:mt-1.5">{row.group}</dt>
            <dd className="sm:col-span-6">
              <ul className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <li key={item} className="pill">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </SectionBlock>
  );
}
