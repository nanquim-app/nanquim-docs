---
tags: [trunkpad/pesquisa]
status: ativo
data: 2026-10-21
---

# Crítica de interface — as quatro jornadas na main 0.12 (21/10)

Parecer do agente `critico-de-interface` sobre a main `c6a9d7d` (0.12.0, mesma interface da 0.13.0), a partir de 29 capturas atuais (claro e escuro), das telas E2E de Claude Code e Time, das strings em `pt-BR.json` e do código das telas. Pedido: avaliar por jornada (primeiro uso e GitHub; escrever, rascunhar, propor e revisar; configurar o Claude Code; conectar uma fonte de dados), devolver problemas por severidade com correção mínima, dizer o que a interface sugere para D1, D2 e D6 da [[05 - Pesquisa/Revisão v0.11–v0.12|Revisão v0.11–v0.12]], e separar o que espera o sistema de design do que não espera. Texto do crítico, sem edição além dos títulos.

## 1. Veredito: reprova (por enquanto)

As quatro jornadas funcionam de ponta a ponta nas capturas E2E, mas a main de hoje quebra três regras que o próprio produto declara como duras: termos de git nas strings (Princípio 3 e CLAUDE.md), erro bruto de IPC na primeira tela, e JSON cru como "o que mudou" para um PM (Princípio 6). Somado a quatro controles simultâneos de "próximo passo" e a uma fonte de dados que só se configura editando `.trunkpad/datasources.json`, o app ainda não é "palatável" para quem não usa git. Tudo abaixo é corrigível sem esperar o sistema de design, exceto o bloco marcado como visual.

## 2. Problemas por severidade

Formato: **onde** — o que a pessoa vê — por que é problema para um PM sem git — correção mínima.

### Bloqueia o uso

- **Welcome, estado "acesso expirou"** (`01-welcome.png`; `TeamDialogs.tsx:146`) — a seção "Espaços do seu time" imprime `Error invoking remote method 'github.myRepos': Error: Bad credentials - https://docs.github.com/rest` em laranja, e logo abaixo "Nenhum repositório encontrado na sua conta" — primeira tela com texto de stack; o PM não sabe se o app quebrou. Fazer: quando `github.status === 'expired'`, renderizar o mesmo estado vazio de `spacesNeedGithub` com o botão "Entrar de novo"; nunca mostrar `(e as Error).message` cru.
- **Vocabulário de git nas strings** (`src/renderer/src/i18n/pt-BR.json`) — "abre um **pull request** no GitHub" (l.239), "**proteção de branch**" (l.648), "**Clonar** do GitHub…/Clonar um repositório/URL do repositório" (l.770-773, também no rodapé da welcome e no menu de espaços `12-spaces-menu.png`), "**repositório**" em ~20 strings (l.234-237, 491, 601, 914-916, 956-970, 1212-1223), "**Token** de acesso pessoal / ghp_" (l.470, 605, 626-633), "**PATH**" (l.516), "**CODEOWNERS**" (l.643), "por milhão de **tokens**" (l.591), "Repositórios, issues e pull requests" na galeria de conectores (`16-connector-catalog.png`), "Checkpoint salvo · **b4d89e7**" no chat (`24-e2e-preview-do-rascunho.png`). O Glossário já tem a tradução de cada um (Espaço, Principal, Enviar para revisão/Proposta, Publicar). Fazer: um PR só de strings: repositório→"espaço no GitHub"; clonar→"Abrir do GitHub…"; token→"autorização"/"código"; pull request→"proposta"; proteção de branch→"Principal protegido" (o nome já existe em `settings.protect`); hash some, fica só "Restaurar até aqui"; "tokens"→"por milhão de palavras (estimativa)" ou esconder em "Mais detalhes".
- **Fontes de dados sem porta de entrada** (`SettingsDialog.tsx:691`; string l.495 "Metabase, Amplitude e APIs definidas em .trunkpad/datasources.json … chaveiro deste Mac") — a jornada 4 "conectar uma fonte de dados" só existe editando JSON à mão; o conector tem galeria, a fonte não. Para o Analista/PM de growth de `Usuários.md` (Metabase é a ferramenta central dele) é a jornada que mais importa e a única sem UI. Fazer: colocar Metabase/Amplitude na mesma galeria "Adicionar conector" (nome, endereço, chave; "Lê"), gravando em `datasources.json` por baixo; a linha de procedência já existe no backend.

### Confunde

