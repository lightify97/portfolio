import CertificateList from "@/components/ui/CertificateList";
import SectionBlock from "@/components/ui/SectionBlock";
import { certificates, education } from "@/data/profile";

export default function Credentials() {
  return (
    <SectionBlock id="credentials" title="Credentials">
      <div data-reveal>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wide text-fg">Education</h3>
        <ul className="space-y-5">
          {education.map((item) => (
            <li key={item.degree} className="grid gap-1 sm:grid-cols-8 sm:gap-6">
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-subtle sm:col-span-2">{item.period}</p>
              <div className="sm:col-span-6">
                <p className="font-medium text-fg">{item.degree}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent">
                  {item.school}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal className="mt-14">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-fg">Certifications</h3>
        <CertificateList certificates={certificates} />
      </div>
    </SectionBlock>
  );
}
