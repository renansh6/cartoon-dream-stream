import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { BotaoTransmitir } from "@/components/BotaoTransmitir";

interface Props {
  /** URL do embed. Aceita "//host/..." (vira https) ou uma URL absoluta. */
  src: string;
  title: string;
  /** Imagem exibida enquanto o embed ainda não foi carregado. */
  poster?: string;
}

/** Player genérico para embeds de terceiros (não-YouTube), exibidos num <iframe>. */
export function PlayerEmbed({ src, title, poster }: Props) {
  const url = src.startsWith("//") ? `https:${src}` : src;
  // O iframe de terceiros (servidor lento) só é montado no clique — assim ele
  // nunca disputa banda com o carregamento inicial da página.
  const [loaded, setLoaded] = useState(false);

  // Abre a conexão com o servidor do embed cedo, para o clique responder rápido.
  useEffect(() => {
    let origin: string;
    try {
      origin = new URL(url).origin;
    } catch {
      return;
    }
    const link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "anonymous";
    document.head.appendChild(link);
    return () => {
      link.remove();
    };
  }, [url]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-border">
      <BotaoTransmitir href={url} label="Abrir em tela cheia para transmitir" />

      {loaded ? (
        <iframe
          src={url}
          title={title}
          scrolling="no"
          allow="encrypted-media; autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          aria-label={`Reproduzir ${title}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-overlay backdrop-blur-[2px] transition-colors hover:bg-black/50"
        >
          {poster && (
            <img
              src={poster}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
          )}
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:bg-red-hover">
            <Play className="h-7 w-7 translate-x-[2px]" fill="currentColor" />
          </span>
          <span className="relative text-sm font-medium text-foreground">Toque para assistir</span>
        </button>
      )}
    </div>
  );
}
