import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";
export const alt = `${profile.name} — AI / ML Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0B12",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(91,91,240,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(154,107,255,0.25), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "linear-gradient(120deg, #5B5BF0, #9A6BFF)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ color: "#36E0D0", fontSize: 26, letterSpacing: 2 }}>
            {profile.openTo}
          </div>
        </div>
        <div style={{ color: "#ECECF4", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
          {profile.name}
        </div>
        <div style={{ color: "#9A6BFF", fontSize: 40, fontWeight: 600, marginTop: 12 }}>
          {profile.roles.join("  ·  ")}
        </div>
        <div style={{ color: "#8A8AA0", fontSize: 30, marginTop: 24, maxWidth: 900 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
