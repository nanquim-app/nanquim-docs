---
tags: [nanquim/pesquisa]
status: ativo
---

# Posicionamento — reflexão de novembro

Reflexão de 07/11/2026 sobre o que o Nanquim é, para quem, e o que o software deveria implementar a seguir. Nada aqui é decisão: as recomendações viram hipótese, proposta ou decisão só depois de o André escolher.

## Os sinais

Todos registrados em [[05 - Pesquisa/Feedback de uso|Feedback de uso]] em 07/11.

1. **Um PM de fora não usa.** Lidera times de engenharia, programava, já montou um roadmap próprio com Obsidian e Claude Code e constrói telas com o Claude Code. Disse: "Pô, eu já tô tão acostumado com o Claude App, que acabo não usando." É um relato, de uma pessoa só.
2. **O próprio fundador pensou fora.** Esta reflexão começou no app do Claude, não no Nanquim, porque não ficou claro como o Nanquim ajudaria rápido numa conversa de pensar.
3. **Configurar por formulário atrita.** Criar um fluxo pelo editor de passos é trabalho; o pedido é que o Nanquim sugira o fluxo ou que se crie um descrevendo em texto.
4. **A navegação ainda confunde.** A barra do alto tem só a busca; em *Sua mesa*, o fundador "fica extremamente confuso sobre o que deveria fazer e como fazer".
5. **O medo do "AI grenade":** com a IA produzindo texto demais, as pessoas param de ler, e um produto cujo centro é revisar perde o sentido.

## O diagnóstico

**O concorrente é o hábito, não outro produto.** Abrir o app do Claude e digitar custa zero: não tem espaço, rascunho, arquivo nem aprovação. Toda vez que o Nanquim pede a mesma coisa que o app do Claude (uma conversa), ele perde, porque pede mais e entrega parecido. Os sinais 1 e 2 são o mesmo fenômeno.

**O Nanquim ganha em outro momento:** quando o que se pensou precisa virar algo que o time vai usar, revisar e de que vai lembrar. Pensar (divergir) acontece bem num chat; registrar, combinar e decidir (convergir) não. O Nanquim hoje não se apresenta para esse momento: abre como um lugar para conversar com arquivos ao lado.

