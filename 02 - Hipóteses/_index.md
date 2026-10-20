# Hipóteses

```dataview
TABLE WITHOUT ID file.link AS "Hipótese", area AS "Área", status AS "Status", nivel_evidencia AS "Evidência", ice_impacto AS "I", ice_confianca AS "C", ice_facilidade AS "F", ice_impacto * ice_confianca * ice_facilidade AS "ICE"
FROM "02 - Hipóteses"
WHERE file.name != "_index"
SORT ice_impacto * ice_confianca * ice_facilidade DESC, file.name ASC
```

Sem Dataview, rode o script `hipoteses` (o assistente faz isso com "liste as hipóteses").
