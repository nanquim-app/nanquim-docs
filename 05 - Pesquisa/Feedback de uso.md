---
tags: [trunkpad/pesquisa]
status: ativo
---

# Feedback de uso (dogfooding)

Uma linha por incômodo ou ideia que apareceu usando o Trunkpad. Triagem semanal: cada linha vira correção, hipótese ou descarte, com link. Use o playbook `registrar-feedback` (`/` na caixa de texto).

| Data | Quem | Onde | O que aconteceu | Status | Destino |
|---|---|---|---|---|---|
| 2026-10-20 | André | `launch.sh` no Mac | O app compilou mas não abriu: "EXTRA[@]: unbound variable" (bash 3.2 do macOS). | resolvido | corrigido em `1526207` |
| 2026-10-20 | André | instalação | Quer um instalável em vez de rodar pelo script. | em andamento | workflow de release (macOS e Windows) |
| 2026-10-20 | assistente | CI no Windows | Checkout com CRLF quebrou o round-trip; arquivo CRLF ganhava linha em branco após o front matter. | resolvido | `.gitattributes` e correção no `joinFrontmatter` (`f4e11c3`) |
| 2026-10-20 | André | conversa | Quer os ícones do alto à direita trazendo painéis complementares, como no Claude Desktop. | resolvido | v0.2: Arquivos, Alterações, Histórico, Rascunhos |
| 2026-10-20 | André | editor | Selecionar texto e comentar com o Claude, como no Claude Docs. | resolvido | v0.2: comentários ancorados e `@assistente` |
| 2026-10-20 | André | título | Quer abrir e trocar de repositório sem sair do app. | resolvido | v0.2.1: menu de espaços (recentes, abrir, clonar, exemplo, testes), D-013 |
| 2026-10-20 | André | conversa | Vários chats em paralelo dentro do repositório, visão arquivo/conversa como no app do Claude. | em teste | v0.2.1: worktree por conversa, lista de conversas, Conversa \| Arquivos; [[H08 — Conversas paralelas, cada uma na sua cópia]] |
| 2026-10-20 | André | onboarding | Quer um repositório de teste com todos os tipos de conteúdo. | resolvido | v0.2.1: espaço de testes Café do Vale (`npm run playground`, menu de espaços, tela inicial) |
