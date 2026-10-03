import SocialLinks from "@/components/ui/SocialLinks";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container flex flex-col items-start justify-between gap-4 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <SocialLinks className="-ml-2 sm:ml-0" />
      </div>
    </footer>
  );
}
