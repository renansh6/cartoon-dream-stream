import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import type { Desenho } from "@/data/desenhos";

export function CardDesenho({ desenho, prioridade = false }: { desenho: Desenho; prioridade?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(desenho.coverHd || desenho.cover);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      if (img.naturalWidth < 200 && src !== desenho.cover) setSrc(desenho.cover);
      setLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <Link
      to="/desenho/$slug"
      params={{ slug: desenho.slug }}
      className="group block focus:outline-none"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-white/5 shadow-md ring-1 ring-white/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:ring-primary/60 group-focus-visible:ring-2 group-focus-visible:ring-primary">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-white/10" />}
        <img
          ref={imgRef}
          src={src}
          srcSet={
            src === desenho.cover
              ? undefined
              : `${desenho.cover.replace("hqdefault", "mqdefault")} 320w, ${src} 1280w`
          }
          sizes="(min-width: 1280px) 18vw, (min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
          alt={`Capa de ${desenho.title}`}
          loading={prioridade ? "eager" : "lazy"}
          fetchPriority={prioridade ? "high" : "auto"}
          decoding="async"
          onLoad={(e) => {
            const img = e.currentTarget;
            // maxresdefault inexistente: YouTube devolve um placeholder 120x90
            if (img.naturalWidth < 200 && src !== desenho.cover) {
              setSrc(desenho.cover);
              return;
            }
            setLoaded(true);
          }}
          onError={() => {
            if (src !== desenho.cover) setSrc(desenho.cover);
            else setLoaded(true);
          }}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-110 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
        <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition group-hover:opacity-100">
          <Play className="h-4 w-4 translate-x-[1px]" fill="currentColor" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3">
          <h3 className="line-clamp-2 text-sm font-semibold text-foreground">{desenho.title}</h3>
          <p className="mt-1 text-xs text-primary">{desenho.category}</p>
        </div>
      </div>
    </Link>
  );
}
