import type { RiyaState } from "@/types";

interface AudioVisualizerProps {
  state: RiyaState;
}

const bars = [0.42, 0.68, 0.38, 0.75, 0.52, 0.8, 0.64, 0.9, 0.48, 0.7];

export function AudioVisualizer({ state }: AudioVisualizerProps) {
  const isListening = state === "LISTENING";
  const isProcessing = state === "PROCESSING";
  const isAlerting = state === "ALERTING";

  return (
    <div className="mt-4 flex h-16 items-end justify-between gap-1 rounded-2xl border border-slate-700/70 bg-slate-950/60 px-3 py-4">
      {bars.map((height, index) => {
        const colorClass = isAlerting
          ? "bg-amber-400"
          : isProcessing
            ? "bg-slate-400"
            : isListening
              ? "bg-cyan-400"
              : "bg-slate-700";

        const animationClass = isListening
          ? "animate-pulse-soft"
          : isProcessing
            ? "animate-[spin_8s_linear_infinite]"
            : isAlerting
              ? "animate-pulse"
              : "";

        return (
          <div
            key={index}
            className={`w-full rounded-full ${colorClass} ${animationClass}`}
            style={{
              height: `${Math.max(20, height * 100)}%`,
              opacity: isListening ? 0.95 : isProcessing ? 0.7 : isAlerting ? 0.9 : 0.45,
              transition: "all 260ms ease",
              transformOrigin: "bottom",
            }}
          />
        );
      })}
    </div>
  );
}
