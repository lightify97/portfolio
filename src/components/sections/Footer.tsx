import { profile } from "@/data/profile";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <div className="wrap">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
          <p className="tag">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <a href="#top" className="tag inline-flex items-center gap-1.5 text-fg hover:text-accent">
            Back to top
            <ArrowUp className="size-3.5" aria-hidden />
          </a>
        </div>
        <p aria-hidden className="outline-text -mb-[0.12em] select-none text-[clamp(5rem,22vw,21rem)] font-bold leading-[0.8] tracking-[-0.06em]">
          Ramazan
        </p>
      </div>
    </footer>
  );
}
