import type { CSSProperties } from "react";

// Isometric illustration of the layers I work across, bottom to top.
const layers = ["Data", "Workflows", "API", "Interface"];

const cx = 190;
const w = 150; // half-width of each slab
const h = 75; // half-height (2:1 isometric)
const t = 16; // slab thickness
const base = 360;
const gap = 68;

const pts = (p: [number, number][]) => p.map(([x, y]) => `${x},${y}`).join(" ");

export default function StackVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 460"
      role="img"
      aria-label="Diagram of the layers I build across: data, workflows, API and interface"
      className={`stack ${className}`}
    >
      {layers.map((label, i) => {
        const cy = base - i * gap;
        const top = i === layers.length - 1;
        return (
          <g key={label} className="stack-layer" style={{ "--i": i } as CSSProperties}>
            {/* left and right faces */}
            <polygon
              points={pts([[cx - w, cy], [cx, cy + h], [cx, cy + h + t], [cx - w, cy + t]])}
              className={top ? "fill-accent/80" : "fill-line"}
            />
            <polygon
              points={pts([[cx, cy + h], [cx + w, cy], [cx + w, cy + t], [cx, cy + h + t]])}
              className={top ? "fill-accent/60" : "fill-subtle/40"}
            />
            {/* top face */}
            <polygon
              points={pts([[cx, cy - h], [cx + w, cy], [cx, cy + h], [cx - w, cy]])}
              className={top ? "fill-accent" : "fill-surface stroke-fg/25"}
              strokeWidth={1}
            />
            {/* inner detail */}
            <polygon
              points={pts([[cx, cy - h * 0.55], [cx + w * 0.55, cy], [cx, cy + h * 0.55], [cx - w * 0.55, cy]])}
              className={top ? "fill-none stroke-ink/30" : "fill-none stroke-fg/15"}
              strokeDasharray="4 5"
            />
            {/* label */}
            <line x1={cx + w + 6} y1={cy} x2={cx + w + 34} y2={cy} className="stroke-fg/40" />
            <text x={cx + w + 42} y={cy - 4} className="fill-subtle font-mono text-[11px] tracking-[0.14em]">
              {String(layers.length - i).padStart(2, "0")}
            </text>
            <text x={cx + w + 42} y={cy + 13} className="fill-fg font-mono text-[14px] uppercase tracking-[0.12em]">
              {label}
            </text>
          </g>
        );
      })}

      {/* a signal travelling from the data layer up to the interface */}
      <g className="stack-packet">
        <circle cx={cx} cy={base} r={10} className="fill-accent/25" />
        <circle cx={cx} cy={base} r={4.5} className="fill-accent stroke-ink/40" />
      </g>
    </svg>
  );
}
