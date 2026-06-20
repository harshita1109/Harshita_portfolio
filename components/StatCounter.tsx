"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { Stat } from "@/data/profile";

export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState("0");

  // numeric target if the value parses to a number, else show as-is
  const numeric = Number(stat.value);
  const isNumeric = !Number.isNaN(numeric);

  useEffect(() => {
    if (!inView) return;
    if (!isNumeric) {
      setDisplay(stat.value);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(stat.value);
      return;
    }
    const duration = 900;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = numeric * eased;
      // preserve one decimal for values like 8.0
      const decimals = stat.value.includes(".") ? 1 : 0;
      setDisplay(current.toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, numeric, stat.value]);

  return (
    <div ref={ref} className="card p-5">
      <div className="font-mono text-h3 font-bold text-text">
        {display}
        {stat.suffix && <span className="text-muted">{stat.suffix}</span>}
      </div>
      <div className="mt-1 text-small text-muted">{stat.label}</div>
    </div>
  );
}
