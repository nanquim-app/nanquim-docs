---
tags: [trunkpad/base]
status: proposto
---

# Métricas

Nenhuma destas métricas está instrumentada ainda. O app não envia telemetria; a primeira medição vai sair de git (checkpoints, incorporações) nos espaços em que usamos a ferramenta, com script local. Até lá, toda nota de Impacto no ICE é provisória.

## Métrica primária (proposta)

**Incorporações por espaço ativo por semana** — rascunhos (de pessoas ou do agente) que viraram Principal. É a unidade de valor do produto: trabalho revisado que entrou. Fonte: histórico do git (`Merged draft:` com trailer `Trunkpad-Draft`).

## KPIs de suporte

| Métrica | Definição operacional | Fonte | Por quê |
|---|---|---|---|
| Ativação | % de espaços novos com uma incorporação em 7 dias | git | Primeiro valor entregue |
| Rodadas revisadas | % de rodadas do agente com mudança que foram revisadas (incorporadas ou descartadas) em 24h | git + sessões | Mede se a revisão virou hábito ou gargalo |
| Tempo até revisar | mediana entre o fim da rodada e a incorporação | git + sessões | Fricção do fluxo de revisão |
| Desfazer | incorporações desfeitas / incorporações | git | Qualidade do que entra |
| Comentários resolvidos | comentários resolvidos / criados, e % com `@assistente` | `.trunkpad/comments.json` | Uso da revisão no documento |
| Edições inline aceitas | aceitas / (aceitas + rejeitadas) | a instrumentar | Qualidade do editar-no-documento |

## Priorização ICE

Mesmas réguas do `product-planning`, com o Impacto sobre a métrica primária:

| Nota | Impacto (`impacto_estimado`) | Confiança (`nivel_evidencia`) | Facilidade (`esforço`) |
|---|---|---|---|
| 1 | Δ < 0,5% | ideia | > 8 pessoas-semana |
| 3 | Δ 0,5–2% | evidência (conversa, benchmark citável, feedback com fonte) | 4–8 |
| 5 | Δ 2–5% | dados (medição nossa, com período e volume) | 2–4 |
| 7 | Δ 5–10% | experimento (piloto com controle) | 1–2 |
| 9 | Δ > 10% | validação (medido depois do lançamento) | < 1 |

Facilidade é o esforço do próximo passo de validação, não do produto completo.
