import type { ReactNode } from "react";

type Props = { id: string; title: string; children: ReactNode };

// A content section. On small screens its title sticks to the top while scrolling;
// on large screens the sidebar navigation takes that role, so the title is visually hidden.
export default function SectionBlock({ id, title, children }: Props) {
  return (
    <section id={id} aria-label={title} className="mb-20 scroll-mt-16 md:mb-24 lg:mb-28 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-bg/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-fg">{title}</h2>
      </div>
      {children}
    </section>
  );
}
