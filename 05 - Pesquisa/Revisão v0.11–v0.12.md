---
tags: [trunkpad/pesquisa]
status: ativo
data: 2026-10-21
---

# Revisão v0.11 → v0.12: o que entrou, o que ficou e os quatro pontos

Pedido do André (21/10): "Veja todas as atualizações que entraram, queria fazer um grande review… colaboração entre membros, login fraco, conexão com o repositório, integração fácil com Claude Code."

## Resumo

- **A v0.11.0 contém a v0.10.0, mas não a v0.10.1 nem a v0.10.2.** Essas duas foram publicadas no GitHub por outra sessão e nunca chegaram à main. Quem está na 0.10.2 e atualiza para a 0.11.0 perde as regras para agentes de fora. Detalhe na seção 1.
- **A main hoje (0.12.0, sem instalador) soma quatro linhas**: pessoa e versões, infraestrutura (Claude Code, colegas, fontes de dados), colaboração (ADR-016) e GitHub por padrão. Faltam entrar `awesome-davinci` (as 0.10.x) e `nifty-faraday` (interface e sistema de design, 62 conflitos).
- **Colaboração é só Git e GitHub na infraestrutura** (nenhum servidor nosso). O "nosso" são quatro atalhos que passam por fora do GitHub: a Principal pode mudar sem proposta; comentários de documento em JSON; regra de aprovação aplicada pelo app; metadados de rascunho que não viajam. Seção 3.
- **Login é fraco porque não é login.** Nome e e-mail digitados assinam tudo; o token do GitHub é um segredo sem ligação com a pessoa; não há "sair"; o fluxo *Entrar com GitHub* existe na main mas não chegou ao instalador, e tem dois defeitos de escopo e validade. Seção 4.
- **A conexão com o repositório funciona no caminho feliz e foi provada ao vivo (proposta, review, incorporação)**, mas aceita qualquer remoto sem testar, entrega o token a qualquer host, o link de convite provavelmente não abre no Mac, e criar repositório, proteger e convidar nunca foram provados ao vivo. Seção 4.
- **Claude Code: integração existe desde a 0.11.0 e é de dois cliques quando `claude` está num caminho padrão.** Nunca foi exercitada com o CLI real, só com uma imitação; o CI não roda nada disso. Seção 5.
- **Seis decisões para você**, na seção 6, e uma ordem de trabalho proposta.

## 1. O que está na main hoje — e o que ficou para trás

A `main` (`c6a9d7d`, versão 0.12.0 no `package.json`) é a soma de três linhas de trabalho que correram em paralelo em sessões diferentes:

| Linha | O que trouxe | Como entrou |
|---|---|---|
| Pessoa e versões (esta sessão) | v0.9.1 (macOS assinado ad hoc), v0.10.0 (pessoa obrigatória no rodapé, verificação de versão com estado, chave vinda do terminal) | Lançadas diretamente; v0.10.0 é ancestral da main |
| Infraestrutura (sessão "mecanizou-infrastructure") | Motor Claude Code (`claude -p`), colegas nomeados, fontes de dados, pastas vinculadas, modelos de espaço, aba Time | Mesclada por mim como v0.11.0 |
| Colaboração (sessão "ecstatic-babbage") | ADR-016: sincronização invisível, rascunhos por padrão, propostas, conflitos sem marcadores, comentários um arquivo por conversa, Entrar com GitHub | Mesclada pela própria sessão como 0.12.0 (sem lançamento) |
| GitHub por padrão (sessão "zen-volta") | Client id da OAuth App embutido no instalador, tela de entrada em três passos, erros da aba Time em palavras simples | Reaplicada na main como `c6a9d7d` (o ramo `zen-volta` ficou para trás por histórico, não por conteúdo) |

### A pergunta direta: a 0.11 contém o que havia na 0.10.x?

- **v0.10.0 — sim.** A tag é ancestral da main; os arquivos da pessoa e da verificação de versão diferem da tag só pelo que foi ajustado na mescla (menu da pessoa, `team-logic`, `secrets`).
- **v0.10.1 e v0.10.2 — não.** As duas foram publicadas no GitHub pela sessão "awesome-davinci" a partir de um ramo que nunca chegou à main. O que falta na v0.11.0 e na main:
  - *Regras para agentes de fora* (`CLAUDE.md` e `AGENTS.md` escritos em todo espaço, para Claude Code, Cursor, Codex e Cowork trabalharem só em rascunho e nunca na principal).
  - *Clones com as quebras de linha do app* (correção para Windows: arquivos apareciam como alterados logo depois de clonar).
