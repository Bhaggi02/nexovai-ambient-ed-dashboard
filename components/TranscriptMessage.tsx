import type { TranscriptMessage as TranscriptMessageType } from "@/types";

interface TranscriptMessageProps {
  message: TranscriptMessageType;
}

export function TranscriptMessage({ message }: TranscriptMessageProps) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="mb-1 flex items-center justify-between gap-4">
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
          {message.speaker}
        </span>
        <span className="text-[11px] text-slate-500">{message.timestamp}</span>
      </div>
      <p className="text-sm leading-6 text-slate-200">{message.text}</p>
    </div>
  );
}
