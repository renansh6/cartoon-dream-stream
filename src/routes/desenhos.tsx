import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Catalogo } from "@/components/Catalogo";
import { site } from "@/config/site";
import type { Categoria } from "@/data/desenhos";

export const Route = createFileRoute("/desenhos")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: `Todos os desenhos — ${site.name}` },
      {
        name: "description",
        content:
          "Explore o catálogo completo de desenhos por categoria: clássicos, magia e fantasia, ação e aventura, para as pequenas e filmes.",
      },
      { property: "og:title", content: `Todos os desenhos — ${site.name}` },
      {
        property: "og:description",
        content: "Catálogo completo de desenhos com busca instantânea e filtros por categoria.",
      },
    ],
  }),
  component: TodosOsDesenhos,
});

function TodosOsDesenhos() {
  const { q } = Route.useSearch();
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria | "Todos">("Todos");

  return (
    <div className="pt-4">
      <Catalogo
        query={q ?? ""}
        onQueryChange={(valor) =>
          navigate({ to: "/desenhos", search: valor ? { q: valor } : {}, replace: true })
        }
        categoria={categoria}
        onCategoriaChange={setCategoria}
      />
    </div>
  );
}