- Consequência prática: quem instalou a v0.10.2 recebe aviso de "nova versão v0.11.0" e, ao atualizar, **perde** as regras para agentes de fora. O aviso de versão compara só o número.

### Ramos pendentes (contagem feita em 21/10, à tarde)

| Ramo | À frente da main | O que carrega | Mescla a seco |
|---|---|---|---|
| `claude/awesome-davinci` | 5 commits | v0.10.1 e v0.10.2 (acima) | 8 arquivos em conflito (`git.ts`, `workspace.ts`, `team.test.ts`, `package.json`, changelog, guia, `CLAUDE.md`) |
| `claude/nifty-faraday` | 6 commits, 114 arquivos | Interface v0.8 (menos cromo, integração nativa, contraste), composer de uma linha, sistema de design com tokens nomeados e pasta de primitivos (ADR "015 — Design system") | 62 conflitos: 33 em código e documentação, 29 capturas de tela; `components/ui.tsx` foi apagado lá e alterado na main |
| `claude/zen-volta` | 3 commits | Já reaplicados na main (`c6a9d7d`) | Não mesclar; só apagar o ramo |
| `claude/ecstatic-babbage`, `claude/mecanizou-infrastructure` | 0 | — | Já na main |

### Colisões de numeração

- **Versões.** Quatro sessões numeraram sozinhas: 0.10.1 e 0.10.2 (awesome-davinci, lançadas), 0.11.0 (esta sessão, lançada), 0.12.0 (colaboração, na main sem lançamento) e um bloco "Unreleased" no topo do changelog (zen-volta). Hoje a main diz 0.12.0 e o instalador mais novo é 0.11.0.
- **ADRs.** A main tem dois ADR-008 (`008-harness-strategy.md` e `008-team-on-github.md`). O ramo `nifty-faraday` traz `015-design-system.md`, mesmo número do `015-two-lines-one-app.md` da main. A colaboração nasceu como 013 e foi renumerada para 016 ao entrar.
- **Changelog.** As entradas 0.10.1 e 0.10.2 só existem no ramo `awesome-davinci`; a main pula de 0.10.0 para 0.11.0.

### Recomendação desta parte

1. Mesclar `awesome-davinci` na main agora (a sessão dona resolve os 8 conflitos) — é a única linha com conteúdo lançado que a main não tem.
2. `nifty-faraday` entra por último e sozinha: 62 conflitos de interface exigem a sessão dona refazendo a mescla sobre a main atual, com capturas regeneradas.
3. Fechar a numeração: a próxima versão lançada é **0.13.0** (soma de 0.10.1/0.10.2 + 0.12.0 + GitHub por padrão), com o changelog reordenado; renumerar `008-team-on-github` para o próximo número livre e o design system para 017.
4. Daqui em diante, uma regra simples: **só a main numera**. Ramo de sessão não muda `version` nem escreve número de ADR; quem mescla atribui os dois.
## 2. Mapa do que existe no produto (main `c6a9d7d`)

