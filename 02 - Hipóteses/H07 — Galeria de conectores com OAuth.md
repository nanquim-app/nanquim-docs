---
status: backlog
area: [agente, time]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = espaços que precisam de dado externo (Metabase, Postgres, Drive, Slack); efeito sobre ativação, chute"
esforço: "4–6 pessoas-semana (assistente): galeria, OAuth no app, política por espaço (permitir, perguntar, bloquear), conectores compartilhados pelo repositório"
ice_impacto: 5
ice_confianca: 3
ice_facilidade: 3
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "listar os servidores MCP oficiais ou mantidos que cobrem as fontes do product-planning (Metabase, Postgres, Customer.io) e testar cada um pelo connectors.json atual"
tags: [trunkpad/hipotese]
---

## Sinal

- Hoje conectores são JSON em `.trunkpad/connectors.json`; só quem programa configura.
- Pergunta do fundador em 2026-10-20: "teríamos que construir cada um deles?". Resposta registrada em [[03 - Decisões/Decisões#D-007|D-007]]: não; MCP é padrão aberto e os fornecedores publicam os servidores.
- O `product-planning` já depende de duas fontes externas via repositórios irmãos (`mecani-metabase`, `mecani-cio`).

## Mecanismo

Conectar uma fonte em minutos, sem JSON, com OAuth dentro do app, tira a dependência de engenharia para o time de negócio usar dado real. Conector adicionado por um aparece para todos via configuração no repositório.

## Impacto esperado

Ativação e uso por perfis não técnicos ([[01 - Base/Usuários|Usuários]]). Efeito: chute.

## Como validar

- Confirma: uma pessoa não técnica conecta o Metabase e roda uma pergunta com dado real em menos de dez minutos, sem ajuda.
- Refuta: os servidores disponíveis não cobrem as fontes que importam, ou OAuth no desktop se mostra frágil; nesse caso, priorizar scripts permitidos com interface.
