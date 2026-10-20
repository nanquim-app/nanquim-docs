---
tags: [trunkpad/decisoes]
status: ativo
---

# Decisões

Log cronológico e cumulativo. Nunca apague: decisão posterior revoga anterior com **REVOGA D-XXX**. Decisões técnicas detalhadas vivem como ADR no repositório do app (`docs/decisions/`); aqui fica o registro de produto e o link.

### D-001 — App desktop sobre um repositório git, não um serviço com banco próprio

- **Data:** 2026-10-20
- **Alternativa rejeitada:** aplicação web com banco de dados e exportação para arquivos.
- **Razão:** diff, revisão, incorporação e desfazer vêm de graça do git e são o fosso do produto; arquivos em disco mantêm compatibilidade com Obsidian, Claude Code e Cursor. ADR-001 e ADR-002 no repositório do app.
- **Quem decidiu:** André, com o assistente.

### D-002 — Agentes escrevem só em rascunhos, com checkpoints atribuídos

- **Data:** 2026-10-20
- **Alternativa rejeitada:** agente escreve no Principal com aprovação por mudança.
- **Razão:** revisão em lote com diff renderizado é mais rápida e mais segura do que aprovar mudança a mudança; o histórico mostra o que foi feito por agente e por pessoa.
- **Quem decidiu:** André, com o assistente.

### D-003 — Vocabulário de negócio obrigatório na interface

- **Data:** 2026-10-20
- **Alternativa rejeitada:** expor termos de git com tooltips explicativos.
- **Razão:** o público não programa; cada termo técnico é um motivo para não usar. Tabela em [[01 - Base/Glossário|Glossário]].
- **Quem decidiu:** André, com o assistente.

### D-004 — Conversa no centro, palco à direita, árvore recolhível

- **Data:** 2026-10-20
- **Alternativa rejeitada:** arquivo no centro com conversa em painel (v0.1) e painel flutuante de conversa.
- **Razão:** pedido do fundador de interface próxima ao Claude Desktop sem abandonar as pastas; crítica de três opções na ADR-003. Em teste: [[H01 — Conversa como visão principal, arquivos no palco]].
- **Quem decidiu:** André, com o assistente.

### D-005 — Comentários vivem no repositório (`.trunkpad/comments.json`)

- **Data:** 2026-10-20
- **Alternativa rejeitada:** comentários no banco local do app (não versionados) ou em um serviço.
- **Razão:** princípio 1 (o arquivo é a fonte da verdade); comentários precisam ser vistos pelo time e pelo agente. Custo aceito: o arquivo aparece como alteração no diff.
- **Quem decidiu:** André, com o assistente.

### D-006 — Personas são agentes em `.claude/agents/`, invocadas com `@`, com handoffs explícitos

- **Data:** 2026-10-20
- **Alternativa rejeitada:** personas configuradas dentro do app, fora do repositório.
- **Razão:** o padrão já existe no `product-planning` e no Claude Code; reusar em vez de reinventar (princípio 9). Hipótese: [[H03 — Personas com handoff]].
- **Quem decidiu:** André ("gosto da ideia"), com o assistente.

### D-007 — Conectores por MCP e scripts permitidos; não construímos integrações próprias

- **Data:** 2026-10-20
- **Alternativa rejeitada:** integrações nativas por fornecedor (Metabase, Slack…).
- **Razão:** MCP é padrão aberto com servidores publicados pelos fornecedores; o que construímos é galeria, OAuth e política. Para fontes sem servidor, repositório irmão com scripts permitidos, como já é feito. Hipótese: [[H07 — Galeria de conectores com OAuth]].
- **Quem decidiu:** André, com o assistente.

### D-008 — Multi-tenant via GitHub primeiro; backend próprio só quando um cliente exigir

- **Data:** 2026-10-20
- **Alternativa rejeitada:** construir identidade, hospedagem de git e contas agora.
- **Razão:** Organização = org do GitHub, Espaço = repositório, Membro = conta GitHub convidada pelo app, Políticas = arquivos versionados no repositório. Zero backend até o fluxo de time (v0.3) mostrar o que falta.
- **Quem decidiu:** André, com o assistente.

### D-009 — Não separar backend e frontend agora; manter a costura pronta

- **Data:** 2026-10-20
- **Alternativa rejeitada:** criar um servidor e um cliente web desde já.
- **Razão:** o app já tem a separação internamente (processo principal = serviços; renderer = interface) com um contrato tipado entre os dois. Quando um servidor for necessário (convites, inbox, agendamentos, web só leitura), os serviços viram o pacote `core`, o contrato vira `contract`, e nascem `apps/server` e `apps/web` sem reescrever a interface. Detalhe: ADR-005 no repositório do app.
- **Quem decidiu:** André (pergunta de 2026-10-20), com o assistente.

