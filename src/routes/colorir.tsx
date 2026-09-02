import type { ComponentType } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Palette, Pencil, Printer, Star } from "lucide-react";
import { site } from "@/config/site";
import { getDesenhoBySlug } from "@/data/desenhos";

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

type Categoria = {
  nome: string;
  href: string;
  cor: string;
  /** slug de um desenho já cadastrado no site, só para reaproveitar a capa. */
  capaDe?: string;
};

/**
 * Links diretos para as categorias do site parceiro (verificados). Nenhuma
 * imagem do site externo é copiada, baixada ou hotlinkeada — as capas dos cards
 * reaproveitam as imagens já usadas no próprio catálogo do site.
 */
const categorias: Categoria[] = [
  { nome: "Princesas", href: `${BASE}/princesas`, cor: "#7C3AED", capaDe: "a-bela-adormecida" },
  { nome: "Barbie", href: `${BASE}/barbie`, cor: "#DB2777", capaDe: "barbie-dreamhouse-adventures" },
  { nome: "Winx Club", href: `${BASE}/winx-club`, cor: "#C026D3", capaDe: "winx-club" },
  { nome: "Hello Kitty", href: `${BASE}/hello-kitty`, cor: "#E11D48", capaDe: "hello-kitty" },
  { nome: "Moranguinho", href: `${BASE}/moranguinho`, cor: "#F43F5E", capaDe: "moranguinho" },
  { nome: "Frozen", href: `${BASE}/frozen`, cor: "#0EA5E9", capaDe: "frozen-uma-aventura-congelante" },
  { nome: "Ladybug", href: `${BASE}/ladybug`, cor: "#DC2626", capaDe: "ladybug" },
  { nome: "My Little Pony", href: `${BASE}/my-little-pony`, cor: "#8B5CF6", capaDe: "my-little-pony" },
  { nome: "Monster High", href: `${BASE}/monster-high`, cor: "#9333EA", capaDe: "monster-high" },
  { nome: "Bratz", href: `${BASE}/bratz`, cor: "#D946EF", capaDe: "bratz" },
  { nome: "Ariel", href: `${BASE}/ariel`, cor: "#0891B2", capaDe: "a-pequena-sereia-2" },
  { nome: "Cinderela", href: `${BASE}/cinderela`, cor: "#2563EB", capaDe: "cinderela" },
  { nome: "Rapunzel", href: `${BASE}/rapunzel`, cor: "#CA8A04", capaDe: "as-enroladas-aventuras-da-rapunzel" },
  {
    nome: "Meninas Superpoderosas",
    href: `${BASE}/as-meninas-superpoderosas`,
    cor: "#EA580C",
    capaDe: "meninas-superpoderosas",
  },
  { nome: "Polly Pocket", href: `${BASE}/polly-pocket`, cor: "#DB2777", capaDe: "polly-pocket" },
  { nome: "Princesinha Sofia", href: `${BASE}/princesa-sofia`, cor: "#6D28D9", capaDe: "princesinha-sofia" },
  { nome: "Bluey", href: `${BASE}/bluey`, cor: "#2563EB", capaDe: "bluey" },
  { nome: "Peppa Pig", href: `${BASE}/peppa-pig`, cor: "#DB2777", capaDe: "peppa-pig" },
  { nome: "Turma da Mônica", href: `${BASE}/turma-da-monica`, cor: "#16A34A", capaDe: "turma-da-monica" },
  { nome: "Todos os desenhos", href: `${BASE}/`, cor: "#E50914" },
];

const icones: ComponentType<{ className?: string }>[] = [Pencil, Printer, Star, Palette];

function capa(slug?: string): string | undefined {
  if (!slug) return undefined;
  const d = getDesenhoBySlug(slug);
  return d?.poster ?? d?.coverHd ?? d?.cover;
}

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
            const img = capa(c.capaDe);
            return (
              <li key={c.nome}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-[150px] flex-col justify-end overflow-hidden rounded-md p-4 shadow-lg shadow-black/40 ring-1 ring-white/10 transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:min-h-[172px] sm:hover:scale-105"
                  style={{ backgroundColor: c.cor }}
                >
                  {img && (
                    <img
                      src={img}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                      className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-200 group-hover:opacity-80"
                    />
                  )}
                  <div
                    className="absolute inset-0 mix-blend-multiply"
                    style={{ backgroundColor: c.cor, opacity: img ? 0.55 : 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                  <Icone className="absolute left-4 top-4 h-6 w-6 text-white/95 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.55))]" />
                  <span className="relative text-sm font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)] sm:text-base">
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
