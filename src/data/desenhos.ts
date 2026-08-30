import sakura from "@/assets/capas/sakura.jpg.asset.json";
import ursinhos from "@/assets/capas/ursinhos.jpg.asset.json";
import tinker from "@/assets/capas/tinker.jpg.asset.json";
import sofia from "@/assets/capas/princesasopia.jpg.asset.json";
import monica from "@/assets/capas/monica.jpg.asset.json";
import bluey from "@/assets/capas/bluey.jpg.asset.json";
import gabby from "@/assets/capas/casagaby.jpg.asset.json";
import spirit from "@/assets/capas/spirit.jpg.asset.json";
import superhero from "@/assets/capas/superhero.jpg.asset.json";
import masha from "@/assets/capas/mash.jpg.asset.json";
import lol from "@/assets/capas/lolsurprise.jpg.asset.json";
import trolls from "@/assets/capas/trolls.jpg.asset.json";
import lalaloopsy from "@/assets/capas/lalaposy.jpg.asset.json";
import legoFriends from "@/assets/capas/legofriends.jpg.asset.json";
import rainbowHigh from "@/assets/capas/raibonw.jpg.asset.json";
import everAfter from "@/assets/capas/ever.jpg.asset.json";
import frozen from "@/assets/capas/frozen.jpg.asset.json";
import bratz from "@/assets/capas/bratz.jpg.asset.json";
import dora from "@/assets/capas/dora.jpg.asset.json";
import ladybug from "@/assets/capas/lady.jpg.asset.json";
import meninasSuper from "@/assets/capas/meninasuper.jpg.asset.json";
import monsterHigh from "@/assets/capas/monsterhigh.jpg.asset.json";
import helloKitty from "@/assets/capas/hello.jpg.asset.json";
import kimPossible from "@/assets/capas/kim.jpg.asset.json";

export type Categoria =
  | "Clássicos"
  | "Magia e Fantasia"
  | "Ação e Aventura"
  | "Para as Pequenas"
  | "Filmes";

export interface Desenho {
  id: string;
  slug: string;
  title: string;
  category: Categoria;
  description: string;
  /** Thumbnail oficial do YouTube vinculada ao vídeo cadastrado. */
  cover: string;
  /** Versão em alta resolução (fallback automático para `cover`). */
  coverHd: string;
  /** Pôster oficial enviado manualmente (exibido inteiro, sem recorte). */
  poster?: string;
  youtubeUrl: string;
  featured: boolean;
}

export const categorias: Categoria[] = [
  "Clássicos",
  "Magia e Fantasia",
  "Ação e Aventura",
  "Para as Pequenas",
  "Filmes",
];

