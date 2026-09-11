import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { playerEmManutencao, type Desenho } from "@/data/desenhos";
import capaFallback from "@/assets/capa-fallback.svg";

export function CardDesenho({
  desenho,
  prioridade = false,
  aoInterceptar,
}: {
  desenho: Desenho;
  prioridade?: boolean;
  /** Quando definido, o card vira um botão que chama isto em vez de navegar (ex.: trava por senha). */
  aoInterceptar?: ((desenho: Desenho) => void) | undefined;
}) {
  const [loaded, setLoaded] = useState(false);
  const emManutencao = playerEmManutencao(desenho);
  const poster = desenho.poster;
  const [src, setSrc] = useState(poster || desenho.cover);
  const imgRef = useRef<HTMLImageElement>(null);

  // imagens vindas do cache podem não disparar onLoad após a hidratação
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  const conteudo = (
    <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-elevated shadow-lg shadow-black/50 transition-transform duration-200 ease-out group-hover:scale-[1.03] group-focus-visible:ring-2 group-focus-visible:ring-primary sm:group-hover:scale-105">
      {!loaded && <div className="absolute inset-0 animate-pulse bg-white/10" />}
      {poster && (
        <img
          src={src}
          alt=""
          aria-hidden
          loading={prioridade ? "eager" : "lazy"}
          decoding="async"
          className={`pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover opacity-45 blur-2xl transition-opacity duration-300 ${loaded ? "opacity-45" : "opacity-0"}`}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={`Capa de ${desenho.title}`}
        loading={prioridade ? "eager" : "lazy"}
        fetchPriority={prioridade ? "high" : "auto"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (src !== desenho.cover && src !== capaFallback) setSrc(desenho.cover);
          else if (src !== capaFallback) setSrc(capaFallback);
          else setLoaded(true);
        }}
        className={`relative h-full w-full ${poster ? "object-contain" : "object-cover"} transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {desenho.idioma && (
        <span className="absolute left-3 top-3 rounded bg-black/75 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/15">
          {desenho.idioma}
        </span>
      )}
      {!emManutencao && (
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition group-hover:opacity-100">
          <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
        </span>
      )}
      {emManutencao && (
        <span className="absolute right-3 top-3 rounded bg-amber-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black shadow-sm">
          Em manutenção
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-foreground">{desenho.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{desenho.category}</p>
        {emManutencao && (
          <p className="mt-1 text-xs font-medium text-amber-400">Player em manutenção</p>
        )}
      </div>
    </div>
  );

  const classe = "group relative block w-full text-left focus:outline-none hover:z-10";

  // Trava por senha: o card não navega, apenas dispara o callback (abre o modal).
  if (aoInterceptar) {
    return (
      <button type="button" onClick={() => aoInterceptar(desenho)} className={classe}>
        {conteudo}
      </button>
    );
  }

  // Títulos com link externo (ex.: acervo do Barbie Hub) abrem na mesma aba,
  // preservando o botão "voltar" do navegador. Os demais usam a rota interna.
  if (desenho.externalUrl) {
    return (
      <a href={desenho.externalUrl} className={classe}>
        {conteudo}
      </a>
    );
  }

  return (
    <Link to="/desenho/$slug" params={{ slug: desenho.slug }} className={classe}>
      {conteudo}
    </Link>
  );
}
