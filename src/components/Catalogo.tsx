import { useMemo } from "react";
import { Search } from "lucide-react";
import { CardDesenho } from "@/components/CardDesenho";
import { categorias, desenhos, type Categoria } from "@/data/desenhos";
import { normalizar } from "@/lib/texto";

/** Filtro selecionável: categorias + "Todos" + a coleção "Barbie". */
export type Filtro = Categoria | "Todos" | "Barbie";

/** Filtros exibidos como chips (as categorias visíveis + a coleção Barbie). */
const filtros: Filtro[] = ["Todos", ...categorias, "Barbie"];

interface Props {
  query: string;
  onQueryChange: (v: string) => void;
  categoria: Filtro;
  onCategoriaChange: (c: Filtro) => void;
  titulo?: string;
}

export function Catalogo({
  query,
  onQueryChange,
  categoria,
  onCategoriaChange,
  titulo = "Todos os desenhos",
}: Props) {
  const filtrados = useMemo(() => {
    const termo = normalizar(query);
    return desenhos.filter((d) => {
      const okCategoria =
        categoria === "Todos" ||
        (categoria === "Barbie" ? d.collection === "Barbie" : d.category === categoria);
      const okTermo =
        !termo ||
        normalizar(d.title).includes(termo) ||
        normalizar(d.category).includes(termo) ||
        normalizar(d.description).includes(termo) ||
        normalizar(d.collection ?? "").includes(termo);
      return okCategoria && okTermo;
    });
  }, [query, categoria]);

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {titulo}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {filtrados.length} {filtrados.length === 1 ? "título" : "títulos"} disponíveis
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Buscar por nome ou categoria…"
            aria-label="Buscar desenho no catálogo"
            className="h-12 w-full rounded-md border border-border bg-field pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
        {filtros.map((c) => {
          const ativo = c === categoria;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onCategoriaChange(c)}
              aria-pressed={ativo}
              className={`min-h-11 shrink-0 rounded-md px-4 text-sm font-medium transition-colors ${
                ativo
                  ? "bg-primary text-primary-foreground shadow-md hover:bg-red-hover"
                  : "bg-white/10 text-muted-foreground hover:bg-white/20 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {filtrados.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Nenhum desenho encontrado para “{query}”.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {filtrados.map((d, i) => (
            <CardDesenho key={d.id} desenho={d} prioridade={i < 10} />
          ))}
        </div>
      )}
    </section>
  );
}
