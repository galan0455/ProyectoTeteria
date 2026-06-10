import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen pb-24">
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="mx-auto flex max-w-xl items-center gap-3 px-5 py-4">
          <Link
            to="/"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/30 text-gold transition hover:bg-gold/10 active:scale-95"
            aria-label="Volver al inicio"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-semibold text-foreground">{title}</h1>
            {subtitle && (
              <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div className="font-display text-sm tracking-[0.3em] text-gold-deep">BETTORE</div>
        </div>
      </header>
      <main className="mx-auto max-w-xl px-5 pt-6 animate-fade-up">{children}</main>
    </div>
  );
}

export function Meter({ value, max = 5, label }: { value: number; max?: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-1 gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full transition ${
              i < value ? "bg-gold" : "bg-surface-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
