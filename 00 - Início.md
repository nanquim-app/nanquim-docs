# Trunkpad — início

**Tese em uma linha:** empresas já têm a matéria-prima de um cérebro organizacional (documentos, planilhas, páginas, vaults). Falta um lugar onde pessoas e agentes de IA mudam esse material juntos, com cada mudança visível, atribuída, revisável e reversível. O Trunkpad é esse lugar, e o "cérebro" é um repositório git comum que todas as outras ferramentas também leem.

**Base:** [[01 - Base/Visão e tese|Visão e tese]] · [[01 - Base/Princípios|Princípios]] · [[01 - Base/Usuários|Usuários]] · [[01 - Base/Glossário|Glossário]] · [[01 - Base/Métricas|Métricas]] · [[01 - Base/Concorrentes|Concorrentes]]

**Trabalho:** [[02 - Hipóteses/_index|Hipóteses]] · [[03 - Decisões/Decisões|Decisões]] · [[04 - Roadmap/Roadmap|Roadmap]] · [[05 - Pesquisa/Feedback de uso|Feedback de uso]] · [[05 - Pesquisa/Benchmarks|Benchmarks]]

## Em movimento

```dataview
TABLE WITHOUT ID file.link AS "Nota", area AS "Área", status AS "Status", nivel_evidencia AS "Evidência"
FROM "02 - Hipóteses"
WHERE contains(list("backlog", "em-análise", "pronta", "em-teste"), status)
SORT status ASC, file.name ASC
```

## Agora

- v0.2 está em uso neste espaço e no `product-planning`. Todo incômodo vira linha em [[05 - Pesquisa/Feedback de uso|Feedback de uso]].
- Instaladores assinados (macOS) e o fluxo de time são o próximo bloco: ver [[04 - Roadmap/Roadmap|Roadmap]].