### D-010 — Este repositório é o caso de uso dentro de casa

- **Data:** 2026-10-20
- **Alternativa rejeitada:** documentar o produto só no repositório do código.
- **Razão:** usar o Trunkpad para planejar o Trunkpad expõe os incômodos antes dos clientes; tudo vira [[05 - Pesquisa/Feedback de uso|feedback]], hipótese ou decisão aqui.
- **Quem decidiu:** André, com o assistente.

### D-011 — Cada conversa que escreve trabalha numa cópia própria (git worktree)

- **Data:** 2026-10-20
- **Alternativa rejeitada:** fila global (uma conversa por vez no diretório principal); copiar o repositório inteiro por conversa; mostrar na aba Arquivos a cópia da conversa selecionada.
- **Razão:** paralelismo real sem mexer nos arquivos que a pessoa está vendo; worktrees compartilham o histórico, então revisar e incorporar continuam iguais. A pasta e as abas mostram sempre a cópia da pessoa; o trabalho da conversa aparece nos cartões, nos diffs e em Revisar e incorporar. ADR-006 no repositório do app. Hipótese: [[H08 — Conversas paralelas, cada uma na sua cópia]].
- **Quem decidiu:** André (pedido de 2026-10-20), com o assistente.

### D-012 — Controle Conversa | Arquivos no lugar do botão de palco

- **Data:** 2026-10-20
- **Alternativa rejeitada:** três posições (conversa, lado a lado, arquivos); manter o palco sempre visível em janelas largas.
- **Razão:** espelha o controle do app do Claude que o fundador mostrou; duas posições bastam porque em janela larga "Arquivos" já mostra a conversa ao lado. Abrir qualquer coisa muda para Arquivos; fechar a última aba volta para Conversa.
- **Quem decidiu:** André, com o assistente.

### D-013 — Trocar de espaço pelo nome no topo; uma janela, um espaço

- **Data:** 2026-10-20
- **Alternativa rejeitada:** várias janelas simultâneas; abas de espaços.
- **Razão:** igual aos editores que o público já conhece; recentes, abrir pasta e clonar do GitHub cobrem os casos. Várias janelas ficam para quando houver pedido.
- **Quem decidiu:** André ("queria poder abrir/mudar de repositório"), com o assistente.

### D-014 — Personas no formato do Claude Code, com handoff pelo próprio agente

- **Data:** 2026-10-20
- **Alternativa rejeitada:** personas configuradas no app; personas como conversas separadas.
- **Razão:** o formato `.claude/agents/<id>.md` já existe no product-planning e é lido pelo Claude Code; `@id` na caixa de texto ou num comentário chama a persona; o agente executor consulta o revisor certo (`consult_persona`) antes de dizer que terminou. Persona sem permissão de edição roda só leitura. ADR-007 no app. Hipótese: [[H03 — Personas com handoff]].
- **Quem decidiu:** André ("gosto da ideia e handoffs"), com o assistente.

### D-015 — Dataview renderizado ao vivo, subconjunto, só leitura

- **Data:** 2026-10-20
- **Alternativa rejeitada:** gerar os índices por script; embutir o plugin do Obsidian.
- **Razão:** os 36 blocos do product-planning usam um subconjunto pequeno (TABLE WITHOUT ID, WHERE com startswith/contains/list, SORT, default e aritmética); um motor próprio cobre tudo isso e mostra o erro quando não cobre. Hipótese: [[H05 — Painéis Dataview renderizados]].
- **Quem decidiu:** André ("podemos avançar"), com o assistente.

### D-016 — Verificação por script depois de cada rodada que escreve

- **Data:** 2026-10-20
- **Alternativa rejeitada:** auto-revisão por LLM como verificador; bloquear o checkpoint quando falha.
- **Razão:** script é determinístico e já existe nos espaços (`checar-notas`, `checar-links`); o resultado vira cartão e o assistente ganha uma rodada de correção. O rascunho registra a tentativa mesmo quando falha, para o revisor ver. Hipótese: [[H06 — Loop de verificação antes de "terminei"]].
- **Quem decidiu:** André ("faz parte do harness"), com o assistente.

### D-017 — O time é o repositório no GitHub; aba Time no app

- **Data:** 2026-10-20
- **Alternativa rejeitada:** backend próprio para contas, convites e avisos; expor o vocabulário do GitHub (issues, pull requests) na interface.
- **Razão:** aplica D-008 sem código de servidor: membros são colaboradores, propostas são pull requests, convite é convite do GitHub, e o token que já publica assina revisões e incorporações. A aba Time (`⌘4`) traz tudo em vocabulário de negócio; o link para o github.com fica a um clique. ADR-008 no app. Hipótese: [[H09 — Novidades do time dentro do app]].
- **Quem decidiu:** André ("Vamos seguir para a v0.4 (time)"), com o assistente.

