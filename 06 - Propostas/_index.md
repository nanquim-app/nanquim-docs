# Propostas

Uma proposta por nota, "Pxx — Título", no modelo de Proposta. Proposta é para melhoria que mexe em princípio, em interface ou em mais de uma hipótese; o que é só correção vai direto do [[05 - Pesquisa/Feedback de uso|Feedback de uso]] para o app. As tarefas são os acionáveis de cada proposta, uma por linha de checklist, com dono.

```dataview
TABLE WITHOUT ID file.link AS "Proposta", area AS "Área", status AS "Status", hipoteses AS "Hipóteses"
FROM "06 - Propostas"
WHERE file.name != "_index"
SORT status ASC, file.name ASC
```

## Tarefas abertas

```dataview
TASK
FROM "06 - Propostas"
WHERE !completed
GROUP BY file.link
```
