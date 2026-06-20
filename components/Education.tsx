import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";

export function Education() {
  const e = profile.education;
  return (
    <Section id="education" eyebrow="Education" title="Foundation">
      <Reveal>
        <div className="card p-7">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-h3 font-semibold text-text">{e.degree}</h3>
            <span className="font-mono text-small text-signal">CGPA {e.cgpa}</span>
          </div>
          <p className="mt-1 text-muted">{e.school}</p>
          <p className="font-mono text-small text-muted">{e.dates}</p>
          <div className="mt-5">
            <p className="mb-2 font-mono text-small uppercase tracking-wide text-indigo">
              Relevant coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {e.coursework.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