### D-018 — Avisos por polling a cada dois minutos, com "visto" local por pessoa

- **Data:** 2026-10-20
- **Alternativa rejeitada:** webhooks (precisam de endereço público); API de notificações do GitHub (mistura tudo que a pessoa acompanha, não só o espaço).
- **Razão:** com o espaço aberto, o app consulta o GitHub a cada dois minutos e compara com o que esta pessoa viu da última vez (guardado por espaço, fora do repositório). Só o que mudou do outro lado vira aviso: toast, contador e notificação do sistema. A primeira consulta de um espaço só registra a base, sem avisar nada.
- **Quem decidiu:** assistente, dentro da liberdade dada ("Te libero nas decisões").

### D-019 — Aviso de nova versão pela release do GitHub; download automático só depois da assinatura

- **Data:** 2026-10-20
- **Alternativa rejeitada:** electron-updater agora.
- **Razão:** atualização automática exige build assinado (macOS) para funcionar; até os segredos entrarem no repositório, o app só avisa que existe versão mais nova e abre a página da release. Enquanto o repositório for privado, a verificação precisa do token.
- **Quem decidiu:** assistente, com os segredos pendentes do lado do André (`build/README.md`).

### D-020 — Catálogo curado de conectores, não registro ao vivo nem só hospedados

- **Data:** 2026-10-20
- **Alternativa rejeitada:** buscar o registro público de servidores MCP (milhares de entradas de desenvolvedor, código arbitrário no computador); só servidores hospedados com OAuth (perde Postgres e as fontes dos repositórios irmãos).
- **Razão:** o catálogo cobre as fontes dos perfis reais sem abrir a porta a servidores desconhecidos; a ordem é entrar com a conta → chave → roda no computador; "Avançado: outro conector…" é o único lugar com endereço ou comando. ADR-009 no app. Hipótese: [[H07 — Galeria de conectores com OAuth]].
- **Quem decidiu:** assistente, com a crítica de interface; dentro da liberdade dada.

### D-021 — Lista do time, credencial da pessoa

- **Data:** 2026-10-20
- **Alternativa rejeitada:** segredos no `connectors.json`; conectores configurados só no app de cada pessoa.
- **Razão:** `.trunkpad/connectors.json` (versionado, sem segredos) diz quais fontes o espaço usa e o que o time permite; chaves e tokens OAuth ficam no chaveiro de cada pessoa (`connector:<id>`). A linha mostra as duas camadas; "Ligado para mim" fica fora do repositório.
- **Quem decidiu:** assistente, com a crítica de interface.

### D-022 — Ler é livre, alterar pede: acesso por conector em vez de política de aprovação

- **Data:** 2026-10-20
- **Alternativa rejeitada:** política por conector com quatro estados (segue o nível / sempre perguntar / nunca perguntar / desligado) — duplica o dial de confiança e mistura decisão do time com a da pessoa.
- **Razão:** o time decide `access: read | read-write` (padrão read); as ferramentas do conector são classificadas em ler/alterar (anotação do servidor, senão o verbo do nome). Ler funciona em qualquer nível, inclusive Somente leitura; alterar só existe com "Lê e altera", acima de Somente leitura, e sempre pede aprovação, porque mudança em sistema externo não entra no rascunho nem no desfazer.
- **Quem decidiu:** assistente, com a crítica de interface.

### D-023 — Rotina tem dono e roda só no computador dele; aba Rotinas no palco

- **Data:** 2026-10-20
- **Alternativa rejeitada:** toda instância aberta roda toda rotina (N rascunhos iguais na segunda às 9h); seção no navegador (navegação, não ações); só em Configurações (estado escondido); "a cada N horas".
- **Razão:** sem servidor (D-009) a única forma de uma rotina rodar uma vez é ter um dono; os outros veem e podem assumir. A aba Rotinas reusa cartão, segmentado, atalho (`⌘5`) e contador das abas Rascunhos e Time; cada cartão tem um botão de próximo passo (Revisar / Executar agora / Trabalhando…). Execução nunca pede aprovação; o que pediria é negado. Hipótese: [[H04 — Execuções agendadas que caem como rascunho]].
- **Quem decidiu:** assistente, com a crítica de interface.

### D-024 — Sintaxe do Obsidian no modo Rico por decorações, não por nós nativos

- **Data:** 2026-10-20
- **Alternativa rejeitada:** nós e marcas nativos no Milkdown (cada variante precisa do próprio serializador e de prova no corpus); Live Preview em CodeMirror no lugar do editor (perde barra de ferramentas, menu `/`, edição com IA e âncoras de comentário).
- **Razão:** o texto fica como está e as decorações desenham wikilinks, destaques, marca-textos e embeds; o round-trip do vault continua byte-idêntico. O bug real estava ao salvar: o serializador escapava `[` em parágrafos editados; `unescapeObsidian` corrige isso antes do salvamento que preserva blocos. Hipótese: [[H10 — Sintaxe do Obsidian no modo Rico]].
- **Quem decidiu:** assistente, com a crítica de interface (que pediu nós nativos; a decisão manteve decorações porque a correção do escape resolve o bloqueio apontado sem o custo dos serializadores).

