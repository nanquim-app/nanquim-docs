# Trunkpad — início

**Tese em uma linha:** empresas já têm a matéria-prima de um cérebro organizacional (documentos, planilhas, páginas, vaults). Falta um lugar onde pessoas e agentes de IA mudam esse material juntos, com cada mudança visível, atribuída, revisável e reversível. O Trunkpad é esse lugar, e o "cérebro" é um repositório git comum que todas as outras ferramentas também leem.

**Base:** [[01 - Base/Visão e tese|Visão e tese]] · [[01 - Base/Princípios|Princípios]] · [[01 - Base/Usuários|Usuários]] · [[01 - Base/Glossário|Glossário]] · [[01 - Base/Métricas|Métricas]] · [[01 - Base/Concorrentes|Concorrentes]]

**Trabalho:** [[02 - Hipóteses/_index|Hipóteses]] · [[03 - Decisões/Decisões|Decisões]] · [[04 - Roadmap/Roadmap|Roadmap]] · [[05 - Pesquisa/Feedback de uso|Feedback de uso]] · [[05 - Pesquisa/Benchmarks|Benchmarks]] · [[05 - Pesquisa/Revisão v0.11–v0.12|Revisão v0.11–v0.12]] · [[05 - Pesquisa/Crítica de interface — jornadas v0.12|Crítica de interface]]

## Em movimento

```dataview
TABLE WITHOUT ID file.link AS "Nota", area AS "Área", status AS "Status", nivel_evidencia AS "Evidência"
FROM "02 - Hipóteses"
WHERE contains(list("backlog", "em-análise", "pronta", "em-teste"), status)
SORT status ASC, file.name ASC
```

## Agora

- v0.13.0 publicada (Mac e Windows): o primeiro instalador que soma as quatro linhas (pessoa e versões, infraestrutura, colaboração, GitHub por padrão) mais as 0.10.x que tinham ficado fora. *Entrar com GitHub* só aparece no instalador quando a variável `TRUNKPAD_GITHUB_CLIENT_ID` existe no repositório; até lá, o token. Próximo: respostas a D1, D2 e D6 da revisão; depois a linha de interface reaplicada e o crítico.
- Revisão grande de 21/10 em [[05 - Pesquisa/Revisão v0.11–v0.12|Revisão v0.11–v0.12]]: a v0.11.0 não contém a v0.10.1 nem a v0.10.2; a main (0.12.0) soma quatro linhas e duas ainda estão fora; colaboração, login, conexão com o repositório e Claude Code avaliados, com seis decisões a tomar.
- v0.11.0 publicada (Mac e Windows): as duas linhas viraram um app só. Instale, libere a primeira abertura em Ajustes do Sistema → Privacidade e Segurança → *Abrir mesmo assim*, diga quem você é e escolha o motor em Configurações → IA (*Claude Code*, o seu `claude` logado, ou uma chave de API); o token do GitHub fica em Configurações → GitHub. Abra o `product-planning`; mude status e repontue ICE pelas Propriedades. Todo incômodo vira linha em [[05 - Pesquisa/Feedback de uso|Feedback de uso]].
- Próximo bloco: uma semana de uso real; depois slides na revisão, custo por rascunho e regras do espaço — ver [[04 - Roadmap/Roadmap|Roadmap]].
