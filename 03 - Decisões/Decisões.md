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
