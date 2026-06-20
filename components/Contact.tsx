import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";

export function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    {
      label: "LinkedIn",
      value: profile.links.linkedin.replace("https://www.", "").replace("https://", ""),
      href: profile.links.linkedin,
    },
    {
      label: "GitHub",
      value: profile.links.github.replace("https://", ""),
      href: profile.links.github,
    },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <Reveal>
          <p className="text-lead text-muted">
            I&apos;m open to AI/ML engineering roles — remote or relocation. If you&apos;re
            hiring or want to talk shop about LLMs, RAG, or computer vision, my inbox is open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
          >
            Say hello
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y">
            {items.map((it) => (
              <li key={it.label}>
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-indigo"
                >
                  <span className="font-mono text-small uppercase tracking-wide text-muted">
                    {it.label}
                  </span>
                  <span className="truncate text-text">{it.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
