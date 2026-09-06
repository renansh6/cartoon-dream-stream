import juniperLeePoster from "@/assets/juniper-lee.jpg";
import barbie2023 from "@/assets/capas/barbie/barbie-2023.jpg";
import barbieAventuraDaPrincesa from "@/assets/capas/barbie/barbie-aventura-da-princesa.jpg";
import barbieAPrincesaEAPlebeia from "@/assets/capas/barbie/barbie-a-princesa-e-a-plebeia.jpg";
import barbieComoRapunzel from "@/assets/capas/barbie/barbie-como-rapunzel.jpg";
import jasmine from "@/assets/capas/jasminealadim.webp.asset.json";
import princesaSapo from "@/assets/capas/princesasapo.webp.asset.json";
import alice from "@/assets/capas/alicepais.webp.asset.json";
import barbieDreamhouse from "@/assets/capas/barbiedreamhouse.webp.asset.json";
import dreamhouseAdv from "@/assets/capas/dreamhouseadventures.webp.asset.json";
import bigDreams from "@/assets/capas/bigdreams.webp.asset.json";
import sakura from "@/assets/capas/sakura.webp.asset.json";
import ursinhos from "@/assets/capas/ursinhos.webp.asset.json";
import tinker from "@/assets/capas/tinker.webp.asset.json";
import sofia from "@/assets/capas/princesasopia.webp.asset.json";
import bluey from "@/assets/capas/bluey.webp.asset.json";
import gabby from "@/assets/capas/casagaby.webp.asset.json";
import spirit from "@/assets/capas/spirit.webp.asset.json";
import superhero from "@/assets/capas/superhero.webp.asset.json";
import masha from "@/assets/capas/mash.webp.asset.json";
import lol from "@/assets/capas/lolsurprise.webp.asset.json";
import trolls from "@/assets/capas/trolls.webp.asset.json";
import legoFriends from "@/assets/capas/legofriends.webp.asset.json";
import rainbowHigh from "@/assets/capas/raibonw.webp.asset.json";
import everAfter from "@/assets/capas/ever.webp.asset.json";
import frozen from "@/assets/capas/frozen.webp.asset.json";
import bratz from "@/assets/capas/bratz.webp.asset.json";
import dora from "@/assets/capas/dora.webp.asset.json";
import ladybug from "@/assets/capas/lady.webp.asset.json";
import meninasSuper from "@/assets/capas/meninasuper.webp.asset.json";
import monsterHigh from "@/assets/capas/monsterhigh.webp.asset.json";
import helloKitty from "@/assets/capas/hello.webp.asset.json";
import kimPossible from "@/assets/capas/kim.webp.asset.json";
import myLittlePony from "@/assets/capas/mylittle.webp.asset.json";
import peppa from "@/assets/capas/peppa.webp.asset.json";
import polly from "@/assets/capas/polly.webp.asset.json";
import moranguinho from "@/assets/capas/moranguinho.webp.asset.json";
import pucca from "@/assets/capas/pucca.webp.asset.json";
import sailor from "@/assets/capas/sailor.webp.asset.json";
import shera from "@/assets/capas/shera.webp.asset.json";
import lalaloopsyNova from "@/assets/capas/loolo.webp.asset.json";
import winx from "@/assets/capas/winx.webp.asset.json";
import witch from "@/assets/capas/witch.webp.asset.json";
import tresEspias from "@/assets/capas/tresespias.webp.asset.json";
import monicaNova from "@/assets/capas/turmamonica.webp.asset.json";
import minnie from "@/assets/capas/minnie_tons.webp.asset.json";
import galinha from "@/assets/capas/galinhapintaginha.webp.asset.json";
import lolirock from "@/assets/capas/lolirock.webp.asset.json";
import lilo from "@/assets/capas/lillo.webp.asset.json";
import padrinhos from "@/assets/capas/padrinhos.webp.asset.json";
import brancaNeve from "@/assets/capas/brancadeneve.webp.asset.json";
import belaAdormecida from "@/assets/capas/belaador.webp.asset.json";
import pequenaSereia from "@/assets/capas/pequenasereia.webp.asset.json";
import cinderela from "@/assets/capas/cinderela.webp.asset.json";
import rapunzel from "@/assets/capas/rapunzel.webp.asset.json";

export type Categoria =
  | "Clássicos"
  | "Magia e Fantasia"
  | "Ação e Aventura"
  | "Para as Pequenas"
  | "Filmes"
  | "Documentário";

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
  /** Quando presente, o player exibe este embed num <iframe> no lugar do player do YouTube. */
  embedUrl?: string;
  featured: boolean;
  /** Coleção à qual o título pertence (ex.: "Barbie"), usada por filtros extras. */
  collection?: string;
  /** Quando presente, o card abre este link (mesma aba) em vez da página interna. */
  externalUrl?: string;
  /** Etiqueta de idioma exibida no card (ex.: "Dublado", "Legendado"). */
  idioma?: string;
}

export const categorias: Categoria[] = [
  "Clássicos",
  "Magia e Fantasia",
  "Ação e Aventura",
  "Para as Pequenas",
  "Filmes",
];

