import SectionTitle from "@/components/ui/SectionTitle";
import { skills } from "@/data/profile";

export default function Stack() {
  return (
    <section id="stack" className="py-20 md:py-32">
      <div className="wrap">
        <SectionTitle index="02" title="The stack" note="The tools I reach for, from the interface down to the infrastructure." />

        <ul data-reveal className="-mt-12 md:-mt-16">
          {skills.map((row, i) => (
            <li key={row.group} className="group relative overflow-hidden border-b border-line">
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-smooth group-hover:scale-y-100"
              />
              <div className="relative grid gap-2 px-1 py-6 transition-colors duration-500 group-hover:text-ink md:grid-cols-[90px_320px_1fr] md:items-baseline md:gap-6 md:px-3 md:py-8">
                <span className="tag transition-colors duration-500 group-hover:text-ink/70">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{row.group}</span>
                <span className="leading-relaxed text-muted transition-colors duration-500 group-hover:text-ink">
                  {row.items.join("  /  ")}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