### D-025 — Links resolvem como no Obsidian; clique abre popover, ⌘-clique abre direto

- **Data:** 2026-10-20
- **Alternativa rejeitada:** abrir a primeira nota com o nome (três `Glossário.md` no product-planning); navegar no clique simples (troca de aba ao posicionar o cursor).
- **Razão:** caminho explícito → mesma pasta → nome único → lista quando ambíguo; `[[` insere o nome quando único e o caminho quando se repete (regra do próprio product-planning: "linke com caminho"). Vocabulário: destaque (callout), marca-texto (`==`), trecho de outra nota (embed); modo *Texto*.
- **Quem decidiu:** assistente, com a crítica de interface.

### D-026 — Word e PowerPoint abrem para leitura; cópia editável explícita, nunca automática

- **Data:** 2026-10-20
- **Alternativa rejeitada:** converter ao abrir (arquivos que a pessoa não pediu, duas fontes da verdade); só o assistente lê (o Revisor aprovaria o que não vê); rotular "somente leitura" (o cadeado já significa "o assistente está editando").
- **Razão:** um botão de próximo passo no cabeçalho, *Criar cópia editável*, grava `Nome.md` com `origem:`; com a cópia existente, o botão a abre. PowerPoint é roteiro de texto, não slide falso. O assistente lê os três formatos como texto. Hipótese: [[H11 — Formatos de escritório e apresentações dentro do espaço]].
- **Quem decidiu:** assistente, com a crítica de interface.

### D-027 — Planilha edita só com gravação no lugar e diff de células

- **Data:** 2026-10-20
- **Alternativa rejeitada:** regravar o arquivo com a biblioteca (perde estilos, gráficos, validações e imagens); edição sem revisão célula a célula.
- **Razão:** "o que você não tocou não muda" vale para planilhas: só os `<c>` editados mudam no XML da aba, o resto do arquivo fica byte-idêntico (teste), e o Excel recalcula ao abrir. Função desconhecida pelo motor fica "calculada ao abrir no Excel" em vez de mostrar número errado. A revisão mostra as células alteradas por aba. Próximo: `set_cells` para o agente pelo mesmo gravador.
- **Quem decidiu:** assistente, com a crítica de interface.

### D-028 — O agente edita planilhas pelo mesmo gravador e passa pela mesma revisão

- **Data:** 2026-10-20
- **Alternativa rejeitada:** o agente regravar a planilha inteira (perde estilos e gráficos); passar por CSV (perde fórmulas); caminho de revisão separado para edições do agente.
- **Razão:** `read_file` devolve a grade com letras e números para o agente endereçar células; `set_cells` aplica valores e fórmulas como a grade faz e grava só as células tocadas (D-027). Pessoa e agente passam pelo mesmo gravador e pelo mesmo diff de células; no nível "Revisar cada alteração" o cartão mostra arquivo, aba e primeiras células. ADR-011 no app. Hipótese: [[H11 — Formatos de escritório e apresentações dentro do espaço]].
- **Quem decidiu:** assistente, dentro da liberdade dada.

### D-029 — Word e PowerPoint comparam como texto convertido, com antes/depois renderizado para Word

- **Data:** 2026-10-20
- **Alternativa rejeitada:** manter "compare as versões visualmente" sem nada para ver; diff binário.
- **Razão:** conversão determinística das duas versões (mammoth; roteiro dos slides) dá Linhas e Lado a lado como qualquer texto; Word ganha Antes / Depois renderizado; o cabeçalho avisa que o texto é convertido e a formatação não aparece.
- **Quem decidiu:** assistente, dentro da liberdade dada.

### D-030 — Servidores locais preparados pelo app, com o npm embutido e o runtime do próprio app

- **Data:** 2026-10-20
- **Alternativa rejeitada:** pedir instalação do Node ("peça à engenharia"); instalador próprio de pacotes (resolver dependências é trabalho do npm); embutir os servidores no app (licenças, tamanho, versões).
- **Razão:** o app leva o npm (fora do asar) e o roda com o próprio Node para instalar o servidor uma vez em pasta própria; depois roda o executável do pacote com o mesmo runtime. A linha mostra Preparar → Preparando… → preparado pelo app. Servidores em Python (uvx) continuam pedindo instalação. Fecha o próximo passo da ADR-009. Hipótese: [[H07 — Galeria de conectores com OAuth]].
- **Quem decidiu:** assistente, dentro da liberdade dada.

