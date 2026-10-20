---
status: em-teste
area: [agente]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = rodadas que mudam arquivos em espaços com script de verificação; efeito sobre correções na revisão é chute"
esforço: "feito em v0.3.0 (0,5 pessoa-semana, assistente): scripts com verify: true rodam após a rodada, uma rodada de correção"
ice_impacto: 5
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "contar nas próximas vinte rodadas quantas vezes a verificação falhou e quantas o assistente corrigiu sozinho"
tags: [trunkpad/hipotese]
---

## Sinal

- Nas rodadas de teste, o agente declarava "terminei" sem reabrir o que escreveu. Engenharia usa testes para isso; documentos não tinham o equivalente.
- O próprio espaço de docs já tinha um verificador manual (`checar-notas`) que pegou um erro de numeração de decisão em 2026-10-20 antes de ser rodado automaticamente.
- Fundador, 2026-10-20: o loop "faz parte do harness".

## Mecanismo

Depois de escrever, o agente reabre o arquivo, confere front matter e valores contra os templates e as regras do `CLAUDE.md`/`TRUNKPAD.md` e roda o script de checagem permitido. Erros são corrigidos antes do checkpoint final, então a revisão humana encontra menos problemas.

## Impacto esperado

Menos "desfazer" e menos correções na revisão. Sem número até medir.

## Como validar

Comparar a taxa de correções na revisão em rodadas com e sem a etapa de verificação, no mesmo espaço, por quatro semanas.