export const desenhos: Desenho[] = [
  {"id": "1", "slug": "polly-pocket", "title": "Polly Pocket", "category": "Clássicos", "description": "Assista Polly Pocket completo, direto do YouTube, sem complicação.", "cover": "https://i.ytimg.com/vi/_Uzs5ah8wwc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/_Uzs5ah8wwc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=_Uzs5ah8wwc&t=6s", "featured": false},
  {"id": "2", "slug": "moranguinho", "title": "Moranguinho", "category": "Clássicos", "description": "Reveja Moranguinho em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/r-0CUY8xK1I/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/r-0CUY8xK1I/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=r-0CUY8xK1I&list=PLlJGK-ZrHigzV-q0fahZxdKUx82ONOnfi", "featured": false},
  {"id": "3", "slug": "hello-kitty", "title": "Hello Kitty", "category": "Clássicos", "description": "Reveja Hello Kitty em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/pcS1-XSjzG8/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/pcS1-XSjzG8/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=pcS1-XSjzG8&list=PLuM1cDb0L3BKJnhldrip-TidwMNO_6cD-", "featured": false},
  {"id": "4", "slug": "winx-club", "title": "Winx Club", "category": "Magia e Fantasia", "description": "Reveja Winx Club em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/Cb5wPj5sA0Y/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Cb5wPj5sA0Y/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Cb5wPj5sA0Y&list=PL_gC9XpbDqNpj8t3ySaYxr1d4azFsdHGQ", "featured": true},
  {"id": "5", "slug": "w-i-t-c-h", "title": "W.I.T.C.H.", "category": "Magia e Fantasia", "description": "Reveja W.I.T.C.H. em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/7aVdbR5PNww/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/7aVdbR5PNww/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=7aVdbR5PNww&list=PLlx1Jroya6QUQ8gKQuk3sU6CThfn_-VJ7", "featured": false},
  {"id": "6", "slug": "sailor-moon", "title": "Sailor Moon", "category": "Magia e Fantasia", "description": "Reveja Sailor Moon em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/LGQCPOMcYJQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/LGQCPOMcYJQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=LGQCPOMcYJQ&list=PLHSbAz1hu9sTBNk6N2D961X6eQd-xA1bs", "featured": false},
  {"id": "7", "slug": "ever-after-high", "title": "Ever After High", "category": "Magia e Fantasia", "description": "Reveja Ever After High em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/6hhSCf7hkuE/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/6hhSCf7hkuE/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=6hhSCf7hkuE&list=PL1CVlxnT1IWy1FHdKQssN97Bp_G-5fUET", "featured": false},
  {"id": "8", "slug": "meninas-superpoderosas", "title": "Meninas Superpoderosas", "category": "Ação e Aventura", "description": "Reveja Meninas Superpoderosas em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/zcPJFHMxZxM/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/zcPJFHMxZxM/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=zcPJFHMxZxM&list=PLJ_znu-N3ry31K3OXWbH4K-_JwG34VrMg", "featured": false},
  {"id": "9", "slug": "kim-possible", "title": "Kim Possible", "category": "Ação e Aventura", "description": "Reveja Kim Possible em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/d_vahxFi-0g/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/d_vahxFi-0g/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=d_vahxFi-0g&list=PLxKx6rp9449PXbM82Z1tiS4oBIHo8s9jT", "featured": false},
  {"id": "10", "slug": "she-ra", "title": "She-Ra", "category": "Ação e Aventura", "description": "Reveja She-Ra em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/0dthX8F9hxc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/0dthX8F9hxc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=0dthX8F9hxc&list=PLPepnzouguY-fQkaAE1LSjtICNmFSRrAv&index=1", "featured": false},
  {"id": "11", "slug": "tres-espias-demais", "title": "Três Espiãs Demais", "category": "Ação e Aventura", "description": "Reveja Três Espiãs Demais em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/Ss1ty0WS2N4/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Ss1ty0WS2N4/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Ss1ty0WS2N4&list=PLlx1Jroya6QUJaIofIGdHV27NVtdnFlWn", "featured": true},
  {"id": "12", "slug": "frozen-uma-aventura-congelante", "title": "Frozen: Uma Aventura Congelante", "category": "Filmes", "description": "Assista Frozen: Uma Aventura Congelante completo, direto do YouTube, sem complicação.", "cover": "https://i.ytimg.com/vi/HgM_8ERxY_A/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/HgM_8ERxY_A/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=HgM_8ERxY_A", "featured": true},
  {"id": "13", "slug": "ladybug", "title": "Ladybug", "category": "Ação e Aventura", "description": "Reveja Ladybug em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/9m_RjAyK2qE/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/9m_RjAyK2qE/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=9m_RjAyK2qE&list=PLuoFsz_AsLn0p0Ke-oBq7SweY9zqnUiZc", "featured": true},
  {"id": "14", "slug": "my-little-pony", "title": "My Little Pony", "category": "Magia e Fantasia", "description": "Reveja My Little Pony em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/gRFqrG-DGCk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/gRFqrG-DGCk/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=gRFqrG-DGCk&list=PL1CVlxnT1IWwwDw-iWEETLGipfAZP0uyw", "featured": true},
  {"id": "15", "slug": "monster-high", "title": "Monster High", "category": "Magia e Fantasia", "description": "Reveja Monster High em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/fK8OZSGf9rw/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/fK8OZSGf9rw/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=fK8OZSGf9rw&list=PL3co2PWDP4gszfXOP22i2m1OHjBljIVwL", "featured": false},
  {"id": "16", "slug": "bratz", "title": "Bratz", "category": "Clássicos", "description": "Assista Bratz completo, direto do YouTube, sem complicação.", "cover": "https://i.ytimg.com/vi/8W-tVJu98fk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/8W-tVJu98fk/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=8W-tVJu98fk", "featured": false},
  {"id": "17", "slug": "dora-a-aventureira", "title": "Dora, a Aventureira", "category": "Para as Pequenas", "description": "Assista Dora, a Aventureira completo, direto do YouTube, sem complicação.", "cover": "https://i.ytimg.com/vi/cxKqvZOmgyA/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/cxKqvZOmgyA/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=cxKqvZOmgyA", "featured": false},
  {"id": "18", "slug": "peppa-pig", "title": "Peppa Pig", "category": "Para as Pequenas", "description": "Reveja Peppa Pig em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/GNWjDxa-iZk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/GNWjDxa-iZk/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=GNWjDxa-iZk&list=PL4amRdcic-2StDcfSCbarupeXvKLAS-UJ", "featured": false},
  {"id": "19", "slug": "pucca", "title": "Pucca", "category": "Clássicos", "description": "Reveja Pucca em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/9n8SfuM6f8E/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/9n8SfuM6f8E/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=9n8SfuM6f8E&list=PLDH-5jI68ZZPDUy3H9__vMGm0gesxjYUz", "featured": false},
  {"id": "20", "slug": "turma-da-monica", "title": "Turma da Mônica", "category": "Clássicos", "description": "Reveja Turma da Mônica em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/KPNrnch8tRg/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/KPNrnch8tRg/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=KPNrnch8tRg&list=PLWduEF1R_tVZYNTH8ajFOEDkDT_hfIQL9", "featured": false},
  {"id": "21", "slug": "sakura-card-captors", "title": "Sakura Card Captors", "category": "Magia e Fantasia", "description": "Reveja Sakura Card Captors em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/Yr_flociXYY/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Yr_flociXYY/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Yr_flociXYY&list=PLutjGRLAHx-Ex7H1eJNpDUgkkWXgBXfHG", "featured": false},
  {"id": "22", "slug": "ursinhos-carinhosos", "title": "Ursinhos Carinhosos", "category": "Para as Pequenas", "description": "Reveja Ursinhos Carinhosos em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/xPShlKutlnU/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/xPShlKutlnU/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=xPShlKutlnU&list=PLdWJGKnoXupX06C9WgsfEZTcyHUW4zTiU", "featured": false},
  {"id": "23", "slug": "tinker-bell", "title": "Tinker Bell", "category": "Magia e Fantasia", "description": "Reveja Tinker Bell em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/AZR5L8lJmUU/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/AZR5L8lJmUU/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=AZR5L8lJmUU&list=PLMkh6tIFd2KoMYA5wT8s5EGF67xmnuG1v", "featured": false},
  {"id": "24", "slug": "princesinha-sofia", "title": "Princesinha Sofia", "category": "Para as Pequenas", "description": "Reveja Princesinha Sofia em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/Wuh_xzF2ZaI/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Wuh_xzF2ZaI/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Wuh_xzF2ZaI&list=PLhDycmSpd11NGvnHo7evGLiZ086kPNUVS", "featured": false},
  {"id": "25", "slug": "masha-e-o-urso", "title": "Masha e o Urso", "category": "Para as Pequenas", "description": "Reveja Masha e o Urso em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/szI4g5tUpto/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/szI4g5tUpto/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=szI4g5tUpto&list=PLNHb3esxun2lXvCd1IbIEIg9EPnggBhlf", "featured": false},
  {"id": "26", "slug": "bluey", "title": "Bluey", "category": "Para as Pequenas", "description": "Reveja Bluey em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/DRTWHRUEYL0/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/DRTWHRUEYL0/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=DRTWHRUEYL0&list=PLVkj_daPh17Sb8YEv5PVbyCjqz7IkDHXA", "featured": false},
  {"id": "27", "slug": "a-casa-magica-da-gabby", "title": "A Casa Mágica da Gabby", "category": "Para as Pequenas", "description": "Reveja A Casa Mágica da Gabby em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/vGDdUML82jI/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/vGDdUML82jI/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=vGDdUML82jI&list=PLv4XAZf2LmiPLFkytofObcpZAQypvwedY", "featured": false},
  {"id": "28", "slug": "spirit-cavalgando-livre", "title": "Spirit: Cavalgando Livre", "category": "Ação e Aventura", "description": "Reveja Spirit: Cavalgando Livre em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/005OIruQcYw/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/005OIruQcYw/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=005OIruQcYw&list=PLmRQDm7_1HqjFY-fIfB-wbSJfDsXCfpDl", "featured": false},
  {"id": "29", "slug": "dc-super-hero-girls", "title": "DC Super Hero Girls", "category": "Ação e Aventura", "description": "Reveja DC Super Hero Girls em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/pXVKoFFPyeQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/pXVKoFFPyeQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=pXVKoFFPyeQ&list=PLpG-SAkRNTd9ilyEjkRxVMa1ZaoeQYDXC", "featured": false},
  {"id": "30", "slug": "lego-friends", "title": "LEGO Friends", "category": "Ação e Aventura", "description": "Reveja LEGO Friends em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/fQWEehkKOBk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/fQWEehkKOBk/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=fQWEehkKOBk&list=PLNr4jwIKA4-qcSniNg-p0eVX1FNTHbiuV", "featured": false},
  {"id": "31", "slug": "rainbow-high", "title": "Rainbow High", "category": "Clássicos", "description": "Reveja Rainbow High em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/Yv73Ry9JzBs/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Yv73Ry9JzBs/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Yv73Ry9JzBs&list=PLzHXkpOtVN4TsbeL9geqagqYwStOHHD9Q", "featured": false},
  {"id": "32", "slug": "l-o-l-surprise", "title": "L.O.L. Surprise!", "category": "Para as Pequenas", "description": "Reveja L.O.L. Surprise! em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/8JXoIQxYFLc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/8JXoIQxYFLc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=8JXoIQxYFLc&list=PLtMcF9kA5zEw60B6J4b_xaCA8NMJrVybA", "featured": false},
  {"id": "33", "slug": "trolls", "title": "Trolls", "category": "Ação e Aventura", "description": "Reveja Trolls em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/HiX_GsO8lwA/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/HiX_GsO8lwA/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=HiX_GsO8lwA&list=PLUmLp8QGk1vD0usieHbKKcdwAfeZ-cFJK", "featured": false},
  {"id": "34", "slug": "lalaloopsy", "title": "Lalaloopsy", "category": "Clássicos", "description": "Reveja Lalaloopsy em uma seleção de episódios reunida direto do YouTube.", "cover": "https://i.ytimg.com/vi/rhgKW9jGU_c/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/rhgKW9jGU_c/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=rhgKW9jGU_c&list=PLoEQyYhnyrdSr7PtEDMEYqMVhOjX5te_e", "featured": false},
];

