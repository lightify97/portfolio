import CertificateList from "@/components/ui/CertificateList";
import Section from "@/components/ui/Section";
import { certificates, education } from "@/data/profile";

export default function Credentials() {
  return (
    <Section id="credentials" index="05" title="Credentials" intro="Formal education, plus coursework I've completed along the way.">
      <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-10">
        <h3 data-reveal className="text-sm font-medium">
          Education
        </h3>
        <ul data-reveal className="divide-y divide-line border-y border-line">
          {education.map((item) => (
            <li key={item.degree} className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
              <div>
                <p className="font-medium">{item.degree}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="link text-sm text-muted">
                  {item.school}
                </a>
              </div>
              <p className="shrink-0 font-mono text-sm text-subtle">{item.period}</p>
            </li>
          ))}
        </ul>

        <h3 data-reveal className="text-sm font-medium">
          Certifications
        </h3>
        <div data-reveal>
          <CertificateList certificates={certificates} />
        </div>
      </div>
    </Section>
  );
}
