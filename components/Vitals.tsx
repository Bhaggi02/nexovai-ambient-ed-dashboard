import type { Vitals as VitalsType } from "@/types";
import { VitalCard } from "@/components/VitalCard";

interface VitalsProps {
  vitals: VitalsType;
  highlighted?: string | null;
}

export function Vitals({ vitals, highlighted }: VitalsProps) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Vitals</h3>
        <span className="text-[11px] uppercase tracking-[0.24em] text-amber-300">Monitor</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <VitalCard label="Heart rate" value={vitals.heartRate} highlighted={highlighted === "heartRate"} />
        <VitalCard label="Blood pressure" value={vitals.bloodPressure} highlighted={highlighted === "bloodPressure"} />
        <VitalCard label="SpO2" value={vitals.spo2} highlighted={highlighted === "spo2"} />
        <VitalCard label="Temperature" value={vitals.temperature} highlighted={highlighted === "temperature"} />
        <VitalCard label="Respiratory rate" value={vitals.respiratoryRate} highlighted={highlighted === "respiratoryRate"} />
      </div>
    </div>
  );
}
