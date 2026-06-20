import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Verified credentials">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((c, i) => {
          const hasFile = Boolean(c.url);
          const Card = (
            <div className="card card-hover flex h-full flex-col justify-between p-5">
              <div>
                <h3 className="font-display text-base font-semibold text-text">
                  {c.title}
                </h3>
                <p className="mt-1 text-small text-muted">{c.issuer}</p>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-small text-muted">{c.date}</span>
                <span className="font-mono text-small text-signal">
                  {hasFile ? "View →" : "Coming soon"}
                </span>
              </div>
            </div>
          );
          return (
            <Reveal key={c.title} delay={(i % 3) * 0.06}>
              {hasFile ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {Card}
                </a>
              ) : (
                Card
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
