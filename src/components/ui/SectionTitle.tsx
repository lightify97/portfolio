type Props = { index: string; title: string; note?: string };

export default function SectionTitle({ index, title, note }: Props) {
  return (
    <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-b border-line pb-6 md:mb-16">
      <h2 className="text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.85] tracking-[-0.05em]">
        {title}
        <span className="text-accent">.</span>
      </h2>
      <div className="max-w-xs sm:text-right">
        <p className="tag">({index})</p>
        {note && <p className="mt-2 text-sm text-muted">{note}</p>}
      </div>
    </div>
  );
}
