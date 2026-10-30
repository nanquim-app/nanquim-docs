---
status: rascunho
hipoteses: ["[[H01 — Conversa como visão principal, arquivos no palco]]"]
area: [interface]
tags: [nanquim/proposta]
---

## Problema

O fundador, usando o app em 28/10 ([[05 - Pesquisa/Feedback de uso|Feedback de uso]]): "não estou certo sobre esse modelo de ter chat + arquivos, porque parece que dá uma quebrada no modelo de trabalho", e "por que às vezes o chat fica na direita e às vezes na esquerda?". O que ele quer, nas palavras dele: às vezes o arquivo em tela cheia, às vezes o chat em tela cheia, às vezes os dois.

Hoje a tela tem duas visões (D-044). Em **Pedidos** a conversa é a coluna principal e o que ela abre aparece ao lado; em **Arquivos** o arquivo é o principal e um botão traz o pedido do outro lado. O lado da conversa depende da visão em que a pessoa está, e "os dois" existe nas duas visões com arranjos diferentes. A D-012 rejeitou de propósito três posições fixas; este é o primeiro sinal de uso contra ela e contra a [[H01 — Conversa como visão principal, arquivos no palco|H01]], em teste desde 20/10 sem nenhum outro registro.

Desde a D-048 o centro do produto é a fonte única da verdade, não a IA: a conversa é um jeito de trabalhar no material, não a tela principal.

## Racional

Três opções:

- **A. Um controle de três estados, em todo lugar: Arquivo · Os dois · Pedido.** "Pedido" é o nome que a interface já usa para a conversa (D-044). A conversa fica sempre à direita e o arquivo sempre à esquerda, depois da árvore de pastas, que recolhe nos três estados e nunca some.
  - **Quem muda o estado é a pessoa.** O assistente nunca troca a tela sozinho. Em "Arquivo", o que ele produz aparece como aviso no pedido recolhido, sem troca forçada.
  - **Transições:** abrir um arquivo a partir do pedido leva de "Pedido" para "Os dois". Passar um comentário ao `@assistente` também leva para "Os dois". Fechar o último arquivo mantém o estado: em "Arquivo" aparece um estado vazio com a árvore e os arquivos recentes; volta para "Pedido" só se a pessoa veio de lá.
  - **Abertura:** o espaço abre no último estado usado nele. Sem assistente configurado, "Pedido" mostra um estado vazio que ensina a configurar.
  - **Divisória:** em "Os dois" ela se arrasta, a largura fica guardada por espaço e o duplo clique volta à largura padrão.
  - **Teclado:** três atalhos diretos, um por estado, sem conflito com os que já existem para Time e Rotinas. O foco vai para a caixa de texto em "Pedido", para onde o cursor estava em "Arquivo" e fica onde estava em "Os dois".
- **B. Manter Pedidos e Arquivos (D-044) e só fixar o lado da conversa.** Resolve o lado trocado, mas mantém dois jeitos de ver "os dois" e não dá o arquivo em tela cheia a partir de Pedidos.
- **C. Conversa flutuante sobre o arquivo**, que abre e fecha por cima. Já rejeitada na D-004: cobre o conteúdo que está sendo revisado.

**Recomendada: A.** É a única que dá os três desejos com um controle só, e põe o material antes da conversa na ordem de leitura, coerente com a D-048. Revoga a D-012 e, em parte, a D-044.

**Crítica de A** (crítico de interface, 28/10: aprova com ajustes; o bloqueio e os ajustes já estão no texto acima):

- **O lado direito é opinião, não evidência do espaço.** Os Benchmarks não registram o lado da conversa. Pelo conhecimento de mercado do crítico, quem põe o material primeiro deixa o assistente à direita (Cursor, Notion AI, Gemini no Google Docs). Quem põe o chat primeiro deixa a conversa à esquerda (Claude Desktop, nossa referência da H01). A D-048 nos põe no primeiro grupo. A confirmar no uso; nenhum dos exemplos foi conferido nesta sessão.
- **Janela estreita.** Abaixo de uma largura mínima, "Os dois" fica à vista, mas desabilitado, com a explicação ao passar o mouse, e o controle alterna entre Arquivo e Pedido. Quando a janela alarga, volta a "Os dois". A largura mínima soma a coluna de leitura, o pedido e a árvore recolhida. Os 880 px de hoje são o ponto de partida, mas é chute: medir no notebook do fundador.
- **Time, Conexões, Rotinas e a página do Espaço** continuam em largura total, como na D-044. O controle fica visível no mesmo lugar, e clicar nele sai dessas telas.
- **Os três modos de ver o arquivo e o "Manter aberto"** (o outro ponto de 28/10) ficam fora desta proposta: são a barra do arquivo, não a divisão da tela. Direção do crítico, sem ver o app: Rico como único modo padrão, Texto num menu secundário, Visualizar só para páginas HTML, e "Manter aberto" substituído pela aba que fica fixa ao editar. Vira uma proposta própria, porque mexe na [[H10 — Sintaxe do Obsidian no modo Rico|H10]].

## Acionáveis

Enquanto a proposta não for aprovada, isto é o plano; vira tarefa na aprovação.

- [x] Revisão do crítico de interface sobre o lado, a janela estreita e o controle — crítico de interface, 28/10
- [ ] Revisão do head-of-product para passar a em-revisão — André
- [ ] Decisão que revoga a D-012 e, em parte, a D-044, depois da aprovação — André
- [ ] Controle de três estados no alto, conversa à direita, transições, estados vazios, divisória e três atalhos — sessão do app
- [ ] Medir a largura mínima de "Os dois" no notebook do fundador — André
- [x] "Pedido" no Glossário — head-of-product, 30/10
- [ ] Proposta própria para os modos de ver o arquivo e o "Manter aberto" — André
- [ ] Rever a H01: repontuar ou trocar o enunciado para "três estados com a conversa fixa" — André

## Como medir sucesso

As métricas de [[01 - Base/Métricas|Métricas]] ainda não estão medidas, então o primeiro sinal é de uso:

- **Confirma:** duas semanas de uso neste espaço e no `product-planning` sem nenhuma linha no Feedback de uso sobre lado trocado, falta de tela cheia ou "precisei procurar onde está a conversa".
- **Refuta:** linhas pedindo a conversa na esquerda, ou "Os dois" pouco usado porque a pessoa vive alternando.
- **Guardrail:** abrir o que o assistente mudou e revisar continua a um clique a partir da conversa (Princípio 2).
- **Quando houver medição:** Rodadas revisadas e Tempo até revisar não pioram em relação às duas semanas anteriores.
