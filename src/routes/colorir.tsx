import type { ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Palette, Pencil, Printer, Star } from "lucide-react";
import { site } from "@/config/site";

export const Route = createFileRoute("/colorir")({
  head: () => ({
    meta: [
      { title: `Para colorir — ${site.name}` },
      {
        name: "description",
        content:
          "Desenhos para colorir e imprimir: escolha seus personagens favoritos e solte a criatividade. Conteúdo do site parceiro Desenhos & Colorir.",
      },
      { property: "og:title", content: `Para colorir — ${site.name}` },
      {
        property: "og:description",
        content:
          "Escolha seus personagens favoritos, imprima os desenhos e deixe a criatividade ganhar vida!",
      },
    ],
  }),
  component: ParaColorir,
});

const BASE = "https://www.desenhosecolorir.com.br";

type Categoria = { nome: string; href: string; cor: string };

/**
 * Links diretos para as categorias do site parceiro (verificados). As que não
 * têm página própria caem na home do parceiro. Nenhuma imagem do site externo é
 * copiada, baixada ou hotlinkeada — apenas links em nova aba.
 */
const categorias: Categoria[] = [
  { nome: "Princesas", href: `${BASE}/princesas`, cor: "#7C3AED" },
  { nome: "Barbie", href: `${BASE}/barbie`, cor: "#DB2777" },
  { nome: "Winx Club", href: `${BASE}/winx-club`, cor: "#C026D3" },
  { nome: "Hello Kitty", href: `${BASE}/hello-kitty`, cor: "#E11D48" },
  { nome: "Moranguinho", href: `${BASE}/moranguinho`, cor: "#F43F5E" },
  { nome: "Frozen", href: `${BASE}/frozen`, cor: "#0EA5E9" },
  { nome: "Ladybug", href: `${BASE}/ladybug`, cor: "#DC2626" },
  { nome: "My Little Pony", href: `${BASE}/my-little-pony`, cor: "#8B5CF6" },
  { nome: "Monster High", href: `${BASE}/monster-high`, cor: "#9333EA" },
  { nome: "Bratz", href: `${BASE}/bratz`, cor: "#D946EF" },
  { nome: "Ariel", href: `${BASE}/ariel`, cor: "#0891B2" },
  { nome: "Cinderela", href: `${BASE}/cinderela`, cor: "#2563EB" },
  { nome: "Rapunzel", href: `${BASE}/rapunzel`, cor: "#CA8A04" },
  { nome: "Meninas Superpoderosas", href: `${BASE}/as-meninas-superpoderosas`, cor: "#EA580C" },
  { nome: "Polly Pocket", href: `${BASE}/polly-pocket`, cor: "#DB2777" },
  { nome: "Princesinha Sofia", href: `${BASE}/princesa-sofia`, cor: "#6D28D9" },
  { nome: "Bluey", href: `${BASE}/bluey`, cor: "#2563EB" },
  { nome: "Peppa Pig", href: `${BASE}/peppa-pig`, cor: "#DB2777" },
  { nome: "Turma da Mônica", href: `${BASE}/turma-da-monica`, cor: "#16A34A" },
  { nome: "Todos os desenhos", href: `${BASE}/`, cor: "#E50914" },
];

const icones: ComponentType<{ className?: string }>[] = [Pencil, Printer, Star, Palette];

function ParaColorir() {
  return (
    <div className="pt-4">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Desenhos para colorir e imprimir
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Escolha seus personagens favoritos, imprima os desenhos e deixe a criatividade ganhar
          vida!
        </p>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {categorias.map((c, i) => {
            const Icone = icones[i % icones.length]!;
            return (
              <li key={c.nome}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[116px] flex-col justify-between overflow-hidden rounded-md p-4 shadow-lg shadow-black/40 ring-1 ring-white/10 transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:min-h-[136px] sm:hover:scale-105"
                  style={{
                    backgroundColor: c.cor,
                    backgroundImage:
                      "linear-gradient(160deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 100%)",
                  }}
                >
                  <Icone className="h-6 w-6 text-white/90 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.45))]" />
                  <span className="text-sm font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55)] sm:text-base">
                    {c.nome}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex justify-center">
          <a
            href={`${BASE}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-red-hover sm:text-base"
          >
            <Palette className="h-4 w-4" />
            Ver todos os desenhos para colorir
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Conteúdo gratuito disponibilizado pelo site parceiro Desenhos &amp; Colorir.
        </p>
      </section>
    </div>
  );
}
