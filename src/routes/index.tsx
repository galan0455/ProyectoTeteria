import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";
import { categorias } from "@/data/menu";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bettore — Carta digital" },
      { name: "description", content: "Carta digital de Pub Bettore Fuenlabrada." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen pb-16">
      <div className="mx-auto max-w-xl px-6 pt-14 animate-fade-up">
        {/* Logo / Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="text-[10px] uppercase tracking-[0.6em] text-gold-deep">
            Pub · Fuenlabrada
          </div>
          <h1 className="mt-3 font-display text-7xl font-semibold leading-none gradient-gold-text">
            Bettore
          </h1>
          <div className="mt-4 flex w-40 items-center gap-2">
            <span className="hairline flex-1" />
            <Sparkles className="h-3 w-3 text-gold" />
            <span className="hairline flex-1" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Bienvenido a nuestra carta. Elige una categoría para descubrir nuestras propuestas.
          </p>
        </div>

        {/* Recomendación destacada */}
        <Link
          to="/recomendaciones"
          className="group mt-10 block overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-surface-2 to-surface-1 p-5 shadow-elegant transition active:scale-[0.99]"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                Recomendado por la casa
              </div>
              <div className="mt-1 font-display text-2xl text-foreground">
                Lo que está pidiendo todo el mundo
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Top ventas y favoritos del local
              </p>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-gold transition group-hover:translate-x-1" />
          </div>
        </Link>

        {/* Categorías */}
        <div className="mt-8">
          <div className="mb-3 px-1 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            La carta
          </div>
          <div className="grid grid-cols-2 gap-3">
            {categorias.map((c, i) => (
              <Link
                key={c.id}
                to={c.to}
                className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-2xl border border-border/60 bg-surface-1 p-4 transition active:scale-[0.97]"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 transition group-hover:from-gold/5 group-hover:to-transparent" />
                <div className="relative text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="font-display text-2xl leading-tight text-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 text-[11px] text-muted-foreground">{c.hint}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          Bebe con responsabilidad
        </div>
      </div>
    </div>
  );
}