| Área | O que existe | Entrou em |
|---|---|---|
| Espaço e arquivos | Pasta = repositório; cofre do Obsidian abre sem mudar nada; menu de espaços (recentes, abrir, clonar, espaço de teste); pastas vinculadas como conhecimento só de leitura; modelos de espaço (Empresa, Área, Produto, Dados) | 0.1 → 0.11 |
| Editores | Markdown rico com salvamento que preserva o texto (91/91 no cofre), CSV e planilhas com fórmulas, Word e PowerPoint (leitura e cópia editável), apresentações HTML, imagens, PDF, código | 0.1 → 0.7 |
| Versões, rascunhos e propostas | Vocabulário de negócio sobre o git: salvar versão, rascunho, revisar, incorporar, desfazer, histórico; cada conversa de escrita na própria cópia; sincronização invisível, rascunhos por padrão, propostas, conflitos sem marcadores, quem está mexendo em quê | 0.1 → 0.12 |
| Time no GitHub | Aba *No GitHub* (caixa de entrada, propostas, rascunhos do time, membros e convites); revisar, aprovar e incorporar no app; *Entrar com GitHub*; `trunkpad://join`; compartilhar espaço; Principal protegido | 0.4 → c6a9d7d |
| Assistente e motores | Núcleo próprio (sessões, rascunhos, ferramentas, política de aprovação, cartões, checkpoint) com dois motores: nativo (AI SDK, qualquer provedor, chave no keychain) e Claude Code (`claude -p` da pessoa); verificação por script; preço ao lado do modelo | 0.1 → 0.11 |
| Colegas nomeados | Definições em Markdown compatíveis com os subagentes do Claude Code; `@id` no composer e em comentários; escopo de escrita por pasta; avatares desenhados; página Time com mesa, cartões e perfis | 0.3 → 0.11 |
| Conectores, fontes de dados e rotinas | Galeria curada (servidores locais preparados pelo app e remotos), fontes de dados (Metabase, Amplitude, HTTP) com linha de procedência e SQL sempre aprovado, rotinas que rodam como conversas autônomas em rascunho | 0.1 → 0.12 |
| Obsidian | Painéis Dataview com células editáveis, sintaxe do Obsidian no editor rico, bloco de propriedades, notas a partir de modelos | 0.3 → 0.9 |
| Pessoa, login e versões | Pessoa obrigatória no primeiro uso (assina as versões), rodapé com estado e menu, verificação de versão com estado, entrada com GitHub por fluxo de dispositivo, login do Claude Code fica no terminal | 0.4 → c6a9d7d |
| Empacotamento e CI | DMG e ZIP (arm64 e x64), instalador Windows; assinatura ad hoc quando não há certificado; nova tentativa automática quando o GitHub cancela a fila; client id da OAuth App embutido | 0.1 → c6a9d7d |

### Onde as linhas se sobrepõem (duas vocabulários num app só)

A junção das linhas deixou o mesmo objeto com dois nomes em telas vizinhas. Nada disso quebra; tudo confunde.

| Sobreposição | Como aparece |
|---|---|
| **Personas × colegas** | O popup `@` do composer chama "Personas" ("Digite @ para chamar um revisor"), o seletor diz "Persona / Sem persona", a rotina diz "@ para personas". A barra lateral diz "Time", a página diz "N colegas", "Novo colega". É um objeto só (`personas()` deriva de `agents()`). |
| **Conversas × pedidos** | Barra lateral: "Pedidos", "Novo pedido". Alternador Conversa \| Arquivos: "Conversa"; "Excluir conversa", "Enviar para a conversa", "Abrir conversa". Seis chaves de tradução repetem "Pedidos". |
| **Dois "Times"** | Aba *No GitHub* (pessoas, propostas, convites) e página *Time* (colegas de IA). Pessoas e colegas nunca aparecem juntos. |
| **Três "próximo passo"** | Botão compacto sob a pessoa no rodapé, chip de sincronização sob o seletor de espaço (ADR-016 pedia na barra de título), "Resolver conflitos →" no painel de alterações. A barra de título ficou só com o cromo da janela. |
| **Duas formas de abrir proposta** | "Pedir revisão" (0.1, a dica diz "abre um pull request no GitHub") e "Propor ao time" (0.12). |
| **Vazamentos de vocabulário** | "pull request" (`sendForReviewHint`) e "proteção de branch" (`protectNeedsPlan`). "commit" e "ramo": zero ocorrências. |
| **Changelog e ADRs** | 0.10.0 descrita duas vezes (a da pessoa e a da infra, dobrada dentro da 0.11.0); dois ADR-008; 0.10.1 e 0.10.2 sem entrada na main. |

### Verificação e CI

- 227 testes (25 arquivos unitários, 6 de integração, incluindo o time contra um GitHub de mentira sobre repositórios git reais e dois clones), um teste ao vivo opcional, quatro suítes smoke (harness, UI com 98 passos, agente com `claude` de mentira, cofre real com 91/91), 19 capturas E2E.
- **O CI só roda `typecheck` e `test`, e só em `release/**`.** Nenhuma verificação roda em push na `main` nem em pull request; `lint`, `build` e os smokes vivem só no CLAUDE.md. É assim que quatro sessões conseguiram mesclar na main sem ninguém rodar a bateria inteira sobre o resultado.
## 3. Colaboração entre membros — é só Git, ou criamos um "nosso"?

