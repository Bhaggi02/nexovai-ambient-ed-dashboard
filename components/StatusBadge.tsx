import type { RiyaState } from "@/types";

interface StatusBadgeProps {
  label: RiyaState | string;
  tone: "cyan" | "amber" | "green" | "slate";
}

export function StatusBadge({ label, tone }: StatusBadgeProps) {
  const toneStyles = {
    cyan: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    amber: "border-amber-400/30 bg-amber-500/10 text-amber-200",
    green: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    slate: "border-slate-600/60 bg-slate-800/70 text-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.28em] ${toneStyles[tone]}`}
    >
      {label}
    </span>
  );
}
