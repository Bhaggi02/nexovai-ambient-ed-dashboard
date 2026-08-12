import type { ActionItem as ActionItemType } from "@/types";

interface ActionItemProps {
  item: ActionItemType;
}

export function ActionItem({ item }: ActionItemProps) {
  const priorityStyles = {
    High: "text-amber-200",
    Medium: "text-slate-200",
    Low: "text-emerald-200",
  };

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-3">
      <div>
        <p className="text-sm text-slate-100">{item.title}</p>
        <p className={`mt-1 text-[11px] uppercase tracking-[0.24em] ${priorityStyles[item.priority]}`}>
          {item.priority} priority
        </p>
      </div>
      <div className={`h-2.5 w-2.5 rounded-full ${item.completed ? "bg-emerald-400" : "bg-amber-400"}`} />
    </div>
  );
}
