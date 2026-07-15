import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { batidos } from "@/data/menu";

export const Route = createFileRoute("/batidos")({
  head: () => ({
    meta: [
      { title: "Batidos · Bettore" },
      { name: "description", content: "Para endulzar la tarde" },
    ],
  }),
  component: BatidosPage,
});

function BatidosPage() {
  return (
    <PageShell title="Batidos" subtitle="Para endulzar la tarde">
      <div className="space-y-8">
        {batidos.map((b) => (
          <article
            key={b.id}
            className="overflow-hidden rounded-3xl border border-border/60 bg-surface-1 shadow-elegant"
          >
            <div className="relative aspect-[4/4] overflow-hidden">
              <img
                src={b.image}
                alt={b.name}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-transparent to-transparent" />

              <div className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-sm font-medium text-gold backdrop-blur">
                {b.price}
              </div>
            </div>

            <div className="space-y-5 p-5">
              <div>
                <h2 className="font-display text-3xl text-foreground">
                  {b.name}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {b.description}
                </p>
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                  Ingredientes
                </div>

                <div className="flex flex-wrap gap-2">
                  {b.ingredients.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}