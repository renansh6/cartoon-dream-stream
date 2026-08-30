import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, Sparkles, X } from "lucide-react";
import { site } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const buscar = (valor: string) => {
    setQ(valor);
    navigate({ to: "/desenhos", search: valor ? { q: valor } : {}, replace: true });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
            {site.name}
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          <Link
            to="/"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground bg-white/10" }}
          >
            Início
          </Link>
          <Link
            to="/desenhos"
            className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            activeProps={{ className: "text-foreground bg-white/10" }}
          >
            Todos os desenhos
          </Link>
        </nav>

        <div className="ml-auto hidden md:block">
          <SearchInput value={q} onChange={buscar} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
          <SearchInput value={q} onChange={buscar} />
          <div className="mt-3 flex flex-col">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-xl px-3 text-sm text-foreground"
            >
              Início
            </Link>
            <Link
              to="/desenhos"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-xl px-3 text-sm text-foreground"
            >
              Todos os desenhos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function SearchInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar desenho…"
        aria-label="Buscar desenho"
        className="h-11 w-full rounded-full border border-white/10 bg-white/5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none md:w-64"
      />
    </div>
  );
}
