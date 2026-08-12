import { AlertCircle, Clock3, Stethoscope } from "lucide-react";
import type { ClinicalSummary as ClinicalSummaryType } from "@/types";

interface ClinicalSummaryProps {
  summary: ClinicalSummaryType;
  highlighted?: string | null;
}

export function ClinicalSummary({ summary, highlighted }: ClinicalSummaryProps) {
  const items = [
    {
      key: "symptoms",
      label: "Symptoms",
      value: summary.symptoms,
      icon: Stethoscope,
    },
    {
      key: "duration",
      label: "Duration",
      value: summary.duration,
      icon: Clock3,
    },
    {
      key: "observations",
      label: "Relevant observations",
      value: summary.observations,
      icon: AlertCircle,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Clinical summary
        </h3>
        <span className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">Linked</span>
      </div>

      <div className="space-y-3">
        {items.map(({ key, label, value, icon: Icon }) => {
          const active = highlighted === key;
          return (
            <div
              key={key}
              className={`rounded-2xl border border-slate-800/80 bg-slate-950/50 p-3 transition-all duration-500 ${
                active ? "border-cyan-400/40 bg-cyan-500/5 shadow-[0_0_0_1px_rgba(34,211,238,0.18)]" : ""
              }`}
            >
              <div className="mb-2 flex items-center gap-2 text-slate-400">
                <Icon className="h-4 w-4 text-cyan-300" />
                <span className="text-[11px] uppercase tracking-[0.24em]">{label}</span>
              </div>
              <p className="text-sm leading-6 text-slate-100">{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
