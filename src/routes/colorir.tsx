import { createFileRoute } from "@tanstack/react-router";
import {
  Castle,
  Circle,
  CircleDot,
  Crown,
  Dog,
  Flower2,
  Gem,
  Heart,
  type LucideIcon,
  Palette,
  Rainbow,
  Skull,
  Smile,
  Snowflake,
  Sparkles,
  Star,
  Users,
  WandSparkles,
  Waves,
  Zap,
} from "lucide-react";
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

type Categoria = { nome: string; href: string; Icone: LucideIcon };

/**
 * Links diretos para as categorias do site parceiro (verificados). Os cards são
 * 100% CSS + ícones do Lucide — nenhuma imagem externa é usada.
 */
const categorias: Categoria[] = [
  { nome: "Princesas", href: `${BASE}/princesas`, Icone: Crown },
  { nome: "Barbie", href: `${BASE}/barbie`, Icone: Sparkles },
  { nome: "Winx Club", href: `${BASE}/winx-club`, Icone: Star },
  { nome: "Hello Kitty", href: `${BASE}/hello-kitty`, Icone: Heart },
  { nome: "Moranguinho", href: `${BASE}/moranguinho`, Icone: Flower2 },
  { nome: "Frozen", href: `${BASE}/frozen`, Icone: Snowflake },
  { nome: "Ladybug", href: `${BASE}/ladybug`, Icone: CircleDot },
  { nome: "My Little Pony", href: `${BASE}/my-little-pony`, Icone: Rainbow },
  { nome: "Monster High", href: `${BASE}/monster-high`, Icone: Skull },
  { nome: "Bratz", href: `${BASE}/bratz`, Icone: Gem },
  { nome: "Ariel", href: `${BASE}/ariel`, Icone: Waves },
  { nome: "Cinderela", href: `${BASE}/cinderela`, Icone: Castle },
  { nome: "Rapunzel", href: `${BASE}/rapunzel`, Icone: WandSparkles },
  { nome: "Meninas Superpoderosas", href: `${BASE}/as-meninas-superpoderosas`, Icone: Zap },
  { nome: "Polly Pocket", href: `${BASE}/polly-pocket`, Icone: Circle },
  { nome: "Princesinha Sofia", href: `${BASE}/princesa-sofia`, Icone: Crown },
  { nome: "Bluey", href: `${BASE}/bluey`, Icone: Dog },
  { nome: "Peppa Pig", href: `${BASE}/peppa-pig`, Icone: Smile },
  { nome: "Turma da Mônica", href: `${BASE}/turma-da-monica`, Icone: Users },
];

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

        <ul className="mt-8 grid max-w-5xl grid-cols-1 gap-4 min-[360px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {categorias.map((c) => {
            const Icone = c.Icone;
            return (
              <li key={c.nome}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[132px] items-stretch gap-2.5 rounded-[14px] border border-[#2a2a2a] bg-[#181818] p-3 shadow-[0_1px_3px_rgba(0,0,0,0.4)] transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#E50914] focus:outline-none focus-visible:border-[#E50914] sm:h-[146px] sm:gap-3 sm:p-[18px]"
                >
                  {/* Lado esquerdo: texto */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="w-fit rounded bg-[#E50914] px-1.5 py-0.5 text-[9px] font-bold uppercase leading-none tracking-wide text-white sm:text-[10px]">
                      Para colorir
                    </span>
                    <span className="mt-2 line-clamp-2 break-words text-[13px] font-bold leading-tight text-white sm:text-[15px]">
                      {c.nome}
                    </span>
                    <span className="mt-auto pt-2 text-[10px] font-semibold leading-tight text-[#b3b3b3] transition-colors group-hover:text-white sm:text-xs">
                      Abrir coleção →
                    </span>
                  </div>

                  {/* Lado direito: folha de papel ilustrativa */}
                  <div className="relative mr-0.5 h-16 w-12 shrink-0 self-center sm:mr-1 sm:h-[84px] sm:w-16">
                    <div className="absolute inset-0 -rotate-[4deg] rounded-[6px] bg-[#f8f8f8] shadow-[0_4px_10px_rgba(0,0,0,0.45)] transition-transform duration-200 ease-out group-hover:rotate-0 group-hover:scale-[1.06]">
                      {/* dobra no canto superior */}
                      <span
                        aria-hidden
                        className="absolute right-0 top-0 h-3 w-3 rounded-bl-[3px] bg-gradient-to-br from-[#e8e8e8] to-[#cdcdcd] shadow-[-1px_1px_2px_rgba(0,0,0,0.12)] [clip-path:polygon(100%_0,0_0,100%_100%)] sm:h-3.5 sm:w-3.5"
                      />
                      {/* ícone + linhas de "atividade impressa" */}
                      <div className="flex h-full w-full flex-col items-center justify-center gap-1 px-1.5 sm:gap-1.5 sm:px-2">
                        <Icone className="h-[18px] w-[18px] text-[#3a3a3a] sm:h-6 sm:w-6" strokeWidth={2} />
                        <span aria-hidden className="flex w-full flex-col items-center gap-[3px]">
                          <span className="h-[3px] w-4/5 rounded-full bg-[#d9d9d9]" />
                          <span className="h-[3px] w-3/5 rounded-full bg-[#d9d9d9]" />
                        </span>
                      </div>
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
    </div>
  );
}
