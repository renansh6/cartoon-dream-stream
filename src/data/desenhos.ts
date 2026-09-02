import juniperLeePoster from "@/assets/juniper-lee.jpg";
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
  {"id": "40", "slug": "branca-de-neve-e-os-sete-anoes", "title": "Branca de Neve e os Sete Anões", "category": "Filmes", "description": "Assista Branca de Neve e os Sete Anões completo agora.", "cover": "https://i.ytimg.com/vi/DQST_l8dcuc/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/DQST_l8dcuc/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=DQST_l8dcuc", "featured": false},
  {"id": "41", "slug": "a-bela-adormecida", "title": "A Bela Adormecida", "category": "Filmes", "description": "Assista A Bela Adormecida completo agora.", "cover": "https://i.ytimg.com/vi/BmnbYutrgzQ/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/BmnbYutrgzQ/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=BmnbYutrgzQ", "featured": false},
  {"id": "42", "slug": "a-pequena-sereia-2", "title": "A Pequena Sereia 2", "category": "Filmes", "description": "Assista A Pequena Sereia 2 completo agora.", "cover": "https://i.ytimg.com/vi/rC5BCkXfYiI/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/rC5BCkXfYiI/maxresdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=rC5BCkXfYiI", "featured": false},
  {"id": "43", "slug": "cinderela", "title": "Cinderela", "category": "Filmes", "description": "Assista Cinderela completo agora.", "cover": "https://i.ytimg.com/vi/pxFoxnpOIiw/hqdefault.jpg", "coverHd": "https://i.ytimg.com/vi/pxFoxnpOIiw/hqdefault.jpg", "youtubeUrl": "https://www.youtube.com/watch?v=pxFoxnpOIiw&t=3069s", "featured": false},
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
   Acervo Barbie (Barbie Hub) — 43 títulos adicionados APÓS o catálogo atual.
   Cada card abre o link individual do Barbie Hub (?filme=ID) na mesma aba;
   os players internos do Barbie Hub não são copiados para cá. As capas usam
   exatamente as URLs já registradas no catálogo do Barbie Hub (as locais
   viram URLs absolutas).
   ========================================================================= */
