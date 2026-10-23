---
tags: [nanquim/pesquisa]
status: ativo
---

# Benchmarks

Os três relatórios completos estão no repositório do app: [código](https://github.com/oandre/ai-ide-for-business/blob/main/docs/research/01-code-benchmarks.md), [interface](https://github.com/oandre/ai-ide-for-business/blob/main/docs/research/02-interface-benchmarks.md) e [referências de produto](https://github.com/oandre/ai-ide-for-business/blob/main/docs/research/03-product-references.md). O quadro comparativo está em [[01 - Base/Concorrentes|Concorrentes]].

## O que levamos deles

- **Claude Desktop / Cowork:** conversa como visão principal, caixa de texto com `+` e `/`, ícones de contexto no alto à direita, tipografia de documento nas respostas.
- **Claude Docs:** editar com IA dentro do documento, diff para aceitar ou rejeitar, comentários ancorados que podem ser passados ao assistente.
- **Linear e Notion:** densidade, hierarquia tipográfica e estados vazios que ensinam.
- **Cursor / Claude Code:** harness de agente com ferramentas confinadas, skills e agentes versionados no repositório.
- **dbt Cloud:** um único botão de próximo passo que muda de nome conforme o contexto.
- **Obsidian Properties e Bases, propriedades do Notion (v0.9):** bloco de propriedades no topo da nota com tipos e sugestões dos valores já usados; tabelas com células editáveis no lugar, sem edição em massa; linha "Criar opção" e propriedades recolhidas em "n mais".

## Processo

Toda mudança relevante de interface ou de produto passa por: levantar benchmarks (código, interface, referências) → três opções → crítica por uma persona (`critico-de-interface` ou `head-of-product`) → iterar até a melhor opção refinada. As rodadas ficam registradas como ADR no repositório do app e como decisão aqui.
