import Section from "@/components/ui/Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills" intro="Comfortable across the stack, from the interface down to the data and infrastructure.">
      <dl data-reveal className="divide-y divide-line border-y border-line">
        {skills.map((row) => (
          <div key={row.group} className="grid gap-3 py-5 md:grid-cols-[200px_1fr] md:gap-10">
            <dt className="text-sm font-medium">{row.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {row.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