**O PM do sinal 1 é o pior público para o primeiro teste.** Ele já resolveu o problema sozinho, com as mesmas peças (Obsidian, Claude Code, git). Para ele o Nanquim é troca de ferramenta, não ganho. O curioso é que esse perfil é o primeiro da lista em [[01 - Base/Visão e tese#Para quem|Visão e tese]] ("fundadores, PMs e analistas que já vivem em Obsidian, Notion ou Claude Desktop"), enquanto a marca diz que o público principal são pessoas de negócio que não são de tecnologia. O sinal sugere que a marca está certa e a Visão e tese, errada nesse ponto. Uma pessoa não prova isso; as conversas do beta ([[06 - Propostas/P02 — Critério de pronto para o beta|P02]]) precisam testar.

## Três posicionamentos convivendo

Hoje o Nanquim se descreve de três jeitos, cada um com um centro diferente:

| Onde | Frase | O centro |
|---|---|---|
| [[01 - Base/Visão e tese\|Visão e tese]] (D-048) | "a fonte única da verdade da empresa", que reúne as fontes | as **fontes** reunidas |
| Marca, Posicionamento e voz | "Seu time de IA faz. Você aprova." | o **time de IA** e a aprovação |
| Site e apresentação | "Your team and AI edit your files, not ours." | a **posse dos arquivos** |

Três centros viram três produtos na tela: Conexões (fontes), Agentes, Fluxos e Rotinas (time de IA), Arquivos e Histórico (posse), mais Pedidos e Sua mesa. É parte do porquê de a navegação confundir: cada item do menu serve a uma frase diferente.

O que as três têm em comum é o **portão**: nada vale até alguém aprovar, com o que mudou à vista e desfazer. Pelos benchmarks abaixo, é também o único ponto em que o Nanquim ainda é diferente. A recomendação parte dele.

## O que os quatro benchmarks mostram

Sites lidos em 07/11/2026 (página inicial e uma ou duas internas de cada). O que segue é o que eles afirmam; nada foi testado.

| | O que é | Centro | Como o resultado chega |
|---|---|---|---|
| **Jedify** | Camada de contexto corporativo para agentes de dados ("AI that understands your business") | as fontes, reunidas num grafo | no app e em ações nos sistemas, depois de aprovadas |
| **Uvi** | "Map of Work": como o trabalho da empresa acontece, para agentes agirem ("AI that doesn't know your company can't run it") | as regras de cada processo | nos sistemas do cliente, depois de aprovadas; canal de aviso não descrito |
| **Cabinet** | App de Mac com a base de conhecimento em Markdown e git, um time de agentes, painéis em HTML, a IA da própria empresa ("The AI workspace your company owns") | os arquivos e o time de IA | no app; e-mail só depois de aprovação |
| **Letter** | Agente de growth que lê o site e o mercado, decide o que deve existir e abre a mudança para aprovar ("Autonomous pull requests to grow your website") | o resultado (o site crescer) | prévia ao vivo e pedido de aprovação; relatórios e conversa no Slack |

Quatro leituras:

1. **Concentrar as fontes é o jogo da Jedify e da Uvi.** Os dois vendem para empresa grande, com piloto, segurança certificada e venda para TI; a Jedify anuncia uma rodada de US$ 24 milhões (afirmação do site, não conferida). É a versão "fonte única da verdade" levada a sério, e mostra o tamanho do investimento que ela pede.
2. **A Cabinet é quase o Nanquim.** App de Mac, arquivos em Markdown com git, time de agentes, a IA da própria empresa, ~50 integrações na vitrine, de graça para rodar no próprio computador. Se o Nanquim se posicionar como "seus arquivos, seu time de IA", disputa com ela de frente. A diferença que sobra: na Cabinet cada salvamento entra direto no histórico e a aprovação é só para ações fora (mandar e-mail, chamar um sistema); no Nanquim nenhuma mudança vale antes de alguém aprovar, e a tela fala a língua do negócio.
3. **O Letter escolheu um trabalho, não uma ferramenta.** Não vende "um espaço": vende "seu site cresce". O agente não espera pedido: lê, decide o que deveria existir e propõe (modos Planejar, Construir, Corrigir). A aprovação é o mesmo portão do Nanquim, aplicado a um resultado que dá para medir.
4. **O Letter vai aonde o time está.** Responde a menções no Slack e devolve o relatório na conversa ("Want me to kick off any of these?"); oferece as mesmas ferramentas ao Claude Code e a qualquer agente por conector padrão; publica uma página de instruções para que o agente da pessoa configure o Letter por ela. Ou seja: não disputa a conversa com o app do Claude, se pluga nele.

Detalhe do Letter e o que levar dele em [[05 - Pesquisa/Letter/Letter — o que aprender|Letter — o que aprender]].

## As perguntas, uma a uma

### O conteúdo dentro da plataforma basta?

Não, se "dentro" quer dizer que a pessoa precisa vir ao app para ver. O trabalho aprovado precisa chegar onde o time já está (Slack, e-mail, o Drive), e o pedido de aprovação também. Basta, se "dentro" quer dizer onde o registro mora: a fonte da verdade pode ser o espaço, desde que ninguém precise abrir o app para saber que algo mudou. Hoje o fluxo já reconhece a lacuna: o passo de uma pessoa espera o app de quem rodou estar aberto e "falta avisar por e-mail ou Slack" (estratégia 16 do app, seção Fluxos).

### Investir em integrações?

Separar dois tipos, porque têm respostas opostas:

- **Integrações de entrada** (ler Drive, Slack, Notion, Metabase para dar contexto): não construir. A D-007 já decide que entra por conector padrão, e a galeria existe. Virar "o lugar que concentra tudo" é o jogo dos produtos de contexto corporativo, que pedem dezenas de conectores mantidos, permissões por pessoa e venda para TI. É caro, lotado e longe do que diferencia o Nanquim. Concentrar informação, por si, não é o valor: o valor é a informação revisada.
- **Integrações de saída** (avisar, pedir aprovação, entregar o resumo do que foi aprovado): investir pouco e cedo. É o que faz o produto valer para quem não abre o app, que é a maior parte de um time. Uma só bem feita (Slack ou e-mail) vale mais que dez conectores de leitura.
- **Uma terceira, a mais estratégica: deixar o app do Claude escrever no Nanquim.** Em vez de disputar a conversa com o app do Claude, aceitar que ela acontece lá e oferecer o espaço como destino: do app do Claude, "salva isso como proposta no Nanquim" cria um rascunho que o time revisa. O hábito do PM do sinal 1 vira canal de entrada em vez de concorrente. É o que o Letter faz ao dar ao Claude Code e a outros agentes as mesmas ferramentas do app. Hoje o Nanquim se oferece ao Claude Code de dentro do app, mas não ao app do Claude por fora (conferido no código do app em 07/11). Esforço e viabilidade técnica não foram avaliados.

### O "AI grenade"

O medo é real e é o melhor argumento a favor do Nanquim, desde que o produto não vire parte do problema. Num mundo em que a IA escreve demais, o portão ("só vale o que alguém leu e aprovou") fica mais valioso, não menos. Mas só funciona se aprovar for leve. Três consequências práticas:

- **Revisar é ler o que mudou, não o documento.** O app já mostra a comparação; falta a frase de cima: o que mudou e por quê, em três linhas. As últimas mudanças do app (título e descrição da proposta escritos a partir do que mudou) vão nessa direção.
- **O rascunho pequeno é a regra.** Um pedido que mexe em 40 arquivos não é revisável; o agente deveria dividir ou avisar.
- **Medir se a aprovação virou carimbo.** [[01 - Base/Métricas|Métricas]] já tem "Tempo até revisar" e "Desfazer"; falta olhar o tamanho do que é aprovado. Aprovação em segundos de algo grande é sinal de que ninguém leu.

### Agentes em vez de formulários

Concordo, e o caminho já existe pela metade: o assistente sabe criar colegas, fluxos e rotinas por conversa, mas a interface oferece formulários e não sugere nada. A regra que proponho: **tudo que se configura se pede em texto, e o resultado chega como rascunho para aprovar**. E o passo seguinte, mais valioso: o assistente percebe repetição ("é a terceira vez que você pede a revisão do crítico depois de escrever uma proposta") e sugere o fluxo ou a rotina. O formulário fica para ajustar, não para criar. É o que o Letter faz no modo Corrigir: o agente acha o que falta e já traz a mudança pronta para aprovar.

### Por que esta conversa aconteceu fora

Porque o Nanquim não tem uma porta para "pensar junto sem compromisso". Toda entrada leva a pedido, rascunho e arquivo. Duas respostas possíveis, que não se excluem:

- **Ter a porta:** a barra do alto vira "Pergunte ou peça", que responde com o contexto do espaço sem abrir rascunho. Se a conversa render, um botão "transformar em nota, hipótese ou proposta" leva o resultado para o espaço.
- **Não ter a porta, e receber de fora:** a integração com o app do Claude descrita acima.

Esta própria nota é o exemplo do momento em que o Nanquim ganha: a reflexão começou num chat e só aqui virou registro, cruzada com decisões, hipóteses e feedback.

### A barra do alto e Sua mesa

- **Barra do alto:** hoje é uma busca que abre a paleta. Proposta: a mesma barra serve para buscar, perguntar ao espaço e pedir, com a resposta curta logo abaixo, sem trocar de tela. É a porta do item anterior.
- **Sua mesa:** junta conversas esperando, tarefas, propostas e rascunhos, e por isso não responde a pergunta que a pessoa traz ao abrir: "o que eu faço agora?". Proposta: a mesa mostra uma coisa por vez, a mais importante, com o botão do próximo passo (o padrão do dbt Cloud que já está em [[05 - Pesquisa/Benchmarks|Benchmarks]]), e o resto recolhido por baixo. O que não pede decisão da pessoa sai da mesa. Quando não há nada esperando, a mesa sugere o que fazer, como a tela inicial do Letter ("What should we build?", com ações sugeridas para o site da pessoa).

As duas são interface: viram proposta e passam pelo crítico de interface antes de qualquer construção.

## Recomendação

**Posicionar o Nanquim pelo portão, não pelas fontes nem pela conversa.** Em uma frase, para testar: *a IA rascunha onde quiser; no Nanquim o time decide o que vale.* As fontes reunidas (D-048) continuam como consequência (o que foi aprovado é a fonte da verdade), não como promessa de concentrar tudo.

Isso pede revisar a D-048, que diz que o centro é a fonte única da verdade. Não proponho revogar agora: proponho levar as duas frases às conversas do beta e decidir com o que ouvirmos.

Uma pergunta que fica aberta, puxada pelo Letter: **o Nanquim deveria escolher um trabalho** (por exemplo, "o planejamento de produto do time", que é o que este espaço faz) em vez de ser um espaço para qualquer trabalho? Um trabalho dá ao agente o que propor sem esperar pedido e dá à pessoa um resultado para medir. O custo é estreitar o mercado no começo. Não recomendo decidir antes das conversas do beta, mas recomendo perguntar nelas qual trabalho a pessoa entregaria primeiro.

O que isso muda no que construir, em ordem:

1. **Sua mesa responde "o que faço agora"**, e a barra do alto vira "Pergunte ou peça". Barato, e resolve o atrito do próprio fundador.
2. **Configurar pedindo**: fluxos, colegas e rotinas criados por texto e sugeridos pelo assistente quando ele percebe repetição.
3. **Saída antes de entrada**: aviso e aprovação por Slack ou e-mail antes de qualquer conector novo de leitura.
4. **O Nanquim como destino do app do Claude**, depois de avaliar a viabilidade.

O que fica de fora: virar agregador de fontes; competir com o app do Claude como lugar de conversa; mais telas de configuração.

## Como validar

Nas conversas de descoberta da [[06 - Propostas/P02 — Critério de pronto para o beta|P02]], com o público da marca (pessoas de negócio que não programam), não com quem já montou o próprio sistema:

- Mostrar as duas frases (fonte única da verdade e o portão) e ouvir qual a pessoa repete com as próprias palavras.
- Perguntar o que acontece hoje entre "pedi para a IA" e "o time usou": quem lê, quem aprova, onde fica. Se a resposta for "ninguém, vai direto", o portão é dor real; se for "não preciso disso", não é.
- Perguntar onde a pessoa quer saber que algo espera por ela (app, Slack, e-mail).

O que precisaria ser medido e ainda não é: tempo até revisar e tamanho do que é aprovado, por espaço ([[01 - Base/Métricas|Métricas]]).
