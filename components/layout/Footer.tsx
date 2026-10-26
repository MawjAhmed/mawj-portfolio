
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="container flex flex-col gap-3 border-t border-[#795b43]/15 py-6 text-xs text-[#795b43] sm:flex-row sm:items-center sm:justify-between"
    >
      <p>© 2026 {profile.name}</p>

      <a
        href={`mailto:${profile.email}`}
        className="transition-colors hover:text-[#30231d]"
      >
        Let&apos;s build something meaningful.
      </a>
    </footer>
  );
}
