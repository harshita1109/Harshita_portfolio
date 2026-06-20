import { profile, type Project } from "@/data/profile";
import { Section, Reveal } from "./Section";

function RepoLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-small text-text hover:text-indigo"
        >
          GitHub →
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-small text-signal hover:underline"
        >
          Live demo →
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className="card relative overflow-hidden p-7 md:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent opacity-10 blur-3xl" />
      <p className="mb-4 inline-flex items-center gap-2 font-mono text-small uppercase tracking-widest text-signal">
        ★ Featured
      </p>
      <h3 className="font-display text-h3 font-bold text-text md:text-h2">
        {project.name}
      </h3>
      <p className="mt-2 text-lead text-muted">{project.tagline}</p>

      <div className="mt-7 grid gap-7 md:grid-cols-2">
        <div>
          <p className="font-mono text-small uppercase tracking-wide text-indigo">Problem</p>
          <p className="mt-2 text-muted">{project.problem}</p>
          <p className="mt-5 font-mono text-small uppercase tracking-wide text-indigo">Solution</p>
          <p className="mt-2 text-muted">{project.solution}</p>
        </div>
        <div>
          <p className="font-mono text-small uppercase tracking-wide text-indigo">Impact</p>
          <ul className="mt-2 space-y-2">
            {project.impact.map((m, i) => (
              <li key={i} className="flex gap-3 text-text">
                <span className="font-mono text-signal">▸</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 font-mono text-small uppercase tracking-wide text-indigo">Stack</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7">
        <RepoLinks project={project} />
      </div>
    </div>
  );
}

function StandardCard({ project }: { project: Project }) {
  return (
    <div className="card card-hover flex h-full flex-col p-6">
      <h3 className="font-display text-h3 font-semibold text-text">{project.name}</h3>
      <p className="mt-1 text-small text-muted">{project.tagline}</p>
      <p className="mt-4 text-muted">{project.solution}</p>
      {project.impact.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.impact.map((m, i) => (
            <li key={i} className="flex gap-2 text-small text-muted">
              <span className="font-mono text-signal">▸</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-5">
        <RepoLinks project={project} />
      </div>
    </div>
  );
}

export function Projects() {
  const featured = profile.projects.filter((p) => p.featured);
  const standard = profile.projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="Projects" title="Featured work">
      <div className="space-y-6">
        {featured.map((p) => (
          <Reveal key={p.name}>
            <FeaturedCard project={p} />
          </Reveal>
        ))}

        <div className="grid gap-6 md:grid-cols-3">
          {standard.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <StandardCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
