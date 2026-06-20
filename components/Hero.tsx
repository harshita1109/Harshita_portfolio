"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { SignalMesh } from "./SignalMesh";
import { RoleRotator } from "./RoleRotator";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <SignalMesh />
      {/* soft radial vignette so text stays legible over the mesh */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(var(--bg))_85%)]" />

      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 font-mono text-small text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            {profile.openTo}
          </p>

          <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] text-text sm:text-[3.5rem] md:text-display">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-h3 font-medium text-text">
            I build &amp; ship <RoleRotator roles={profile.roles} />
          </p>

          <p className="mt-5 max-w-2xl text-lead text-muted">{profile.sub}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border px-6 py-3 font-medium text-text transition-colors hover:border-indigo"
            >
              Get in touch
            </a>
          </div>

          <p className="mt-8 font-mono text-small text-muted">
            {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
