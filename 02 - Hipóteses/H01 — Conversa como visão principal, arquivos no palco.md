---
status: em-teste
area: [interface]
nivel_evidencia: evidência
impacto_estimado: "provisório (métrica primária ainda não medida): afeta todas as rodadas com mudança; efeito sobre revisão é chute"
esforço: "feito em v0.2 (2 pessoas-semana, assistente)"
ice_impacto: 7
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "duas semanas de uso neste espaço e no product-planning; registrar em Feedback de uso cada vez que a pessoa precisou abrir algo pela árvore em vez de pelo chip"
tags: [nanquim/hipotese]
---

## Sinal

- O fundador descreveu o Claude Desktop como "ótimo harness, ruim para ver o resultado" e pediu uma interface mais parecida com ele, sem abandonar a arquitetura de pastas (conversa de 2026-10-20, com capturas do Claude Desktop e do Cowork).
- Os benchmarks de interface (`docs/research/02-interface-benchmarks.md`) mostram Cowork e Cursor convergindo para conversa + área de resultado lado a lado.
- A crítica da ADR-003 (`docs/decisions/003-ui-v2-options.md`) escolheu a opção A (conversa no centro, palco à direita, árvore recolhível) contra as alternativas de arquivo no centro e de painel flutuante.

## Mecanismo

Se o que o agente produz abre sozinho ao lado da conversa, a pessoa não troca de contexto para conferir e revisar. Menos troca de contexto → mais rodadas revisadas logo depois de terminar → mais incorporações.

## Impacto esperado

Métrica primária (incorporações por espaço por semana) via "rodadas revisadas". Alcance: todas as rodadas com mudança. Efeito: chute; sem baseline. Nota de Impacto 7 é provisória e deve ser repontuada quando [[01 - Base/Métricas|Métricas]] estiver instrumentada.

## Como validar

Dogfooding por duas semanas neste espaço e no `product-planning`:

- Confirma: a pessoa revisa a maioria das rodadas sem abrir a árvore; o feedback registra poucos "precisei procurar o arquivo".
- Refuta: a conversa estreita atrapalha a leitura de respostas longas, ou o palco fica vazio porque as pessoas preferem o navegador de arquivos. Nesse caso, testar a opção B da ADR-003 (arquivo no centro, conversa à direita) com as mesmas pessoas.
