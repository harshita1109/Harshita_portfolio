"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient "inference field" — low-opacity nodes drifting with thin
 * links between near neighbors, reading as a live signal mesh rather
 * than generic particles. Honors prefers-reduced-motion (renders a
 * single static frame, no animation loop).
 */
export function SignalMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    const COUNT = 46;
    const LINK_DIST = 150;

    const seed = (i: number) => {
      // deterministic-ish spread without Math.random dependency at init
      const a = Math.sin(i * 12.9898) * 43758.5453;
      return a - Math.floor(a);
    };

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: COUNT }, (_, i) => ({
        x: seed(i) * width,
        y: seed(i + 100) * height,
        vx: (seed(i + 200) - 0.5) * 0.25,
        vy: (seed(i + 300) - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(91, 91, 240, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        // a few nodes glow cyan as "active signals"
        const active = i % 11 === 0;
        ctx.fillStyle = active
          ? "rgba(54, 224, 208, 0.9)"
          : "rgba(154, 107, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, active ? 2.4 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    init();
    draw();

    const onResize = () => {
      init();
      if (reduced) draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ opacity: "var(--mesh-opacity)" }}
    />
  );
}
