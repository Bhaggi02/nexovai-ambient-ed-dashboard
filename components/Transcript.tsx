import { forwardRef } from "react";
import { TranscriptMessage } from "@/components/TranscriptMessage";
import type { TranscriptMessage as TranscriptMessageType } from "@/types";

interface TranscriptProps {
  messages: TranscriptMessageType[];
}

export const Transcript = forwardRef<HTMLDivElement, TranscriptProps>(function Transcript(
  { messages },
  ref
) {
  return (
    <div className="space-y-3" ref={ref} role="log" aria-live="polite" aria-atomic="false">
      {messages.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700/80 bg-slate-900/40 p-4 text-sm text-slate-400">
          Waiting for the ambient listener to capture the next utterance.
        </div>
      ) : (
        messages.map((message) => <TranscriptMessage key={message.id} message={message} />)
      )}
    </div>
  );
});
