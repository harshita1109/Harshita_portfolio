import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container-content flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <p className="font-display font-semibold text-text">{profile.name}</p>
          <p className="font-mono text-small text-muted">{profile.roles.join(" · ")}</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="font-mono text-small text-muted">© 2026</p>
          <a
            href="#home"
            className="font-mono text-small text-muted transition-colors hover:text-text"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
