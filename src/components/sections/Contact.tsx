import ContactForm from "@/components/ui/ContactForm";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

const channels = [
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "GitHub", href: profile.socials.github },
  { label: "Upwork", href: profile.socials.upwork },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" title="Contact" intro="Have a product to build or a system to improve? I'd like to hear about it.">
      <div className="grid gap-14 md:grid-cols-[220px_1fr] md:gap-12">
        <div data-reveal className="space-y-8 text-sm">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a href={`mailto:${profile.email}`} className="link break-all text-base">
              {profile.email}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Based in</p>
            <p className="text-base">{profile.location}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Elsewhere</p>
            <ul className="space-y-1.5">
              {channels.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-base hover:text-accent">
                    {c.label}
                    <ArrowUpRight className="size-3.5 text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
