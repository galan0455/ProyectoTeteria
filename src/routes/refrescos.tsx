import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { refrescos } from "@/data/menu";
import { DrinkList } from "@/components/DrinkList";

export const Route = createFileRoute("/refrescos")({
  head: () => ({
    meta: [
      { title: "Refrescos · Bettore" },
      { name: "description", content: "Refrescos y bebidas sin alcohol." },
    ],
  }),
  component: () => (
    <PageShell title="Refrescos" subtitle="Bebidas sin alcohol">
      <DrinkList items={refrescos} />
    </PageShell>
  ),
});