**Resposta curta.** A infraestrutura é só Git e GitHub: não existe servidor do Trunkpad, nem websocket, nem banco; todo estado compartilhado vive no repositório ou na API do GitHub (confirmado por busca no código: as únicas URLs externas são `github.com`, os servidores MCP de conectores e `trunkpad.app` como texto). O que criamos de "nosso" não é infraestrutura, são **quatro atalhos que passam por fora do GitHub** e um quinto só proposto. É neles que a sensação de "algo nosso" nasce.

### Inventário (o que existe e onde vive o estado)

| Mecanismo | Onde vive | Nativo do Git/GitHub? |
|---|---|---|
| Rascunho | ramo `draft/*`; **título e marcas (`agente`, `auto`, `desfazer`) no `.git/config` local** | Em parte: o ramo viaja, os metadados não |
| Checkpoint | commits `[checkpoint]` com `Co-authored-by` | Sim |
| "Aprovar" (incorporar local) | `git merge --no-ff` na Principal | Sim no git, **mas passa por fora da proposta** |
| Desfazer incorporação | `git revert` (em espaço de time, cai num rascunho) | Sim |
| "Pedir revisão" / "Propor ao time" | pull request no GitHub; com regra de 0 aprovações e sem conflito, incorpora na hora | Sim |
| Aprovar, pedir mudanças, comentar, incorporar proposta | reviews, comentários e merge do GitHub; comentários por arquivo | Sim |
| Membros e convites | colaboradores e convites do GitHub; convite por e-mail em organizações; `trunkpad://join` só clona | Sim |
| Compartilhar espaço | cria repositório privado, define remoto, publica | Sim |
| Sincronização de fundo | fetch, avança a Principal, **publica a Principal quando está à frente**, publica todo rascunho com trabalho | Sim (git puro, qualquer remoto) |
| Quem mexe em quê | derivado dos `origin/draft/*` | Sim (derivado) |
| Conflitos (manter as duas, combinar com o assistente) | índice local do git | Sim |
| Caixa de entrada "Novidades" e lido/não lido | cache por pessoa e máquina em `userData` | Não, mas inofensivo (cache do GitHub) |
| **Comentários no documento (trilho)** | `.trunkpad/comments/<id>.json` no repositório | **Não**: o git carrega, mas nada no GitHub entende; ancorados por texto; o agente pode escrevê-los |
| **Regras do time** (`requireDrafts`, `review.approvals`, `review.reviewers`, `principalProtected`) | `.trunkpad/config.json` | **Em parte**: `approvals` é aplicada **dentro do app** ao propor; o GitHub só aplica quando *Principal protegido* está ligado |
| Principal protegido | proteção de ramo no GitHub + cópia `principalProtected` no config + `CODEOWNERS` gerado | Em parte: o config é a fonte, o GitHub é derivado, mudanças lá não voltam |
| **Revisão humana (estratégia 14)** | proporia `.trunkpad/reviews.json` com rodadas e revisor fora do PR | **Não**; não implementada, mas segue na main como proposta aberta |
| Conversas e cópias de trabalho | `userData` (nunca vão para o time; só os checkpoints no `draft/*`) | n/a |

### Onde o princípio "só Git" fura

1. **A Principal pode mudar sem proposta.** Em espaço conectado, "Aprovar" (incorporar localmente) continua como botão secundário; a sincronização publica a Principal quando ela está à frente. Sem proteção de ramo no GitHub (impossível em repositório privado de conta gratuita), a Principal anda sem PR, sem revisão e sem rastro no GitHub.
2. **Comentários de documento são um segundo sistema de revisão.** Há comentários JSON no repositório (trilho do documento) e comentários do GitHub nas propostas. O ADR-016 planejou comentários de trecho *no GitHub*; o que saiu foi comentário por arquivo no PR mais o trilho JSON intacto. No GitHub o revisor vê JSON. O guia pt-BR ainda cita `comments.json` numa linha e `comments/` em outra.
3. **A regra de aprovações é um portão do app.** `review.approvals` vive no `config.json` e é lida ao propor; Claude Code, a web do GitHub ou qualquer um com push passam por fora. `principalProtected` é uma segunda cópia do estado do GitHub e pode divergir.
4. **Metadados de rascunho ficam no `.git/config` local.** Título, marcas de agente e de desfazer nunca chegam ao remoto; colegas veem só o nome técnico do ramo.
5. **Todo rascunho é publicado por padrão** como "backup". É git puro, mas muda o contrato social: todo trabalho pessoal com um commit vira visível para o time.

### Conceitos duplicados

