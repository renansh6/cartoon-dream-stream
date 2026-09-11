import { useEffect, useRef, useState } from "react";
import { Play, AlertTriangle, ExternalLink } from "lucide-react";
import { BotaoTransmitir } from "@/components/BotaoTransmitir";
import { redecanaisHost } from "@/config/site";

interface Props {
  /** URL do embed. Aceita "//host/..." (vira https) ou uma URL absoluta. */
  src: string;
  title: string;
  /** Imagem exibida enquanto o embed ainda não foi carregado. */
  poster?: string;
}

/**
 * Normaliza a URL do embed: vira https e troca domínios antigos do RedeCanais
 * (que saem do ar) pelo domínio atual configurado em `site.ts`.
 */
function resolverUrl(src: string): string {
  const bruta = src.startsWith("//") ? `https:${src}` : src;
  try {
    const u = new URL(bruta);
    if (/(^|\.)redecanais\./i.test(u.hostname)) u.hostname = redecanaisHost;
    return u.toString();
  } catch {
    return bruta;
  }
}

/** Player genérico para embeds de terceiros (não-YouTube), exibidos num <iframe>. */
export function PlayerEmbed({ src, title, poster }: Props) {
  const url = resolverUrl(src);
  // O iframe de terceiros (servidor lento) só é montado no clique — assim ele
  // nunca disputa banda com o carregamento inicial da página.
  const [loaded, setLoaded] = useState(false);
  const [pronto, setPronto] = useState(false);
  const [falhou, setFalhou] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

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

  // Se o embed não sinalizar carregamento em ~12s, oferece abrir em outra aba.
  useEffect(() => {
    if (!loaded || pronto) return;
    timeoutRef.current = window.setTimeout(() => setFalhou(true), 12000);
    return () => window.clearTimeout(timeoutRef.current);
  }, [loaded, pronto]);

  const abrir = () => {
    setFalhou(false);
    setPronto(false);
    setLoaded(true);
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-border">
      <BotaoTransmitir href={url} label="Abrir em tela cheia para transmitir" />

      {loaded && (
        <iframe
          key={url}
          src={url}
          title={title}
          scrolling="no"
          allow="encrypted-media; autoplay; fullscreen"
          allowFullScreen
          onLoad={() => {
            setPronto(true);
            window.clearTimeout(timeoutRef.current);
          }}
          className="absolute inset-0 h-full w-full border-0"
        />
      )}

      {loaded && !pronto && !falhou && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black">
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/25 border-t-white" />
          <span className="text-sm font-medium text-muted-foreground">Carregando o filme…</span>
        </div>
      )}

      {loaded && falhou && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-elevated px-6 text-center">
          <AlertTriangle className="h-8 w-8 text-primary" />
          <p className="max-w-md text-sm text-muted-foreground">
            O player externo está demorando para responder. Tente abrir em uma nova aba.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-red-hover"
          >
            <ExternalLink className="h-4 w-4" /> Abrir player em nova aba
          </a>
          <button
            type="button"
            onClick={abrir}
            className="text-xs text-muted-foreground underline underline-offset-2"
          >
            Tentar novamente aqui
          </button>
        </div>
      )}

      {!loaded && (
        <button
          type="button"
          onClick={abrir}
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
