import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { destaques } from "@/data/desenhos";

export function Destaques() {
  const [index, setIndex] = useState(0);
  const total = destaques.length;

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), 7000);
    return () => window.clearInterval(id);
  }, [total]);

  const atual = destaques[index] ?? destaques[0];
  if (!atual) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-6 sm:px-6">
      <div className="relative overflow-hidden rounded-xl ring-1 ring-border">
        <div className="relative h-[440px] sm:h-[420px] md:h-[480px]">
          {destaques.map((d, i) => (
            <img
              key={d.id}
              src={d.coverHd}
              alt=""
              aria-hidden={i !== index}
              loading={i === 0 ? "eager" : "lazy"}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = d.cover;
              }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

          <div className="relative flex h-full flex-col justify-end gap-3 p-6 sm:p-10 md:max-w-xl">
            <span className="w-fit rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-foreground">
              {atual.category}
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {atual.title}
            </h1>
            <p className="text-sm text-muted-foreground sm:text-base">{atual.description}</p>
            <div className="mt-2 flex items-center gap-3">
              <Link
                to="/desenho/$slug"
                params={{ slug: atual.slug }}
                hash="player"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-red-hover"
              >
                <Play className="h-4 w-4" fill="currentColor" /> Assistir agora
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Destaque anterior"
                  onClick={() => setIndex((i) => (i - 1 + total) % total)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-foreground transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Próximo destaque"
                  onClick={() => setIndex((i) => (i + 1) % total)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-foreground transition hover:bg-white/20"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              {destaques.map((d, i) => (
                <button
                  key={d.id}
                  type="button"
                  aria-label={`Ver destaque ${d.title}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-primary" : "w-3 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