- Dois "Times": aba *No GitHub* (pessoas, propostas) e página *Time* (colegas de IA), com duas stores e dois namespaces de tradução.
- Dois verbos de revisão para o mesmo rascunho: "Aprovar/Incorporar" (local) e "Pedir revisão/Propor ao time" (PR).
- Dois sistemas de comentário (trilho JSON e PR).
- Duas fontes de regra: `config.json` e proteção de ramo + `CODEOWNERS`.

### Recomendação

Adotar uma regra única e escrevê-la no ADR-016: **tudo que envolve mais de uma pessoa vive no GitHub** (propostas, revisões, comentários, proteção, membros); o repositório carrega só conteúdo e a configuração que o time escolheu; o app não tem estado próprio além de cache por pessoa. Na prática:

1. **A proposta é a única porta da Principal em espaço conectado.** Esconder "Aprovar" local quando há remoto conectado; a sincronização só *avança* a Principal, nunca a publica. Manter o merge local para espaço sem remoto. Marcar a estratégia 14 como substituída pelo ADR-016.
2. **Comentários de documento ou vão para o GitHub ou deixam de ser revisão.** Quando o rascunho tem proposta, o comentário de trecho vira comentário de review no arquivo e na linha (o `commentOnFile` já quase faz isso) e é lido de volta de lá. Sem proposta, `.trunkpad/comments/` fica explicitamente como "anotações para o assistente", fora do vocabulário de revisão e protegido contra escrita do agente.
3. **Parar de aplicar regra que o app mesmo inventa.** Ler aprovações e `CODEOWNERS` da proteção do GitHub; quando o GitHub não protege (privado gratuito), dizer isso e não simular a regra. Apagar a cópia `principalProtected`.
4. **Um "Time" só**, com duas seções (Pessoas = colaboradores do GitHub; Colegas = agentes), ou renomear a página de IA para "Colegas" em todo lugar.
5. **Metadados do rascunho viajam com o rascunho** (trailer no primeiro commit) e a publicação automática de rascunhos vira escolha ("guardar cópia no time"), não padrão.
## 4. Login e conexão com o repositório

### O que "login" significa hoje

Não existe conta nem login. Duas coisas sem relação entre si fazem as vezes dele:

1. **A pessoa** (nome e e-mail digitados no primeiro uso, ADR-014). Validação: nome não vazio e e-mail com domínio. Preenchido a partir do git global. Ninguém verifica. É quem assina toda versão, checkpoint e incorporação (a identidade do repositório ganha, depois a pessoa, depois o git global; sem nada, `usuário@trunkpad.local`).
2. **O token do GitHub**: token pessoal colado em Configurações → GitHub ou, na main (ainda sem instalador), o fluxo de dispositivo. Guardado criptografado pelo sistema em `secrets.json`; também aceito pela variável `GITHUB_TOKEN`.

### Por que está fraco

- **Passar-se por alguém está a um campo de texto de distância.** O autor de cada versão é o e-mail que a pessoa digitou. O GitHub atribui o commit à conta dona daquele e-mail; digitar o e-mail de um colega faz suas versões aparecerem como dele no histórico e em *Rascunhos compartilhados* (que compara pelo nome do autor). Nenhuma assinatura, nenhuma checagem no servidor.
- **A conta do GitHub não é a identidade.** O ADR-008 diz "token = identidade", mas o token é um segredo portador sem ligação com a pessoa: a proposta sai em nome da conta do token, o commit sai em nome do e-mail digitado; os dois podem discordar. Depois de entrar com GitHub, a identidade só é adotada se a atual estiver vazia ou terminar em `@trunkpad.local`; quem digitou continua assinando com o que digitou, a não ser que clique *Usar identidade do GitHub*. `settings.githubUser` é gravado e nada lê.
- **Sem sair, sem revogar, por máquina.** Um token por computador, nada sincroniza. Há *Entrar de novo* mas não há "desconectar" (ninguém chama `clearSecret('github')`). O app não revoga token de OAuth App (sem segredo de cliente); só aponta para a página do GitHub.
- **"Expirou" é chute.** Qualquer 401 ou 403 vira "acesso expirou"; 403 também é a resposta de limite de taxa, e o time faz duas chamadas por proposta aberta a cada dois minutos. O rodapé pode dizer que o acesso expirou com o token bom.
- **Escopo grosso e incompleto.** `repo` dá leitura e escrita em **todos** os repositórios da pessoa, não só nos espaços do time. Convite por e-mail em organização usa `orgs.createInvitation`, que exige `admin:org`, escopo que nem o fluxo de dispositivo nem a URL do token pedem: vai falhar com 403 para todo mundo. Organização com restrição a OAuth Apps (provável na `mecanizou-eco`) some da lista sem aviso.
- **O fluxo de dispositivo ainda não chegou ao instalador** (último lançamento: v0.11.0). E só aparece se a variável `TRUNKPAD_GITHUB_CLIENT_ID` estiver definida no repositório na hora do lançamento; senão, o build cai silenciosamente na tela de token. O código ignora `refresh_token` e `expires_in`: com um *GitHub App* (formato `Iv1.…`, que é o exemplo citado na documentação) os tokens expiram em 8 horas e a pessoa vê "acesso expirou" toda manhã. Funciona com *OAuth App* clássica (token `gho_` sem validade).

