import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { cervezas } from "@/data/menu";
import { DrinkList } from "@/components/DrinkList";

export const Route = createFileRoute("/cervezas")({
  head: () => ({
    meta: [
      { title: "Cervezas · Bettore" },
      { name: "description", content: "Cervezas de tirada y botella." },
    ],
  }),
  component: () => (
    <PageShell title="Cervezas" subtitle="De tirada y botella">
      <DrinkList items={cervezas} />
    </PageShell>
  ),
});
