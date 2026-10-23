---
name: Nova hipótese
description: Cria uma hipótese a partir de um sinal observado, no template e na numeração do espaço.
---

# Nova hipótese

1. Rode o script `hipoteses` para descobrir o próximo número `Hxx` (numeração única, nunca reutilizada).
2. Pergunte (ou extraia do pedido) o **sinal com fonte**. Sem sinal, a hipótese nasce com `nivel_evidencia: ideia` e sem notas ICE.
3. Crie `02 - Hipóteses/Hxx — Título.md` a partir de `99 - Templates/Hipótese.md`, preenchendo sinal → mecanismo → impacto esperado → como validar. Declare o que é chute.
4. Se o próximo passo depende de uma medição, escreva-a em `proxima_acao` e deixe `status: ideia` ou `backlog`.
5. Se a hipótese sustenta um item do roadmap, linke-a em `04 - Roadmap/Roadmap.md`.
6. Termine listando o que falta para a hipótese chegar a `pronta`.
