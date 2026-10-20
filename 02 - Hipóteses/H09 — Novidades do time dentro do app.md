---
status: em-teste
area: [time, interface]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = espaços com mais de uma pessoa (a medir); efeito sobre o tempo até revisar é chute"
esforço: "feito em v0.4.0 (2 pessoas-semana, assistente): aba Time, revisão de proposta no palco, avisos por polling, aviso de nova versão"
ice_impacto: 5
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "duas pessoas usando o trunkpad-docs por uma semana: cada proposta anotada em Feedback de uso com a hora em que foi enviada e a hora da primeira revisão"
tags: [trunkpad/hipotese]
---

## Sinal

- Pedido do fundador em 2026-10-20: "Vamos seguir para a v0.4 (time)", depois de o roadmap listar convite de colega, inbox de propostas e notificações como dívida sem hipótese.
- Até a v0.3, enviar um rascunho para revisão criava o pull request e o fluxo saía do app: quem revisa só descobre a proposta se abrir o github.com ou receber o e-mail do GitHub. A revisão entre pessoas não tinha lugar no Trunkpad.
- Ferramentas de referência trazem a fila de revisão para dentro: o Claude Code acompanha eventos do pull request na própria sessão; Linear e GitHub têm inbox com o que mudou desde a última vez. Nenhuma delas é para quem não programa.

## Mecanismo

A aba Time mostra, dentro do app e em vocabulário de negócio, o que o time fez desde a última vez que a pessoa olhou: propostas novas, comentários, propostas incorporadas. A pessoa revisa, aprova, pede ajustes e incorpora sem sair do Trunkpad, e recebe aviso quando algo chega. Menos tempo entre a proposta existir e alguém olhar → tempo até revisar menor e mais rodadas revisadas em 24h.

## Impacto esperado

Métricas de suporte *Tempo até revisar* e *Rodadas revisadas* ([[01 - Base/Métricas|Métricas]]); a primária (incorporações por espaço por semana) só se mexe em espaços com mais de uma pessoa. Alcance e efeito sem medição; nota 5 provisória.

## Como validar

- Confirma: em uma semana com duas pessoas no `trunkpad-docs`, toda proposta recebe a primeira revisão no mesmo dia e as revisões acontecem pela aba Time (não pelo github.com); nenhum aviso ignorado por ser ruído.
- Refuta: as pessoas continuam revisando no github.com (porque falta algo lá que aqui não tem: comentário por linha, histórico de versões da proposta) ou desligam os avisos. Nesse caso, listar o que faltou e decidir entre completar a revisão no app ou só avisar e abrir o GitHub.

## Pré-requisitos

- Token do GitHub configurado por pessoa; repositório no GitHub (D-008).
- Os caminhos reais da API (colaboradores, revisão, incorporar) ainda não foram exercitados contra o GitHub na sessão que construiu a v0.4.0 — o primeiro uso é o teste.
