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
    <section id={id} className="border-t border-line py-20 sm:py-24">
      <div className="container">
        <header data-reveal className="mb-12 grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
          <p className="pt-1.5 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
            {index} / {title}
          </p>
          {intro && <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">{intro}</h2>}
        </header>
        {children}
      </div>
    </section>
  );
}
