import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";

export function GitHub() {
  const repos = profile.projects.filter((p) => p.github);
  return (
    <Section id="github" eyebrow="Code" title="On GitHub">
      <Reveal>
        <p className="mb-6 text-lead text-muted">
          The work behind the projects above lives here —{" "}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text underline decoration-indigo underline-offset-4 hover:text-indigo"
          >
            {profile.links.github.replace("https://", "")}
          </a>
          .
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {repos.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 0.06}>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover block h-full p-5"
            >
              <p className="font-mono text-small text-muted">repo</p>
              <h3 className="mt-1 font-display text-base font-semibold text-text">
                {p.name}
              </h3>
              <p className="mt-2 text-small text-muted">{p.tagline}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
