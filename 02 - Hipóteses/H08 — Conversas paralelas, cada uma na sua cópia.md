---
status: em-teste
area: [agente, git, interface]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = pessoas que abrem mais de uma conversa por sessão (a medir); efeito sobre incorporações por semana é chute"
esforço: "feito em v0.2.1 (2 pessoas-semana, assistente): worktree por conversa, lista de conversas, Conversa | Arquivos"
ice_impacto: 7
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "uma semana de uso com duas ou três conversas abertas no product-planning; registrar em Feedback de uso cada vez que o trabalho de uma conversa ficou difícil de encontrar"
tags: [nanquim/hipotese]
---

## Sinal

- Pedido do fundador em 2026-10-20: "ter vários chats rodando em paralelo dentro do repositório" e a visão arquivo/conversa "igual ao app do Claude" (captura do controle Conversa | Código).
- O app do Claude Code para desktop isola cada sessão numa cópia própria (worktree) pelo mesmo motivo: duas sessões no mesmo diretório se atropelam.
- Antes da v0.2.1, duas conversas escrevendo ao mesmo tempo trocavam o rascunho uma da outra no diretório de trabalho (verificado no código: `ensureDraftForAgent` fazia checkout no diretório principal).

## Mecanismo

Cada conversa que escreve recebe uma cópia própria do repositório (git worktree) num rascunho só dela, criado a partir do Principal. As conversas rodam em paralelo, os arquivos abertos pela pessoa não mudam debaixo dela, e cada rascunho é revisado e incorporado separadamente. Mais trabalho em paralelo com revisão separada → mais incorporações por semana.

## Impacto esperado

Métrica primária (incorporações por espaço por semana). Alcance e efeito sem medição; nota 7 provisória.

## Como validar

- Confirma: em uma semana de uso, a pessoa mantém mais de uma conversa ativa e incorpora os rascunhos sem confundir qual mudança veio de onde; nenhum relato de "meu arquivo mudou sozinho".
- Refuta: a pessoa não encontra o trabalho da conversa (porque a pasta mostra só a cópia principal) e volta a usar uma conversa por vez. Nesse caso, mostrar na aba Arquivos a cópia da conversa selecionada (opção descartada por ora em D-011).
