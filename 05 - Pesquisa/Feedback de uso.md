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
| 2026-10-20 | assistente | editor rico | "R$ 1,4 mi … R$ 2,0 mi" virava fórmula matemática (cifrão simples abre math). | resolvido | v0.2.1: math só com `$$…$$`; cifrão simples é texto |
| 2026-10-20 | assistente | editor rico | Callouts, wikilinks, destaques e embeds do Obsidian aparecem como texto cru no modo Rico (o modo Visualizar renderiza). | novo | candidato a hipótese: plugins do editor para a sintaxe do Obsidian |
| 2026-10-20 | André | GitHub | Repositório trunkpad-docs criado; espaço publicado. | resolvido | github.com/oandre/trunkpad-docs |
| 2026-10-20 | assistente | painéis | Os 36 blocos Dataview do product-planning renderizam sem erro na v0.3.0 (15 painéis, 24 linhas nos seis índices testados). | resolvido | H05 em teste |
| 2026-10-20 | André | roadmap | "Vamos seguir para a v0.4 (time)". | em teste | v0.4.0: aba Time, revisão de proposta no palco, avisos; [[H09 — Novidades do time dentro do app]] |
| 2026-10-20 | assistente | aba Time | Os caminhos reais do GitHub (colaboradores, aprovar, pedir ajustes, incorporar) não foram exercitados contra a API na sessão da v0.4.0; só a lógica pura tem teste. | novo | validar no primeiro uso com duas pessoas no trunkpad-docs |
| 2026-10-20 | assistente | versão | Com o repositório do app privado, a verificação de nova versão responde 401 sem token: só quem configurou o token vê a faixa. | novo | tornar o repositório público ou documentar no onboarding |
| 2026-10-20 | André | roadmap | "Vamos seguir para a v0.5 (conectar)". | em teste | v0.5.0: galeria de conectores e rotinas; [[H07 — Galeria de conectores com OAuth]], [[H04 — Execuções agendadas que caem como rascunho]] |
| 2026-10-20 | crítica de interface | conectores | Política de quatro estados duplicava o dial; cartão de aprovação mostrava JSON cru; conectores desligados em Somente leitura. | resolvido | v0.5.0: acesso Lê / Lê e altera, cartão humano, leitura livre (D-022) |
| 2026-10-20 | crítica de interface | rotinas | schedules.json compartilhado rodaria em todo app aberto (N rascunhos iguais). | resolvido | v0.5.0: rotina com dono e "Assumir" (D-023) |
| 2026-10-20 | assistente | conectores | OAuth real e servidor hospedado real não exercitados na sessão da v0.5.0; servidores locais pedem Node/uv instalados. | novo | primeiro uso no product-planning (Postgres ou Notion); preparar servidores pelo app no próximo ciclo |
| 2026-10-20 | assistente | conectores | Metabase e Customer.io não têm servidor MCP do fornecedor; seguem por repositório irmão. | novo | reavaliar quando houver servidor; candidato a "Avançado" |
| 2026-10-20 | André | roadmap | "Vamos seguir para a v0.6 (formatos e editor)". | em teste | v0.6.0; [[H10 — Sintaxe do Obsidian no modo Rico]], [[H11 — Formatos de escritório e apresentações dentro do espaço]] |
| 2026-10-20 | crítica de interface | editor rico | Parágrafo editado com `[[Nota]]` era salvo como `\[\[Nota]]`; `[[Glossário]]` abria a primeira das três notas com esse nome. | resolvido | v0.6.0: `unescapeObsidian` ao salvar; resolução por pasta e popover com candidatos (D-024, D-025) |
| 2026-10-20 | crítica de interface | planilhas | Regravar o XLSX pela biblioteca perderia estilos, gráficos e validações. | resolvido | v0.6.0: gravação no lugar só das células editadas, com teste de bytes (D-027) |
| 2026-10-20 | assistente | formatos | Word real com tabelas/imagens, planilha com gráficos e deck com reveal.js não foram exercitados na sessão. | novo | validar com arquivos reais do product-planning e de um e-mail de verdade |
| 2026-10-20 | André | roadmap | "Vamos seguir para a v0.7". | em teste | v0.7.0: `set_cells`, Word/PowerPoint na revisão, servidores preparados pelo app (D-028 a D-030) |
| 2026-10-20 | assistente | build | O job macOS do GitHub Actions foi cancelado pela fila em quatro releases seguidas (v0.4.0 a v0.6.0), sempre aos 15 min sem iniciar; o Windows roda normal. | resolvido | v0.7.0: o job macOS rodou (5 min de fila, 3 min de build) e publicou .dmg e .zip para Intel e Apple Silicon. Era fila de runners, não cota; v0.4 a v0.6 continuam sem build Mac — quem precisar delas usa a v0.7.0 |
| 2026-10-20 | assistente | conectores | "Preparar" (instalação pelo app) não foi exercitado ao vivo: precisa do app empacotado e do registro npm. | novo | testar na primeira instalação em Mac/Windows |
| 2026-10-20 | crítica de interface | agente | `write_file` podia regravar um .xlsx como texto; o chip da planilha na conversa abria como binário; falha ao preparar conector virava toast com log do npm; conversão de Word que falha aparecia como "sem alterações". | resolvido | v0.7.0: ferramentas de texto recusam arquivos de escritório; tipos reais nos chips; estado de falha com Tentar de novo e Cancelar; erro de conversão explícito |

