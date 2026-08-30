export interface ParsedYoutube {
  videoId: string | null;
  playlistId: string | null;
  startSeconds: number;
}

/** Converte "1h2m3s" / "90" em segundos. */
function parseTime(raw: string | null): number {
  if (!raw) return 0;
  if (/^\d+$/.test(raw)) return Number(raw);
  const m = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!m) return 0;
  return Number(m[1] ?? 0) * 3600 + Number(m[2] ?? 0) * 60 + Number(m[3] ?? 0);
}

/** Extrai v, list e t de qualquer URL do YouTube. */
export function parseYoutubeUrl(url: string): ParsedYoutube {
  let videoId: string | null = null;
  let playlistId: string | null = null;
  let startSeconds = 0;

  try {
    const u = new URL(url);
    playlistId = u.searchParams.get("list");
    startSeconds = parseTime(u.searchParams.get("t") ?? u.searchParams.get("start"));
    if (u.hostname.includes("youtu.be")) {
      videoId = u.pathname.slice(1) || null;
    } else if (u.pathname.startsWith("/embed/") || u.pathname.startsWith("/shorts/")) {
      videoId = u.pathname.split("/")[2] || null;
    } else {
      videoId = u.searchParams.get("v");
    }
  } catch {
    const v = url.match(/[?&]v=([^&]+)/);
    const l = url.match(/[?&]list=([^&]+)/);
    videoId = v?.[1] ?? null;
    playlistId = l?.[1] ?? null;
  }

  return { videoId, playlistId, startSeconds };
}

export function thumbFor(videoId: string, hd = false) {
  return `https://i.ytimg.com/vi/${videoId}/${hd ? "maxresdefault" : "mqdefault"}.jpg`;
}

let apiPromise: Promise<typeof window.YT> | null = null;

/** Carrega a IFrame Player API uma única vez. */
export function loadYoutubeApi(): Promise<typeof window.YT> {
  if (typeof window === "undefined") return Promise.reject(new Error("SSR"));
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve(window.YT);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error("Falha ao carregar o player do YouTube"));
    document.head.appendChild(script);
  });

  return apiPromise;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}
