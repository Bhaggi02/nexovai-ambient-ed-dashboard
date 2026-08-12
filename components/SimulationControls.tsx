import { Pause, Play, RotateCcw, Square } from "lucide-react";
import type { RiyaState } from "@/types";

interface SimulationControlsProps {
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  simulationStatus: "ready" | "running" | "paused" | "complete";
  state: { riyaState: RiyaState; alertMessage: string | null };
}

export function SimulationControls({
  onStart,
  onPause,
  onResume,
  onReset,
  simulationStatus,
  state,
}: SimulationControlsProps) {
  const statusLabel =
    simulationStatus === "running"
      ? "Running"
      : simulationStatus === "paused"
        ? "Paused"
        : simulationStatus === "complete"
          ? "Complete"
          : "Ready";

  return (
    <div className="mb-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">System status</p>
          <p className="text-sm text-slate-200">{state.riyaState}</p>
          {state.alertMessage ? (
            <p className="mt-1 text-sm text-amber-300">{state.alertMessage}</p>
          ) : null}
        </div>
        <div className="rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-300">
          {statusLabel}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onStart}
          disabled={simulationStatus === "running"}
          aria-label="Start simulation"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-100 transition hover:border-cyan-300/45 hover:bg-cyan-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Play size={14} />
          Start
        </button>

        <button
          type="button"
          onClick={onPause}
          disabled={simulationStatus !== "running"}
          aria-label="Pause simulation"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-100 transition hover:border-amber-300/45 hover:bg-amber-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Pause size={14} />
          Pause
        </button>

        <button
          type="button"
          onClick={onResume}
          disabled={simulationStatus !== "paused"}
          aria-label="Resume simulation"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100 transition hover:border-emerald-300/45 hover:bg-emerald-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Square size={12} className="fill-current" />
          Resume
        </button>

        <button
          type="button"
          onClick={onReset}
          aria-label="Reset simulation"
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 transition hover:border-slate-500/90 hover:text-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </div>
    </div>
  );
}
