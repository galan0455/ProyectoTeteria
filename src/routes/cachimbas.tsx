import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, Meter } from "@/components/PageShell";
import { hookahs, hookahFlavorLabels, type HookahFlavor } from "@/data/menu";
import hookahHero from "@/assets/hookah-hero.jpg";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/cachimbas")({
  head: () => ({
    meta: [
      { title: "Cachimbas · Bettore" },
      { name: "description", content: "Mezclas de cachimba y selección Premium Black." },
    ],
  }),
  component: CachimbasPage,
});

const FILTERS: { id: HookahFlavor | "todas"; label: string }[] = [
  { id: "todas", label: "Todas" },
  { id: "afrutadas", label: "Afrutadas" },
  { id: "dulces", label: "Dulces" },
  { id: "citricas", label: "Cítricas" },
  { id: "frescas", label: "Frescas" },
  { id: "especiadas", label: "Especiadas" },
  { id: "premium", label: "Premium Black" },
];

function CachimbasPage() {
  const [filter, setFilter] = useState<HookahFlavor | "todas">("todas");

  const list = useMemo(
    () =>
      filter === "todas"
        ? hookahs
        : hookahs.filter((h) => h.flavors.includes(filter)),
    [filter],
  );

  const featured = hookahs.filter((h) => h.featured);

  return (
    <PageShell title="Cachimbas" subtitle="Mezclas exclusivas y selección Premium">
      {/* Hero */}
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-gold/20 shadow-elegant">
        <img
          src={hookahHero}
          alt="Cachimba Bettore"
          width={1200}
          height={800}
          className="h-44 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-1 via-surface-1/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-[10px] uppercase tracking-[0.4em] text-gold">La experiencia</div>
          <div className="font-display text-2xl text-foreground">
            Mezclas creadas por nuestros maestros
          </div>
        </div>
      </div>

      {/* Destacadas */}
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2 px-1 text-[10px] uppercase tracking-[0.4em] text-gold">
          <Sparkles className="h-3 w-3" /> Destacadas
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none">
          {featured.map((h) => (
            <div
              key={h.id}
              className="min-w-[220px] rounded-2xl border border-gold/30 bg-gradient-to-br from-surface-2 to-surface-1 p-4"
            >
              <div className="flex items-baseline justify-between">
                <div className="font-display text-xl text-foreground">{h.name}</div>
                <div className="text-sm text-gold">{h.price}</div>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                {h.description}
              </p>
              <div className="mt-3">
                <Meter label="Intensidad" value={h.intensity} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filtros */}
      <div className="sticky top-[72px] z-10 -mx-5 mb-4 bg-background/85 px-5 py-3 backdrop-blur-xl">
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {FILTERS.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition active:scale-95 ${
                  active
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border bg-surface-2 text-muted-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lista */}
      <div className="space-y-3">
        {list.map((h) => (
          <article
            key={h.id}
            className="rounded-2xl border border-border/60 bg-surface-1 p-5 transition active:scale-[0.99]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="font-display text-xl text-foreground">{h.name}</h2>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {h.flavors.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-gold/30 px-2 py-0.5 text-[10px] uppercase tracking-widest text-gold-soft"
                    >
                      {hookahFlavorLabels[f]}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 text-sm text-gold">{h.price}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {h.description}
            </p>
            <div className="mt-4">
              <Meter label="Intensidad" value={h.intensity} />
            </div>
          </article>
        ))}
        {list.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            No hay mezclas en esta categoría.
          </div>
        )}
      </div>
    </PageShell>
  );
}
