---
status: backlog
area: [editor]
nivel_evidencia: dados
impacto_estimado: "provisório: alcance = vaults do Obsidian com índices em Dataview (o product-planning tem ao menos cinco); efeito é retirar o último motivo de abrir o Obsidian, chute"
esforço: "2–3 pessoas-semana (assistente): TABLE e LIST sobre front matter, só leitura, subconjunto de funções"
ice_impacto: 5
ice_confianca: 5
ice_facilidade: 5
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "inventariar as queries dos índices do product-planning e listar as funções Dataview necessárias"
tags: [trunkpad/hipotese]
---

## Sinal

- No `product-planning`, `00 - Index.md` e os `_index.md` de hipóteses, análises e propostas de cada contexto usam blocos `dataview` (`TABLE … FROM … WHERE …`). No Trunkpad eles aparecem como código (verificado no smoke de vault de 2026-10-20).
- O fundador quer "parar de usar o Obsidian": esses painéis são o que ainda o obriga a abri-lo.

## Mecanismo

Renderizar os blocos como tabela, a partir do front matter dos arquivos, tira o último motivo para manter o Obsidian aberto. Um espaço em uma ferramenta só → mais uso do Trunkpad → mais rodadas e incorporações nele.

## Impacto esperado

Indireto na métrica primária (mais trabalho acontecendo no Trunkpad). Alcance medido: cinco índices no `product-planning`; ampliar o inventário antes de pontuar de novo.

## Como validar

- Confirma: os índices do `product-planning` renderizam as mesmas linhas que no Obsidian (comparar à mão nas quatro pastas), e o fundador passa duas semanas sem abrir o Obsidian.
- Refuta: as queries usam funções demais para um subconjunto razoável; nesse caso, avaliar gerar os índices como arquivos (script permitido) em vez de renderizar ao vivo.