const posters: Record<string, string> = {
  "sakura-card-captors": sakura.url,
  "ursinhos-carinhosos": ursinhos.url,
  "tinker-bell": tinker.url,
  "princesinha-sofia": sofia.url,
  "turma-da-monica": monica.url,
  "bluey": bluey.url,
  "a-casa-magica-da-gabby": gabby.url,
  "spirit-cavalgando-livre": spirit.url,
  "dc-super-hero-girls": superhero.url,
  "masha-e-o-urso": masha.url,
  "l-o-l-surprise": lol.url,
  "trolls": trolls.url,
  "lalaloopsy": lalaloopsy.url,
  "lego-friends": legoFriends.url,
  "rainbow-high": rainbowHigh.url,
  "ever-after-high": everAfter.url,
  "frozen-uma-aventura-congelante": frozen.url,
  "bratz": bratz.url,
  "dora-a-aventureira": dora.url,
  "ladybug": ladybug.url,
  "meninas-superpoderosas": meninasSuper.url,
  "monster-high": monsterHigh.url,
  "hello-kitty": helloKitty.url,
  "kim-possible": kimPossible.url,
};

for (const d of desenhos) {
  const p = posters[d.slug];
  if (p) d.poster = p;
}

export const destaques = desenhos.filter((d) => d.featured);

export function getDesenhoBySlug(slug: string): Desenho | undefined {
  return desenhos.find((d) => d.slug === slug);
}
