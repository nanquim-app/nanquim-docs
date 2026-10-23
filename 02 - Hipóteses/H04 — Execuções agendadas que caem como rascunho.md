---
status: em-teste
area: [agente, git]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = rotinas semanais de cada espaço (no product-planning, repontuar ICE e atualizar questions do Metabase); efeito direto na métrica primária, chute"
esforço: "feito em v0.5.0 (2 pessoas-semana, assistente): schedules.json com dono, aba Rotinas, execução como conversa autônoma em rascunho, avisos com ação"
ice_impacto: 7
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "criar as duas primeiras rotinas do product-planning (repontuar ICE; registrar questions do Metabase) pela aba Rotinas e medir por duas semanas quantos rascunhos são incorporados e em quanto tempo"
tags: [nanquim/hipotese]
---

## Sinal

- Rotinas do `product-planning` feitas à mão: repontuar ICE quando uma análise conclui, registrar questions do Metabase, revisar backlog por contexto.
- Codex Automations e o agendamento do Cowork mostram demanda por execuções recorrentes; nenhum entrega o resultado como proposta revisável (benchmarks em [[01 - Base/Concorrentes|Concorrentes]]).

## Mecanismo

Trabalho recorrente que acontece sozinho e chega como rascunho transforma a revisão em rotina semanal, e cada revisão incorporada conta na métrica primária.

## Impacto esperado

Métrica primária, diretamente. Alcance: espaços com ao menos uma rotina. Efeito: chute até medir o piloto manual.

## Como validar

- Primeiro à mão: duas rotinas executadas pelo assistente toda segunda, por duas semanas, com rascunho por execução. Medir quantos são incorporados e quanto tempo a revisão leva.
- Confirma: a maioria incorporada, revisão abaixo de dez minutos.
- Refuta: rascunhos ignorados ou descartados por baixa qualidade; nesse caso, [[H06 — Loop de verificação]] vem antes.

## Estado em v0.5.0

- Aba Rotinas (`⌘5`): rotina com dono (roda só no computador de quem criou, com o app aberto; perdida a hora, roda ao abrir), cada execução é uma conversa autônoma na própria cópia e chega como rascunho; sem mudança, o rascunho vazio some. ADR-009 no app; decisão D-023.
- O piloto manual de duas semanas vira piloto pela ferramenta: a métrica é a mesma (incorporados e tempo até revisar).

