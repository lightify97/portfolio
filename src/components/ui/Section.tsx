import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, index, title, intro, children }: Props) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <div className="container">
        <header data-reveal className="mb-14 grid gap-5 border-t border-line pt-8 md:mb-20 md:grid-cols-[220px_1fr] md:gap-12">
          <p className="eyebrow pt-2">
            <span className="text-accent">{index}</span>
            <span className="mx-2 text-line">/</span>
            {title}
          </p>
          {intro && (
            <h2 className="max-w-2xl font-serif text-[2rem] leading-[1.15] tracking-[-0.01em] sm:text-[2.6rem]">{intro}</h2>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
