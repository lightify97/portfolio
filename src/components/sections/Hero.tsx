import Emphasis from "@/components/ui/Emphasis";
import SocialLinks from "@/components/ui/SocialLinks";
import StackVisual from "@/components/ui/StackVisual";
import { profile, stats } from "@/data/profile";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="pb-16 pt-24 sm:pt-28 md:pb-24">
      <div className="wrap">
        <div data-reveal className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-line pb-4">
          <p className="tag">{profile.role}</p>
          <p className="tag hidden sm:block">{profile.location}</p>
          <a href="#contact" className="tag inline-flex items-center gap-2 text-fg hover:text-accent">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </a>
        </div>

        <div className="mt-8 grid items-center gap-6 lg:mt-12 lg:grid-cols-[1fr_auto]">
          <h1 data-reveal className="text-[clamp(4.2rem,15.5vw,11rem)] font-bold lg:text-[min(9.4vw,10.5rem)] leading-[0.82] tracking-[-0.055em]">
            <span className="block">Muhammad</span>
            <span className="block lg:pl-[0.6em]">
              Ramazan<span className="text-accent">.</span>
            </span>
          </h1>
          <div data-reveal className="mx-auto w-full max-w-[360px] lg:w-[min(420px,30vw)] lg:max-w-none">
            <StackVisual className="w-full" />
          </div>
        </div>

        <div data-reveal className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-12">
          <p className="text-[clamp(1.6rem,3.2vw,2.6rem)] font-medium leading-[1.12] tracking-[-0.025em] md:col-span-7">
            <Emphasis text={profile.headline} />
          </p>
          <div className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-muted">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Start a conversation
                <ArrowDownRight className="size-4" aria-hidden />
              </a>
              <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Résumé
              </a>
            </div>
            <SocialLinks className="-ml-2.5 mt-5" />
          </div>
        </div>

        <dl data-reveal className="mt-16 grid grid-cols-3 border-t border-line">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`flex flex-col-reverse justify-end pt-6 ${i > 0 ? "border-l border-line pl-4 sm:pl-8" : ""}`}>
              <dt className="tag mt-2 normal-case tracking-normal sm:text-xs">{stat.label}</dt>
              <dd className="text-[clamp(1.4rem,4.5vw,3.5rem)] font-bold leading-none tracking-[-0.04em]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
