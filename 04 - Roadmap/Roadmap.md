---
tags: [trunkpad/roadmap]
status: ativo
atualizado: 2026-10-20
---

# Roadmap

Agora · Próximo · Depois. Cada item aponta para a hipótese ou decisão que o sustenta; item sem hipótese é dívida de produto. Sequência completa e racional em `docs/decisions/004-roadmap.md` do repositório do app.

## Agora (v0.2 a v0.6)

| Item | Estado | Sustentação |
|---|---|---|
| Interface conversa + palco, composer, chips, atalhos | em uso | [[H01 — Conversa como visão principal, arquivos no palco]], D-004 |
| Editar no documento com diff e comentários ancorados | em uso | [[H02 — Comentários ancorados com @assistente]], D-005 |
| Instaladores macOS e Windows por GitHub Actions | em andamento | pedido do fundador (instalável) |
| Assinatura e notarização macOS | aguardando segredos no repositório | `build/README.md` do app |
| Dogfooding neste espaço e no `product-planning` | em andamento | D-010 |
| Conversas paralelas (cópia por conversa), lista de conversas, Conversa \| Arquivos | em uso (v0.2.1) | [[H08 — Conversas paralelas, cada uma na sua cópia]], D-011, D-012 |
| Trocar de espaço, clonar do GitHub, espaço de testes | em uso (v0.2.1) | D-013 |
| Personas com `@` e handoff pelo agente | em uso (v0.3.0) | [[H03 — Personas com handoff]], D-014 |
| Painéis Dataview | em uso (v0.3.0) | [[H05 — Painéis Dataview renderizados]], D-015 |
| Verificação por script após cada rodada | em uso (v0.3.0) | [[H06 — Loop de verificação antes de "terminei"]], D-016 |
| Aba Time: novidades, propostas do time, rascunhos compartilhados, membros e convites | em teste (v0.4.0) | [[H09 — Novidades do time dentro do app]], D-017 |
| Avisos de proposta e de comentário (toast, contador, sistema) | em teste (v0.4.0) | [[H09 — Novidades do time dentro do app]], D-018 |
| Aviso de nova versão do app | em uso (v0.4.0); download automático aguarda assinatura | D-019 |
| Galeria de conectores (catálogo, OAuth, Lê / Lê e altera) | em teste (v0.5.0) | [[H07 — Galeria de conectores com OAuth]], D-020 a D-022 |
| Rotinas com dono, aba Rotinas, rascunho por execução | em teste (v0.5.0) | [[H04 — Execuções agendadas que caem como rascunho]], D-023 |
| Sintaxe do Obsidian no modo Rico (wikilinks, destaques, marca-texto, embeds) | em teste (v0.6.0) | [[H10 — Sintaxe do Obsidian no modo Rico]], D-024, D-025 |
| Word e PowerPoint para leitura + cópia editável; apresentações HTML; planilha com fórmulas e gravação no lugar | em teste (v0.6.0) | [[H11 — Formatos de escritório e apresentações dentro do espaço]], D-026, D-027 |

## Próximo (v0.7 — agente e planilhas)

| Item | Sustentação |
|---|---|
| `set_cells` para o agente editar planilhas pelo mesmo gravador | D-027 |
| Word antes/depois na revisão | ADR-010 (próximo passo) |
| Servidores locais preparados pelo app (sem pedir instalação) | ADR-009 (próximo passo) |

## Depois

| Item | Sustentação |
|---|---|
| Web só leitura para revisores | D-009 |
| Download automático das atualizações (assinatura macOS) | D-019 |
| Rotinas sem o app aberto (GitHub Actions com CLI do Trunkpad) | ADR-009 (rejeitado por ora) |

## O que não vamos fazer agora

- Backend próprio e hospedagem de git (D-008, D-009).
- Integrações nativas por fornecedor (D-007).
- Telemetria enviada para fora: a primeira medição é local, a partir do git ([[01 - Base/Métricas|Métricas]]).