- **Quatro "próximos passos" ao mesmo tempo** (`24-e2e-preview-do-rascunho.png`, `05-changes.png`) — na mesma tela: cartão do chat "Pronto para você aprovar · Ver o que mudou · Aprovar"; cabeçalho do palco "Ver o que mudou · Aprovar"; nav "Para aprovar 1"; e, no pé da barra lateral, um botão laranja flutuante "Salvar versão" (`PersonMenu.tsx` → `NextStepButton compact`) que fala de **outra coisa** (as alterações próprias da pessoa no Principal) com o mesmo peso visual. O benchmark dbt é um botão só que muda de nome; aqui são quatro, e dois deles são sobre pendências diferentes. Fazer: tirar o `NextStepButton` do rodapé da pessoa (a segunda linha "n alterações suas" já existe e pode ser o gatilho); no palco, manter os botões só no arquivo em pré-visualização de rascunho; o cartão do chat fica como a porta principal.
- **"Aprovar" continua no palco depois de aprovado** (`30-e2e-aprovado.png`; `ContentArea.tsx:304-313` vs `ChatColumn.tsx:119-123`) — o cartão diz "Aprovado · já vale para o espaço" (mais um toast igual), mas o cabeçalho do arquivo ainda oferece "Ver o que mudou · Aprovar". Aprovar pelo chat não fecha/reabre a aba (só o `approve` do próprio `ContentArea` faz isso), então `source.draft` fica obsoleto. O PM clica de novo e não sabe o que aconteceu. Fazer: ao aprovar por qualquer porta, fechar a aba `draft://` e reabrir o arquivo do espaço (o mesmo código de `ContentArea.approve`), e não duplicar o toast quando o cartão já mudou.
- **"Para aprovar" abre um gerenciador de rascunhos** (`Navigator.tsx:135` → `setPanelTab('drafts')`; `DraftsPanel.tsx`) — o nav promete uma caixa de entrada; o que abre é o painel Espaço › Rascunhos com "Iniciar rascunho", o interruptor "Exigir rascunhos" e cartões com cinco botões (Abrir rascunho · Ver o que mudou e aprovar · Atualizar · Pedir revisão · Descartar). E `toReview` (l.51) conta também os rascunhos que a própria pessoa criou ao "Salvar versão" sob "Exigir rascunhos", então ela "aprova" o que ela mesma salvou. Fazer: "Para aprovar" abre direto a revisão quando há um item, ou uma lista só com os pendentes de outros (rascunhos de colegas + propostas do time) e um botão por item; rascunhos próprios ficam em Rascunhos.
- **JSON interno como alteração** (`05-changes.png`, `06-review.png`) — depois de um comentário, "Alterações · 2" lista `.trunkpad/comments/FXKh1Une.json · Novo` e a revisão abre um diff de JSON em verde. Princípio 6 (mostrar, não explicar) e benchmark Claude Docs (comentários ancorados, nunca o arquivo por trás). Fazer: agrupar `.trunkpad/**` como uma linha "1 comentário" (ou esconder da lista e do contador), mantendo o arquivo na versão salva.
- **Dois "Times" na mesma tela** (`13-team.png`) — o nav diz "Time 1" (Reviewer, um colega de IA) e a aba "No GitHub" (`team.title`, l.887) diz "Este espaço ainda não tem um time". Contradição literal. Ver D6.
- **Vocabulário duplicado** — "Pedidos" no nav e "conversa" nos verbos ("Excluir conversa" l.400, "Abrir conversa" l.1141, "Repetir esta conversa…" l.1157, "veja a conversa" l.757, toggle "Conversa | Arquivos" l.783); "Colega" na página do Time e "PERSONAS" na lista do `@` (`21-e2e-blob-no-composer.png`, l.709), "Sem persona" l.416, "/ para roteiros, @ para personas" l.1097; "Roteiros" (l.481) e "Playbooks" (l.843); "Pedir revisão" (l.238) × "Propor ao time" (l.976) × "Enviar para revisão" (Glossário) × "Pedido de revisão criado" (l.240) para a mesma ação; "Para revisar" (l.96) × "Para aprovar" (l.104). Ver D6.
- **Primeiro uso em três lugares** (`02-person.png`, `02-onboarding.png`, Settings › GitHub) — modal "Seu nome e e-mail" sobre a welcome antes de a pessoa ver qualquer coisa; depois, dentro do espaço, outro modal "Configure seu espaço de trabalho" cujo conteúdo é só "Quem vai pensar pelo assistente?" (título e conteúdo não batem); e o GitHub, de que a welcome já depende ("Espaços do seu time", rodapé "GitHub: acesso expirou"), só aparece em Configurações. O momento 1 de `Usuários.md` ("configura nome, e-mail e chave") vira três diálogos em três telas. Fazer: um fluxo com dois passos (quem é você → quem pensa), título honesto, e o cartão de conta do GitHub como primeira opção de identidade (D2).
- **Duas amostras, duas línguas** (`01-welcome.png`) — "Espaço de testes (Café do Vale)" é o cartão primário (borda laranja, dupla largura, `Welcome.tsx`) e "Experimentar o espaço de exemplo" é outro cartão; o Sample é em inglês ("Q4 Roadmap", colega "Reviewer" com descrição em inglês) e o Café do Vale em pt-BR. O PM não sabe qual abrir, e "Abrir uma pasta" (o caminho real do vault do Obsidian) fica secundário. Fazer: um só espaço de exemplo, pt-BR; "Abrir uma pasta" como primário; o de testes fica no menu de espaços, onde já está.
- **Claude Code não conectado** (`18-e2e-chat-claude-nao-conectado.png`, `19-e2e-settings-claude-nao-conectado.png`) — banner com três botões (Abrir o Terminal para entrar · Verificar de novo · Abrir configurações); em Configurações, pílula "não conectado — rode `claude` no terminal e faça login" com crases literais, "Use o caminho completo se não estiver no PATH", "digite `claude` e, dentro dele, `/login`". Para um PM "rode", "login", "PATH" e crases são código. Fazer: banner com um primário ("Entrar no Claude Code") + "Verificar de novo"; guia sem crases ("abra o Terminal, digite claude e entre"); esconder "Comando do Claude Code" em Avançado quando o `claude` foi encontrado.
- **"Linha do espaço" no menu de espaços** (`12-spaces-menu.png`) — "Principal ✓ / Revisão do plano 2027 / Iniciar rascunho…" é um seletor de branch dentro do seletor de pastas; "linha" não está no Glossário e trocar a "linha" muda todos os arquivos que a pessoa vê. Fazer: tirar do menu de espaços; "Abrir rascunho" vive em Rascunhos; se ficar, chamar "Rascunho atual".
- **Nível de confiança "Autônomo" por padrão e sem escolha** (`src/main/services/settings.ts:14`; composer em todas as capturas) — o PM nunca escolheu; vê "Autônomo" ao lado do modelo e não sabe que o agente só escreve em rascunho. Princípio 7 (dial). Fazer: manter o padrão, mas mostrar a escolha no primeiro uso em uma linha ("Autônomo · sempre num rascunho que você aprova") ou rotular assim no composer.
- **Acesso do colega por texto** (`36-e2e-time-acesso.png`) — "Pastas separadas por vírgula, ex.: 30 - Propostas/, 20 - Estudos/" num campo de texto; um PM erra a barra final. Fazer: seletor de pastas com as fichas já usadas em Propriedades (benchmark Obsidian Properties).
- **Word só leitura sem a ação na frase** (`18-word.png`) — "Para editar aqui ou com o assistente, crie uma cópia editável ao lado" sem botão na frase; a ação é um ícone preto sem rótulo no canto. Fazer: botão "Criar cópia editável" inline na faixa.

