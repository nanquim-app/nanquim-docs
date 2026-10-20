---
status: em-teste
area: [agente]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = notas que mudam de status (todas passam por revisão); efeito sobre 'desfazer' e retrabalho é chute"
esforço: "feito em v0.3.0 (1 pessoa-semana, assistente): @persona na caixa e nos comentários, consult_persona para o agente"
ice_impacto: 5
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "quatro semanas de uso no product-planning: toda mudança de status passa por @head-of-product; comparar bloqueios achados com a revisão manual"
tags: [trunkpad/hipotese]
---

## Sinal

- O `product-planning` já tem `.claude/agents/head-of-product.md`: revisor com critérios fixos, só leitura, formato de resposta definido. É usado antes de mudar status de hipóteses e propostas.
- O fundador: "gosto da ideia e poderíamos trabalhar com isso e com handoffs" (2026-10-20).

## Mecanismo

Um revisor nomeado, com critérios escritos no repositório, revisa de forma mais consistente do que um prompt improvisado. O handoff explícito (analista termina → passa brief ao revisor → revisor devolve veredito) deixa a cadeia visível na conversa e atribuída nos checkpoints.

## Impacto esperado

Menos "desfazer" e menos retrabalho depois de incorporar ([[01 - Base/Métricas|Métricas]]). Efeito: chute até o piloto.

## Como validar

Piloto de quatro semanas no `product-planning`:

- Confirma: a persona encontra os mesmos bloqueios que a revisão manual (ou mais), e o tempo de revisão cai.
- Refuta: vereditos genéricos, bloqueios falsos que a pessoa passa a ignorar.

## Forma proposta

- `@nome-da-persona` na caixa de texto ou em um comentário.
- Persona definida em `.claude/agents/<nome>.md` (já é o padrão do Claude Code): nome, descrição, ferramentas permitidas, instruções.
- Handoff: o agente atual passa um brief (o que fez, o que falta) e a persona responde na mesma conversa; cada uma com seus checkpoints.
- A persona revisora não escreve; a persona executora escreve em rascunho, como qualquer agente.
