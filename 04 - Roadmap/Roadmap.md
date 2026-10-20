---
tags: [trunkpad/roadmap]
status: ativo
atualizado: 2026-10-20
---

# Roadmap

Agora · Próximo · Depois. Cada item aponta para a hipótese ou decisão que o sustenta; item sem hipótese é dívida de produto. Sequência completa e racional em `docs/decisions/004-roadmap.md` do repositório do app.

## Agora (v0.2.x)

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

## Próximo (v0.3 — time)

| Item | Sustentação |
|---|---|
| Convidar colega e inbox de propostas (GitHub primeiro) | D-008 |
| Notificações de proposta e de comentário | dívida (sem hipótese ainda) |
| Auto-update dos instaladores | dívida |

## Depois (v0.4 — conectar; v0.5 — formatos)

| Item | Sustentação |
|---|---|
| Galeria de conectores com OAuth | [[H07 — Galeria de conectores com OAuth]], D-007 |
| Execuções agendadas como rascunhos | [[H04 — Execuções agendadas que caem como rascunho]] |
| XLSX com fórmulas, decks HTML com filmstrip, DOCX/PPTX, embeds | dívida |
| Web só leitura para revisores | D-009 |

## O que não vamos fazer agora

- Backend próprio e hospedagem de git (D-008, D-009).
- Integrações nativas por fornecedor (D-007).
- Telemetria enviada para fora: a primeira medição é local, a partir do git ([[01 - Base/Métricas|Métricas]]).
