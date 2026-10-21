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

- v0.11.0 publicada (Mac e Windows): as duas linhas viraram um app só. Instale, libere a primeira abertura em Ajustes do Sistema → Privacidade e Segurança → *Abrir mesmo assim*, diga quem você é e escolha o motor em Configurações → IA (*Claude Code*, o seu `claude` logado, ou uma chave de API); o token do GitHub fica em Configurações → GitHub. Abra o `product-planning`; mude status e repontue ICE pelas Propriedades. Todo incômodo vira linha em [[05 - Pesquisa/Feedback de uso|Feedback de uso]].
- Próximo bloco: uma semana de uso real; depois slides na revisão, custo por rascunho e regras do espaço — ver [[04 - Roadmap/Roadmap|Roadmap]].