### Conexão com o repositório, passo a passo

Autenticação só por HTTPS + token via `GIT_ASKPASS`. Sem SSH (o ambiente do git não repassa `SSH_AUTH_SOCK`), sem GitHub App, sem renovação de token.

| Fluxo | Como é | Onde falha |
|---|---|---|
| Pasta local → repositório | `git init`, `.gitignore`, identidade, primeira versão | Sem remoto; ok |
| Conectar um remoto existente | Diálogo aceita qualquer texto e grava | **Nenhuma validação**: URL errada só aparece na próxima sincronização como "sem conexão" ou "sem acesso" |
| Compartilhar espaço | Cria repositório privado, define remoto, liga *Exigir rascunhos*, publica | Exige token; erro mostrado cru; nunca provado ao vivo (a sessão só tinha token de instalação, que o GitHub recusa) |
| Clonar | Qualquer URL numa pasta escolhida | Sem token em repositório privado: toast cru "could not read Username" |
| Entrar por nome ou link `trunkpad://join` | Valida `dono/nome`, reaproveita clone em `~/Trunkpad`, senão clona | **Clona e abre sem confirmar** (o repositório pode trazer `.trunkpad/` com configuração); **o instalador não registra o protocolo** (`electron-builder.yml` sem `protocols`), então o link do convite provavelmente não faz nada no Mac empacotado |
| Publicar, trazer, sincronizar | Fetch, avança a Principal, publica quando à frente, publica rascunhos; falhas classificadas por regex em "sem acesso" e "sem conexão" | Erros de publicar/trazer chegam como texto cru do git |

Dois riscos de segurança nessa camada:

- **O askpass entrega o token do GitHub para qualquer host.** O script responde `x-access-token` e o token a qualquer pergunta; um remoto HTTPS fora do GitHub (ou uma URL de clone forjada) recebe o token pessoal como senha.
- **O `HOME` é repassado ao git**, então o credential helper da própria pessoa (osxkeychain, `gh auth setup-git`) é consultado **antes** do askpass: a publicação pode sair com uma conta diferente da que o rodapé mostra.

### O que foi provado ao vivo

No GitHub de verdade, neste repositório: rascunho publicado pela sincronização, proposta aberta, comentário em arquivo, review e incorporação **funcionaram**. **Não provados**: criação de repositório (recusada ao token de instalação da sessão), proteção de ramo em repositório privado gratuito (o GitHub recusa; o app explica), proteção e `CODEOWNERS` no repositório público (bloqueados pelo proxy do ambiente), convites por usuário e por e-mail (sem segunda conta). O teste ao vivo opcional (`npm run test:live`) repete tudo com um token seu.

### Recomendação (em ordem)

1. **A conta do GitHub vira *a* identidade, e isso sai no próximo instalador.** Registrar uma *OAuth App* clássica (token sem validade) ou tratar `refresh_token`; definir `TRUNKPAD_GITHUB_CLIENT_ID` no repositório antes do lançamento. Mover *Entrar com GitHub* para o portão do primeiro uso: nome, e-mail e foto vêm do perfil; o diálogo digitado vira o caminho de quem não tem GitHub. Adotar a identidade com força quando a atual foi escrita pelo Trunkpad. Adicionar "Sair". Tratar 403 com limite de taxa zerado como "sem conexão", não "expirou".
2. **Acertar escopos e planos antes do primeiro time.** Pedir `admin:org` só na hora do convite por e-mail (ou trocar por "copiar o texto do convite"); ler `x-oauth-scopes` na resposta e dizer qual recurso está desligado; avisar sobre restrição de OAuth App na organização.
3. **Endurecer a conexão.** Askpass restrito ao host do remoto; `git ls-remote` antes de gravar um remoto; confirmação antes de `trunkpad://join` clonar; registrar o protocolo no `electron-builder.yml` e testar o link num Mac empacotado.
4. **Médio prazo: GitHub App instalada na organização** (permissões finas por repositório, tokens de instalação que nunca saem do processo principal, instalação pelo dono da organização). O token de usuário fica só para "quem sou eu".
5. SSH como reserva para quem já usa chave, repassando `SSH_AUTH_SOCK`. Baixa prioridade.
## 5. Integração com o Claude Code

