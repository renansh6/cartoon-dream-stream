import { Cast } from "lucide-react";

/**
 * Botão "Transmitir na TV" no canto do player, no mesmo lugar do botão de cast
 * do YouTube (ao lado do CC). O conteúdo aqui é embed de YouTube / players de
 * terceiros, que não podem ser enviados direto por Chromecast; então o botão
 * abre o vídeo onde existe cast nativo (o app/site do YouTube) ou em tela cheia.
 */
export function BotaoTransmitir({
  href,
  label = "Transmitir na TV",
  className = "",
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`absolute right-2 top-2 z-10 inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/60 text-white opacity-70 ring-1 ring-white/15 backdrop-blur-sm transition hover:bg-black/80 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
    >
      <Cast className="h-5 w-5" />
    </a>
  );
}
