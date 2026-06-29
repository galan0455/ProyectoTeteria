import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { batidos, cervezas, vinos } from "@/data/menu";
import { DrinkList } from "@/components/DrinkList";

export const Route = createFileRoute("/vinos")({
  head: () => ({
    meta: [
      { title: "Vinos · Bettore" },
      { name: "description", content: "Una buena copa de vino" },
    ],
  }),
  component: () => (
    <PageShell title="Vinos" subtitle="Una buena copa de vino">
      <DrinkList items={vinos} />
    </PageShell>
  ),
});