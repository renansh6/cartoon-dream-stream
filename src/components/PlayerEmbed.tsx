import { BotaoTransmitir } from "@/components/BotaoTransmitir";

interface Props {
  /** URL do embed. Aceita "//host/..." (vira https) ou uma URL absoluta. */
  src: string;
  title: string;
}

/** Player genérico para embeds de terceiros (não-YouTube), exibidos num <iframe>. */
export function PlayerEmbed({ src, title }: Props) {
  const url = src.startsWith("//") ? `https:${src}` : src;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-border">
      <BotaoTransmitir href={url} label="Abrir em tela cheia para transmitir" />
      <iframe
        src={url}
        title={title}
        loading="lazy"
        scrolling="no"
        allow="encrypted-media; autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
