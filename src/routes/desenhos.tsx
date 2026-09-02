import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Catalogo, type Filtro } from "@/components/Catalogo";
import { site } from "@/config/site";

export const Route = createFileRoute("/desenhos")({
  validateSearch: (search: Record<string, unknown>): { q?: string } => {
    const q = search["q"];
    return typeof q === "string" && q ? { q } : {};
  },
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
  const search = Route.useSearch();
  const q = search.q;
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Filtro>("Todos");

  return (
    <div className="pt-4">
      <Catalogo
        query={q ?? ""}
        onQueryChange={(valor) =>
          navigate({ to: "/desenhos", search: (valor ? { q: valor } : {}) as { q?: string }, replace: true })
        }
        categoria={categoria}
        onCategoriaChange={setCategoria}
      />
    </div>
  );
}
