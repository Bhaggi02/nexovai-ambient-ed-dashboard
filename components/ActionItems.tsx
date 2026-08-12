import { ActionItem } from "@/components/ActionItem";
import type { ActionItem as ActionItemType } from "@/types";

interface ActionItemsProps {
  items: ActionItemType[];
}

export function ActionItems({ items }: ActionItemsProps) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Action items</h3>
        <span className="text-[11px] uppercase tracking-[0.24em] text-cyan-300">Review</span>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <ActionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