### Polimento

- **Atalhos com ⌘ no Linux/Windows** (`Navigator.tsx:180,200` hardcoded "⌘N"/"⌘K") enquanto a welcome usa `isMac ? '⌘' : 'Ctrl'` e o menu da pessoa mostra "Ctrl+,". Fazer: um helper `mod()` usado em todos os `Kbd`.
- **Sintaxe do Obsidian aparece no modo Rico** (`17-rich-obsidian.png`: `[[Dados/vendas.csv|vendas.csv]]`, `==R$ 2,0 mi==`; `21-heading-complete.png`: `![[Imagens/receita-2026.png]]` impresso acima da própria imagem renderizada; `03-rich-editor.png`: `[[Customer interviews]]`) — o guia (5b) promete renderizado "sem mudar o texto"; a revisão renderizada (`11-playground-review.png`) já faz certo. Não depende do sistema de design: é o render do editor.
- **Tabela quebra palavra no meio** (`03b-comments.png`: "Initiati ve", "progre ss", "Mediu m") quando o palco estreita. Visual.
- **Badge numérica no título do palco** (`StageBar.tsx`: `items.length`) — "Q4 Roadmap 2", "Partne… 3" lê como versão ou comentários. Fazer: só o chevron, com "3 abertos" dentro do menu.
- **Duplicação na rodada do agente** (`24-e2e-preview-do-rascunho.png`) — "Editou Roadmap/Q4 Roadmap.md · 3" seguido do chip "Roadmap/Q4 Roadmap.md · Modificado +1 −0": seis linhas para três arquivos, e o resumo repete os chips no cartão final. Densidade (Linear). Fazer: uma linha por arquivo com o verbo e o +/−.
- **Histórico** (`07-history.png`) — segmento "Versões de" sem nome quando não há arquivo (`HistoryPanel.tsx:73` devolve "—" mas a captura mostra o rótulo cortado); toggle com ícone de brilho sem rótulo (checkpoints?). Fazer: esconder o segmento sem arquivo; rotular o toggle "Mostrar checkpoints".
- **Mesa do time com um colega** (`32-e2e-time-mesa.png`) — duas colunas "ninguém aqui agora" ocupando metade da tela. Visual (densidade): colunas vazias viram uma linha.
- **Composer mostra id de modelo** ("Claude · claude-opus-5-5"). Fazer: o nome amigável que o select de Configurações já tem.
- **Linha de preço no primeiro uso** ("US$ 4,00 entrada · US$ 20,00 saída, por milhão de tokens (estimativa) · tabela de 21/10/2026 · ver preços · Corrigir") dentro do modal de boas-vindas. Fazer: mover para "Mais detalhes" em Configurações › IA.
- **"Sobre o Trunkpad 44.9.1"** (`25-person-menu.png`) é a versão do Electron (dev; o E2E empacotado mostra 0.12.0). Só confirmar no build.
- **"chaveiro deste Mac" / "neste Mac"** (l.64, 495) em app Linux/Windows. Fazer: "deste computador" (l.76 já usa).
- **"O que mudou · Working changes"** (`06-review.png`) vem do título passado por `scripts/screenshot.cjs:48`, não do produto; corrigir no script para a captura não enganar.
- **Toast + cartão iguais** ao aprovar e ao criar colega. Fazer: só o cartão quando ele está visível.
- **Teclado**: a ação mais repetida do Revisor (`Usuários.md`) não tem atalho; `⌘↩` na revisão = o botão primário (Aprovar/Propor), como o comentário já faz.

