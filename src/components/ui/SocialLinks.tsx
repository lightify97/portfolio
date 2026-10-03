import { profile } from "@/data/profile";
import { Mail } from "lucide-react";
import { SiGithub, SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const links = [
  { href: profile.socials.github, label: "GitHub", Icon: SiGithub },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: profile.socials.upwork, label: "Upwork", Icon: SiUpwork },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="inline-flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-line/60 hover:text-fg"
          >
            <Icon className="size-[18px]" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
