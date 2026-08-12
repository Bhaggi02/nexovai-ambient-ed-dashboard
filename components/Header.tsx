import { Activity, CircleDot, HeartPulse } from "lucide-react";

interface HeaderProps {
  currentTime: string;
  riyaState: "IDLE" | "LISTENING" | "PROCESSING" | "ALERTING";
  sessionId: string;
  statusLabel: string;
}

export function Header({ currentTime, riyaState, sessionId, statusLabel }: HeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-slate-800/80 bg-slate-950/80 px-5 py-4 shadow-[0_24px_80px_rgba(2,8,23,0.48)] backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-300">
          <Activity size={18} />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight text-slate-100">NexovAI</p>
          <p className="text-sm text-slate-400">Ambient ED</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Live Session
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-slate-300">
          <CircleDot size={10} className="text-cyan-300" fill="currentColor" />
          Connected
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-slate-300">
          <HeartPulse size={12} className="text-cyan-300" />
          {currentTime}
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-slate-300">
          <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">SESSION</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">{sessionId}</span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-slate-300">
          <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">STATUS</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">{statusLabel}</span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-slate-300">
          <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">RIYA</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-200">{riyaState}</span>
        </div>
      </div>
    </header>
  );
}
