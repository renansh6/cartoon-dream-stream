import { createFileRoute } from "@tanstack/react-router";
import { Palette } from "lucide-react";
import { site } from "@/config/site";
import { ColorirBlur, ColorirGate, useColorirLiberado } from "@/components/ColorirGate";

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

/** Capas locais (uma por categoria), empacotadas pelo Vite. */
const capas = import.meta.glob("../assets/colorir/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const capaDe = (slug: string): string | undefined => capas[`../assets/colorir/${slug}.jpg`];

type Categoria = { nome: string; slug: string; href: string };

const categorias: Categoria[] = [
  { nome: "Princesas", slug: "princesas", href: `${BASE}/princesas` },
  { nome: "Barbie", slug: "barbie", href: `${BASE}/barbie` },
  { nome: "Winx Club", slug: "winx-club", href: `${BASE}/winx-club` },
  { nome: "Hello Kitty", slug: "hello-kitty", href: `${BASE}/hello-kitty` },
  { nome: "Moranguinho", slug: "moranguinho", href: `${BASE}/moranguinho` },
  { nome: "Frozen", slug: "frozen", href: `${BASE}/frozen` },
  { nome: "Ladybug", slug: "ladybug", href: `${BASE}/ladybug` },
  { nome: "My Little Pony", slug: "my-little-pony", href: `${BASE}/my-little-pony` },
  { nome: "Monster High", slug: "monster-high", href: `${BASE}/monster-high` },
  { nome: "Bratz", slug: "bratz", href: `${BASE}/bratz` },
  { nome: "Ariel", slug: "ariel", href: `${BASE}/ariel` },
  { nome: "Cinderela", slug: "cinderela", href: `${BASE}/cinderela` },
  { nome: "Rapunzel", slug: "rapunzel", href: `${BASE}/rapunzel` },
  { nome: "Meninas Superpoderosas", slug: "meninas-superpoderosas", href: `${BASE}/as-meninas-superpoderosas` },
  { nome: "Polly Pocket", slug: "polly-pocket", href: `${BASE}/polly-pocket` },
  { nome: "Princesinha Sofia", slug: "princesinha-sofia", href: `${BASE}/princesa-sofia` },
  { nome: "Bluey", slug: "bluey", href: `${BASE}/bluey` },
  { nome: "Peppa Pig", slug: "peppa-pig", href: `${BASE}/peppa-pig` },
  { nome: "Turma da Mônica", slug: "turma-da-monica", href: `${BASE}/turma-da-monica` },
];

function ParaColorir() {
  const { liberado, checado, liberar } = useColorirLiberado();
  const bloqueado = checado && !liberado;

  return (
    <div className="pt-4">
      {bloqueado ? (
        <ColorirGate bannerUrl={capaDe("princesas")} onLiberado={liberar} />
      ) : null}
      <ColorirBlur ativo={bloqueado}>
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h1 className="text-[27px] font-extrabold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
          DESENHOS PARA COLORIR
        </h1>
        <p className="mt-2 text-sm font-semibold text-foreground sm:text-base">
          Mais de 2.000 desenhos prontos para imprimir e colorir
        </p>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Escolha seus personagens favoritos, imprima os desenhos e deixe a criatividade ganhar
          vida!
        </p>

        <ul className="mt-8 grid max-w-5xl grid-cols-1 gap-4 min-[380px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {categorias.map((c) => {
            const capa = capaDe(c.slug);
            return (
              <li key={c.nome}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[124px] items-stretch gap-2 rounded-[14px] border border-[#2a2a2a] bg-[#181818] p-3 shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#E50914] focus:outline-none focus-visible:border-[#E50914] sm:h-[146px] sm:gap-3 sm:p-[18px]"
                >
                  {/* Lado esquerdo: texto */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="w-fit rounded bg-[#E50914] px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-normal text-white sm:text-[10px] sm:tracking-wide">
                      Para colorir
                    </span>
                    <span className="mt-1.5 line-clamp-2 break-words text-[12px] font-bold leading-tight text-white sm:mt-2 sm:text-[14px]">
                      {c.nome}
                    </span>
                    <span className="mt-auto whitespace-nowrap pt-1.5 text-[9px] font-semibold leading-tight text-[#b3b3b3] transition-colors group-hover:text-white sm:pt-2 sm:text-xs">
                      Abrir coleção →
                    </span>
                  </div>

                  {/* Lado direito: folha de papel com a capa da coleção */}
                  <div className="relative h-[62px] w-[48px] shrink-0 self-center sm:mr-1 sm:h-[92px] sm:w-[70px]">
                    <div className="absolute inset-0 -rotate-[4deg] overflow-hidden rounded-[6px] bg-[#f8f8f8] p-[3px] shadow-[0_4px_10px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out group-hover:rotate-0 group-hover:scale-[1.06]">
                      <img
                        src={capa}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full rounded-[3px] bg-[#ededed] object-cover"
                      />
                      {/* dobra no canto superior */}
                      <span
                        aria-hidden
                        className="absolute right-0 top-0 h-3 w-3 bg-gradient-to-br from-[#f2f2f2] to-[#cfcfcf] shadow-[-1px_1px_2px_rgba(0,0,0,0.18)] [clip-path:polygon(100%_0,0_0,100%_100%)] sm:h-3.5 sm:w-3.5"
                      />
                    </div>
                  </div>
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
      </ColorirBlur>
    </div>
  );
}