const barbieHub: Desenho[] = [
  { id: "52", slug: "barbie-hub-0", title: "Barbie (2023) — Dublado", category: "Filmes", collection: "Barbie", idioma: "Dublado", description: "Barbie (2023) — Dublado", cover: "https://barbie-hub-7q1s.vercel.app/img/barbie-2023.jpg", coverHd: "https://barbie-hub-7q1s.vercel.app/img/barbie-2023.jpg", poster: "https://barbie-hub-7q1s.vercel.app/img/barbie-2023.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=0", featured: false },
  { id: "53", slug: "barbie-hub-1", title: "Barbie Aventura da Princesa (2020)", category: "Filmes", collection: "Barbie", description: "Barbie Aventura da Princesa (2020)", cover: "https://barbie-hub-7q1s.vercel.app/img/barbie-aventura-princesa.jpg", coverHd: "https://barbie-hub-7q1s.vercel.app/img/barbie-aventura-princesa.jpg", poster: "https://barbie-hub-7q1s.vercel.app/img/barbie-aventura-princesa.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=1", featured: false },
  { id: "54", slug: "barbie-hub-2", title: "Barbie em A Princesa e a Plebeia (2004)", category: "Filmes", collection: "Barbie", description: "Barbie em A Princesa e a Plebeia (2004)", cover: "https://barbie-hub-7q1s.vercel.app/img/princesa-e-plebeia.jpg", coverHd: "https://barbie-hub-7q1s.vercel.app/img/princesa-e-plebeia.jpg", poster: "https://barbie-hub-7q1s.vercel.app/img/princesa-e-plebeia.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=2", featured: false },
  { id: "55", slug: "barbie-hub-3", title: "Barbie como Rapunzel (2002)", category: "Filmes", collection: "Barbie", description: "Barbie como Rapunzel (2002)", cover: "https://barbie-hub-7q1s.vercel.app/img/rapunzel.jpg", coverHd: "https://barbie-hub-7q1s.vercel.app/img/rapunzel.jpg", poster: "https://barbie-hub-7q1s.vercel.app/img/rapunzel.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=3", featured: false },
  { id: "56", slug: "barbie-hub-4", title: "A Primeira Barbie Negra (2024)", category: "Documentário", collection: "Barbie", description: "A Primeira Barbie Negra (2024)", cover: "https://image.tmdb.org/t/p/w500/A0gwTrSVWC92e0ujSJVn3FFQRXf.jpg", coverHd: "https://image.tmdb.org/t/p/w500/A0gwTrSVWC92e0ujSJVn3FFQRXf.jpg", poster: "https://image.tmdb.org/t/p/w500/A0gwTrSVWC92e0ujSJVn3FFQRXf.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=4", featured: false },
  { id: "57", slug: "barbie-hub-5", title: "Barbie (2023) — Legendado", category: "Filmes", collection: "Barbie", idioma: "Legendado", description: "Barbie (2023) — Legendado", cover: "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg", coverHd: "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg", poster: "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=5", featured: false },
  { id: "58", slug: "barbie-hub-6", title: "Barbie e Chelsea: O Aniversário Perdido (2021)", category: "Filmes", collection: "Barbie", description: "Barbie e Chelsea: O Aniversário Perdido (2021)", cover: "https://image.tmdb.org/t/p/w500/i2pMxkhKpDjMHXxmgAYVKXfGVxP.jpg", coverHd: "https://image.tmdb.org/t/p/w500/i2pMxkhKpDjMHXxmgAYVKXfGVxP.jpg", poster: "https://image.tmdb.org/t/p/w500/i2pMxkhKpDjMHXxmgAYVKXfGVxP.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=6", featured: false },
  { id: "59", slug: "barbie-hub-7", title: "Barbie Butterfly e a Princesa Fairy (2013)", category: "Filmes", collection: "Barbie", description: "Barbie Butterfly e a Princesa Fairy (2013)", cover: "https://image.tmdb.org/t/p/w500/4KqzZLf9sWPJiAFlRCH8kNEUky.jpg", coverHd: "https://image.tmdb.org/t/p/w500/4KqzZLf9sWPJiAFlRCH8kNEUky.jpg", poster: "https://image.tmdb.org/t/p/w500/4KqzZLf9sWPJiAFlRCH8kNEUky.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=7", featured: false },
  { id: "60", slug: "barbie-hub-8", title: "Barbie Butterfly: A Nova Aventura em Fairytopia (2008)", category: "Filmes", collection: "Barbie", description: "Barbie Butterfly: A Nova Aventura em Fairytopia (2008)", cover: "https://image.tmdb.org/t/p/w500/trsrW7gDWxYSOUnW9pdSYPNXvVf.jpg", coverHd: "https://image.tmdb.org/t/p/w500/trsrW7gDWxYSOUnW9pdSYPNXvVf.jpg", poster: "https://image.tmdb.org/t/p/w500/trsrW7gDWxYSOUnW9pdSYPNXvVf.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=8", featured: false },
  { id: "61", slug: "barbie-hub-9", title: "Barbie Dreamtopia: Festival da Alegria (2017)", category: "Filmes", collection: "Barbie", description: "Barbie Dreamtopia: Festival da Alegria (2017)", cover: "https://image.tmdb.org/t/p/w500/pZIqoUstOEyaoImA1Uk3lSNO5hq.jpg", coverHd: "https://image.tmdb.org/t/p/w500/pZIqoUstOEyaoImA1Uk3lSNO5hq.jpg", poster: "https://image.tmdb.org/t/p/w500/pZIqoUstOEyaoImA1Uk3lSNO5hq.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=9", featured: false },
  { id: "62", slug: "barbie-hub-10", title: "Barbie e a Magia de Aladus (2005)", category: "Filmes", collection: "Barbie", description: "Barbie e a Magia de Aladus (2005)", cover: "https://image.tmdb.org/t/p/w500/2QPrRMN6DlJAPuh39Dps1CRCurv.jpg", coverHd: "https://image.tmdb.org/t/p/w500/2QPrRMN6DlJAPuh39Dps1CRCurv.jpg", poster: "https://image.tmdb.org/t/p/w500/2QPrRMN6DlJAPuh39Dps1CRCurv.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=10", featured: false },
  { id: "63", slug: "barbie-hub-11", title: "Barbie e as Agentes Secretas (2016)", category: "Filmes", collection: "Barbie", description: "Barbie e as Agentes Secretas (2016)", cover: "https://image.tmdb.org/t/p/w500/vk5RC1h4h5t50Opic3yo4hH8qAq.jpg", coverHd: "https://image.tmdb.org/t/p/w500/vk5RC1h4h5t50Opic3yo4hH8qAq.jpg", poster: "https://image.tmdb.org/t/p/w500/vk5RC1h4h5t50Opic3yo4hH8qAq.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=11", featured: false },
  { id: "64", slug: "barbie-hub-12", title: "Barbie e as Sapatilhas Mágicas (2013)", category: "Filmes", collection: "Barbie", description: "Barbie e as Sapatilhas Mágicas (2013)", cover: "https://image.tmdb.org/t/p/w500/59FPQDQWyiPhDJH06mUeOxU0Oo5.jpg", coverHd: "https://image.tmdb.org/t/p/w500/59FPQDQWyiPhDJH06mUeOxU0Oo5.jpg", poster: "https://image.tmdb.org/t/p/w500/59FPQDQWyiPhDJH06mUeOxU0Oo5.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=12", featured: false },
  { id: "65", slug: "barbie-hub-13", title: "Barbie e Suas Irmãs em Uma Aventura de Cavalos (2013)", category: "Filmes", collection: "Barbie", description: "Barbie e Suas Irmãs em Uma Aventura de Cavalos (2013)", cover: "https://image.tmdb.org/t/p/w500/e7pCbv0usfvd7ZWv7rQX02dyG1A.jpg", coverHd: "https://image.tmdb.org/t/p/w500/e7pCbv0usfvd7ZWv7rQX02dyG1A.jpg", poster: "https://image.tmdb.org/t/p/w500/e7pCbv0usfvd7ZWv7rQX02dyG1A.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=13", featured: false },
  { id: "66", slug: "barbie-hub-14", title: "Barbie e as Três Mosqueteiras (2009)", category: "Filmes", collection: "Barbie", description: "Barbie e as Três Mosqueteiras (2009)", cover: "https://image.tmdb.org/t/p/w500/aulv0DUM41tmEM9BoDVaczBojsz.jpg", coverHd: "https://image.tmdb.org/t/p/w500/aulv0DUM41tmEM9BoDVaczBojsz.jpg", poster: "https://image.tmdb.org/t/p/w500/aulv0DUM41tmEM9BoDVaczBojsz.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=14", featured: false },
  { id: "67", slug: "barbie-hub-15", title: "Barbie e o Castelo de Diamante (2008)", category: "Filmes", collection: "Barbie", description: "Barbie e o Castelo de Diamante (2008)", cover: "https://image.tmdb.org/t/p/w500/9TtBy4l0yFZoUhR8dVwI3x5PJ5a.jpg", coverHd: "https://image.tmdb.org/t/p/w500/9TtBy4l0yFZoUhR8dVwI3x5PJ5a.jpg", poster: "https://image.tmdb.org/t/p/w500/9TtBy4l0yFZoUhR8dVwI3x5PJ5a.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=15", featured: false },
  { id: "68", slug: "barbie-hub-16", title: "Barbie e o Portal Secreto (2014)", category: "Filmes", collection: "Barbie", description: "Barbie e o Portal Secreto (2014)", cover: "https://image.tmdb.org/t/p/w500/uhaUcohBo40n9Uf8CtKW6Q1aUA4.jpg", coverHd: "https://image.tmdb.org/t/p/w500/uhaUcohBo40n9Uf8CtKW6Q1aUA4.jpg", poster: "https://image.tmdb.org/t/p/w500/uhaUcohBo40n9Uf8CtKW6Q1aUA4.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=16", featured: false },
  { id: "69", slug: "barbie-hub-17", title: "Barbie e o Segredo das Fadas (2011)", category: "Filmes", collection: "Barbie", description: "Barbie e o Segredo das Fadas (2011)", cover: "https://image.tmdb.org/t/p/w500/u3OiN7HWxi9S8lcRqkmLVJ0BP1u.jpg", coverHd: "https://image.tmdb.org/t/p/w500/u3OiN7HWxi9S8lcRqkmLVJ0BP1u.jpg", poster: "https://image.tmdb.org/t/p/w500/u3OiN7HWxi9S8lcRqkmLVJ0BP1u.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=17", featured: false },
  { id: "70", slug: "barbie-hub-18", title: "Barbie e Suas Irmãs em Busca dos Cachorrinhos (2016)", category: "Filmes", collection: "Barbie", description: "Barbie e Suas Irmãs em Busca dos Cachorrinhos (2016)", cover: "https://image.tmdb.org/t/p/w500/lhRdNP1wx1wnz5aZSHVXmvoTufs.jpg", coverHd: "https://image.tmdb.org/t/p/w500/lhRdNP1wx1wnz5aZSHVXmvoTufs.jpg", poster: "https://image.tmdb.org/t/p/w500/lhRdNP1wx1wnz5aZSHVXmvoTufs.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=18", featured: false },
  { id: "71", slug: "barbie-hub-19", title: "Barbie e Teresa: Receita para Amizade (2025)", category: "Filmes", collection: "Barbie", description: "Barbie e Teresa: Receita para Amizade (2025)", cover: "https://image.tmdb.org/t/p/w500/uDVsBMUE3QI0lZE44vfqpIojqRg.jpg", coverHd: "https://image.tmdb.org/t/p/w500/uDVsBMUE3QI0lZE44vfqpIojqRg.jpg", poster: "https://image.tmdb.org/t/p/w500/uDVsBMUE3QI0lZE44vfqpIojqRg.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=19", featured: false },
  { id: "72", slug: "barbie-hub-20", title: "Barbie em A Canção de Natal (2008)", category: "Filmes", collection: "Barbie", description: "Barbie em A Canção de Natal (2008)", cover: "https://image.tmdb.org/t/p/w500/4h4ayaBjFIMD3cO2lmyuRd9FFD7.jpg", coverHd: "https://image.tmdb.org/t/p/w500/4h4ayaBjFIMD3cO2lmyuRd9FFD7.jpg", poster: "https://image.tmdb.org/t/p/w500/4h4ayaBjFIMD3cO2lmyuRd9FFD7.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=20", featured: false },
  { id: "73", slug: "barbie-hub-21", title: "Barbie em A Pequena Polegar (2009)", category: "Filmes", collection: "Barbie", description: "Barbie em A Pequena Polegar (2009)", cover: "https://image.tmdb.org/t/p/w500/hYzx0RsnQdT66ZM8PmXoUcjpH5F.jpg", coverHd: "https://image.tmdb.org/t/p/w500/hYzx0RsnQdT66ZM8PmXoUcjpH5F.jpg", poster: "https://image.tmdb.org/t/p/w500/hYzx0RsnQdT66ZM8PmXoUcjpH5F.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=21", featured: false },
  { id: "74", slug: "barbie-hub-22", title: "Barbie em A Princesa da Ilha (2007)", category: "Filmes", collection: "Barbie", description: "Barbie em A Princesa da Ilha (2007)", cover: "https://image.tmdb.org/t/p/w500/o8JNJV3ZI7Oi6OxsX9wDtvBAwsQ.jpg", coverHd: "https://image.tmdb.org/t/p/w500/o8JNJV3ZI7Oi6OxsX9wDtvBAwsQ.jpg", poster: "https://image.tmdb.org/t/p/w500/o8JNJV3ZI7Oi6OxsX9wDtvBAwsQ.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=22", featured: false },
  { id: "75", slug: "barbie-hub-23", title: "Barbie em As 12 Princesas Bailarinas (2006)", category: "Filmes", collection: "Barbie", description: "Barbie em As 12 Princesas Bailarinas (2006)", cover: "https://image.tmdb.org/t/p/w500/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg", coverHd: "https://image.tmdb.org/t/p/w500/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg", poster: "https://image.tmdb.org/t/p/w500/d1WbtY6ThUE2P7riFqmPIYCnUdi.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=23", featured: false },
  { id: "76", slug: "barbie-hub-24", title: "Barbie em Um Mundo de Vídeo Game (2017)", category: "Filmes", collection: "Barbie", description: "Barbie em Um Mundo de Vídeo Game (2017)", cover: "https://image.tmdb.org/t/p/w500/oG7k645sHlGCvsVGfalFJblIKcv.jpg", coverHd: "https://image.tmdb.org/t/p/w500/oG7k645sHlGCvsVGfalFJblIKcv.jpg", poster: "https://image.tmdb.org/t/p/w500/oG7k645sHlGCvsVGfalFJblIKcv.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=24", featured: false },
  { id: "77", slug: "barbie-hub-25", title: "Barbie em Vida de Sereia (2010)", category: "Filmes", collection: "Barbie", description: "Barbie em Vida de Sereia (2010)", cover: "https://image.tmdb.org/t/p/w500/rrD263RRyDPXqDY7FBtNP7gEuQZ.jpg", coverHd: "https://image.tmdb.org/t/p/w500/rrD263RRyDPXqDY7FBtNP7gEuQZ.jpg", poster: "https://image.tmdb.org/t/p/w500/rrD263RRyDPXqDY7FBtNP7gEuQZ.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=25", featured: false },
  { id: "78", slug: "barbie-hub-26", title: "Barbie em Vida de Sereia 2 (2012)", category: "Filmes", collection: "Barbie", description: "Barbie em Vida de Sereia 2 (2012)", cover: "https://image.tmdb.org/t/p/w500/iECvqAtlvUIihc9b2Dyr2uUaqNW.jpg", coverHd: "https://image.tmdb.org/t/p/w500/iECvqAtlvUIihc9b2Dyr2uUaqNW.jpg", poster: "https://image.tmdb.org/t/p/w500/iECvqAtlvUIihc9b2Dyr2uUaqNW.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=26", featured: false },
  { id: "79", slug: "barbie-hub-27", title: "Barbie Fairytopia (2005)", category: "Filmes", collection: "Barbie", description: "Barbie Fairytopia (2005)", cover: "https://image.tmdb.org/t/p/w500/a0VPQHpLNCWWmiXwjD7aJVRaH78.jpg", coverHd: "https://image.tmdb.org/t/p/w500/a0VPQHpLNCWWmiXwjD7aJVRaH78.jpg", poster: "https://image.tmdb.org/t/p/w500/a0VPQHpLNCWWmiXwjD7aJVRaH78.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=27", featured: false },
  { id: "80", slug: "barbie-hub-28", title: "Barbie Fairytopia: A Magia do Arco-Íris (2007)", category: "Filmes", collection: "Barbie", description: "Barbie Fairytopia: A Magia do Arco-Íris (2007)", cover: "https://image.tmdb.org/t/p/w500/lmpV251dgf9EZ4TIBxOQDCRq6kX.jpg", coverHd: "https://image.tmdb.org/t/p/w500/lmpV251dgf9EZ4TIBxOQDCRq6kX.jpg", poster: "https://image.tmdb.org/t/p/w500/lmpV251dgf9EZ4TIBxOQDCRq6kX.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=28", featured: false },
  { id: "81", slug: "barbie-hub-29", title: "Barbie Fairytopia Mermaidia (2005)", category: "Filmes", collection: "Barbie", description: "Barbie Fairytopia Mermaidia (2005)", cover: "https://image.tmdb.org/t/p/w500/uBCvRThFwjvwNQeS3Vy7xMPc0Rh.jpg", coverHd: "https://image.tmdb.org/t/p/w500/uBCvRThFwjvwNQeS3Vy7xMPc0Rh.jpg", poster: "https://image.tmdb.org/t/p/w500/uBCvRThFwjvwNQeS3Vy7xMPc0Rh.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=29", featured: false },
  { id: "82", slug: "barbie-hub-30", title: "Barbie Moda e Magia (2010)", category: "Filmes", collection: "Barbie", description: "Barbie Moda e Magia (2010)", cover: "https://image.tmdb.org/t/p/w500/myDlxdPLbIuifwcsZhEEA9cxUqh.jpg", coverHd: "https://image.tmdb.org/t/p/w500/myDlxdPLbIuifwcsZhEEA9cxUqh.jpg", poster: "https://image.tmdb.org/t/p/w500/myDlxdPLbIuifwcsZhEEA9cxUqh.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=30", featured: false },
  { id: "83", slug: "barbie-hub-31", title: "Barbie: A Estrela do Rock (1987)", category: "Filmes", collection: "Barbie", description: "Barbie: A Estrela do Rock (1987)", cover: "https://image.tmdb.org/t/p/w500/6wtDymu06JzOdF5FANz9Nl6Erqs.jpg", coverHd: "https://image.tmdb.org/t/p/w500/6wtDymu06JzOdF5FANz9Nl6Erqs.jpg", poster: "https://image.tmdb.org/t/p/w500/6wtDymu06JzOdF5FANz9Nl6Erqs.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=31", featured: false },
  { id: "84", slug: "barbie-hub-32", title: "Barbie: A Princesa e a Pop Star (2012)", category: "Filmes", collection: "Barbie", description: "Barbie: A Princesa e a Pop Star (2012)", cover: "https://image.tmdb.org/t/p/w500/ecr9TNQZO1z60jh1bx05yAwnKNP.jpg", coverHd: "https://image.tmdb.org/t/p/w500/ecr9TNQZO1z60jh1bx05yAwnKNP.jpg", poster: "https://image.tmdb.org/t/p/w500/ecr9TNQZO1z60jh1bx05yAwnKNP.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=32", featured: false },
  { id: "85", slug: "barbie-hub-33", title: "Barbie: A Sereia das Pérolas (2014)", category: "Filmes", collection: "Barbie", description: "Barbie: A Sereia das Pérolas (2014)", cover: "https://image.tmdb.org/t/p/w500/9pjVf78PybRhvwZM0Nf6xzaV9n.jpg", coverHd: "https://image.tmdb.org/t/p/w500/9pjVf78PybRhvwZM0Nf6xzaV9n.jpg", poster: "https://image.tmdb.org/t/p/w500/9pjVf78PybRhvwZM0Nf6xzaV9n.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=33", featured: false },
  { id: "86", slug: "barbie-hub-34", title: "Barbie: Aventura nas Estrelas (2016)", category: "Filmes", collection: "Barbie", description: "Barbie: Aventura nas Estrelas (2016)", cover: "https://image.tmdb.org/t/p/w500/4s9CoIDiC9O1H9cdV97ogci5HdH.jpg", coverHd: "https://image.tmdb.org/t/p/w500/4s9CoIDiC9O1H9cdV97ogci5HdH.jpg", poster: "https://image.tmdb.org/t/p/w500/4s9CoIDiC9O1H9cdV97ogci5HdH.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=34", featured: false },
  { id: "87", slug: "barbie-hub-35", title: "Barbie Escola de Princesas (2011)", category: "Filmes", collection: "Barbie", description: "Barbie Escola de Princesas (2011)", cover: "https://image.tmdb.org/t/p/w500/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg", coverHd: "https://image.tmdb.org/t/p/w500/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg", poster: "https://image.tmdb.org/t/p/w500/3jNK0WP5qDewsdJQl88qFy3Xu8v.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=35", featured: false },
  { id: "88", slug: "barbie-hub-36", title: "Barbie Lago dos Cisnes (2003)", category: "Filmes", collection: "Barbie", description: "Barbie Lago dos Cisnes (2003)", cover: "https://image.tmdb.org/t/p/w500/oOIdyQDj06G8V6AHQl4I7i1UCTT.jpg", coverHd: "https://image.tmdb.org/t/p/w500/oOIdyQDj06G8V6AHQl4I7i1UCTT.jpg", poster: "https://image.tmdb.org/t/p/w500/oOIdyQDj06G8V6AHQl4I7i1UCTT.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=36", featured: false },
  { id: "89", slug: "barbie-hub-37", title: "Barbie: O Poder das Sereias (2022)", category: "Filmes", collection: "Barbie", description: "Barbie: O Poder das Sereias (2022)", cover: "https://image.tmdb.org/t/p/w500/8qb8cLDBAWdahrtixN2mQdI6e52.jpg", coverHd: "https://image.tmdb.org/t/p/w500/8qb8cLDBAWdahrtixN2mQdI6e52.jpg", poster: "https://image.tmdb.org/t/p/w500/8qb8cLDBAWdahrtixN2mQdI6e52.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=37", featured: false },
  { id: "90", slug: "barbie-hub-38", title: "Barbie: O Quebra-Nozes (2001)", category: "Filmes", collection: "Barbie", description: "Barbie: O Quebra-Nozes (2001)", cover: "https://image.tmdb.org/t/p/w500/dm7IBahbPkjbc5FOD6pW0mjYVAA.jpg", coverHd: "https://image.tmdb.org/t/p/w500/dm7IBahbPkjbc5FOD6pW0mjYVAA.jpg", poster: "https://image.tmdb.org/t/p/w500/dm7IBahbPkjbc5FOD6pW0mjYVAA.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=38", featured: false },
  { id: "91", slug: "barbie-hub-39", title: "Barbie Rainhas do Rock (2015)", category: "Filmes", collection: "Barbie", description: "Barbie Rainhas do Rock (2015)", cover: "https://image.tmdb.org/t/p/w500/mROC6QlvNMRsHGak0Vijx6Y5KcN.jpg", coverHd: "https://image.tmdb.org/t/p/w500/mROC6QlvNMRsHGak0Vijx6Y5KcN.jpg", poster: "https://image.tmdb.org/t/p/w500/mROC6QlvNMRsHGak0Vijx6Y5KcN.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=39", featured: false },
  { id: "92", slug: "barbie-hub-40", title: "Barbie Super Princesa (2015)", category: "Filmes", collection: "Barbie", description: "Barbie Super Princesa (2015)", cover: "https://image.tmdb.org/t/p/w500/oqKtENqN7JjPQYR8PyNiahAxcPC.jpg", coverHd: "https://image.tmdb.org/t/p/w500/oqKtENqN7JjPQYR8PyNiahAxcPC.jpg", poster: "https://image.tmdb.org/t/p/w500/oqKtENqN7JjPQYR8PyNiahAxcPC.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=40", featured: false },
  { id: "93", slug: "barbie-hub-41", title: "Barbie: Um Natal Perfeito (2011)", category: "Filmes", collection: "Barbie", description: "Barbie: Um Natal Perfeito (2011)", cover: "https://image.tmdb.org/t/p/w500/rdWcoJMn7ZwXpTTChNy1OIqwit3.jpg", coverHd: "https://image.tmdb.org/t/p/w500/rdWcoJMn7ZwXpTTChNy1OIqwit3.jpg", poster: "https://image.tmdb.org/t/p/w500/rdWcoJMn7ZwXpTTChNy1OIqwit3.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=41", featured: false },
  { id: "94", slug: "barbie-hub-42", title: "O Diário da Barbie (2006)", category: "Filmes", collection: "Barbie", description: "O Diário da Barbie (2006)", cover: "https://image.tmdb.org/t/p/w500/nGKSNKrVYVeJznraEkuxXUScj6v.jpg", coverHd: "https://image.tmdb.org/t/p/w500/nGKSNKrVYVeJznraEkuxXUScj6v.jpg", poster: "https://image.tmdb.org/t/p/w500/nGKSNKrVYVeJznraEkuxXUScj6v.jpg", youtubeUrl: "", externalUrl: "https://barbie-hub-7q1s.vercel.app/?filme=42", featured: false },
];

desenhos.push(...barbieHub);

export const destaques = desenhos.filter((d) => d.featured);

export function getDesenhoBySlug(slug: string): Desenho | undefined {
  return desenhos.find((d) => d.slug === slug);
}
