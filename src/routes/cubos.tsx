import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { batidos, cervezas, cubos } from "@/data/menu";
import { DrinkList } from "@/components/DrinkList";

export const Route = createFileRoute("/cubos")({
  head: () => ({
    meta: [
      { title: "Cubos · Bettore" },
      { name: "description", content: "Para compartir con tus amigos" },
    ],
  }),
  component: () => (
    <PageShell title="Cubos" subtitle="Para compartir con tus amigos">
      <DrinkList items={cubos} />
    </PageShell>
  ),
});