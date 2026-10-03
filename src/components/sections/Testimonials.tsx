import Section from "@/components/ui/Section";
import { testimonials } from "@/data/profile";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <Section id="testimonials" index="03" title="Testimonials" intro="What clients have said after working with me.">
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <figure key={t.author} data-reveal className="flex flex-col rounded-xl border border-line bg-surface p-6 sm:p-8">
            <span aria-hidden className="font-serif text-4xl leading-none text-accent/60">
              &ldquo;
            </span>
            <blockquote className="mt-2 flex-1 leading-relaxed text-fg/90">{t.quote}</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
              <span
                aria-hidden
                className="inline-flex size-9 items-center justify-center rounded-full bg-line font-mono text-xs font-semibold text-muted"
              >
                {initials(t.author)}
              </span>
              <span className="text-sm">
                <span className="block font-medium">{t.author}</span>
                <span className="text-muted">
                  {t.role}, {t.company}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
