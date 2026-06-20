"use client";

import { motion } from "framer-motion";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-[72px] md:py-[120px] ${className}`}
    >
      <div className="container-content">
        {(eyebrow || title) && (
          <Reveal>
            <header className="mb-12 md:mb-16">
              {eyebrow && (
                <p className="mb-3 font-mono text-small uppercase tracking-widest text-signal">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className="font-display text-h2 font-bold text-text">{title}</h2>
              )}
            </header>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
