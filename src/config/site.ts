/**
 * Configuração central do site. Altere o nome aqui e ele muda em todo o app.
 */
export const site = {
  name: "Clube dos Desenhos",
  shortName: "Clube",
  tagline: "Uma coleção de desenhos para assistir e relembrar.",
  description:
    "Catálogo de desenhos animados organizados por categoria, com busca instantânea e player integrado.",
};

/**
 * Domínio atual do RedeCanais (usado pelos embeds de filmes).
 *
 * Esse serviço troca de domínio com frequência e derruba os antigos — quando os
 * players de filme pararem de carregar, atualize SÓ esta linha com o domínio que
 * estiver no ar. O `PlayerEmbed` reescreve o host de qualquer `embedUrl` antigo
 * (`redecanais.af`, `redecanais.vision`, …) para este valor em tempo de execução.
 */
export const redecanaisHost = "redecanais.vision";

/**
 * Enquanto `true`, todo título que depende do embed do RedeCanais mostra um
 * aviso de "player em manutenção" (no card e na página do título) em vez de
 * tentar carregar o iframe. Volte para `false` quando `redecanaisHost` estiver
 * apontando para um domínio no ar.
 */
export const embedEmManutencao = true;
