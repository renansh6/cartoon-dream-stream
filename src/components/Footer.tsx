import { site } from "@/config/site";

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-header">
      <div className="px-4 py-4 text-center text-xs text-muted-foreground">
        © {ano} {site.name}
      </div>
    </footer>
  );
}
