import type { RefObject } from "react";
import { AudioVisualizer } from "@/components/AudioVisualizer";
import { StatusBadge } from "@/components/StatusBadge";
import { Transcript } from "@/components/Transcript";
import type { RiyaState, TranscriptMessage } from "@/types";

interface AmbientListenerProps {
  state: RiyaState;
  messages: TranscriptMessage[];
  transcriptEndRef: RefObject<HTMLDivElement | null>;
}

const badgeTone: Record<RiyaState, "cyan" | "amber" | "green" | "slate"> = {
  IDLE: "slate",
  LISTENING: "cyan",
  PROCESSING: "amber",
  ALERTING: "amber",
};

export function AmbientListener({ state, messages, transcriptEndRef }: AmbientListenerProps) {
  return (
    <section className="rounded-[28px] border border-slate-800/80 bg-slate-950/80 p-5 shadow-[0_16px_60px_rgba(2,8,23,0.55)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Ambient listener</p>
          <h2 className="text-xl font-semibold text-slate-100">Live transcript stream</h2>
        </div>
        <StatusBadge label={state} tone={badgeTone[state]} />
      </div>

      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div
              className={`h-2.5 w-2.5 rounded-full ${
                state === "ALERTING"
                  ? "bg-amber-400"
                  : state === "PROCESSING"
                    ? "bg-amber-300"
                    : state === "LISTENING"
                      ? "bg-cyan-400"
                      : "bg-slate-500"
              }`}
            />
            <p className="text-sm font-medium text-slate-200">{state}</p>
          </div>
          <span className="text-sm text-slate-400">Simulated audio channel</span>
        </div>
        <AudioVisualizer state={state} />
      </div>

      <div className="mt-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-200">Conversation timeline</p>
          <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">Auto-scroll enabled</span>
        </div>
        <div className="max-h-[360px] overflow-y-auto pr-2">
          <Transcript messages={messages} ref={transcriptEndRef} />
        </div>
      </div>
    </section>
  );
}
