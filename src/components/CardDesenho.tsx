import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import type { Desenho } from "@/data/desenhos";
import capaFallback from "@/assets/capa-fallback.svg";

export function CardDesenho({ desenho, prioridade = false }: { desenho: Desenho; prioridade?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const poster = desenho.poster;
  const [src, setSrc] = useState(poster || desenho.cover);
  const imgRef = useRef<HTMLImageElement>(null);

  // imagens vindas do cache podem não disparar onLoad após a hidratação
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <Link
      to="/desenho/$slug"
      params={{ slug: desenho.slug }}
      className="group relative block focus:outline-none hover:z-10"
    >
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
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition group-hover:opacity-100">
          <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3">
          <h3 className="line-clamp-2 text-sm font-semibold text-foreground">{desenho.title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{desenho.category}</p>
        </div>
      </div>
    </Link>
  );
}