**O que existe.** O motor `claude-code` roda o `claude -p` da própria pessoa, um processo por conversa, dentro da cópia da conversa (worktree). Toda permissão que o Claude Code pede volta para o Trunkpad por uma ponte MCP própria (`--permission-prompt-tool mcp__trunkpad__approve`), e as ferramentas do Trunkpad (ler playbook, consultar colega, fontes de dados…) entram no Claude Code pela mesma ponte. Edições feitas pelo Claude Code viram cartões de mudança e checkpoint como as do motor nativo. O `CLAUDE.md`, os `.claude/agents` e os `.claude/skills` do cofre carregam sem configuração, porque é o CLI real. Login nunca acontece dentro do app: o botão abre o Terminal em `claude auth login`; o status vem de `claude --version` e `claude auth status`. Em modo "conta do Claude Code", a chave de API do Trunkpad é retirada do ambiente do filho; em modo "chave de API", ela é exportada só para aquele processo. Nada lê credenciais do Claude Code (confirmado por busca no código), o Agent SDK não é dependência, o aviso de cobrança está na tela.

**Como a pessoa configura.** Primeiro uso: "Quem vai pensar?" com dois cartões, "Minha conta do Claude Code" primeiro. Ao escolher, o app testa na hora e mostra "Claude Code encontrado · versão" e "conectado · claude.ai · e-mail". Se já roda `claude` no terminal (instalador nativo, Homebrew, npm global), são dois cliques. Se não está instalado: guia com "Ver como instalar" (site da Anthropic) e "Verificar de novo". Instalado sem login: guia em três passos e botão "Abrir o Terminal para entrar".

**Onde está fraco.**

1. **Nunca foi testado com o CLI real.** Toda a cobertura (unitários da tradução do protocolo, da ponte e do mapa de permissões; smoke de agente) roda contra `scripts/mock-claude.mjs`, uma imitação fiel mas que codifica o que *acreditamos* ser o protocolo. O CI roda só `typecheck` e `test`. Se o `claude -p` mudar de formato, nada avisa. É o motivo mais provável de "funcionava no launch.sh e não no app": o launch.sh usa o CLI de verdade; o app, até hoje, só foi exercitado contra a imitação.
2. **Porta de entrada rígida.** Se `claude auth status` falhar (versão antiga, configuração via `apiKeyHelper` ou Bedrock), o app conclui "não conectado" e desabilita o composer, sem opção de tentar mesmo assim. Instalações via nvm/fnm/pnpm não são encontradas quando o app abre pelo Dock (PATH mínimo); a pessoa precisa colar o caminho completo em Ajustes → IA.
3. **Permissões podem ser afrouxadas pelo repositório.** O motor não passa `--strict-mcp-config`: um `.mcp.json` no espaço (ou os servidores MCP da própria pessoa) carrega junto, e as ferramentas dele são liberadas em confiança "autônoma". Hooks do `~/.claude/settings.json` também rodam dentro do motor.
4. **Ambiente inteiro vai para o filho.** `envFor` repassa todo o `process.env` do Electron (o git recebe uma lista explícita). O token da ponte e o caminho do socket ficam em `tmpdir()/trunkpad-cc-<sessão>/mcp.json` com permissões padrão.
5. **Conectores não chegam ao Claude Code.** Ferramentas de conectores (`nome__ferramenta`) são excluídas da ponte; só o motor nativo as usa. Não está documentado.
6. **Sem versão mínima do CLI.** Flags recentes (`--append-system-prompt-file`, `--setting-sources`, `auth status` em JSON) não têm checagem; um CLI antigo falha com "saiu com código 1".
7. **Retomada silenciosa.** Se `--resume` falhar (ou o processo morrer), o motor recomeça do zero uma vez sem avisar e o contexto da conversa fica só no histórico de cartões.

