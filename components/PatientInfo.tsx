import type { Patient } from "@/types";

interface PatientInfoProps {
  patient: Patient;
  highlighted?: string | null;
}

export function PatientInfo({ patient, highlighted }: PatientInfoProps) {
  const rows = [
    { key: "patientId", label: "Patient ID", value: patient.patientId },
    { key: "age", label: "Age", value: `${patient.age} yrs` },
    { key: "sex", label: "Sex", value: patient.sex },
    { key: "chiefComplaint", label: "Chief complaint", value: patient.chiefComplaint },
    { key: "allergies", label: "Allergies", value: patient.allergies },
  ];

  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Patient / demographics</h3>
        <span className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">Live</span>
      </div>
      <div className="space-y-2 text-sm">
        {rows.map((row) => (
          <div
            key={row.key}
            className={`flex items-center justify-between gap-4 border-b border-slate-800/70 pb-2 last:border-none last:pb-0 transition-all duration-500 ${
              highlighted === row.key ? "rounded-xl border border-cyan-400/35 bg-cyan-500/5 px-2" : ""
            }`}
          >
            <span className="text-slate-500">{row.label}</span>
            <span className="text-right font-medium text-slate-100">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
