import { Link } from "@tanstack/react-router";
import { site } from "@/config/site";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-header">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-foreground">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link to="/" className="text-muted-foreground transition hover:text-foreground">
            Início
          </Link>
          <Link to="/desenhos" className="text-muted-foreground transition hover:text-foreground">
            Todos os desenhos
          </Link>
        </nav>
        <p className="text-xs leading-relaxed text-muted-foreground">
          Os vídeos são exibidos por meio de players oficiais incorporados. Os direitos pertencem
          aos respectivos canais e detentores. Este site não hospeda nem armazena vídeos.
        </p>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground">
        © {ano} {site.name}
      </div>
    </footer>
  );
}
