import CertificateList from "@/components/ui/CertificateList";
import Section from "@/components/ui/Section";
import { certificates, education } from "@/data/profile";

export default function Credentials() {
  return (
    <Section id="credentials" index="04" title="Credentials" intro="Formal education, plus coursework I've completed along the way.">
      <div className="grid gap-x-12 gap-y-6 md:grid-cols-[220px_1fr]">
        <h3 data-reveal className="eyebrow pt-1">
          Education
        </h3>
        <ul data-reveal className="mb-12 md:mb-16">
          {education.map((item) => (
            <li key={item.degree} className="flex flex-col justify-between gap-1 border-b border-line py-5 first:pt-0 sm:flex-row sm:items-baseline sm:gap-6">
              <div>
                <p className="font-serif text-xl">{item.degree}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="link text-sm text-muted">
                  {item.school}
                </a>
              </div>
              <p className="shrink-0 text-sm tabular-nums text-subtle">{item.period}</p>
            </li>
          ))}
        </ul>

        <h3 data-reveal className="eyebrow pt-1">
          Certifications
        </h3>
        <div data-reveal>
          <CertificateList certificates={certificates} />
        </div>
      </div>
    </Section>
  );
}
