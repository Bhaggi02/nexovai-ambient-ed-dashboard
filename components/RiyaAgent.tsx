import { Activity, AlertTriangle, AudioWaveform, Bot, BrainCircuit } from "lucide-react";
import type { RiyaState } from "@/types";

interface RiyaAgentProps {
  state: RiyaState;
}

export function RiyaAgent({ state }: RiyaAgentProps) {
  const stateStyles: Record<RiyaState, string> = {
    IDLE: "border-slate-700/60 bg-slate-900/80 text-slate-300",
    LISTENING: "border-cyan-400/40 bg-cyan-500/10 text-cyan-200 animate-float-glow",
    PROCESSING: "border-amber-400/40 bg-amber-500/10 text-amber-200",
    ALERTING: "border-red-400/40 bg-red-500/10 text-red-200 animate-pulse",
  };

  const iconMap = {
    IDLE: Bot,
    LISTENING: AudioWaveform,
    PROCESSING: BrainCircuit,
    ALERTING: AlertTriangle,
  };

  const Icon = iconMap[state];

  return (
    <div className="w-[220px] rounded-[28px] border border-slate-800/80 bg-slate-900/80 p-4 shadow-[0_18px_60px_rgba(2,8,23,0.7)] backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Persistent agent</p>
          <h3 className="text-sm font-semibold text-slate-100">RIYA</h3>
        </div>
        <span className="rounded-full border border-slate-700/60 px-2 py-1 text-[9px] uppercase tracking-[0.24em] text-slate-300">
          {state}
        </span>
      </div>

      <div className={`relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border ${stateStyles[state]}`}>
        {state === "PROCESSING" ? (
          <div className="absolute inset-0 rounded-full border border-amber-300/40 animate-[spin_7s_linear_infinite]" />
        ) : null}
        <Icon className={`h-10 w-10 ${state === "LISTENING" ? "animate-pulse" : ""}`} />
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-[0.22em] text-slate-400">
        <Activity className="h-3.5 w-3.5 text-cyan-300" />
        {state === "IDLE" && "Idle"}
        {state === "LISTENING" && "Listening"}
        {state === "PROCESSING" && "Processing"}
        {state === "ALERTING" && "Alerting"}
      </div>
    </div>
  );
}