export const desenhos: Desenho[] = [
  {"id": "1", "slug": "polly-pocket", "title": "Polly Pocket", "category": "Clássicos", "description": "Assista Polly Pocket completo agora.", "cover": "https://i.ytimg.com/vi/_Uzs5ah8wwc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/_Uzs5ah8wwc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=_Uzs5ah8wwc&t=6s", "featured": false},
  {"id": "2", "slug": "moranguinho", "title": "Moranguinho", "category": "Clássicos", "description": "Assista agora aos episódios disponíveis de Moranguinho.", "cover": "https://i.ytimg.com/vi/r-0CUY8xK1I/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/r-0CUY8xK1I/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=r-0CUY8xK1I&list=PLlJGK-ZrHigzV-q0fahZxdKUx82ONOnfi", "featured": false},
  {"id": "3", "slug": "hello-kitty", "title": "Hello Kitty", "category": "Clássicos", "description": "Assista agora aos episódios disponíveis de Hello Kitty.", "cover": "https://i.ytimg.com/vi/pcS1-XSjzG8/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/pcS1-XSjzG8/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=pcS1-XSjzG8&list=PLuM1cDb0L3BKJnhldrip-TidwMNO_6cD-", "featured": false},
  {"id": "4", "slug": "winx-club", "title": "Winx Club", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de Winx Club.", "cover": "https://i.ytimg.com/vi/Cb5wPj5sA0Y/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Cb5wPj5sA0Y/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Cb5wPj5sA0Y&list=PL_gC9XpbDqNpj8t3ySaYxr1d4azFsdHGQ", "featured": true},
  {"id": "5", "slug": "w-i-t-c-h", "title": "W.I.T.C.H.", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de W.I.T.C.H..", "cover": "https://i.ytimg.com/vi/7aVdbR5PNww/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/7aVdbR5PNww/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=7aVdbR5PNww&list=PLlx1Jroya6QUQ8gKQuk3sU6CThfn_-VJ7", "featured": false},
  {"id": "6", "slug": "sailor-moon", "title": "Sailor Moon", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de Sailor Moon.", "cover": "https://i.ytimg.com/vi/LGQCPOMcYJQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/LGQCPOMcYJQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=LGQCPOMcYJQ&list=PLHSbAz1hu9sTBNk6N2D961X6eQd-xA1bs", "featured": false},
  {"id": "7", "slug": "ever-after-high", "title": "Ever After High", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de Ever After High.", "cover": "https://i.ytimg.com/vi/6hhSCf7hkuE/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/6hhSCf7hkuE/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=6hhSCf7hkuE&list=PL1CVlxnT1IWy1FHdKQssN97Bp_G-5fUET", "featured": false},
  {"id": "8", "slug": "meninas-superpoderosas", "title": "Meninas Superpoderosas", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de Meninas Superpoderosas.", "cover": "https://i.ytimg.com/vi/zcPJFHMxZxM/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/zcPJFHMxZxM/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=zcPJFHMxZxM&list=PLJ_znu-N3ry31K3OXWbH4K-_JwG34VrMg", "featured": false},
  {"id": "9", "slug": "kim-possible", "title": "Kim Possible", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de Kim Possible.", "cover": "https://i.ytimg.com/vi/d_vahxFi-0g/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/d_vahxFi-0g/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=d_vahxFi-0g&list=PLxKx6rp9449PXbM82Z1tiS4oBIHo8s9jT", "featured": false},
  {"id": "10", "slug": "she-ra", "title": "She-Ra", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de She-Ra.", "cover": "https://i.ytimg.com/vi/0dthX8F9hxc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/0dthX8F9hxc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=0dthX8F9hxc&list=PLPepnzouguY-fQkaAE1LSjtICNmFSRrAv&index=1", "featured": false},
  {"id": "11", "slug": "tres-espias-demais", "title": "Três Espiãs Demais", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de Três Espiãs Demais.", "cover": "https://i.ytimg.com/vi/Ss1ty0WS2N4/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Ss1ty0WS2N4/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Ss1ty0WS2N4&list=PLlx1Jroya6QUJaIofIGdHV27NVtdnFlWn", "featured": true},
  {"id": "12", "slug": "frozen-uma-aventura-congelante", "title": "Frozen: Uma Aventura Congelante", "category": "Filmes", "description": "Assista Frozen: Uma Aventura Congelante completo agora.", "cover": "https://i.ytimg.com/vi/mtPQKEkNNhc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/mtPQKEkNNhc/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=mtPQKEkNNhc", "featured": true},
  {"id": "13", "slug": "ladybug", "title": "Ladybug", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de Ladybug.", "cover": "https://i.ytimg.com/vi/9m_RjAyK2qE/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/9m_RjAyK2qE/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=9m_RjAyK2qE&list=PLuoFsz_AsLn0p0Ke-oBq7SweY9zqnUiZc", "featured": true},
  {"id": "14", "slug": "my-little-pony", "title": "My Little Pony", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de My Little Pony.", "cover": "https://i.ytimg.com/vi/gRFqrG-DGCk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/gRFqrG-DGCk/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=gRFqrG-DGCk&list=PL1CVlxnT1IWwwDw-iWEETLGipfAZP0uyw", "featured": true},
  {"id": "15", "slug": "monster-high", "title": "Monster High", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de Monster High.", "cover": "https://i.ytimg.com/vi/fK8OZSGf9rw/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/fK8OZSGf9rw/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=fK8OZSGf9rw&list=PL3co2PWDP4gszfXOP22i2m1OHjBljIVwL", "featured": false},
  {"id": "16", "slug": "bratz", "title": "Bratz", "category": "Clássicos", "description": "Assista Bratz completo agora.", "cover": "https://i.ytimg.com/vi/8W-tVJu98fk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/8W-tVJu98fk/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=8W-tVJu98fk", "featured": false},
  {"id": "17", "slug": "dora-a-aventureira", "title": "Dora, a Aventureira", "category": "Para as Pequenas", "description": "Assista Dora, a Aventureira completo agora.", "cover": "https://i.ytimg.com/vi/cxKqvZOmgyA/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/cxKqvZOmgyA/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=cxKqvZOmgyA", "featured": false},
  {"id": "18", "slug": "peppa-pig", "title": "Peppa Pig", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de Peppa Pig.", "cover": "https://i.ytimg.com/vi/GNWjDxa-iZk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/GNWjDxa-iZk/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=GNWjDxa-iZk&list=PL4amRdcic-2StDcfSCbarupeXvKLAS-UJ", "featured": false},
  {"id": "19", "slug": "pucca", "title": "Pucca", "category": "Clássicos", "description": "Assista agora aos episódios disponíveis de Pucca.", "cover": "https://i.ytimg.com/vi/9n8SfuM6f8E/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/9n8SfuM6f8E/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=9n8SfuM6f8E&list=PLDH-5jI68ZZPDUy3H9__vMGm0gesxjYUz", "featured": false},
  {"id": "20", "slug": "turma-da-monica", "title": "Turma da Mônica", "category": "Clássicos", "description": "Assista agora aos episódios disponíveis de Turma da Mônica.", "cover": "https://i.ytimg.com/vi/KPNrnch8tRg/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/KPNrnch8tRg/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=KPNrnch8tRg&list=PLWduEF1R_tVZYNTH8ajFOEDkDT_hfIQL9", "featured": false},
  {"id": "21", "slug": "sakura-card-captors", "title": "Sakura Card Captors", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de Sakura Card Captors.", "cover": "https://i.ytimg.com/vi/Yr_flociXYY/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Yr_flociXYY/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Yr_flociXYY&list=PLutjGRLAHx-Ex7H1eJNpDUgkkWXgBXfHG", "featured": false},
  {"id": "22", "slug": "ursinhos-carinhosos", "title": "Ursinhos Carinhosos", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de Ursinhos Carinhosos.", "cover": "https://i.ytimg.com/vi/xPShlKutlnU/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/xPShlKutlnU/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=xPShlKutlnU&list=PLdWJGKnoXupX06C9WgsfEZTcyHUW4zTiU", "featured": false},
  {"id": "23", "slug": "tinker-bell", "title": "Tinker Bell", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de Tinker Bell.", "cover": "https://i.ytimg.com/vi/AZR5L8lJmUU/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/AZR5L8lJmUU/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=AZR5L8lJmUU&list=PLMkh6tIFd2KoMYA5wT8s5EGF67xmnuG1v", "featured": false},
  {"id": "24", "slug": "princesinha-sofia", "title": "Princesinha Sofia", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de Princesinha Sofia.", "cover": "https://i.ytimg.com/vi/Wuh_xzF2ZaI/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Wuh_xzF2ZaI/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Wuh_xzF2ZaI&list=PLhDycmSpd11NGvnHo7evGLiZ086kPNUVS", "featured": false},
  {"id": "25", "slug": "masha-e-o-urso", "title": "Masha e o Urso", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de Masha e o Urso.", "cover": "https://i.ytimg.com/vi/szI4g5tUpto/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/szI4g5tUpto/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=szI4g5tUpto&list=PLNHb3esxun2lXvCd1IbIEIg9EPnggBhlf", "featured": false},
  {"id": "26", "slug": "bluey", "title": "Bluey", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de Bluey.", "cover": "https://i.ytimg.com/vi/DRTWHRUEYL0/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/DRTWHRUEYL0/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=DRTWHRUEYL0&list=PLVkj_daPh17Sb8YEv5PVbyCjqz7IkDHXA", "featured": false},
  {"id": "27", "slug": "a-casa-magica-da-gabby", "title": "A Casa Mágica da Gabby", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de A Casa Mágica da Gabby.", "cover": "https://i.ytimg.com/vi/vGDdUML82jI/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/vGDdUML82jI/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=vGDdUML82jI&list=PLv4XAZf2LmiPLFkytofObcpZAQypvwedY", "featured": false},
  {"id": "28", "slug": "spirit-cavalgando-livre", "title": "Spirit: Cavalgando Livre", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de Spirit: Cavalgando Livre.", "cover": "https://i.ytimg.com/vi/005OIruQcYw/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/005OIruQcYw/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=005OIruQcYw&list=PLmRQDm7_1HqjFY-fIfB-wbSJfDsXCfpDl", "featured": false},
  {"id": "29", "slug": "dc-super-hero-girls", "title": "DC Super Hero Girls", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de DC Super Hero Girls.", "cover": "https://i.ytimg.com/vi/pXVKoFFPyeQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/pXVKoFFPyeQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=pXVKoFFPyeQ&list=PLpG-SAkRNTd9ilyEjkRxVMa1ZaoeQYDXC", "featured": false},
  {"id": "30", "slug": "lego-friends", "title": "LEGO Friends", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de LEGO Friends.", "cover": "https://i.ytimg.com/vi/fQWEehkKOBk/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/fQWEehkKOBk/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=fQWEehkKOBk&list=PLNr4jwIKA4-qcSniNg-p0eVX1FNTHbiuV", "featured": false},
  {"id": "31", "slug": "rainbow-high", "title": "Rainbow High", "category": "Clássicos", "description": "Assista agora aos episódios disponíveis de Rainbow High.", "cover": "https://i.ytimg.com/vi/Yv73Ry9JzBs/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/Yv73Ry9JzBs/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=Yv73Ry9JzBs&list=PLzHXkpOtVN4TsbeL9geqagqYwStOHHD9Q", "featured": false},
  {"id": "32", "slug": "l-o-l-surprise", "title": "L.O.L. Surprise!", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de L.O.L. Surprise!.", "cover": "https://i.ytimg.com/vi/8JXoIQxYFLc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/8JXoIQxYFLc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=8JXoIQxYFLc&list=PLtMcF9kA5zEw60B6J4b_xaCA8NMJrVybA", "featured": false},
  {"id": "33", "slug": "trolls", "title": "Trolls", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de Trolls.", "cover": "https://i.ytimg.com/vi/HiX_GsO8lwA/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/HiX_GsO8lwA/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=HiX_GsO8lwA&list=PLUmLp8QGk1vD0usieHbKKcdwAfeZ-cFJK", "featured": false},
  {"id": "34", "slug": "lalaloopsy", "title": "Lalaloopsy", "category": "Clássicos", "description": "Assista agora aos episódios disponíveis de Lalaloopsy.", "cover": "https://i.ytimg.com/vi/rhgKW9jGU_c/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/rhgKW9jGU_c/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=rhgKW9jGU_c&list=PLoEQyYhnyrdSr7PtEDMEYqMVhOjX5te_e", "featured": false},
  {"id": "35", "slug": "minnie-toons", "title": "Minnie Toons", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de Minnie Toons.", "cover": "https://i.ytimg.com/vi/9EsG2Atj_MQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/9EsG2Atj_MQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=9EsG2Atj_MQ", "featured": false},
  {"id": "36", "slug": "galinha-pintadinha-mini", "title": "Galinha Pintadinha Mini", "category": "Para as Pequenas", "description": "Assista agora aos episódios disponíveis de Galinha Pintadinha Mini.", "cover": "https://i.ytimg.com/vi/optbgi5LAB0/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/optbgi5LAB0/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=optbgi5LAB0&list=PL_4Z-kef-wjxCBHHaycZDyv6SxuE7ZKjW", "featured": false},
  {"id": "37", "slug": "lolirock", "title": "LoliRock", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de LoliRock.", "cover": "https://i.ytimg.com/vi/XBrR66iHq1w/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/XBrR66iHq1w/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=XBrR66iHq1w&list=PL97sEgU6_wq9_7BVoJ3TVTGEnk20No-VG", "featured": false},
  {"id": "38", "slug": "lilo-e-stitch", "title": "Lilo & Stitch", "category": "Ação e Aventura", "description": "Assista agora aos episódios disponíveis de Lilo & Stitch.", "cover": "https://i.ytimg.com/vi/2lSrTPKiFAU/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/2lSrTPKiFAU/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=2lSrTPKiFAU&list=PLg5GAkL_kT8INbtlt3Yblzf3MwFaeT-fF", "featured": false},
  {"id": "39", "slug": "os-padrinhos-magicos", "title": "Os Padrinhos Mágicos", "category": "Clássicos", "description": "Assista agora aos episódios disponíveis de Os Padrinhos Mágicos.", "cover": "https://i.ytimg.com/vi/X4kY7v5RboQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/X4kY7v5RboQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=X4kY7v5RboQ&list=PLKSzXyEBiWpe8koV4b9aOpktoLfWsQcKc", "featured": false},
  {"id": "40", "slug": "branca-de-neve-e-os-sete-anoes", "title": "Branca de Neve e os Sete Anões", "category": "Filmes", "description": "Assista Branca de Neve e os Sete Anões completo agora.", "cover": "https://i.ytimg.com/vi/DQST_l8dcuc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/DQST_l8dcuc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=DQST_l8dcuc", "embedUrl": "//%72%65%64%65%63%61%6E%61%69%73%2E%61%66/player3/server.php?server=RCFServer3&subfolder=ondemand&vid=BRNCDNVEOSTSANS", "featured": false},
  {"id": "41", "slug": "a-bela-adormecida", "title": "A Bela Adormecida", "category": "Filmes", "description": "Assista A Bela Adormecida completo agora.", "cover": "https://i.ytimg.com/vi/BmnbYutrgzQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/BmnbYutrgzQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=BmnbYutrgzQ", "embedUrl": "//%72%65%64%65%63%61%6E%61%69%73%2E%61%66/player3/server.php?server=RCFServer3&subfolder=ondemand&vid=ABLADRMCDA", "featured": false},
  {"id": "42", "slug": "a-pequena-sereia-2", "title": "A Pequena Sereia 2", "category": "Filmes", "description": "Assista A Pequena Sereia 2 completo agora.", "cover": "https://i.ytimg.com/vi/rC5BCkXfYiI/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/rC5BCkXfYiI/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=rC5BCkXfYiI", "featured": false},
  {"id": "43", "slug": "cinderela", "title": "Cinderela", "category": "Filmes", "description": "Assista Cinderela completo agora.", "cover": "https://i.ytimg.com/vi/pxFoxnpOIiw/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/pxFoxnpOIiw/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=pxFoxnpOIiw", "embedUrl": "//%72%65%64%65%63%61%6E%61%69%73%2E%61%66/player3/server.php?server=RCFServer4&subfolder=ondemand&vid=CNDRLA1950", "featured": false},
  {"id": "44", "slug": "as-enroladas-aventuras-da-rapunzel", "title": "As Enroladas Aventuras da Rapunzel", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de As Enroladas Aventuras da Rapunzel.", "cover": "https://i.ytimg.com/vi/3K67_tEB6cc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/3K67_tEB6cc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=3K67_tEB6cc&list=PLASKpDj_VwwrirbRtZEHRtd2qlUDUCxso", "featured": false},
  {"id": "45", "slug": "jasmine-e-aladdin", "title": "Jasmine e Aladdin", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de Jasmine e Aladdin.", "cover": "https://i.ytimg.com/vi/iNrGbX-tCLY/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/iNrGbX-tCLY/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=iNrGbX-tCLY&list=PL4LTimCjRMcDjHpC_L6cOoY1xE8uG2_8O", "featured": false},
  {"id": "46", "slug": "a-princesa-e-o-sapo", "title": "A Princesa e o Sapo", "category": "Filmes", "description": "Assista A Princesa e o Sapo completo agora.", "cover": "https://i.ytimg.com/vi/esN6CGuR7H0/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/esN6CGuR7H0/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=esN6CGuR7H0", "featured": false},
  {"id": "47", "slug": "alice-no-pais-das-maravilhas", "title": "Alice no País das Maravilhas", "category": "Filmes", "description": "Assista Alice no País das Maravilhas completo agora.", "cover": "https://i.ytimg.com/vi/b1oC3yCdikY/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/b1oC3yCdikY/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=b1oC3yCdikY", "featured": false},
  {"id": "48", "slug": "barbie-life-in-the-dreamhouse", "title": "Barbie Life in the Dreamhouse", "category": "Clássicos", "collection": "Barbie", "description": "Assista agora aos episódios disponíveis de Barbie Life in the Dreamhouse.", "cover": "https://i.ytimg.com/vi/VhDjmg3v7ac/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/VhDjmg3v7ac/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=VhDjmg3v7ac&list=PLH8Qh1sYHs5voCvU1jCkmLI6s5-labee4", "featured": false},
  {"id": "49", "slug": "barbie-dreamhouse-adventures", "title": "Barbie Dreamhouse Adventures", "category": "Clássicos", "collection": "Barbie", "description": "Assista agora aos episódios disponíveis de Barbie Dreamhouse Adventures.", "cover": "https://i.ytimg.com/vi/tkC7G0M6k6Q/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/tkC7G0M6k6Q/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=tkC7G0M6k6Q&list=PLH8Qh1sYHs5tWqTSByxJYwcpzj716cOdh", "featured": false},
  {"id": "50", "slug": "barbie-big-city-big-dreams", "title": "Barbie: Big City, Big Dreams", "category": "Filmes", "collection": "Barbie", "description": "Assista Barbie: Big City, Big Dreams completo agora.", "cover": "https://i.ytimg.com/vi/lfU-vofXzcE/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/lfU-vofXzcE/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=lfU-vofXzcE&list=PLH8Qh1sYHs5txYpac-esE7arPrYlHHchf", "featured": false},
  {"id": "51", "slug": "a-vida-e-aventuras-de-juniper-lee", "title": "A Vida e Aventuras de Juniper Lee", "category": "Magia e Fantasia", "description": "Assista agora aos episódios disponíveis de A Vida e Aventuras de Juniper Lee.", "cover": "https://i.ytimg.com/vi/7eK0m8_Wh04/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/7eK0m8_Wh04/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=7eK0m8_Wh04&list=PL51PDZLq7jSEedlIQIiPpcwQfk50dOVt1", "featured": false},
];

// Os pôsteres ficam hospedados no CDN do Lovable sob caminhos absolutos `/__l5e/...`,
// que só resolvem no domínio `*.lovable.app`. Fora dele (vite dev local, deploy na
// Vercel etc.) esses caminhos dão 404, então prefixamos a origem do app publicado.
const ASSET_ORIGIN = "https://cartoon-dream-stream.lovable.app";
const resolveAssetUrl = (u: string) => (u.startsWith("/") ? ASSET_ORIGIN + u : u);

const posters: Record<string, string> = {
  "sakura-card-captors": sakura.url,
  "ursinhos-carinhosos": ursinhos.url,
  "tinker-bell": tinker.url,
  "princesinha-sofia": sofia.url,
  "turma-da-monica": monicaNova.url,
  "bluey": bluey.url,
  "a-casa-magica-da-gabby": gabby.url,
  "spirit-cavalgando-livre": spirit.url,
  "dc-super-hero-girls": superhero.url,
  "masha-e-o-urso": masha.url,
  "l-o-l-surprise": lol.url,
  "trolls": trolls.url,
  "lalaloopsy": lalaloopsyNova.url,
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
  "my-little-pony": myLittlePony.url,
  "peppa-pig": peppa.url,
  "polly-pocket": polly.url,
  "moranguinho": moranguinho.url,
  "pucca": pucca.url,
  "sailor-moon": sailor.url,
  "she-ra": shera.url,
  "winx-club": winx.url,
  "w-i-t-c-h": witch.url,
  "tres-espias-demais": tresEspias.url,
  "minnie-toons": minnie.url,
  "galinha-pintadinha-mini": galinha.url,
  "lolirock": lolirock.url,
  "lilo-e-stitch": lilo.url,
  "os-padrinhos-magicos": padrinhos.url,
  "branca-de-neve-e-os-sete-anoes": brancaNeve.url,
  "a-bela-adormecida": belaAdormecida.url,
  "a-pequena-sereia-2": pequenaSereia.url,
  "cinderela": cinderela.url,
  "as-enroladas-aventuras-da-rapunzel": rapunzel.url,
  "jasmine-e-aladdin": jasmine.url,
  "a-princesa-e-o-sapo": princesaSapo.url,
  "alice-no-pais-das-maravilhas": alice.url,
  "barbie-life-in-the-dreamhouse": barbieDreamhouse.url,
  "barbie-dreamhouse-adventures": dreamhouseAdv.url,
  "barbie-big-city-big-dreams": bigDreams.url,
};

for (const d of desenhos) {
  const p = posters[d.slug];
  if (p) d.poster = resolveAssetUrl(p);
}

// Pôster empacotado localmente (import do Vite já resolve para uma URL válida,
// então não passa por resolveAssetUrl).
const juniperLee = desenhos.find((d) => d.slug === "a-vida-e-aventuras-de-juniper-lee");
if (juniperLee) juniperLee.poster = juniperLeePoster;

/* =========================================================================
   Acervo Barbie — catálogo de filmes importado do Barbie Hub. Cada título abre
   a mesma página interna (player, capa e recomendados) que os demais. Os filmes
   com `embedUrl` tocam num <iframe> (RedeCanais); os quatro sem `embedUrl` usam
   o player do YouTube.
   ========================================================================= */
const barbieHub: Desenho[] = [
  { id: "bh1", slug: "barbie-2023", title: "Barbie", category: "Filmes", collection: "Barbie", description: "Barbie vive no mundo colorido e aparentemente perfeito de Barbie Land. Ao ganhar a chance de conhecer o mundo real, ela descobre as alegrias — e as confusões — de viver entre os humanos.", idioma: "Dublado", cover: barbie2023, coverHd: barbie2023, poster: barbie2023, youtubeUrl: "", embedUrl: "//%72%65%64%65%63%61%6E%61%69%73%2E%76%69%73%69%6F%6E/player3/server.php?server=RCFServer4&subfolder=ondemand&vid=BRBIE2023", featured: false },
  { id: "bh2", slug: "barbie-aventura-da-princesa", title: "Barbie Aventura da Princesa", category: "Filmes", collection: "Barbie", description: "Assista Barbie Aventura da Princesa completo agora.", idioma: "Dublado", cover: barbieAventuraDaPrincesa, coverHd: barbieAventuraDaPrincesa, poster: barbieAventuraDaPrincesa, youtubeUrl: "", embedUrl: "//%72%65%64%65%63%61%6E%61%69%73%2E%76%69%73%69%6F%6E/player3/server.php?server=RCFServer5&subfolder=ondemand&vid=BRBIEAVNTRDPRNCSA", featured: false },
  { id: "bh3", slug: "barbie-em-a-princesa-e-a-plebeia", title: "Barbie em A Princesa e a Plebeia", category: "Filmes", collection: "Barbie", description: "Anneliese, uma princesa, e Erika, uma plebeia, são idênticas — e juntas vivem uma aventura cheia de música, amizade e coragem para salvar o reino.", idioma: "Dublado", cover: barbieAPrincesaEAPlebeia, coverHd: barbieAPrincesaEAPlebeia, poster: barbieAPrincesaEAPlebeia, youtubeUrl: "", embedUrl: "//%72%65%64%65%63%61%6E%61%69%73%2E%76%69%73%69%6F%6E/player3/server.php?server=RCFServer5&subfolder=ondemand&vid=BRBIEAPRNCSEAPLBEIA", featured: false },
  { id: "bh4", slug: "barbie-como-rapunzel", title: "Barbie como Rapunzel", category: "Filmes", collection: "Barbie", description: "Presa numa torre pela bruxa Gothel, Rapunzel usa um pincel mágico para escapar e descobrir a verdade sobre sua família — numa aventura de conto de fadas cheia de coragem.", idioma: "Dublado", cover: barbieComoRapunzel, coverHd: barbieComoRapunzel, poster: barbieComoRapunzel, youtubeUrl: "", embedUrl: "//%72%65%64%65%63%61%6E%61%69%73%2E%76%69%73%69%6F%6E/player3/server.php?server=RCFServer5&subfolder=ondemand&vid=BRBIERPNZL", featured: false },
  { id: "bh5", slug: "a-primeira-barbie-negra", title: "A Primeira Barbie Negra", category: "Filmes", collection: "Barbie", description: "Assista A Primeira Barbie Negra completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/A0gwTrSVWC92e0ujSJVn3FFQRXf.jpg", coverHd: "https://image.tmdb.org/t/p/w500/A0gwTrSVWC92e0ujSJVn3FFQRXf.jpg", poster: "https://image.tmdb.org/t/p/w500/A0gwTrSVWC92e0ujSJVn3FFQRXf.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer3&subfolder=ondemand&vid=APRMRBARBNGRA", featured: false },
  { id: "bh6", slug: "barbie-2023-legendado", title: "Barbie (Legendado)", category: "Filmes", collection: "Barbie", description: "Assista Barbie (Legendado) completo agora.", idioma: "Legendado", cover: "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg", coverHd: "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg", poster: "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer4&subfolder=ondemand&vid=BRBIE2023LEG", featured: false },
  { id: "bh7", slug: "barbie-e-chelsea-o-aniversario-perdido", title: "Barbie e Chelsea o Aniversário Perdido", category: "Filmes", collection: "Barbie", description: "Assista Barbie e Chelsea o Aniversário Perdido completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/i2pMxkhKpDjMHXxmgAYVKXfGVxP.jpg", coverHd: "https://image.tmdb.org/t/p/w500/i2pMxkhKpDjMHXxmgAYVKXfGVxP.jpg", poster: "https://image.tmdb.org/t/p/w500/i2pMxkhKpDjMHXxmgAYVKXfGVxP.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer4&subfolder=ondemand&vid=BRBIEECSLSOANVSRPRDO", featured: false },
  { id: "bh8", slug: "barbie-butterfly-e-a-princesa-fairy", title: "Barbie Butterfly e a Princesa Fairy", category: "Filmes", collection: "Barbie", description: "Assista Barbie Butterfly e a Princesa Fairy completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/4KqzZLf9sWPJiAFlRCH8kNEUky.jpg", coverHd: "https://image.tmdb.org/t/p/w500/4KqzZLf9sWPJiAFlRCH8kNEUky.jpg", poster: "https://image.tmdb.org/t/p/w500/4KqzZLf9sWPJiAFlRCH8kNEUky.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEBTRFLYEAPRNCSAFDA", featured: false },
  { id: "bh9", slug: "barbie-butterfly-a-nova-aventura-em-fairytopia", title: "Barbie Butterfly a Nova Aventura em Fairytopia", category: "Filmes", collection: "Barbie", description: "Assista Barbie Butterfly a Nova Aventura em Fairytopia completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/trsrW7gDWxYSOUnW9pdSYPNXvVf.jpg", coverHd: "https://image.tmdb.org/t/p/w500/trsrW7gDWxYSOUnW9pdSYPNXvVf.jpg", poster: "https://image.tmdb.org/t/p/w500/trsrW7gDWxYSOUnW9pdSYPNXvVf.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEBTRFLYUMNVANVTRAEMFIRYTPIA", featured: false },
  { id: "bh10", slug: "barbie-dreamtopia-festival-da-alegria", title: "Barbie Dreamtopia Festival da Alegria", category: "Filmes", collection: "Barbie", description: "Assista Barbie Dreamtopia Festival da Alegria completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/pZIqoUstOEyaoImA1Uk3lSNO5hq.jpg", coverHd: "https://image.tmdb.org/t/p/w500/pZIqoUstOEyaoImA1Uk3lSNO5hq.jpg", poster: "https://image.tmdb.org/t/p/w500/pZIqoUstOEyaoImA1Uk3lSNO5hq.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer2&subfolder=ondemand&vid=BARBDRMRPFSTVLDAMZD", featured: false },
  { id: "bh11", slug: "barbie-e-a-magia-de-aladus", title: "Barbie e a Magia de Aladus", category: "Filmes", collection: "Barbie", description: "Assista Barbie e a Magia de Aladus completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/2QPrRMN6DlJAPuh39Dps1CRCurv.jpg", coverHd: "https://image.tmdb.org/t/p/w500/2QPrRMN6DlJAPuh39Dps1CRCurv.jpg", poster: "https://image.tmdb.org/t/p/w500/2QPrRMN6DlJAPuh39Dps1CRCurv.jpg", youtubeUrl: "https://www.youtube.com/watch?v=lBpitQv-kTI", featured: false },
  { id: "bh12", slug: "barbie-e-as-agentes-secretas", title: "Barbie e as Agentes Secretas", category: "Filmes", collection: "Barbie", description: "Assista Barbie e as Agentes Secretas completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/vk5RC1h4h5t50Opic3yo4hH8qAq.jpg", coverHd: "https://image.tmdb.org/t/p/w500/vk5RC1h4h5t50Opic3yo4hH8qAq.jpg", poster: "https://image.tmdb.org/t/p/w500/vk5RC1h4h5t50Opic3yo4hH8qAq.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer4&subfolder=ondemand&vid=BRBEASAGNTSSCRTS", featured: false },
  { id: "bh13", slug: "barbie-e-as-sapatilhas-magicas", title: "Barbie e as Sapatilhas Mágicas", category: "Filmes", collection: "Barbie", description: "Assista Barbie e as Sapatilhas Mágicas completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/59FPQDQWyiPhDJH06mUeOxU0Oo5.jpg", coverHd: "https://image.tmdb.org/t/p/w500/59FPQDQWyiPhDJH06mUeOxU0Oo5.jpg", poster: "https://image.tmdb.org/t/p/w500/59FPQDQWyiPhDJH06mUeOxU0Oo5.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEASPTLHSMGS", featured: false },
  { id: "bh14", slug: "barbie-e-as-suas-irmas-em-uma-aventura-de-cavalos", title: "Barbie e as Suas Irmãs em Uma Aventura de Cavalos", category: "Filmes", collection: "Barbie", description: "Assista Barbie e as Suas Irmãs em Uma Aventura de Cavalos completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/e7pCbv0usfvd7ZWv7rQX02dyG1A.jpg", coverHd: "https://image.tmdb.org/t/p/w500/e7pCbv0usfvd7ZWv7rQX02dyG1A.jpg", poster: "https://image.tmdb.org/t/p/w500/e7pCbv0usfvd7ZWv7rQX02dyG1A.jpg", youtubeUrl: "https://www.youtube.com/watch?v=x27iPHXvJk0", featured: false },
  { id: "bh15", slug: "barbie-e-as-tres-mosqueteiras", title: "Barbie e as Três Mosqueteiras", category: "Filmes", collection: "Barbie", description: "Assista Barbie e as Três Mosqueteiras completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/aulv0DUM41tmEM9BoDVaczBojsz.jpg", coverHd: "https://image.tmdb.org/t/p/w500/aulv0DUM41tmEM9BoDVaczBojsz.jpg", poster: "https://image.tmdb.org/t/p/w500/aulv0DUM41tmEM9BoDVaczBojsz.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEASTRSMQTRS", featured: false },
  { id: "bh16", slug: "barbie-e-o-castelo-de-diamante", title: "Barbie e o Castelo de Diamante", category: "Filmes", collection: "Barbie", description: "Assista Barbie e o Castelo de Diamante completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/9TtBy4l0yFZoUhR8dVwI3x5PJ5a.jpg", coverHd: "https://image.tmdb.org/t/p/w500/9TtBy4l0yFZoUhR8dVwI3x5PJ5a.jpg", poster: "https://image.tmdb.org/t/p/w500/9TtBy4l0yFZoUhR8dVwI3x5PJ5a.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEOCSTLODMNTE", featured: false },
  { id: "bh17", slug: "barbie-e-o-portal-secreto", title: "Barbie e o Portal Secreto", category: "Filmes", collection: "Barbie", description: "Assista Barbie e o Portal Secreto completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/uhaUcohBo40n9Uf8CtKW6Q1aUA4.jpg", coverHd: "https://image.tmdb.org/t/p/w500/uhaUcohBo40n9Uf8CtKW6Q1aUA4.jpg", poster: "https://image.tmdb.org/t/p/w500/uhaUcohBo40n9Uf8CtKW6Q1aUA4.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEOPRTLSCRTO", featured: false },
  { id: "bh18", slug: "barbie-e-o-segredo-das-fadas", title: "Barbie e o Segredo das Fadas", category: "Filmes", collection: "Barbie", description: "Assista Barbie e o Segredo das Fadas completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/u3OiN7HWxi9S8lcRqkmLVJ0BP1u.jpg", coverHd: "https://image.tmdb.org/t/p/w500/u3OiN7HWxi9S8lcRqkmLVJ0BP1u.jpg", poster: "https://image.tmdb.org/t/p/w500/u3OiN7HWxi9S8lcRqkmLVJ0BP1u.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEOSGRDODSFDS", featured: false },
  { id: "bh19", slug: "barbie-e-suas-irmas-em-busca-dos-cachorrinhos", title: "Barbie e Suas Irmãs em Busca dos Cachorrinhos", category: "Filmes", collection: "Barbie", description: "Assista Barbie e Suas Irmãs em Busca dos Cachorrinhos completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/lhRdNP1wx1wnz5aZSHVXmvoTufs.jpg", coverHd: "https://image.tmdb.org/t/p/w500/lhRdNP1wx1wnz5aZSHVXmvoTufs.jpg", poster: "https://image.tmdb.org/t/p/w500/lhRdNP1wx1wnz5aZSHVXmvoTufs.jpg", youtubeUrl: "https://www.youtube.com/watch?v=P2eo828nhlw", featured: false },
  { id: "bh20", slug: "barbie-e-teresa-receita-para-amizade", title: "Barbie e Teresa Receita para Amizade", category: "Filmes", collection: "Barbie", description: "Assista Barbie e Teresa Receita para Amizade completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/uDVsBMUE3QI0lZE44vfqpIojqRg.jpg", coverHd: "https://image.tmdb.org/t/p/w500/uDVsBMUE3QI0lZE44vfqpIojqRg.jpg", poster: "https://image.tmdb.org/t/p/w500/uDVsBMUE3QI0lZE44vfqpIojqRg.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer3&subfolder=ondemand&vid=BRBIETRSARCTPRMAZDE", featured: false },
  { id: "bh21", slug: "barbie-em-a-cancao-de-natal", title: "Barbie em a Canção de Natal", category: "Filmes", collection: "Barbie", description: "Assista Barbie em a Canção de Natal completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/4h4ayaBjFIMD3cO2lmyuRd9FFD7.jpg", coverHd: "https://image.tmdb.org/t/p/w500/4h4ayaBjFIMD3cO2lmyuRd9FFD7.jpg", poster: "https://image.tmdb.org/t/p/w500/4h4ayaBjFIMD3cO2lmyuRd9FFD7.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEMACNAODNTL", featured: false },
  { id: "bh22", slug: "barbie-em-a-pequena-polegar", title: "Barbie em a Pequena Polegar", category: "Filmes", collection: "Barbie", description: "Assista Barbie em a Pequena Polegar completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/hYzx0RsnQdT66ZM8PmXoUcjpH5F.jpg", coverHd: "https://image.tmdb.org/t/p/w500/hYzx0RsnQdT66ZM8PmXoUcjpH5F.jpg", poster: "https://image.tmdb.org/t/p/w500/hYzx0RsnQdT66ZM8PmXoUcjpH5F.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEMAPQNAPLGR", featured: false },
  { id: "bh23", slug: "barbie-em-a-princesa-da-ilha", title: "Barbie em a Princesa da Ilha", category: "Filmes", collection: "Barbie", description: "Assista Barbie em a Princesa da Ilha completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/o8JNJV3ZI7Oi6OxsX9wDtvBAwsQ.jpg", coverHd: "https://image.tmdb.org/t/p/w500/o8JNJV3ZI7Oi6OxsX9wDtvBAwsQ.jpg", poster: "https://image.tmdb.org/t/p/w500/o8JNJV3ZI7Oi6OxsX9wDtvBAwsQ.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEMAPNCSADILHA", featured: false },
  { id: "bh24", slug: "barbie-em-as-12-princesas-bailarinas", title: "Barbie em as 12 Princesas Bailarinas", category: "Filmes", collection: "Barbie", description: "Assista Barbie em as 12 Princesas Bailarinas completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg", coverHd: "https://image.tmdb.org/t/p/w500/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg", poster: "https://image.tmdb.org/t/p/w500/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg", youtubeUrl: "https://www.youtube.com/watch?v=-eCEAeDGDTg", featured: false },
  { id: "bh25", slug: "barbie-em-um-mundo-de-video-game", title: "Barbie em Um Mundo de Vídeo Game", category: "Filmes", collection: "Barbie", description: "Assista Barbie em Um Mundo de Vídeo Game completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/oG7k645sHlGCvsVGfalFJblIKcv.jpg", coverHd: "https://image.tmdb.org/t/p/w500/oG7k645sHlGCvsVGfalFJblIKcv.jpg", poster: "https://image.tmdb.org/t/p/w500/oG7k645sHlGCvsVGfalFJblIKcv.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEMUMNDVDEOGME", featured: false },
  { id: "bh26", slug: "barbie-em-vida-de-sereia", title: "Barbie em Vida de Sereia", category: "Filmes", collection: "Barbie", description: "Assista Barbie em Vida de Sereia completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/rrD263RRyDPXqDY7FBtNP7gEuQZ.jpg", coverHd: "https://image.tmdb.org/t/p/w500/rrD263RRyDPXqDY7FBtNP7gEuQZ.jpg", poster: "https://image.tmdb.org/t/p/w500/rrD263RRyDPXqDY7FBtNP7gEuQZ.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEMVDADSREIA", featured: false },
  { id: "bh27", slug: "barbie-em-vida-de-sereia-2", title: "Barbie em Vida de Sereia 2", category: "Filmes", collection: "Barbie", description: "Assista Barbie em Vida de Sereia 2 completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/iECvqAtlvUIihc9b2Dyr2uUaqNW.jpg", coverHd: "https://image.tmdb.org/t/p/w500/iECvqAtlvUIihc9b2Dyr2uUaqNW.jpg", poster: "https://image.tmdb.org/t/p/w500/iECvqAtlvUIihc9b2Dyr2uUaqNW.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEMVDADSREIA2", featured: false },
  { id: "bh28", slug: "barbie-fairytopia", title: "Barbie Fairytopia", category: "Filmes", collection: "Barbie", description: "Assista Barbie Fairytopia completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/a0VPQHpLNCWWmiXwjD7aJVRaH78.jpg", coverHd: "https://image.tmdb.org/t/p/w500/a0VPQHpLNCWWmiXwjD7aJVRaH78.jpg", poster: "https://image.tmdb.org/t/p/w500/a0VPQHpLNCWWmiXwjD7aJVRaH78.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEFRYTPIA", featured: false },
  { id: "bh29", slug: "barbie-fairytopia-a-magia-do-arco-iris", title: "Barbie Fairytopia a Magia do Arco Íris", category: "Filmes", collection: "Barbie", description: "Assista Barbie Fairytopia a Magia do Arco Íris completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/lmpV251dgf9EZ4TIBxOQDCRq6kX.jpg", coverHd: "https://image.tmdb.org/t/p/w500/lmpV251dgf9EZ4TIBxOQDCRq6kX.jpg", poster: "https://image.tmdb.org/t/p/w500/lmpV251dgf9EZ4TIBxOQDCRq6kX.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEFRTPIAMGDARCIRS", featured: false },
  { id: "bh30", slug: "barbie-fairytopia-mermaidia", title: "Barbie Fairytopia Mermaidia", category: "Filmes", collection: "Barbie", description: "Assista Barbie Fairytopia Mermaidia completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/uBCvRThFwjvwNQeS3Vy7xMPc0Rh.jpg", coverHd: "https://image.tmdb.org/t/p/w500/uBCvRThFwjvwNQeS3Vy7xMPc0Rh.jpg", poster: "https://image.tmdb.org/t/p/w500/uBCvRThFwjvwNQeS3Vy7xMPc0Rh.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer2&subfolder=ondemand&vid=BARBFRYRPMRMADIA", featured: false },
  { id: "bh31", slug: "barbie-moda-e-magia", title: "Barbie Moda e Magia", category: "Filmes", collection: "Barbie", description: "Assista Barbie Moda e Magia completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/myDlxdPLbIuifwcsZhEEA9cxUqh.jpg", coverHd: "https://image.tmdb.org/t/p/w500/myDlxdPLbIuifwcsZhEEA9cxUqh.jpg", poster: "https://image.tmdb.org/t/p/w500/myDlxdPLbIuifwcsZhEEA9cxUqh.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEMDAEMGIA", featured: false },
  { id: "bh32", slug: "barbie-a-estrela-do-rock", title: "Barbie a Estrela do Rock", category: "Filmes", collection: "Barbie", description: "Assista Barbie a Estrela do Rock completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/6wtDymu06JzOdF5FANz9Nl6Erqs.jpg", coverHd: "https://image.tmdb.org/t/p/w500/6wtDymu06JzOdF5FANz9Nl6Erqs.jpg", poster: "https://image.tmdb.org/t/p/w500/6wtDymu06JzOdF5FANz9Nl6Erqs.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEAESTRLDRCK", featured: false },
  { id: "bh33", slug: "barbie-a-princesa-e-a-pop-star", title: "Barbie a Princesa e a Pop Star", category: "Filmes", collection: "Barbie", description: "Assista Barbie a Princesa e a Pop Star completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/ecr9TNQZO1z60jh1bx05yAwnKNP.jpg", coverHd: "https://image.tmdb.org/t/p/w500/ecr9TNQZO1z60jh1bx05yAwnKNP.jpg", poster: "https://image.tmdb.org/t/p/w500/ecr9TNQZO1z60jh1bx05yAwnKNP.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEEAPRNCSAPOPSTR", featured: false },
  { id: "bh34", slug: "barbie-a-sereia-das-perolas", title: "Barbie a Sereia das Pérolas", category: "Filmes", collection: "Barbie", description: "Assista Barbie a Sereia das Pérolas completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/9pjVf78PybRhvwZM0Nf6xzaV9n.jpg", coverHd: "https://image.tmdb.org/t/p/w500/9pjVf78PybRhvwZM0Nf6xzaV9n.jpg", poster: "https://image.tmdb.org/t/p/w500/9pjVf78PybRhvwZM0Nf6xzaV9n.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEASREADSPRLS", featured: false },
  { id: "bh35", slug: "barbie-aventura-nas-estrelas", title: "Barbie Aventura nas Estrelas", category: "Filmes", collection: "Barbie", description: "Assista Barbie Aventura nas Estrelas completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/4s9CoIDiC9O1H9cdV97ogci5HdH.jpg", coverHd: "https://image.tmdb.org/t/p/w500/4s9CoIDiC9O1H9cdV97ogci5HdH.jpg", poster: "https://image.tmdb.org/t/p/w500/4s9CoIDiC9O1H9cdV97ogci5HdH.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer3&subfolder=ondemand&vid=BARBIRAVNESTLS", featured: false },
  { id: "bh36", slug: "barbie-escola-de-princesas", title: "Barbie Escola de Princesas", category: "Filmes", collection: "Barbie", description: "Assista Barbie Escola de Princesas completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg", coverHd: "https://image.tmdb.org/t/p/w500/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg", poster: "https://image.tmdb.org/t/p/w500/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer4&subfolder=ondemand&vid=BARBESCLDPRNCS", featured: false },
  { id: "bh37", slug: "barbie-lago-dos-cisnes", title: "Barbie Lago dos Cisnes", category: "Filmes", collection: "Barbie", description: "Assista Barbie Lago dos Cisnes completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/oOIdyQDj06G8V6AHQl4I7i1UCTT.jpg", coverHd: "https://image.tmdb.org/t/p/w500/oOIdyQDj06G8V6AHQl4I7i1UCTT.jpg", poster: "https://image.tmdb.org/t/p/w500/oOIdyQDj06G8V6AHQl4I7i1UCTT.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer2&subfolder=ondemand&vid=BARBLGODSCSNS", featured: false },
  { id: "bh38", slug: "barbie-o-poder-das-sereias", title: "Barbie o Poder das Sereias", category: "Filmes", collection: "Barbie", description: "Assista Barbie o Poder das Sereias completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/8qb8cLDBAWdahrtixN2mQdI6e52.jpg", coverHd: "https://image.tmdb.org/t/p/w500/8qb8cLDBAWdahrtixN2mQdI6e52.jpg", poster: "https://image.tmdb.org/t/p/w500/8qb8cLDBAWdahrtixN2mQdI6e52.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer4&subfolder=ondemand&vid=BRBIEOPDRDSRAS", featured: false },
  { id: "bh39", slug: "barbie-o-quebra-nozes", title: "Barbie o Quebra Nozes", category: "Filmes", collection: "Barbie", description: "Assista Barbie o Quebra Nozes completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/dm7IBahbPkjbc5FOD6pW0mjYVAA.jpg", coverHd: "https://image.tmdb.org/t/p/w500/dm7IBahbPkjbc5FOD6pW0mjYVAA.jpg", poster: "https://image.tmdb.org/t/p/w500/dm7IBahbPkjbc5FOD6pW0mjYVAA.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=BRBIEQBRNZS", featured: false },
  { id: "bh40", slug: "barbie-rainhas-do-rock", title: "Barbie Rainhas do Rock", category: "Filmes", collection: "Barbie", description: "Assista Barbie Rainhas do Rock completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/mROC6QlvNMRsHGak0Vijx6Y5KcN.jpg", coverHd: "https://image.tmdb.org/t/p/w500/mROC6QlvNMRsHGak0Vijx6Y5KcN.jpg", poster: "https://image.tmdb.org/t/p/w500/mROC6QlvNMRsHGak0Vijx6Y5KcN.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer4&subfolder=ondemand&vid=BARBRANHDRCK", featured: false },
  { id: "bh41", slug: "barbie-super-princesa", title: "Barbie Super Princesa", category: "Filmes", collection: "Barbie", description: "Assista Barbie Super Princesa completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/oqKtENqN7JjPQYR8PyNiahAxcPC.jpg", coverHd: "https://image.tmdb.org/t/p/w500/oqKtENqN7JjPQYR8PyNiahAxcPC.jpg", poster: "https://image.tmdb.org/t/p/w500/oqKtENqN7JjPQYR8PyNiahAxcPC.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer2&subfolder=ondemand&vid=BARBSPRPRNCSA", featured: false },
  { id: "bh42", slug: "barbie-um-natal-perfeito", title: "Barbie Um Natal Perfeito", category: "Filmes", collection: "Barbie", description: "Assista Barbie Um Natal Perfeito completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/rdWcoJMn7ZwXpTTChNy1OIqwit3.jpg", coverHd: "https://image.tmdb.org/t/p/w500/rdWcoJMn7ZwXpTTChNy1OIqwit3.jpg", poster: "https://image.tmdb.org/t/p/w500/rdWcoJMn7ZwXpTTChNy1OIqwit3.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer4&subfolder=ondemand&vid=BARBUMNTLPRFT", featured: false },
  { id: "bh43", slug: "o-diario-da-barbie", title: "O Diário da Barbie", category: "Filmes", collection: "Barbie", description: "Assista O Diário da Barbie completo agora.", idioma: "Dublado", cover: "https://image.tmdb.org/t/p/w500/nGKSNKrVYVeJznraEkuxXUScj6v.jpg", coverHd: "https://image.tmdb.org/t/p/w500/nGKSNKrVYVeJznraEkuxXUScj6v.jpg", poster: "https://image.tmdb.org/t/p/w500/nGKSNKrVYVeJznraEkuxXUScj6v.jpg", youtubeUrl: "", embedUrl: "//redecanais.vision/player3/server.php?categoria=vod&server=RCFServer5&subfolder=ondemand&vid=ODIARIODBRBIE", featured: false },
];

desenhos.push(...barbieHub);

export const destaques = desenhos.filter((d) => d.featured);

export function getDesenhoBySlug(slug: string): Desenho | undefined {
  return desenhos.find((d) => d.slug === slug);
}
