# Desenho Club

Crie um novo projeto web independente chamado temporariamente “Clube dos Desenhos”. Use https://dramaversee.lovable.app/ apenas como referência de estrutura e navegação, sem copiar nome, textos, marca ou identidade visual. Transforme-o em catálogo funcional responsivo de desenhos, não apenas uma maquete. Implemente todas as páginas, rotas, cards, busca, filtros e player.

Estrutura e dados:
- Centralize o nome do site em arquivo de configuração, para alteração posterior.
- Crie um único arquivo src/data/desenhos.ts com campos id, slug, title, category, description, cover, youtubeUrl, featured. Cadastre exatamente estes 34 títulos, categorias e URLs:
1 Polly Pocket | Clássicos | https://www.youtube.com/watch?v=_Uzs5ah8wwc&t=6s
2 Moranguinho | Clássicos | https://www.youtube.com/watch?v=r-0CUY8xK1I&list=PLlJGK-ZrHigzV-q0fahZxdKUx82ONOnfi
3 Hello Kitty | Clássicos | https://www.youtube.com/watch?v=pcS1-XSjzG8&list=PLuM1cDb0L3BKJnhldrip-TidwMNO_6cD-
4 Winx Club | Magia e Fantasia | https://www.youtube.com/watch?v=Cb5wPj5sA0Y&list=PL_gC9XpbDqNpj8t3ySaYxr1d4azFsdHGQ
5 W.I.T.C.H. | Magia e Fantasia | https://www.youtube.com/watch?v=7aVdbR5PNww&list=PLlx1Jroya6QUQ8gKQuk3sU6CThfn_-VJ7
6 Sailor Moon | Magia e Fantasia | https://www.youtube.com/watch?v=LGQCPOMcYJQ&list=PLHSbAz1hu9sTBNk6N2D961X6eQd-xA1bs
7 Ever After High | Magia e Fantasia | https://www.youtube.com/watch?v=6hhSCf7hkuE&list=PL1CVlxnT1IWy1FHdKQssN97Bp_G-5fUET
8 Meninas Superpoderosas | Ação e Aventura | https://www.youtube.com/watch?v=zcPJFHMxZxM&list=PLJ_znu-N3ry31K3OXWbH4K-_JwG34VrMg
9 Kim Possible | Ação e Aventura | https://www.youtube.com/watch?v=d_vahxFi-0g&list=PLxKx6rp9449PXbM82Z1tiS4oBIHo8s9jT
10 She-Ra | Ação e Aventura | https://www.youtube.com/watch?v=0dthX8F9hxc&list=PLPepnzouguY-fQkaAE1LSjtICNmFSRrAv&index=1
11 Três Espiãs Demais | Ação e Aventura | https://www.youtube.com/watch?v=Ss1ty0WS2N4&list=PLlx1Jroya6QUJaIofIGdHV27NVtdnFlWn
12 Frozen: Uma Aventura Congelante | Filmes | https://www.youtube.com/watch?v=HgM_8ERxY_A
13 Ladybug | Ação e Aventura | https://www.youtube.com/watch?v=9m_RjAyK2qE&list=PLuoFsz_AsLn0p0Ke-oBq7SweY9zqnUiZc
14 My Little Pony | Magia e Fantasia | https://www.youtube.com/watch?v=gRFqrG-DGCk&list=PL1CVlxnT1IWwwDw-iWEETLGipfAZP0uyw
15 Monster High | Magia e Fantasia | https://www.youtube.com/watch?v=fK8OZSGf9rw&list=PL3co2PWDP4gszfXOP22i2m1OHjBljIVwL
16 Bratz | Clássicos | https://www.youtube.com/watch?v=8W-tVJu98fk
17 Dora, a Aventureira | Para as Pequenas | https://www.youtube.com/watch?v=cxKqvZOmgyA
18 Peppa Pig | Para as Pequenas | https://www.youtube.com/watch?v=GNWjDxa-iZk&list=PL4amRdcic-2StDcfSCbarupeXvKLAS-UJ
19 Pucca | Clássicos | https://www.youtube.com/watch?v=9n8SfuM6f8E&list=PLDH-5jI68ZZPDUy3H9__vMGm0gesxjYUz
20 Turma da Mônica | Clássicos | https://www.youtube.com/watch?v=KPNrnch8tRg&list=PLWduEF1R_tVZYNTH8ajFOEDkDT_hfIQL9
21 Sakura Card Captors | Magia e Fantasia | https://www.youtube.com/watch?v=Yr_flociXYY&list=PLutjGRLAHx-Ex7H1eJNpDUgkkWXgBXfHG
22 Ursinhos Carinhosos | Para as Pequenas | https://www.youtube.com/watch?v=xPShlKutlnU&list=PLdWJGKnoXupX06C9WgsfEZTcyHUW4zTiU
23 Tinker Bell | Magia e Fantasia | https://www.youtube.com/watch?v=AZR5L8lJmUU&list=PLMkh6tIFd2KoMYA5wT8s5EGF67xmnuG1v
24 Princesinha Sofia | Para as Pequenas | https://www.youtube.com/watch?v=Wuh_xzF2ZaI&list=PLhDycmSpd11NGvnHo7evGLiZ086kPNUVS
25 Masha e o Urso | Para as Pequenas | https://www.youtube.com/watch?v=szI4g5tUpto&list=PLNHb3esxun2lXvCd1IbIEIg9EPnggBhlf
26 Bluey | Para as Pequenas | https://www.youtube.com/watch?v=DRTWHRUEYL0&list=PLVkj_daPh17Sb8YEv5PVbyCjqz7IkDHXA
27 A Casa Mágica da Gabby | Para as Pequenas | https://www.youtube.com/watch?v=vGDdUML82jI&list=PLv4XAZf2LmiPLFkytofObcpZAQypvwedY
28 Spirit: Cavalgando Livre | Ação e Aventura | https://www.youtube.com/watch?v=005OIruQcYw&list=PLmRQDm7_1HqjFY-fIfB-wbSJfDsXCfpDl
29 DC Super Hero Girls | Ação e Aventura | https://www.youtube.com/watch?v=pXVKoFFPyeQ&list=PLpG-SAkRNTd9ilyEjkRxVMa1ZaoeQYDXC
30 LEGO Friends | Ação e Aventura | https://www.youtube.com/watch?v=fQWEehkKOBk&list=PLNr4jwIKA4-qcSniNg-p0eVX1FNTHbiuV
31 Rainbow High | Clássicos | https://www.youtube.com/watch?v=Yv73Ry9JzBs&list=PLzHXkpOtVN4TsbeL9geqagqYwStOHHD9Q
32 L.O.L. Surprise! | Para as Pequenas | https://www.youtube.com/watch?v=8JXoIQxYFLc&list=PLtMcF9kA5zEw60B6J4b_xaCA8NMJrVybA
33 Trolls | Ação e Aventura | https://www.youtube.com/watch?v=HiX_GsO8lwA&list=PLUmLp8QGk1vD0usieHbKKcdwAfeZ-cFJK
34 Lalaloopsy | Clássicos | https://www.youtube.com/watch?v=rhgKW9jGU_c&list=PLoEQyYhnyrdSr7PtEDMEYqMVhOjX5te_e