## 3. O que a interface sugere para as decisões em aberto

### D1 — proposta como única porta do Principal em espaço conectado

A interface já sugere que sim, e mostra o custo de não ser:

- Em `ReviewView.tsx:82-90`, conectado, há "Propor ao time" (accent) e "Aprovar" (secundário, tooltip "Incorpora só neste computador; o time recebe quando o Principal for publicado"). Mas o cartão do chat (`ChatColumn.tsx:290-298`) e o cabeçalho do palco (`ContentArea.tsx:304-313`) só têm "Aprovar" e não sabem que o espaço está conectado — as duas portas mais visíveis empurram para a incorporação local, contra o acento da terceira.
- O "Aprovar" local num espaço com "Principal protegido" produz o único estado que a pessoa não resolve sem entender git: o chip entra em `blocked` ("Suas versões no Principal ainda não foram publicadas. Se o Principal é protegido, trabalhe num rascunho e envie uma proposta", l.1221) — a explicação chega depois do erro.
- Com "Exigir rascunhos", "Salvar versão" cria "Rascunho de Ana · 21/10" e o nav passa a dizer "Para aprovar 1" para a própria autora.
- Opção recomendada: um verbo por contexto, no estilo dbt. Espaço sem time: "Aprovar" (local, como hoje). Espaço conectado com regra 0 aprovações: o botão continua "Aprovar", mas por baixo é a proposta que incorpora na hora (`proposeHintDirect` já descreve exatamente isso). Regra ≥1: o botão vira "Propor ao time" em todas as três portas. "Aprovar local" sobrevive só como fallback explícito quando não há token ou conexão, com o chip explicando. Razão: elimina o estado `blocked` e o "aprovar o que eu mesma salvei" sem tirar nada de quem trabalha sozinho.

### D2 — identidade = conta do GitHub no primeiro uso

A interface já assume o GitHub em todo lugar menos no diálogo da pessoa: a welcome lista "Espaços do seu time", o rodapé da pessoa tem o estado do GitHub como segunda linha, e Settings › GitHub já tem o cartão de conta ("Sua conta do GitHub · Conectado como…"), a tira de três passos ("O GitHub abre no navegador → Digite o código → Aprove. Pronto.") e o botão "Assinar versões com a conta do GitHub" (`SettingsDialog.tsx:438-620`). Só o `PersonDialog` ignora isso e pede nome/e-mail digitados (pré-preenchidos do git config da máquina, que num computador compartilhado pode ser de outra pessoa — na captura veio "Claude / noreply@anthropic.com").

