import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, notFound, useLocation } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { PlayerYoutube, type PlayerHandle } from "@/components/PlayerYoutube";
import { CardDesenho } from "@/components/CardDesenho";
import { desenhos, getDesenhoBySlug } from "@/data/desenhos";
import { parseYoutubeUrl, thumbFor } from "@/lib/youtube";
import { getUltimoEpisodio, setUltimoEpisodio } from "@/lib/progresso";
import { site } from "@/config/site";

export const Route = createFileRoute("/desenho/$slug")({
  loader: ({ params }) => {
    const desenho = getDesenhoBySlug(params.slug);
    if (!desenho) throw notFound();
    return { desenho };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `Desenho não encontrado — ${site.name}` }, { name: "robots", content: "noindex" }],
      };
    }
    const { desenho } = loaderData;
    const title = `${desenho.title} — ${site.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: desenho.description },
        { property: "og:title", content: title },
        { property: "og:description", content: desenho.description },
        { property: "og:image", content: desenho.coverHd },
        { name: "twitter:image", content: desenho.coverHd },
      ],
    };
  },
  component: DetalheDesenho,
});

function DetalheDesenho() {
  const { desenho } = Route.useLoaderData();
  const location = useLocation();
  const parsed = parseYoutubeUrl(desenho.youtubeUrl);
  const temPlaylist = Boolean(parsed.playlistId);

  const playerRef = useRef<PlayerHandle>(null);
  const playerBoxRef = useRef<HTMLDivElement>(null);
  const [episodios, setEpisodios] = useState<string[]>([]);
  const [indexAtual, setIndexAtual] = useState(0);
  const [retomar, setRetomar] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  // Reseta o estado ao trocar de desenho.
  useEffect(() => {
    setEpisodios([]);
    setIndexAtual(0);
    const salvo = getUltimoEpisodio(desenho.slug);
    setStartIndex(salvo ?? 0);
    setRetomar(salvo && salvo > 0 ? salvo : null);
  }, [desenho.slug]);

  useEffect(() => {
    if (indexAtual > 0) setUltimoEpisodio(desenho.slug, indexAtual);
  }, [indexAtual, desenho.slug]);

  const rolarAtePlayer = () => {
    playerBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (location.hash === "player") {
      window.setTimeout(rolarAtePlayer, 100);
    }
  }, [location.hash, desenho.slug]);

  const selecionar = (i: number) => {
    setIndexAtual(i);
    setRetomar(null);
    playerRef.current?.playAt(i);
    if (window.matchMedia("(max-width: 1023px)").matches) rolarAtePlayer();
  };

  const status = temPlaylist ? "Episódios disponíveis" : "Filme completo";
  const itemUnicoLabel = desenho.category === "Filmes" ? "Filme completo" : "Episódio disponível";
  const lista = temPlaylist ? episodios : parsed.videoId ? [parsed.videoId] : [];
  const recomendados = desenhos
    .filter((d) => d.slug !== desenho.slug && d.category === desenho.category)
    .slice(0, 6);

  return (
    <div>
      <div className="relative">
        <img
          src={desenho.coverHd}
          alt=""
          aria-hidden
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = desenho.cover;
          }}
          className="absolute inset-0 h-72 w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 h-72 bg-gradient-to-b from-background/60 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6">
          <Link
            to="/desenhos"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-btn-secondary px-4 text-sm text-white transition-colors hover:bg-btn-secondary-hover"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Link>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end">
            <img
              src={desenho.cover}
              alt={`Capa de ${desenho.title}`}
              loading="lazy"
              className="hidden h-44 w-32 rounded-md object-cover ring-1 ring-border sm:block"
            />
            <div>
              <span className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-foreground">
                {desenho.category}
              </span>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {desenho.title}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{desenho.description}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">{status}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => selecionar(retomar ?? indexAtual)}
                  className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-red-hover"
                >
                  <Play className="h-4 w-4" fill="currentColor" /> Assistir agora
                </button>
                {retomar !== null && (
                  <button
                    type="button"
                    onClick={() => selecionar(retomar)}
                    className="inline-flex min-h-11 items-center gap-2 rounded-md bg-btn-secondary px-5 text-sm font-medium text-white transition-colors hover:bg-btn-secondary-hover"
                  >
                    Continuar do episódio {retomar + 1}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div id="player" ref={playerBoxRef} className="scroll-mt-20">
          <PlayerYoutube
            key={desenho.slug}
            ref={playerRef}
            url={desenho.youtubeUrl}
            title={desenho.title}
            startIndex={startIndex}
            onEpisodes={setEpisodios}
            onIndexChange={setIndexAtual}
          />
          {temPlaylist && lista.length > 1 && (
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  playerRef.current?.prev();
                  if (window.matchMedia("(max-width: 1023px)").matches) rolarAtePlayer();
                }}
                disabled={indexAtual <= 0}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-btn-secondary px-4 text-sm text-white transition-colors hover:bg-btn-secondary-hover disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Anterior
              </button>
              <button
                type="button"
                onClick={() => {
                  playerRef.current?.next();
                  if (window.matchMedia("(max-width: 1023px)").matches) rolarAtePlayer();
                }}
                disabled={indexAtual >= lista.length - 1}
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-btn-secondary px-4 text-sm text-white transition-colors hover:bg-btn-secondary-hover disabled:opacity-40"
              >
                Próximo <ChevronRight className="h-4 w-4" />
              </button>
              <span className="text-xs text-muted-foreground">
                Episódio {indexAtual + 1} de {lista.length}
              </span>
            </div>
          )}
        </div>

        <aside>
          <h2 className="text-lg font-semibold text-foreground">
            {temPlaylist ? "Episódios" : itemUnicoLabel}
          </h2>
          <ul className="mt-3 max-h-[420px] space-y-2 overflow-y-auto pr-1 lg:max-h-[520px]">
            {lista.length === 0 && temPlaylist && (
              <li className="rounded-md bg-elevated p-4 text-sm text-muted-foreground">
                Carregando a lista de episódios…
              </li>
            )}
            {lista.map((videoId, i) => {
              const ativo = i === indexAtual;
              return (
                <li key={`${videoId}-${i}`}>
                  <button
                    type="button"
                    onClick={() => selecionar(i)}
                    className={`flex min-h-11 w-full items-center gap-3 rounded-md p-2 text-left transition-colors ${
                      ativo ? "bg-primary/20 ring-1 ring-primary" : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <img
                      src={thumbFor(videoId)}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-12 w-20 shrink-0 rounded-lg object-cover"
                    />
                    <span className="text-sm text-foreground">
                      {temPlaylist ? `Episódio ${i + 1}` : itemUnicoLabel}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>

      {recomendados.length > 0 && (
        <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-foreground">Recomendados</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {recomendados.map((d) => (
              <CardDesenho key={d.id} desenho={d} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
