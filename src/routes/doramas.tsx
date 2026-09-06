import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { CardDesenho } from "@/components/CardDesenho";
import { doramas } from "@/data/desenhos";
import { site } from "@/config/site";

/** Checkout do produto "Doramas Flix" (mesma plataforma da aba Para colorir). */
const CHECKOUT_URL = "https://pay.lowify.com.br/checkout?product_id=AjEiEq";

/** Banner promocional — coloque o arquivo em public/doramas-banner.jpg. */
const BANNER_URL = "/doramas-banner.jpg";

export const Route = createFileRoute("/doramas")({
  head: () => ({
    meta: [
      { title: `Doramas Flix — ${site.name}` },
      {
        name: "description",
        content: "+50 doramas para assistir e maratonar: romance, comédia romântica, drama e mais.",
      },
      { property: "og:title", content: `Doramas Flix — ${site.name}` },
      {
        property: "og:description",
        content: "+50 doramas para assistir e maratonar. Liberação imediata após a compra.",
      },
    ],
  }),
  component: DoramasFlix,
});

function DoramasFlix() {
  const [semBanner, setSemBanner] = useState(false);

  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#2b0a4a] via-[#3a0f63] to-[#1a0730] ring-1 ring-white/10">
          {semBanner ? (
            <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
              <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-extrabold text-[#2b0a4a]">
                R$ 25
              </span>
              <h1 className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
                Doramas Flix
              </h1>
              <p className="text-lg font-bold text-fuchsia-200">+50 DORAMAS</p>
              <p className="text-sm text-white/70">Histórias para maratonar 💜</p>
            </div>
          ) : (
            <img
              src={BANNER_URL}
              alt="Doramas Flix — +50 doramas para assistir e maratonar"
              onError={() => setSemBanner(true)}
              className="w-full"
            />
          )}
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            +50 doramas para assistir e maratonar
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
            Romance, comédia romântica, drama, histórias de escola e muito mais. Liberação imediata
            após a compra.
          </p>

          <a
            href={CHECKOUT_URL}
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#c026d3] to-[#7e22ce] px-8 text-base font-bold text-white shadow-lg shadow-fuchsia-900/40 transition hover:brightness-110"
          >
            <ShoppingCart className="h-5 w-5" />
            Assista aqui
          </a>
          <p className="mt-3 text-xs text-muted-foreground">Pagamento seguro • Acesso vitalício</p>
        </div>
      </div>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Assista agora
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {doramas.length} doramas disponíveis — toque no card para assistir.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {doramas.map((d, i) => (
            <CardDesenho key={d.id} desenho={d} prioridade={i < 6} />
          ))}
        </div>
      </section>
    </div>
  );
}
