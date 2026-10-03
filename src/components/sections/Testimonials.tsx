"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/profile";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="wrap">
        <SectionTitle index="03" title="Kind words" note="From clients I've built products with." />

        <div data-reveal className="grid gap-8 md:grid-cols-12">
          <p className="tag md:col-span-2" aria-live="polite">
            <span className="text-fg">{pad(index + 1)}</span> / {pad(count)}
          </p>

          <div className="md:col-span-10">
            {/* Every quote shares one grid cell, so the block keeps the height of the longest. */}
            <div className="grid">
              {testimonials.map((t, i) => (
                <figure
                  key={t.author}
                  aria-hidden={i !== index}
                  className={`col-start-1 row-start-1 transition-all duration-700 ease-smooth ${
                    i === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <blockquote className="text-[clamp(1.6rem,3.3vw,2.9rem)] font-medium leading-[1.14] tracking-[-0.025em]">
                    <span className="text-accent">“</span>
                    {t.quote}
                    <span className="text-accent">”</span>
                  </blockquote>
                  <figcaption className="mt-10">
                    <p className="text-lg font-semibold">{t.author}</p>
                    <p className="tag mt-1">
                      {t.role}, {t.company}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="inline-flex size-12 items-center justify-center rounded-full border border-fg/20 transition-colors hover:border-accent hover:bg-accent hover:text-ink">
                  <ArrowLeft className="size-5" />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="inline-flex size-12 items-center justify-center rounded-full border border-fg/20 transition-colors hover:border-accent hover:bg-accent hover:text-ink">
                  <ArrowRight className="size-5" />
                </button>
              </div>
              <div className="flex flex-1 gap-1.5" aria-hidden>
                {testimonials.map((t, i) => (
                  <span key={t.author} className={`h-0.5 flex-1 transition-colors duration-500 ${i === index ? "bg-accent" : "bg-line"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
