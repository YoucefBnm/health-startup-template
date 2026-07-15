"use client";
import React from "react";
import { Button } from "./ui/button";

const LOOP_MS = 6000;
const R = 62;
const CX = 120;
const CY = 108;
const CIRC = parseFloat((2 * Math.PI * R).toFixed(2));

const PARTICLES = Array.from({ length: 8 }, (_, i) => {
  const angle = (i / 8) * 2 * Math.PI - Math.PI / 2;
  return {
    id: i,
    cx: CX + Math.cos(angle) * R,
    cy: CY + Math.sin(angle) * R,
    ox: Math.cos(angle) * 24,
    oy: Math.sin(angle) * 24,
    delayMs: i * 36,
  };
});

type Phase = "upload" | "processing" | "success" | "idle";

export function Process() {
  const [progress, setProgress] = React.useState(0);
  const [phase, setPhase] = React.useState<Phase>("upload");
  const [isMounted, setIsMounted] = React.useState(false);
  const rafRef = React.useRef<number>(0);
  const startRef = React.useRef<number>(0);

  React.useEffect(() => {
    setIsMounted(true);
    startRef.current = performance.now();
    function tick(now: number) {
      const t = ((now - startRef.current) % LOOP_MS) / LOOP_MS;
      if (t < 0.21) {
        setPhase("upload");
        setProgress(0);
      } else if (t < 0.67) {
        setPhase("processing");
        setProgress(Math.round(((t - 0.21) / 0.46) * 100));
      } else if (t < 0.96) {
        setPhase("success");
        setProgress(100);
      } else {
        setPhase("idle");
        setProgress(0);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const isProcessing = phase === "processing";
  const isSuccess = phase === "success";

  return (
    <div className="bg-card text-center rounded-lg p-8 h-full place-content-center space-y-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Fast claim processing</h3>
        <p>Decisions made in seconds not in days</p>
      </div>

      <div className="w-fit mx-auto">
        <svg
          width="232"
          height="222"
          viewBox="0 0 240 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ring track */}
          <circle
            cx={CX}
            cy={CY}
            r={R}
            stroke="var(--primary)"
            strokeWidth="2"
            fill="none"
            className={isMounted ? "animate-track-anim" : ""}
          />

          {/* Ring fill — rotated via inline style, dashoffset animated */}
          <circle
            cx={CX}
            cy={CY}
            r={R}
            stroke="var(--primary)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRC}
            style={{
              transformOrigin: `${CX}px ${CY}px`,
            }}
            className={`${isMounted ? "animate-fill-anim" : ""} -rotate-90`}
          />

          {/* Cloud */}
          <g
            style={{
              transformOrigin: `${CX}px 89px`,
            }}
            className={isMounted ? "animate-cloud-anim" : ""}
          >
            <path
              d="M93 112C84 112 77 105 77 96C77 88 83 82 91 81C91 72 98 65 107 65C112 65 117 67 121 71C124 68 129 66 134 66C145 66 154 75 154 86C159 88 163 93 163 99C163 106 157 112 150 112Z"
              fill="white"
              stroke="var(--border)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Upload arrow */}
            <line
              x1={CX}
              y1="101"
              x2={CX}
              y2="111"
              stroke="var(--foreground)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <polyline
              points={`${CX - 6},107 ${CX},101 ${CX + 6},107`}
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Document with medical cross */}
          <g
            style={{
              transformOrigin: `${CX}px 178px`,
            }}
            className={isMounted ? "animate-doc-rise" : ""}
          >
            <rect
              x="104"
              y="158"
              width="32"
              height="40"
              rx="3"
              fill="white"
              stroke="var(--foreground)"
              strokeWidth="1.5"
            />
            {/* Folded corner */}
            <path
              d="M127 158 L136 167 H127 Z"
              fill="var(--background)"
              stroke="var(--foreground)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
            {/* Cross horizontal */}
            <rect
              x="112"
              y="175"
              width="16"
              height="5"
              rx="1.5"
              fill="var(--primary)"
            />
            {/* Cross vertical */}
            <rect
              x="116.5"
              y="169"
              width="5"
              height="17"
              rx="1.5"
              fill="var(--primary)"
            />
          </g>

          {/* Live percentage counter */}
          {isProcessing && (
            <text
              x={CX}
              y={CY + 6}
              textAnchor="middle"
              fill="var(--primary)"
              fontSize="15"
              fontWeight="700"
              fontFamily="-apple-system,BlinkMacSystemFont,system-ui,sans-serif"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {progress}%
            </text>
          )}

          {/* Checkmark */}
          <g
            className={isMounted ? "animate-check-anim" : ""}
            style={{
              transformOrigin: `${CX}px ${CY}px`,
            }}
          >
            <circle cx={CX} cy={CY} r="30" fill="var(--destructive)" />
            <path
              d={`M${CX - 12} ${CY + 1} L${CX - 3} ${CY + 11} L${CX + 14} ${CY - 9}`}
              stroke="var(--destructive-foreground)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* Particles */}
          {PARTICLES.map(({ id, cx, cy, ox, oy, delayMs }) => (
            <circle
              key={id}
              cx={cx}
              cy={cy}
              r="3"
              fill="var(--destructive)"
              className={isMounted ? "animate-particle-anim" : ""}
              style={
                {
                  "--ox": `${ox}px`,
                  "--oy": `${oy}px`,
                  transformOrigin: `${cx}px ${cy}px`,
                  animationDelay: `${delayMs}ms`,
                } as React.CSSProperties
              }
            />
          ))}

          {/* Status label */}
          <text
            x={CX}
            y={CY + R + 22}
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            letterSpacing="0.12em"
            fontFamily="-apple-system,BlinkMacSystemFont,system-ui,sans-serif"
            fill={isSuccess ? "var(--destructive)" : "var(--muted-foreground)"}
            opacity={phase === "upload" || phase === "idle" ? 0 : 0.9}
            style={{ transition: "fill 0.35s ease, opacity 0.3s ease" }}
          >
            {isSuccess ? "CLAIM APPROVED" : "PROCESSING"}
          </text>
        </svg>
      </div>
      <div className="space-y-4 text-center ">
        <p className="text-muted-foreground mx-auto text-balance max-w-[45ch] text-sm">
          Over 50,000 families rely on CareCover Pro for their health coverage
          and peace of mind every year.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
