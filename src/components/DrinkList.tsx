import type { Drink } from "@/data/menu";

export function DrinkList({ items }: { items: Drink[] }) {
  return (
    <ul className="divide-y divide-border/50 rounded-2xl border border-border/60 bg-surface-1 overflow-hidden">
      {items.map((d) => (
        <li key={d.id} className="flex items-start justify-between gap-4 p-4">
          <div className="min-w-0 flex-1">
            <div className="font-display text-lg text-foreground">{d.name}</div>
            {d.description && (
              <div className="mt-0.5 text-xs text-muted-foreground">{d.description}</div>
            )}
          </div>
          <div className="shrink-0 text-sm font-medium text-gold">{d.price}</div>
        </li>
      ))}
    </ul>
  );
}
