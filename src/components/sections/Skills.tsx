import Section from "@/components/ui/Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" index="02" title="Skills" intro="Comfortable across the stack, from the interface down to the data and infrastructure.">
      <dl data-reveal className="md:ml-[calc(220px+3rem)]">
        {skills.map((row) => (
          <div key={row.group} className="grid gap-2 border-b border-line py-6 first:pt-0 sm:grid-cols-[180px_1fr] sm:gap-8">
            <dt className="font-serif text-xl">{row.group}</dt>
            <dd>
              <ul className="dotlist leading-relaxed text-muted">
                {row.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
