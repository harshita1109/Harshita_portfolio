import { profile } from "@/data/profile";
import { Section, Reveal } from "./Section";

export function Skills() {
  const categories = Object.entries(profile.skills);
  return (
    <Section id="skills" eyebrow="Skills" title="Toolbox">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([category, items], i) => (
          <Reveal key={category} delay={(i % 3) * 0.06}>
            <div className="card card-hover h-full p-5">
              <h3 className="mb-4 font-display text-base font-semibold text-text">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
