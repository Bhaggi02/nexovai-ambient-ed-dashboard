interface VitalCardProps {
  label: string;
  value: string;
  highlighted?: boolean;
}

export function VitalCard({ label, value, highlighted }: VitalCardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 transition-all duration-500 ${
        highlighted ? "border-cyan-400/40 bg-cyan-500/5 shadow-[0_0_0_1px_rgba(34,211,238,0.16)] animate-[pulse_1.2s_ease-in-out_2]" : ""
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{label}</p>
        {highlighted ? (
          <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.24em] text-cyan-300">
            New
          </span>
        ) : null}
      </div>
      <p className="text-lg font-semibold text-slate-100 transition-all duration-500">{value}</p>
    </div>
  );
}