**Recomendação.**

- Antes de qualquer outra coisa nesta frente: **um teste com o CLI real** na máquina de quem tem `claude` logado (`npm run test:live:claude`): um turno, `system/init` com a ponte conectada, uma escrita passando pela aprovação, um `read_playbook`, custo > 0 e `--resume` num segundo processo. Registrar a versão do CLI com que passou.
- Passar `--strict-mcp-config`; checar versão mínima em `claudeCodeStatus` e dar uma mensagem guiada em vez de "código 1".
- Afrouxar a porta: `auth status` indisponível vira "não sei", o composer fica ativo e o cartão de erro de login (que já existe) trata a falha real. Resolver o comando pelo shell de login (`$SHELL -lc 'command -v claude'`).
- Ambiente do filho por lista explícita, como o git; `mcp.json` e pasta temporária com modo 0600/0700.
- Documentar os dois limites (conectores só no motor nativo; `.claude/settings.json` do espaço ignorado de propósito).
## 6. Decisões para tomar e ordem proposta

| # | Decisão | Minha recomendação |
|---|---|---|
| D1 | **Princípio da colaboração.** O que envolve mais de uma pessoa vive no GitHub (propostas, revisões, comentários, proteção, membros); o repositório carrega só conteúdo e a configuração escolhida pelo time; o app não tem estado próprio além de cache. | Sim. Fechar a porta do merge local em espaço conectado; comentários de trecho viram review no GitHub quando há proposta e "anotações para o assistente" quando não há; regras lidas da proteção do GitHub; estratégia 14 marcada como substituída. |
| D2 | **Identidade = conta do GitHub.** *Entrar com GitHub* no primeiro uso; nome, e-mail e foto do perfil; digitado só como reserva. | Sim. Precisa de uma ação sua: registrar a OAuth App clássica e definir `TRUNKPAD_GITHUB_CLIENT_ID` como variável do repositório. |
| D3 | **Fechar a numeração.** `awesome-davinci` entra agora; `zen-volta` é apagado; a próxima versão é a 0.13.0 com changelog reordenado; daqui em diante só a main numera versão e ADR. | Sim. `nifty-faraday` entra depois da 0.13.0, reaplicada pela sessão dona sobre a main atual. |
| D4 | **Claude Code com o CLI real antes de qualquer melhoria.** Um teste ao vivo numa máquina com `claude` logado; versão mínima do CLI; `--strict-mcp-config`; ambiente do filho por lista. | Sim. Precisa de uma máquina sua com `claude` logado (ou rodar `npm run test:live:claude` quando existir). |
| D5 | **CI na main e em pull request** com lint, build e os smokes; lançamento só a partir de uma main verde. | Sim. É o que impede a próxima mescla cega. |
| D6 | **Um vocabulário.** "Pedidos" ou "Conversas"; "Colegas" ou "Personas"; um "Time" com Pessoas e Colegas; sumir com "pull request" e "proteção de branch" das telas. | "Pedidos", "Colegas", um Time só. Entra junto com a reaplicação da `nifty-faraday`. |

### Ordem de trabalho proposta

1. **Esta semana, sem decisão nova:** mesclar `awesome-davinci`, apagar `zen-volta` e `ecstatic-babbage`, CI na main (D5), lançar **0.13.0** com o client id definido (D2 parte 1). Resultado: um instalador que contém tudo que já foi publicado, com *Entrar com GitHub*.
2. **Depois do seu "sim" em D1 e D2:** fechar a porta do merge local, regras do GitHub, comentários, identidade pela conta, "Sair", askpass por host, protocolo registrado, confirmação no `join`. Lançar 0.14.0 e começar o piloto com duas pessoas no `product-planning`.
3. **Claude Code (D4):** teste com o CLI real na sua máquina, correções do que ele revelar, endurecimento das permissões e do ambiente.
4. **Interface (D6 + `nifty-faraday`):** reaplicação do sistema de design sobre a main, vocabulário unificado, um Time só.

### O que não entrou nesta revisão

- Comparação de interface entre as linhas (o crítico de interface sobre a barra lateral mesclada ficou pendente desde a 0.11.0).
- Conectores e fontes de dados contra serviços reais (Metabase, Amplitude): só contra imitações.
- Windows: nada aqui foi exercitado num Windows real.
