import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="wrap">
        <p data-reveal className="tag">(05) Contact</p>
        <h2 data-reveal className="mt-6 text-[clamp(4.5rem,16vw,13rem)] font-bold leading-[0.8] tracking-[-0.06em]">
          Let&apos;s talk<span className="text-accent">.</span>
        </h2>

        <div className="mt-16 grid gap-14 border-t border-line pt-12 md:grid-cols-12">
          <div data-reveal className="md:col-span-5">
            <p className="text-xl leading-snug text-muted">Have a product to build or a system to improve? Tell me about it.</p>
            <a href={`mailto:${profile.email}`} className="link mt-8 inline-block break-all text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
              {profile.email}
            </a>
            <p className="tag mt-8">{profile.location}</p>
            <SocialLinks className="-ml-2.5 mt-4" />
          </div>
          <div data-reveal className="md:col-span-6 md:col-start-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
