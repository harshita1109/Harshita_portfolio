import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";
import { StatCounter } from "./StatCounter";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="The unglamorous parts of AI">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal className="space-y-5">
          {profile.about.map((p, i) => (
            <p key={i} className="text-lead text-muted">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map((s) => (
              <StatCounter key={s.label} stat={s} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
