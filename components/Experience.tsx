import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've shipped">
      <div className="relative">
        {/* timeline rail */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgb(var(--hairline)/var(--hairline-alpha))] md:left-[7px]" />
        <div className="space-y-10">
          {profile.experience.map((exp, i) => (
            <Reveal key={exp.org} delay={i * 0.08}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center">
                  <span className="h-2 w-2 rounded-full bg-indigo ring-4 ring-[rgb(var(--bg))]" />
                </span>
                <p className="font-mono text-small text-signal">{exp.dates}</p>
                <h3 className="mt-1 font-display text-h3 font-semibold text-text">
                  {exp.role}{" "}
                  <span className="text-muted">· {exp.org}</span>
                </h3>
                <p className="text-small text-muted">{exp.place}</p>
                <p className="mt-3 font-medium text-text">{exp.title}</p>
                <ul className="mt-3 space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                  {exp.demo && (
                    <a
                      href={exp.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-small text-signal hover:underline"
                    >
                      live demo →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
