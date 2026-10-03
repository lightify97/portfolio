import { profile, stats } from "@/data/profile";
import { ImageResponse } from "next/og";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0e0e0d",
          color: "#f0eee9",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, color: "#ff622b", letterSpacing: 4 }}>MRAMAZAN.DEV</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 38, color: "#a3a099", marginTop: 12 }}>{profile.role}</div>
        </div>
        <div style={{ display: "flex", gap: 56, fontSize: 24, color: "#a3a099" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#f0eee9", fontSize: 36, fontWeight: 700 }}>{s.value}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
