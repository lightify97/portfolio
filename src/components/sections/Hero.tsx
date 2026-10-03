import SocialLinks from "@/components/ui/SocialLinks";
import { profile, stats } from "@/data/profile";
import { ArrowRight, Download, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      {/* Faint grid, fading out towards the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(var(--line))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--line))_1px,transparent_1px)] bg-[size:56px_56px] opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="container">
        <div data-reveal className="max-w-3xl">
          <a
            href="#contact"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted transition-colors hover:border-subtle hover:text-fg"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </a>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">{profile.name}</h1>
          <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg text-muted sm:text-xl">
            <span>{profile.role}</span>
            <span aria-hidden className="hidden text-line sm:inline">
              |
            </span>
            <span className="inline-flex items-center gap-1.5 text-base">
              <MapPin className="size-4" aria-hidden />
              {profile.location}
            </span>
          </p>

          <p className="mt-8 text-xl leading-relaxed text-fg sm:text-2xl sm:leading-relaxed">{profile.headline}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Get in touch
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Download className="size-4" aria-hidden />
              Download CV
            </a>
            <SocialLinks className="sm:ml-3" />
          </div>
        </div>

        <dl
          data-reveal
          className="mt-20 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end bg-surface p-5 sm:p-6">
              <dt className="mt-1.5 text-sm leading-snug text-muted">{stat.label}</dt>
              <dd className="text-xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
