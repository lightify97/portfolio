import CertificateList from "@/components/ui/CertificateList";
import SectionTitle from "@/components/ui/SectionTitle";
import { certificates, education } from "@/data/profile";

export default function Credentials() {
  return (
    <section id="credentials" className="py-20 md:py-32">
      <div className="wrap">
        <SectionTitle index="04" title="Credentials" />

        <div className="grid gap-16 md:grid-cols-12">
          <div data-reveal className="md:col-span-5">
            <p className="tag mb-6">Education</p>
            <ul className="space-y-8">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="tag text-accent">{item.period}</p>
                  <p className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.02em]">{item.degree}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-muted hover:text-accent">
                    {item.school}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="md:col-span-7">
            <p className="tag mb-3">Certifications</p>
            <CertificateList certificates={certificates} />
          </div>
        </div>
      </div>
    </section>
  );
}
