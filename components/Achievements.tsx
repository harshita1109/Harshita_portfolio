import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Beyond the code">
      <div className="grid gap-4 sm:grid-cols-2">
        {profile.achievements.map((a, i) => (
          <Reveal key={i} delay={(i % 2) * 0.06}>
            <div className="card card-hover flex h-full items-start gap-3 p-5">
              <span className="mt-0.5 font-mono text-signal">✦</span>
              <p className="text-muted">{a}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
