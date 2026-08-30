const KEY = "clube-desenhos:ultimo-episodio";

type Store = Record<string, number>;

function read(): Store {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) ?? "{}") as Store;
  } catch {
    return {};
  }
}

export function getUltimoEpisodio(slug: string): number | null {
  const value = read()[slug];
  return typeof value === "number" ? value : null;
}

export function setUltimoEpisodio(slug: string, index: number) {
  if (typeof window === "undefined") return;
  try {
    const store = read();
    store[slug] = index;
    window.localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* storage indisponível */
  }
}
