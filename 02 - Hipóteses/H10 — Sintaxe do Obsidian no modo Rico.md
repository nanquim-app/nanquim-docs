---
status: em-teste
area: [editor]
nivel_evidencia: dados
impacto_estimado: "provisório: alcance = notas com sintaxe do Obsidian no product-planning (304 wikilinks, 25 destaques, 13 embeds em 06/10/2026); efeito sobre rodadas revisadas é chute"
esforço: "feito em v0.6.0 (2 pessoas-semana, assistente): decorações no editor, correção do escape ao salvar, autocompletar, popover de link, grupo Destaque"
ice_impacto: 7
ice_confianca: 5
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "uma semana editando o product-planning só no modo Rico; anotar em Feedback de uso cada vez que a pessoa voltou para o Obsidian ou para o modo Texto, e por quê"
tags: [trunkpad/hipotese]
---

## Sinal

- Feedback de uso (2026-10-20): callouts, wikilinks, destaques e embeds apareciam como texto cru no modo Rico; só o modo Visualizar renderizava.
- Contagem no `product-planning` (crítica de interface, 2026-10-20): 304 wikilinks (173 com alias, 137 com caminho, 73 com cabeçalho), 25 callouts, 13 embeds de imagem, 0 marca-textos. No `trunkpad-docs`: 57 wikilinks.
- Bug encontrado na mesma revisão: um parágrafo editado que continha `[[Nota]]` era salvo como `\[\[Nota]]`, porque o serializador escapa `[`; os blocos não editados estavam protegidos, o editado não.

## Mecanismo

Se a sintaxe do Obsidian aparece renderizada e os links funcionam (clicar, completar com `[[`), a pessoa que vive no Obsidian consegue editar no Trunkpad sem perder o que já usa, e o arquivo continua servindo ao Obsidian. Menos ida e volta entre apps → mais rodadas do assistente revisadas dentro do Trunkpad.

## Impacto esperado

Métricas de suporte *Rodadas revisadas* e *Ativação* para o perfil Analista/PM de growth ([[01 - Base/Usuários|Usuários]]); nota 7 provisória.

## Como validar

- Confirma: em uma semana, as edições do product-planning acontecem no modo Rico, nenhum arquivo salvo diverge do que o Obsidian espera (`checar-notas` e o round-trip do vault seguem verdes), e a pessoa não volta ao Obsidian para linkar notas.
- Refuta: a pessoa volta ao modo Texto ou ao Obsidian para editar links e destaques; nesse caso, levantar o que faltou (nós nativos com arrastar, cabeçalhos no autocompletar, embeds editáveis) e decidir entre completar ou aceitar o modo Texto como padrão para esse perfil.

## Estado em v0.6.0

- Decorações sobre o texto (estilo Live Preview), sem mudar bytes; `unescapeObsidian` ao salvar; popover no clique, ⌘-clique abre; `[[` lista nota e pasta e insere o caminho quando o nome se repete; grupo *Destaque* no menu `/`; embed de nota como bloco só-leitura; faixa "o editor Rico reescreveria trechos" com *Abrir em Texto*. ADR-010 no app; decisões D-024 e D-025.

## Estado em v0.8.0

- `[[Nota#` lista os cabeçalhos da nota (pelo caminho; com nome repetido, escolhe-se a nota antes), `[[#` os da nota aberta, `![[` oferece imagens; Enter numa nota fecha o link como antes. Corrigida a primeira lista vazia depois de `[[`. ADR-012; decisão D-032. Cobre o "cabeçalhos no autocompletar" que a validação pedia.

## Estado em v0.9.0

- Propriedades (front matter) num bloco editável acima do texto, com sugestões do espaço e gravação linha a linha; `⌘;`. Fecha o item "o front matter não aparece no Rico" que a validação apontaria primeiro. ADR-013; decisão D-034.
