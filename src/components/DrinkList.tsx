import type { Drink } from "@/data/menu";

export function DrinkList({ items }: { items: Drink[] }) {
 const grouped = items.reduce<Record<string, Drink[]>>((acc, drink) => {
  const category = drink.category || "Otras bebidas";

  if (!acc[category]) {
    acc[category] = [];
  }

  acc[category].push(drink);

  return acc;
}, {});

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([category, drinks]) => (
        <section key={category}>
          <h2 className="mb-3 text-2xl font-display text-gold border-b border-border pb-2">
            {category}
          </h2>

          <ul className="divide-y divide-border/50 rounded-2xl border border-border/60 bg-surface-1 overflow-hidden">
            {drinks.map((d) => (
              <li
                key={d.id}
                className="flex items-start justify-between gap-4 p-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-display text-lg text-foreground">
                    {d.name}
                  </div>

                  {d.description && (
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {d.description}
                    </div>
                  )}
                </div>

                <div className="shrink-0 text-sm font-medium text-gold">
                  {d.price}
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}