import ContactForm from "@/components/ui/ContactForm";
import SectionBlock from "@/components/ui/SectionBlock";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <SectionBlock id="contact" title="Contact">
      <div data-reveal>
        <p className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">Let&apos;s build something together.</p>
        <p className="mt-4">
          Have a product to build or a system to improve? Send a message below or email me at{" "}
          <a href={`mailto:${profile.email}`} className="link">
            {profile.email}
          </a>
          .
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </SectionBlock>
  );
}
