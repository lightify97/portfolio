import Emphasis from "@/components/ui/Emphasis";
import SocialLinks from "@/components/ui/SocialLinks";
import { profile, stats } from "@/data/profile";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-36 sm:pb-16 sm:pt-48">
      {/* A soft warm glow behind the name */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[560px] w-[900px] -translate-x-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(var(--accent)/0.07),transparent)] blur-3xl"
      />

      <div className="container">
        <div data-reveal>
          <a href="#contact" className="group mb-10 inline-flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-fg">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-50 motion-reduce:hidden" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </a>

          <h1 className="font-serif text-[3.4rem] leading-[0.95] tracking-[-0.02em] sm:text-7xl md:text-[6.5rem]">
            {profile.name}
          </h1>
          <p className="eyebrow mt-6 flex flex-wrap gap-x-3 gap-y-1 sm:mt-8">
            <span className="text-fg/70">{profile.role}</span>
            <span aria-hidden className="hidden text-line sm:inline">
              —
            </span>
            <span>{profile.location}</span>
          </p>
        </div>

        <div data-reveal className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[1.25fr_1fr] md:gap-16">
          <p className="font-serif text-[1.75rem] leading-[1.25] text-fg sm:text-[2.1rem]">
            <Emphasis text={profile.headline} />
          </p>
          <div className="md:pt-2">
            <p className="leading-relaxed text-muted">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary group">
                Get in touch
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Résumé
              </a>
            </div>
            <SocialLinks className="-ml-2 mt-6" />
          </div>
        </div>

        <dl data-reveal className="mt-20 grid gap-8 border-t border-line pt-10 sm:mt-24 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end sm:px-8 sm:first:pl-0">
              <dt className="mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="font-serif text-3xl tracking-tight sm:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
