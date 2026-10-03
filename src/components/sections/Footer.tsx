import SocialLinks from "@/components/ui/SocialLinks";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl">{profile.name}</p>
            <p className="mt-1 text-sm text-subtle">
              © {new Date().getFullYear()} · {profile.role}
            </p>
          </div>
          <SocialLinks className="-ml-2 sm:ml-0" />
        </div>
      </div>
    </footer>
  );
}
