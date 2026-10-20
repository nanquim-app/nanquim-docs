---
status: em-teste
area: [agente, time]
nivel_evidencia: evidência
impacto_estimado: "provisório: alcance = espaços que precisam de dado externo (Metabase, Postgres, Drive, Slack); efeito sobre ativação, chute"
esforço: "feito em v0.5.0 (3 pessoas-semana, assistente): catálogo curado, OAuth no navegador, acesso Lê / Lê e altera por conector, chave no chaveiro de cada pessoa"
ice_impacto: 5
ice_confianca: 3
ice_facilidade: 9
impacto_real:
analises: []
bloqueada_por: []
proxima_acao: "uma pessoa não técnica conecta o Postgres (ou o Notion) pela galeria no product-planning e roda uma pergunta com dado real; cronometrar e anotar em Feedback de uso"
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

## Estado em v0.5.0

- Galeria em Configurações → Conectores com catálogo curado (Notion, Linear, Jira/Confluence, HubSpot, Intercom, Asana entrando com a conta; GitHub e Zapier com chave; Slack, Postgres, busca e páginas da web no computador). ADR-009 no app; decisões D-020 a D-022.
- Metabase e Customer.io não têm servidor MCP do fornecedor: continuam pelos repositórios irmãos (`mecani-metabase`, `mecani-cio`) ou por "Avançado: outro conector…" quando existir um servidor.
- Não exercitado ao vivo: OAuth real e servidor hospedado real (sem conta de fornecedor na sessão). O primeiro uso é o teste.

