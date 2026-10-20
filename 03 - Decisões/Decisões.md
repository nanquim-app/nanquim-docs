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

