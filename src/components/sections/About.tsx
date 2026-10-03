import SectionBlock from "@/components/ui/SectionBlock";
import { profile, stats } from "@/data/profile";

export default function About() {
  return (
    <SectionBlock id="about" title="About">
      <div data-reveal>
        <p className="text-[1.05rem]">{profile.summary}</p>
        <p className="mt-4">
          If you need an engineer who can own a product end to end,{" "}
          <a href="#contact" className="link">
            let&apos;s talk
          </a>
          .
        </p>

        <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-xs leading-snug sm:text-sm">{stat.label}</dt>
              <dd className="text-lg font-bold tracking-tight text-fg sm:text-2xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionBlock>
  );
}
