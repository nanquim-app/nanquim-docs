---
status: em-teste
area: [editor, formatos]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = espaços que recebem Word, PowerPoint e planilhas por e-mail (Revisor e Líder de operação em Usuários); efeito sobre ativação é chute"
esforço: "feito em v0.6.0 (3 pessoas-semana, assistente): Word/PowerPoint para leitura + cópia editável, leitura pelo assistente, apresentações HTML, planilha com fórmulas e gravação no lugar, diff de células"
ice_impacto: 5
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "abrir no Nanquim uma planilha real de régua e um Word real com tabelas; editar uma célula, salvar, reabrir no Excel e conferir que nada mais mudou; registrar em Feedback de uso"
tags: [nanquim/hipotese]
---

## Sinal

- Roadmap listava "XLSX com fórmulas, decks HTML com filmstrip, DOCX/PPTX, embeds" como dívida sem hipótese; pedido do fundador em 2026-10-20: "Vamos seguir para a v0.6 (formatos e editor)".
- Perfis em [[01 - Base/Usuários|Usuários]]: o Revisor aprova propostas e números que chegam por e-mail (Word, PowerPoint); o Líder de operação vive em planilhas. Até a v0.5, DOCX/PPTX abriam como "arquivo binário" e a planilha era só leitura; o botão "Perguntar ao assistente" anexava um arquivo que o assistente se recusava a ler.
- Benchmark de interface (`docs/research/02-interface-benchmarks.md` do app): todo tipo de arquivo expõe Editar, Comparar e Perguntar; planilhas comparam célula a célula.

## Mecanismo

Se o que chega por e-mail abre, se lê pelo assistente e vira cópia editável com um clique, e se a planilha edita e grava sem destruir o que não foi tocado, o espaço vira o lugar único de trabalho para esses perfis, e cada proposta ou planilha passa pelo mesmo ciclo rascunho → revisar → incorporar.

## Impacto esperado

*Ativação* para os perfis Revisor e Líder de operação; a primária (incorporações por espaço por semana) só se mexe quando esses arquivos entram no fluxo. Nota 5 provisória.

## Como validar

- Confirma: uma planilha real editada e salva pelo Nanquim reabre no Excel com estilos, gráficos e validações intactos e só as células editadas diferentes; um Word recebido por e-mail é revisado e comentado dentro do Nanquim sem abrir o Word.
- Refuta: a gravação no lugar quebra um arquivo real (Excel pede reparo) ou o Word perde conteúdo relevante (tabelas, imagens); nesse caso, voltar a planilha para só leitura e priorizar a conversão.

## Estado em v0.6.0

- Word para leitura com tipografia de documento; PowerPoint como roteiro; *Criar cópia editável* com `origem:`; leitura pelo assistente; apresentações HTML com miniaturas e *Apresentar*; planilha com barra de fórmula, recálculo, gravação no lugar (só as células editadas; o resto byte-idêntico, com teste) e diff de células. ADR-010 no app; decisões D-026 e D-027.
- Não exercitado: Word real com tabelas e imagens; planilha real com gráficos; deck com reveal.js.
