---
status: rascunho
hipoteses: ["[[H07 — Galeria de conectores com OAuth]]", "[[H09 — Novidades do time dentro do app]]"]
area: [lançamento]
tags: [nanquim/proposta]
---

## Problema

O fundador quer lançar para usuários beta, e hoje nada diz quando estamos prontos, quem entra nem o que o beta precisa provar. O que está no caminho, pela revisão de 28/10:

- **Ninguém de fora foi ouvido.** [[01 - Base/Usuários|Usuários]] lista cinco perfis e diz que nenhum foi entrevistado; o posicionamento da D-048 ainda não foi testado com ninguém.
- **A última crítica de interface reprovou o app** ([[05 - Pesquisa/Crítica de interface — jornadas v0.12|Crítica de interface]], 21/10, versão 0.12). Não há registro de quais pontos foram resolvidos desde então.
- **Instalar pede contorno.** No Mac é preciso liberar a primeira abertura em Ajustes do Sistema, porque falta a assinatura da Apple ([[04 - Roadmap/Roadmap|Roadmap]]: aguardando a conta Apple Developer). O aviso de nova versão depende de um acesso ao GitHub que um usuário beta não terá ([[05 - Pesquisa/Feedback de uso|Feedback de uso]], 20/10 e 21/10).
- **Nada está medido.** [[01 - Base/Métricas|Métricas]] diz que nenhuma métrica foi instrumentada; um beta sem medir a ativação não valida nada.
- **Três decisões continuam abertas:** colaboração pelo GitHub, identidade pela conta do GitHub e vocabulário único (D1, D2 e D6 da [[05 - Pesquisa/Revisão v0.11–v0.12|Revisão v0.11–v0.12]]).

## Racional

Três opções:

- **A. Beta fechado, por time, com portão de entrada e critério de saída.** Poucos times convidados à mão, cada um com pelo menos duas pessoas, porque a tese (D-048) é time não técnico trabalhando junto; um usuário sozinho não testa isso.
- **B. Beta aberto, por link ou lista de espera.** Mais gente, mas com instalação por contorno e sem medição: o resultado seria ruído e a primeira impressão se perde.
- **C. Esperar tudo ficar pronto** (assinatura, métricas, interface, decisões). Atrasa o primeiro sinal de fora sem prazo, e o posicionamento continua sem teste.

**Recomendada: A.** É a única que testa a tese (time, fontes juntas, revisão) com o mínimo pronto. A crítica: escolher os times à mão enviesa a amostra para quem já confia no fundador; aceitamos porque o objetivo do beta é aprender, não estimar adoção.

**Quem entra:** times pequenos de negócio, sem engenharia por perto, que já têm o material espalhado em Drive, Notion e planilhas. Os perfis mais próximos em Usuários são o Líder de operação e o PM de growth, com um revisor. Quantidade: de 3 a 5 times. É chute: o suficiente para o fundador acompanhar de perto, a revisar depois das primeiras conversas.

**Pronto para convidar** (o portão de entrada):

1. Conversas de descoberta com pelo menos 3 pessoas do perfil, registradas neste espaço, testando a frase de posicionamento. O número é chute.
2. Nova crítica de interface na versão atual, sem "reprova".
3. Instalar e abrir no Mac sem passar por Ajustes do Sistema, ou seja, com a assinatura da Apple.
4. Saber de versão nova sem acesso ao GitHub, ou atualizar sozinho.
5. Ativação medida: script local que conta, por espaço, a primeira incorporação em 7 dias.
6. D1, D2 e D6 decididas e registradas em Decisões.
7. Entrada pelo Google Drive testada com uma pasta real, já que reunir as fontes é o centro da tese.

## Acionáveis

Enquanto a proposta não for aprovada, isto é o plano; vira tarefa na aprovação.

- [ ] Revisão do head-of-product e decisão sobre o critério — André
- [ ] Escolher os times candidatos e marcar as conversas de descoberta — André
- [ ] Nova rodada do crítico de interface na versão atual — André
- [ ] Assinatura e notarização no Mac (conta Apple Developer) — André
- [ ] Aviso de nova versão sem acesso ao GitHub — sessão do app
- [ ] Script de ativação a partir do histórico do espaço — sessão do app
- [ ] Responder D1, D2 e D6 — André
- [ ] Teste da entrada pelo Drive com uma pasta real — André

## Como medir sucesso

Métricas de [[01 - Base/Métricas|Métricas]], medidas pelo script local nos espaços do beta, por quatro semanas:

- **Ativação:** espaços com uma incorporação em 7 dias.
- **Time de verdade:** espaços com uma incorporação de um rascunho de outra pessoa (o momento 3 da jornada em Usuários).
- **Métrica primária:** incorporações por espaço ativo por semana.

**Seguir ou parar:** sem baseline, as metas são chute e devem ser escritas antes do primeiro convite. Ponto de partida para discutir: seguir se a maioria dos times ativar em 7 dias e pelo menos um tiver incorporação de outra pessoa; parar e rever o posicionamento se nenhum time passar do primeiro uso.
