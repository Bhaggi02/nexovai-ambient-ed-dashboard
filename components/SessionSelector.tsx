import { ArrowRightLeft, MonitorCog } from "lucide-react";

export interface SessionOption {
  id: string;
  label: string;
  patientName: string;
  age: number;
  sex: string;
  chiefComplaint: string;
}

interface SessionSelectorProps {
  sessions: SessionOption[];
  selectedSessionId: string;
  onSelect: (sessionId: string) => void;
}

export function SessionSelector({ sessions, selectedSessionId, onSelect }: SessionSelectorProps) {
  return (
    <section className="rounded-[24px] border border-slate-800/80 bg-slate-950/80 p-4 shadow-[0_14px_40px_rgba(2,8,23,0.45)]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MonitorCog className="h-4 w-4 text-cyan-300" />
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">Session selector</p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Simulated data</span>
      </div>

      <div className="space-y-2">
        {sessions.map((session) => {
          const isActive = session.id === selectedSessionId;

          return (
            <button
              key={session.id}
              type="button"
              onClick={() => onSelect(session.id)}
              aria-label={`Select ${session.label} for ${session.patientName}`}
              className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                isActive
                  ? "border-cyan-400/30 bg-cyan-500/8 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.16)]"
                  : "border-slate-800/80 bg-slate-900/60 text-slate-200 hover:border-slate-700 hover:bg-slate-900"
              }`}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{session.label}</p>
                <p className="mt-1 text-sm font-medium text-slate-100">{session.patientName}</p>
                <p className="text-xs text-slate-400">
                  {session.age} yrs • {session.sex} • {session.chiefComplaint}
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/70 text-slate-300">
                {isActive ? <ArrowRightLeft className="h-4 w-4 text-cyan-300" /> : null}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
