import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { batidos, cervezas } from "@/data/menu";
import { DrinkList } from "@/components/DrinkList";

export const Route = createFileRoute("/batidos")({
  head: () => ({
    meta: [
      { title: "Batidos · Bettore" },
      { name: "description", content: "Para endulzar la tarde" },
    ],
  }),
  component: () => (
    <PageShell title="Batidos" subtitle="Para endulzar la tarde">
      <DrinkList items={batidos} />
    </PageShell>
  ),
});