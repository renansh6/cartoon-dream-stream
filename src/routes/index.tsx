import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Destaques } from "@/components/Destaques";
import { Catalogo } from "@/components/Catalogo";
import { site } from "@/config/site";
import type { Categoria } from "@/data/desenhos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Desenhos animados para assistir online` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Desenhos para assistir e relembrar` },
      { property: "og:description", content: site.description },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [categoria, setCategoria] = useState<Categoria | "Todos">("Todos");

  return (
    <div>
      <Destaques />
      <Catalogo
        query={query}
        onQueryChange={setQuery}
        categoria={categoria}
        onCategoriaChange={setCategoria}
      />
    </div>
  );
}
