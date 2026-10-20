---
status: em-teste
area: [editor, agente]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = revisões feitas por outra pessoa; efeito sobre tempo até revisar é chute"
esforço: "feito em v0.2 (1 pessoa-semana, assistente)"
ice_impacto: 5
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "usar comentários na revisão das próximas cinco propostas do product-planning e contar quantos pedidos com @assistente viraram mudança incorporada"
tags: [trunkpad/hipotese]
---

## Sinal

- Capturas do Claude Docs enviadas pelo fundador (2026-10-20): seleção de texto → comentário → "Ask Claude to edit". Pedido explícito de "editar textos e marcá-los para comentar com o Claude".
- Google Docs é o hábito de revisão dos perfis "Revisor" e "Líder de operação" em [[01 - Base/Usuários|Usuários]]: comentar no trecho, não no documento inteiro.

## Mecanismo

Comentar onde o texto está, com o trecho como contexto, elimina o copiar-e-colar para o chat. Passar o comentário ao assistente (`@assistente`) transforma a revisão em pedido de mudança com rastreio: o trecho, o pedido e a resposta ficam no repositório.

## Impacto esperado

"Tempo até revisar" e "comentários resolvidos" em [[01 - Base/Métricas|Métricas]]. Alcance: revisões por outra pessoa (zero hoje; depende do fluxo de time, v0.3). Efeito: chute.

## Como validar

- Confirma: em cinco propostas revisadas com comentários, a maioria dos `@assistente` vira mudança incorporada sem ida ao chat.
- Refuta: os comentários viram lista de tarefas que ninguém resolve, ou a âncora se perde quando o texto muda (medir pela contagem de "trecho não encontrado" na coluna de comentários).
