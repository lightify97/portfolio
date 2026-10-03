import Section from "@/components/ui/Section";
import { testimonials } from "@/data/profile";

export default function Testimonials() {
  return (
    <Section id="testimonials" index="03" title="Testimonials" intro="What clients have said after working with me.">
      <div className="grid gap-x-16 gap-y-16 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.author} data-reveal className="flex flex-col">
            <span aria-hidden className="-mb-6 font-serif text-7xl leading-none text-accent/70">
              &ldquo;
            </span>
            <blockquote className="flex-1 font-serif text-[1.35rem] leading-[1.45] text-fg/90">{t.quote}</blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium">{t.author}</span>
              <span className="text-muted">
                {" "}
                · {t.role}, {t.company}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
