import { useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Play, AlertTriangle } from "lucide-react";
import { loadYoutubeApi, parseYoutubeUrl } from "@/lib/youtube";

export interface PlayerHandle {
  playAt: (index: number) => void;
  next: () => void;
  prev: () => void;
}

interface Props {
  url: string;
  title: string;
  startIndex?: number;
  ref?: React.Ref<PlayerHandle>;
  onEpisodes?: (videoIds: string[]) => void;
  onIndexChange?: (index: number) => void;
}

export function PlayerYoutube({
  url,
  title,
  startIndex = 0,
  ref,
  onEpisodes,
  onIndexChange,
}: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [error, setError] = useState(false);

  const parsed = parseYoutubeUrl(url);
  const episodesCb = useRef(onEpisodes);
  const indexCb = useRef(onIndexChange);
  episodesCb.current = onEpisodes;
  indexCb.current = onIndexChange;
  const startIndexRef = useRef(startIndex);

  const publishPlaylist = useCallback(() => {
    const player = playerRef.current;
    if (!player?.getPlaylist) return;
    let tries = 0;
    const tick = () => {
      const list: string[] | null = player.getPlaylist?.() ?? null;
      if (list && list.length) {
        episodesCb.current?.(list);
        return;
      }
      if (tries++ < 10) window.setTimeout(tick, 300);
    };
    tick();
  }, []);

  useEffect(() => {
    let cancelled = false;
    setReady(false);
    setStarted(false);
    setBlocked(false);
    setError(false);

    loadYoutubeApi()
      .then((YT) => {
        if (cancelled || !hostRef.current) return;
        const player = new YT.Player(hostRef.current, {
          host: "https://www.youtube-nocookie.com",
          playerVars: {
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            iv_load_policy: 3,
            origin: window.location.origin,
          },
          events: {
            onReady: () => {
              if (cancelled) return;
              if (parsed.playlistId) {
                player.cuePlaylist({
                  list: parsed.playlistId,
                  listType: "playlist",
                  index: startIndexRef.current,
                  startSeconds: parsed.startSeconds,
                });
              } else if (parsed.videoId) {
                player.cueVideoById({
                  videoId: parsed.videoId,
                  startSeconds: parsed.startSeconds,
                });
              }
              setReady(true);
              publishPlaylist();
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onStateChange: (event: any) => {
              const YTState = window.YT.PlayerState;
              if (event.data === YTState.CUED) publishPlaylist();
              if (event.data === YTState.PLAYING) {
                setBlocked(false);
                setStarted(true);
                const i = player.getPlaylistIndex?.() ?? 0;
                indexCb.current?.(i < 0 ? 0 : i);
              }
              if (event.data === YTState.ENDED) {
                const list: string[] | null = player.getPlaylist?.() ?? null;
                const i = player.getPlaylistIndex?.() ?? -1;
                if (list && list.length > 1 && i > -1 && i < list.length - 1) {
                  player.nextVideo();
                }
                // Último item (ou vídeo único): para, sem reiniciar.
              }
            },
            onError: () => setError(true),
          },
        });
        playerRef.current = player;
      })
      .catch(() => setError(true));

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
      playerRef.current = null;
    };
    // Recria o player somente quando o desenho muda.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const confirmPlaying = useCallback(() => {
    window.setTimeout(() => {
      const state = playerRef.current?.getPlayerState?.();
      const YTState = window.YT?.PlayerState;
      if (YTState && state !== YTState.PLAYING && state !== YTState.BUFFERING) {
        setBlocked(true);
      }
    }, 1500);
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      playAt: (index: number) => {
        const player = playerRef.current;
        if (!player) return;
        setStarted(true);
        if (parsed.playlistId && player.playVideoAt) player.playVideoAt(index);
        else player.playVideo?.();
        confirmPlaying();
      },
      next: () => {
        playerRef.current?.nextVideo?.();
        setStarted(true);
      },
      prev: () => {
        playerRef.current?.previousVideo?.();
        setStarted(true);
      },
    }),
    [parsed.playlistId, confirmPlaying],
  );

  const start = () => {
    setStarted(true);
    const player = playerRef.current;
    if (parsed.playlistId && player?.playVideoAt) player.playVideoAt(startIndexRef.current);
    else player?.playVideo?.();
    confirmPlaying();
  };

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-lg ring-1 ring-border">
      <div className="absolute inset-0">
        <div ref={hostRef} className="h-full w-full" />
      </div>

      {!started && !error && (
        <button
          type="button"
          onClick={start}
          disabled={!ready}
          aria-label={`Reproduzir ${title}`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-overlay backdrop-blur-[2px] transition-colors hover:bg-black/50"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:bg-red-hover">
            <Play className="h-7 w-7 translate-x-[2px]" fill="currentColor" />
          </span>
          <span className="text-sm font-medium text-foreground">
            {ready ? "Toque para assistir" : "Carregando player…"}
          </span>
        </button>
      )}

      {blocked && !error && (
        <p className="absolute inset-x-0 bottom-0 bg-elevated/95 px-4 py-2 text-center text-xs text-muted-foreground">
          O navegador bloqueou a reprodução automática. Toque no play do player para continuar.
        </p>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-elevated px-6 text-center">
          <AlertTriangle className="h-8 w-8 text-primary" />
          <p className="text-sm text-muted-foreground">
            Este vídeo não pôde ser reproduzido no momento. Tente novamente mais tarde.
          </p>
        </div>
      )}
    </div>
  );
}
