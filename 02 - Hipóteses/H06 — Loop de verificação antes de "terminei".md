---
status: ideia
area: [agente]
nivel_evidencia: ideia
impacto_estimado:
esforço:
ice_impacto:
ice_confianca: 1
ice_facilidade:
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "medir primeiro: nas próximas vinte rodadas do agente no product-planning, contar quantas precisaram de correção na revisão e por quê"
tags: [trunkpad/hipotese]
---

## Sinal

Intuição, sem medição: nas rodadas de teste, o agente declara "terminei" sem reabrir o que escreveu. Engenharia usa testes para isso; documentos não têm o equivalente. Fica como `ideia` até a contagem proposta em `proxima_acao`.

## Mecanismo

Depois de escrever, o agente reabre o arquivo, confere front matter e valores contra os templates e as regras do `CLAUDE.md`/`TRUNKPAD.md` e roda o script de checagem permitido. Erros são corrigidos antes do checkpoint final, então a revisão humana encontra menos problemas.

## Impacto esperado

Menos "desfazer" e menos correções na revisão. Sem número até medir.

## Como validar

Comparar a taxa de correções na revisão em rodadas com e sem a etapa de verificação, no mesmo espaço, por quatro semanas.
