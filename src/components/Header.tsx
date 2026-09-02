import { useState, type ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";

/** Fonte condensada e forte para a logo, com fallbacks nativos condensados. */
const LOGO_FONT = "'Oswald', 'Arial Narrow', 'Roboto Condensed', system-ui, sans-serif";

export function Header() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const buscar = (valor: string) => {
    setQ(valor);
    navigate({ to: "/desenhos", search: (valor ? { q: valor } : {}) as { q?: string }, replace: true });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-header/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Clube das Meninas Flix — início"
          className="shrink-0 whitespace-nowrap"
        >
          <span
            style={{ fontFamily: LOGO_FONT }}
            className="text-[15px] font-bold uppercase leading-none tracking-[-0.01em] text-primary sm:text-[22px] lg:text-[32px]"
          >
            Clube das Meninas Flix
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          <NavItem to="/" exact>
            Início
          </NavItem>
          <NavItem to="/desenhos">Todos os desenhos</NavItem>
          <NavItem to="/colorir">Para colorir</NavItem>
        </nav>

        <div className="ml-auto hidden lg:block">
          <SearchInput value={q} onChange={buscar} />
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <NavItem to="/" exact onClick={() => setOpen(false)}>
            Início
          </NavItem>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-header px-4 pb-4 pt-3 lg:hidden">
          <SearchInput value={q} onChange={buscar} />
          <div className="mt-3 flex flex-col gap-1">
            <Link
              to="/desenhos"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-sm text-foreground"
              activeProps={{ className: "bg-field" }}
            >
              Todos os desenhos
            </Link>
            <Link
              to="/colorir"
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-sm text-foreground"
              activeProps={{ className: "bg-field" }}
            >
              Para colorir
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({
  to,
  exact,
  onClick,
  children,
}: {
  to: string;
  exact?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      {...(exact ? { activeOptions: { exact: true } } : {})}
      className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
      activeProps={{ className: "bg-field text-foreground" }}
    >
      {children}
    </Link>
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
        className="h-11 w-full rounded-md border border-border bg-field pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none md:w-64"
      />
    </div>
  );
}
