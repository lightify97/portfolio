import ContactForm from "@/components/ui/ContactForm";
import Section from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const channels = [
  { label: "LinkedIn", href: profile.socials.linkedin, value: "in/m-ramazan" },
  { label: "GitHub", href: profile.socials.github, value: "lightify97" },
  { label: "Upwork", href: profile.socials.upwork, value: "Top Rated profile" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      index="05"
      title="Contact"
      intro="Have a product to build or a system to improve? I'd like to hear about it."
    >
      <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-10">
        <div data-reveal className="space-y-6 text-sm">
          <div>
            <p className="mb-1 text-subtle">Email</p>
            <a href={`mailto:${profile.email}`} className="link inline-flex items-center gap-1.5 break-all font-medium">
              <Mail className="size-4 shrink-0" aria-hidden />
              {profile.email}
            </a>
          </div>
          <div>
            <p className="mb-1 text-subtle">Based in</p>
            <p className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="size-4" aria-hidden />
              {profile.location}
            </p>
          </div>
          <div>
            <p className="mb-2 text-subtle">Elsewhere</p>
            <ul className="space-y-2">
              {channels.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 font-medium hover:text-accent">
                    {c.label}
                    <ArrowUpRight className="size-3.5 text-subtle group-hover:text-accent" aria-hidden />
                  </a>
                  <span className="block text-muted">{c.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div data-reveal className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
