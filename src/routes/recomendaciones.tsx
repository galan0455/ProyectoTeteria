import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Meter } from "@/components/PageShell";
import { cocktails, hookahs, batidos } from "@/data/menu";
import { Crown, Flame, Heart } from "lucide-react";

export const Route = createFileRoute("/recomendaciones")({
  head: () => ({
    meta: [
      { title: "Recomendaciones · Bettore" },
      { name: "description", content: "Top ventas, favoritos del local y lo más pedido en Bettore." },
    ],
  }),
  component: RecomendacionesPage,
});

function RecomendacionesPage() {
  const topCocktail = cocktails.find((c) => c.id === "cocoloco");
  const topHookah = hookahs.find((h) => h.id === "carnival");
  const topShake = batidos.find((h) => h.id === "lotus");
console.log("topCocktail", topCocktail);
console.log("topHookah", topHookah);
console.log("topHookah", topShake);
  const favs = cocktails.filter((c) => c.featured).slice(0, 3);
  const populares = hookahs.filter((h) => h.featured);

  return (
    <PageShell title="Recomendaciones" subtitle="Lo que se mueve en el local">
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold">
          <Crown className="h-3 w-3" /> Top ventas
        </div>
        <div className="grid gap-3">
          <Link
            to="/cocteles"
            className="overflow-hidden rounded-3xl border border-gold/30 bg-surface-1 shadow-elegant transition active:scale-[0.99]"
          >
            <div className="relative aspect-[16/10]">
              <img
                src={topCocktail.image}
                alt={topCocktail.name}
                width={800}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">#1 cóctel</div>
                <div className="font-display text-2xl text-foreground">{topCocktail.name}</div>
              </div>
            </div>
          </Link>
          <Link
            to="/batidos"
            className="overflow-hidden rounded-3xl border border-gold/30 bg-surface-1 shadow-elegant transition active:scale-[0.99]"
          >
            <div className="relative aspect-[16/10]">
              <img
                src={topShake.image}
                alt={topShake.name}
                width={800}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">#1 batido</div>
                <div className="font-display text-2xl text-foreground">{topShake.name}</div>
              </div>
            </div>
          </Link>
          <Link
            to="/cachimbas"
            className="rounded-3xl border border-gold/30 bg-gradient-to-br from-surface-2 to-surface-1 p-5 shadow-elegant transition active:scale-[0.99]"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">#1 cachimba</div>
            <div className="mt-1 font-display text-2xl text-foreground">{topHookah.name}</div>
            <p className="mt-1 text-xs text-muted-foreground">{topHookah.description}</p>
            <div className="mt-3">
              <Meter label="Intensidad" value={topHookah.intensity} />
            </div>
          </Link>
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold">
          <Heart className="h-3 w-3" /> Favoritos del local
        </div>
        <div className="grid gap-3">
          {favs.map((c) => (
            <article key={c.id} className="flex items-center gap-3 overflow-hidden rounded-2xl border border-border/60 bg-surface-1 p-3">
              <img src={c.image} alt={c.name} width={120} height={120} className="h-20 w-20 shrink-0 rounded-xl object-cover" />
              <div className="min-w-0 flex-1">
                <div className="font-display text-lg text-foreground">{c.name}</div>
                <p className="line-clamp-2 text-xs text-muted-foreground">{c.tagline}</p>
              </div>
              <div className="shrink-0 text-sm text-gold">{c.price}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gold">
          <Flame className="h-3 w-3" /> Más populares
        </div>
        <ul className="divide-y divide-border/50 overflow-hidden rounded-2xl border border-border/60 bg-surface-1">
          {populares.map((h, i) => (
            <li key={h.id} className="flex items-center gap-3 p-4">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 font-display text-gold">{i + 1}</div>
              <div className="min-w-0 flex-1">
                <div className="font-display text-lg text-foreground">{h.name}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">{h.description}</div>
              </div>
              <div className="shrink-0 text-sm text-gold">{h.price}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
