import SectionBlock from "@/components/ui/SectionBlock";
import { testimonials } from "@/data/profile";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <SectionBlock id="testimonials" title="Testimonials">
      <ul className="group/list space-y-10">
        {testimonials.map((t) => (
          <li key={t.author} data-reveal className="card lg:-mx-6 lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
            <figure>
              <Quote className="mb-3 size-5 text-accent" aria-hidden />
              <blockquote className="text-fg/90">{t.quote}</blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-fg">{t.author}</span>
                <span>
                  {" "}
                  · {t.role}, {t.company}
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}
