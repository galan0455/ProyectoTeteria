import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { copas } from "@/data/menu";
import { DrinkList } from "@/components/DrinkList";

export const Route = createFileRoute("/copas")({
  head: () => ({
    meta: [
      { title: "Copas · Bettore" },
      { name: "description", content: "Destilados premium en Pub Bettore." },
    ],
  }),
  component: () => (
    <PageShell title="Copas" subtitle="Destilados premium">
      <DrinkList items={copas} />
    </PageShell>
  ),
});