Início: cabeçalho com logo, Início, Todos os desenhos, busca e menu hambúrguer mobile. Destaque/carrossel com Winx Club, Frozen, Três Espiãs Demais, Ladybug e My Little Pony, contendo fundo, nome, categoria, texto e botão Assistir agora que navega à página do desenho e rola ao player. Seção “Todos os desenhos”, busca instantânea insensível a maiúsculas/minúsculas/acentos e filtros Todos, Clássicos, Magia e Fantasia, Ação e Aventura, Para as Pequenas e Filmes. Grade com todos 34: 5/6 desktop grande, 4 desktop, 3 tablet, 2 celular. Cards com capa vertical, título, categoria, ícone play, hover e clique útil.

Capas: use somente imagens devidamente autorizadas. Prefira thumbnails oficiais do YouTube vinculadas aos vídeos fornecidos quando não houver imagem oficial licenciada disponível. Não use hotlinks de Pinterest, nem imagens erradas. Otimize/localize assets se possível e use lazy loading, skeleton e object-fit cover.

Rota dinâmica /desenho/:slug: botão voltar, fundo/capa, título, categoria, status “Episódios disponíveis” ou “Filme completo”, CTA assistir, player responsivo 16:9, episódios, anterior/próximo, item ativo, recomendados. Em mobile player primeiro e episódios logo abaixo; desktop pode ficar ao lado. Não invente quantidades ou títulos.

Player: implementar YouTube IFrame Player API. Crie parser de youtubeUrl para v, list e t. Para playlists use cuePlaylist/loadPlaylist, getPlaylist, getPlaylistIndex, playVideoAt, nextVideo, previousVideo e onStateChange. Primeira reprodução apenas após interação. Após isso avance automaticamente quando ENDED, mas ao último pare sem reiniciar. Trate autoplay blocked. Lista deve manter ordem e criar nomes genéricos Episódio 1 etc. e thumbnails pelos IDs retornados. Vídeo individual mostra apenas Filme completo ou Episódio disponível. Em erro/indisponibilidade, mensagem amigável e botão Abrir no YouTube com URL original. localStorage salva último episódio por desenho e oferece Continuar do episódio X. Ao trocar episódio, rolar até player no celular. Limpar player ao desmontar/trocar página. Não renderizar players no catálogo nem fazer chamadas repetidas.

Visual: feminino, moderno, não excessivamente infantil. Fundo roxo bem escuro ou azul-marinho, destaques rosa/lilás, gradientes leves, cards arredondados, sombra discreta, texto branco, animações suaves, contraste e fonte moderna. Botões mobile com 44px mínimo. Sem rolagem horizontal.

Remover/não criar por completo: Premium, login/perfil, Minha Lista/favoritos, WhatsApp, suporte, ajuda, planos, assinaturas, pagamentos, avaliações/notas inventadas, conteúdo de doramas, links quebrados e botões sem ação.

Rodapé: nome/logo, “Uma coleção de desenhos para assistir e relembrar.”, links Início e Todos os desenhos, aviso YouTube e ano atual automático. Nada de contato/suporte/WhatsApp/premium.

Antes de concluir, valide os 34 cards únicos, busca Winx Club, filtros, rotas corretas, vídeos individuais, playlists/seleção/manual/próximo/anterior/ativo, mobile, inexistência dos itens removidos e tratamento de vídeo indisponível. Informe limitações reais de incorporação das playlists/vídeos do YouTube se encontradas.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cartoon-dream-stream.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9f4be810-6c1f-4962-aa75-fe293c3d48d7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
