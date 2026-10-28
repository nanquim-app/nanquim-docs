---
tags: [nanquim/roadmap]
status: ativo
atualizado: 2026-10-22
---

# Roadmap

Agora · Próximo · Depois. Cada item aponta para a hipótese, proposta ou decisão que o sustenta; item sem hipótese nem proposta é dívida de produto. As tarefas de cada item vivem na proposta, em [[06 - Propostas/_index|Propostas]]. Sequência completa e racional em `docs/decisions/004-roadmap.md` do repositório do app.

## Agora (v0.2 a v0.11)

| Item | Estado | Sustentação |
|---|---|---|
| Interface conversa + palco, composer, chips, atalhos | em uso | [[H01 — Conversa como visão principal, arquivos no palco]], D-004 |
| Editar no documento com diff e comentários ancorados | em uso | [[H02 — Comentários ancorados com @assistente]], D-005 |
| Instaladores macOS e Windows por GitHub Actions | em uso (v0.9.1: .exe, .dmg Intel e Apple Silicon; macOS assinado ad-hoc, sem notarização) | pedido do fundador (instalável), D-037 |
| Assinatura Developer ID e notarização macOS (abre sem aviso) | aguardando conta Apple Developer e segredos no repositório | `build/README.md` do app, D-019, D-037 |
| Dogfooding neste espaço e no `product-planning` | em andamento | D-010 |
| Conversas paralelas (cópia por conversa), lista de conversas, Conversa \| Arquivos | em uso (v0.2.1) | [[H08 — Conversas paralelas, cada uma na sua cópia]], D-011, D-012 |
| Trocar de espaço, clonar do GitHub, espaço de testes | em uso (v0.2.1) | D-013 |
| Personas com `@` e handoff pelo agente | em uso (v0.3.0) | [[H03 — Personas com handoff]], D-014 |
| Painéis Dataview | em uso (v0.3.0) | [[H05 — Painéis Dataview renderizados]], D-015 |
| Verificação por script após cada rodada | em uso (v0.3.0) | [[H06 — Loop de verificação antes de "terminei"]], D-016 |
| Aba Time: novidades, propostas do time, rascunhos compartilhados, membros e convites | em teste (v0.4.0) | [[H09 — Novidades do time dentro do app]], D-017 |
| Avisos de proposta e de comentário (toast, contador, sistema) | em teste (v0.4.0) | [[H09 — Novidades do time dentro do app]], D-018 |
| Aviso de nova versão do app | em uso (v0.10.0: estado no rodapé, verificação diz o que aconteceu); download automático aguarda assinatura | D-019, D-039 |
| Pessoa obrigatória e rodapé com GitHub, assistente e versão | em uso (v0.10.0) | D-038, ADR-014 |
| Motor Claude Code (o `claude` da própria máquina atrás da política do Nanquim), colegas nomeados com figuras, fontes de dados, modelos de espaço, página do time | em uso (v0.11.0, linha de infraestrutura mesclada) | D-040, ADR-015, ADR-008 do app |
| Um instalador com tudo que já foi publicado (0.10.x + 0.12.0 + GitHub por padrão); *Checks* em todo push na main; só a main numera | em uso (v0.13.0) | D-041, [[05 - Pesquisa/Revisão v0.11–v0.12\|Revisão v0.11–v0.12]] |
| Portas de entrada: *Trazer do Google Drive* (.zip baixado vira espaço), colegas criados com o assistente (*Gerar* e *Criar conversando*), "Montar o espaço e o time" em todo espaço novo; toda IA do núcleo pelo motor escolhido | em teste (v0.14.0); a conferir com uma pasta real do Drive; fluxo guiado e ficha do colega com a sessão de interface | D-043, [[05 - Pesquisa/Jornadas de entrada\|Jornadas de entrada]] |
| Galeria de conectores (catálogo, OAuth, Lê / Lê e altera) | em teste (v0.5.0) | [[H07 — Galeria de conectores com OAuth]], D-020 a D-022 |
| Rotinas com dono, aba Rotinas, rascunho por execução | em teste (v0.5.0) | [[H04 — Execuções agendadas que caem como rascunho]], D-023 |
| Sintaxe do Obsidian no modo Rico (wikilinks, destaques, marca-texto, embeds) | em teste (v0.6.0) | [[H10 — Sintaxe do Obsidian no modo Rico]], D-024, D-025 |
| Word e PowerPoint para leitura + cópia editável; apresentações HTML; planilha com fórmulas e gravação no lugar | em teste (v0.6.0) | [[H11 — Formatos de escritório e apresentações dentro do espaço]], D-026, D-027 |
| Agente edita planilhas (`set_cells`); Word e PowerPoint na revisão; servidores locais preparados pelo app | em teste (v0.7.0) | D-028 a D-030 |
| Um caminho só para conectores (pacotes mantidos, versão fixa, preparar sempre, Páginas da web embutido); cabeçalhos no `[[`; preço ao lado do modelo | em teste (v0.8.0) | D-031 a D-033 |
| Propriedades acima da nota; células de propriedade editáveis nos painéis; nova nota a partir de modelo de nota | em teste (v0.9.0) | D-034 a D-036 |

## Próximo

| Item | Sustentação |
|---|---|
| Portão de entrada do beta fechado (conversas de descoberta, crítica nova, assinatura no Mac, ativação medida) | [[06 - Propostas/P02 — Critério de pronto para o beta\|P02]] (rascunho), D-048 |
| Arquivo, pedido ou os dois, com o pedido sempre à direita | [[06 - Propostas/P01 — Arquivo, conversa ou os dois, com a conversa sempre do mesmo lado\|P01]] (rascunho), [[H01 — Conversa como visão principal, arquivos no palco]] |
| Validação com arquivos reais (planilha de régua, Word com tabelas, Banco de dados preparado pelo app com um Postgres de verdade) | H07, H10, H11 — próximas ações |
| Slides alterados na revisão (filmstrip, antes/depois por slide) | ADR-012 (adiado: nenhum deck no product-planning) |
| Custo por rascunho e regras do espaço dentro do `config.json` (piso de confiança, modelos permitidos, aviso de orçamento) | D-033 |
| Rotinas sem o app aberto (GitHub Actions com CLI do Nanquim) | ADR-009 (rejeitado por ora) |

## Depois

| Item | Sustentação |
|---|---|
| Web só leitura para revisores | D-009 |
| Download automático das atualizações (assinatura macOS) | D-019 |
| Rotinas sem o app aberto (GitHub Actions com CLI do Nanquim) | ADR-009 (rejeitado por ora) |

## O que não vamos fazer agora

- Backend próprio e hospedagem de git (D-008, D-009).
- Integrações nativas por fornecedor (D-007).
- Telemetria enviada para fora: a primeira medição é local, a partir do git ([[01 - Base/Métricas|Métricas]]).