- Opção recomendada: o cartão de conta + tira de três passos entram no diálogo da pessoa como primeira opção ("Entrar com GitHub"); nome/e-mail ficam como "ou digite" para quem abre um vault local sem time (o Líder de operação de `Usuários.md`). Razão: reaproveita componentes prontos, elimina um diálogo e faz "Espaços do seu time" fazer sentido na primeira tela. Não forçar: sem GitHub o app continua inteiro.

### D6 — um vocabulário

- **Pedidos**, não Conversas. Evidência: 80% das strings já dizem "pedido"; a unidade tem estado e resultado ("pronto para aprovar" ao lado do pedido na barra lateral, "último pedido" na mesa), coisa que uma conversa não tem; o placeholder já diz "Peça qualquer coisa". Custo: seis strings de verbo (Excluir/Abrir/Repetir pedido; "veja o pedido"; toggle "Pedidos | Arquivos"). Condição: "pedido" deixa de ser usado para a proposta humana ("Pedido de revisão criado", "pede ajustes" → "Proposta enviada", "Ajustes pedidos" pode ficar).
- **Colegas**, não Personas. Evidência: a página do Time, a mesa (Trabalhando/Esperando você/Livres), o avatar desenhado, "Novo colega", "Colega criado" — a metáfora é social; "Persona" sobra em quatro strings. Argumento decisivo para esta audiência: PM escreve *personas de usuário*; o termo colide com o trabalho dele. O chip "só leitura" já distingue o revisor.
- **Um Time só**. Evidência: a mesa já tem as colunas certas para pessoas também ("Ana · proposta #12 · esperando você"); a aba "No GitHub" (propostas, rascunhos compartilhados, membros, novidades) é o mesmo conceito com outro nome. Opção recomendada: página Time com Pessoas e Colegas; propostas do time entram em "Para aprovar" (a inbox do Revisor de `Usuários.md`); membros ficam no Time; "No GitHub" some como aba e vira a frase de estado "Time no GitHub: org/nome" no topo da página. E um nome só para a ação: **Propor ao time** (verbo) / **Proposta** (substantivo); "Pedir revisão" e "Enviar para revisão" saem; "Roteiros" vence "Playbooks".

## 4. Ordem de ataque

### Não espera o sistema de design (fluxo e vocabulário)

1. PR de strings em `pt-BR.json`: git fora (bloqueia), D6 aplicado (um vocabulário), "Mac"→"computador", crases fora dos textos do Claude Code. Um dia, zero risco visual.
2. Um próximo passo: tirar o `NextStepButton` do rodapé da pessoa; fechar a aba de rascunho ao aprovar por qualquer porta; "Para aprovar" vira inbox (só pendências de outros) em vez de abrir Rascunhos; esconder `.trunkpad/**` de Alterações e da revisão.
3. D1 nas três portas (cartão, palco, revisão): um verbo por contexto; `blocked` deixa de existir no caminho normal.
4. Welcome e primeiro uso: estado de erro do GitHub como estado (não string crua); "Abrir uma pasta" primário; uma amostra pt-BR; diálogo da pessoa com GitHub primeiro (D2) e o passo "quem pensa" no mesmo fluxo; linha de preço para "Mais detalhes".
5. Fontes de dados na galeria de conectores (jornada 4 do Analista); seletor de pastas no Acesso do colega; "Criar cópia editável" inline no Word.
6. Banner e guia do Claude Code com um primário; "Linha do espaço" fora do menu de espaços; nível de confiança nomeado no primeiro uso.
7. Editor Rico: esconder `[[…|…]]`, `==…==` e `![[…]]` quando o cursor não está na linha (é render, não tokens).

### Espera o sistema de design (visual)

- Tipografia: família de documento no corpo do editor e nas respostas do assistente, família de interface no cromo (hoje parece a mesma; benchmark Claude Desktop/Docs).
- Peso do rodapé da pessoa em estado de aviso (borda laranja em todas as capturas) e do botão flutuante, se algum sobreviver.
- Densidade: mesa do time com colunas vazias, modal de Configurações sem indicação de rolagem, espaçamento das rodadas do agente, badge numérica do palco, quebra de palavra em tabelas estreitas, segmentos do Histórico.
- Modo escuro: contraste do banner amarelo e dos chips +/− (hoje aceitável; revalidar com os tokens).

## Conferência (assistente)

Cinco afirmações de maior peso conferidas no código da main: o erro do GitHub chega cru por `(e as Error).message`; "Para aprovar" conta todo rascunho com trabalho, inclusive os da própria pessoa; o botão de próximo passo vive no rodapé da pessoa; aprovar pelo chat não fecha a aba do rascunho; fontes de dados só existem pelo arquivo JSON. Nada foi alterado no produto.
