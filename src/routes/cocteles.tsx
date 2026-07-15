import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Meter } from "@/components/PageShell";
import { cocktails } from "@/data/menu";

export const Route = createFileRoute("/cocteles")({
  head: () => ({
    meta: [
      { title: "Cócteles · Bettore" },
      { name: "description", content: "Cócteles de autor en Pub Bettore." },
    ],
  }),
  component: CoctelesPage,
});

function CoctelesPage() {
  return (
    <PageShell title="Cócteles" subtitle="Firmas de autor de la casa">
      <div className="space-y-8">
        {cocktails.map((c) => (
          <article
            key={c.id}
            className="overflow-hidden rounded-3xl border border-border/60 bg-surface-1 shadow-elegant"
          >
            <div className="relative aspect-[4/4] overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-transparent to-transparent" />
              {c.featured && (
                <span className="absolute left-4 top-4 rounded-full border border-gold/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold backdrop-blur">
                  Recomendado
                </span>
              )}
              <div className="absolute right-4 top-4 rounded-full bg-background/80 px-3 py-1 text-sm font-medium text-gold backdrop-blur">
                {c.price}
              </div>
            </div>

            <div className="space-y-5 p-5">
              <div>
                <h2 className="font-display text-3xl text-foreground">{c.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {c.tagline}
                </p>
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                  Ingredientes
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.ingredients.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-foreground/90"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 rounded-2xl border border-border/60 bg-surface-2/60 p-4">
                <Meter label="Dulzor" value={c.profile.sweetness} />
                <Meter label="Alcohol" value={c.profile.alcohol} />
                <Meter label="Frescura" value={c.profile.freshness} />
              </div>

              <div>
                <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                  Marida bien con
                </div>
                <ul className="space-y-1 text-sm text-foreground/85">
                  {c.pairings.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
