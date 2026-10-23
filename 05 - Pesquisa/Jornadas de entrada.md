---
tags: [nanquim/pesquisa]
status: ativo
data: 2026-10-22
---

# Jornadas de entrada: cliente novo, cliente com Google Drive, colegas criados com IA

Pedido do André (22/10): "fazer a jornada de clientes novos e clientes que já têm repositório no Google… para criar os agentes, queria poder usar AI também. O harness deveria funcionar lá também."

**Premissa.** "Repositório no Google" = documentos no Google Drive (Docs, Sheets, Slides). Se a intenção era GitHub, a jornada já existe (*Clonar do GitHub*, *Espaços do seu time*, link de convite) e o que falta é a identidade pela conta (D2 da [[05 - Pesquisa/Revisão v0.11–v0.12|revisão]]).

## O que existe hoje

| Jornada | Como é | Onde falha |
|---|---|---|
| Cliente novo | Pessoa (nome e e-mail) → boas-vindas (espaço de testes, abrir pasta, modelo, exemplo) → "Quem vai pensar?" → conversa. Os modelos trazem pastas, um brief a preencher, seis colegas e o roteiro `setup` (entrevista que escreve o brief). | Três diálogos em três telas (crítica de interface); nada liga o GitHub; colegas só por formulário. |
| Cliente com GitHub | *Clonar do GitHub*, *Espaços do seu time*, link `trunkpad://join`. Colegas em `.claude/agents` aparecem sozinhos. | Identidade digitada (D2); link de convite provavelmente não abre no Mac empacotado. |
| Cliente com Google Drive | Nada. | Tudo. |
| Criar colega | Formulário: nome, id, descrição, tom, figura. Grava um prompt genérico de duas linhas. | Nenhuma IA; o colega nasce sem instrução de verdade e podendo escrever em tudo. |
| Harness | Conversas passavam pelo motor; edição no documento, combinar conflito, sugestão de nome e consultar colega chamavam o modelo por fora. | Com o Claude Code e sem chave de API, esses quatro quebravam. **Corrigido em 22/10** (todas as chamadas passam pelo motor). |

## O que os benchmarks ensinam

- **Criar agente virou conversa.** O Claude Code removeu o assistente `/agents` na 2.1.198: "peça ao Claude para criar ou gerenciar subagentes, ou edite `.claude/agents/`" (changelog oficial, conferido). Microsoft 365 Agent Builder, Notion e o *skill-creator* da Anthropic também criam conversando.
- **Descrição curta → formulário revisável** é o outro padrão (Copilot Studio; o antigo assistente do Claude Code). Rápido, mostra todos os campos.
- **Testar antes de confiar.** M365, Gemini e Notion têm um painel de teste; o *skill-creator* roda duas ou três tarefas de exemplo.
- **Ferramentas por escolha, padrão restrito.** A armadilha do antigo assistente do Claude Code era herdar todas as ferramentas.
- **Para documentos de fora, duas portas claras:** copiar para o espaço (editável, versionado) ou ler no lugar (conector). Importações perdem comentários e formatação; sincronização exige administrador do Google e atrasa horas.
- **Google cobra caro pela leitura ampla.** `drive.readonly` é escopo restrito: verificação de semanas e avaliação de segurança anual. `drive.file` com o seletor do Google é escopo comum, mas o Google não documenta se escolher uma *pasta* dá acesso aos arquivos dentro dela. O Drive para computador guarda Docs como atalhos `.gdoc` sem conteúdo, e git dentro de pasta sincronizada corrompe.

## Opções

### Colegas com IA (todas pelo harness)

| | Como é | A favor | Contra |
|---|---|---|---|
| **A. Descrever e gerar** | No formulário, um campo "Descreva o colega"; o motor escolhido devolve nome, descrição, tom, instruções, se escreve e onde; o formulário se preenche para revisar. | Rápido, tudo visível, cabe na tela atual. | Uma tacada só; sem conversa para afinar. |
| **B. Criar conversando** | Um roteiro `novo-colega` que vem com o app: o assistente entrevista (papel, o que lê, o que entrega, onde escreve, quem revisa), grava `.claude/agents/<id>.md` no rascunho e você aprova como qualquer mudança. | É o caminho do próprio Claude Code hoje; o mesmo arquivo serve no terminal; afina em várias voltas. | Mais lento para quem só quer um colega simples. |
| **C. As duas** | O formulário ganha "Gerar a partir de uma descrição" e "Criar conversando". Depois de criado, "Testar" abre um pedido `@colega` com uma tarefa de exemplo. | Cobre os dois perfis; teste antes de confiar. | Duas portas para explicar. |

**Recomendação: C.** As duas portas chegam ao mesmo arquivo e passam pelo mesmo motor. Padrão restrito: o colega gerado só escreve se a descrição pedir, e só nas pastas que ela citar.

### Cliente com Google Drive

| | Como é | Configuração do Google | Construir | Risco |
|---|---|---|---|---|
| **A. Trazer o .zip do Drive** | No Drive: pasta → *Fazer download*. No Nanquim: *Trazer do Google Drive* → escolher o(s) .zip → novo espaço em `~/Trunkpad`, primeira versão, e cópias em Markdown dos documentos para o assistente ler e editar. | Nenhuma. | Pequeno (JSZip e conversores já estão no app). | Baixo. Comportamento do .zip do Drive a confirmar com uma pasta real. |
| **B. Entrar com Google e escolher a pasta** | Consentimento e seletor do Google no navegador; importação única pela API (Docs em Markdown, Sheets em .xlsx). | Cliente OAuth, tela de consentimento; se `drive.file` não cobrir pastas, escopo restrito com verificação e avaliação anual. | Médio. | A pergunta da pasta e o prazo de verificação. |
| **C. Drive como fonte de leitura** | Conector: o assistente lê no Drive sob demanda, nada é copiado. | Servidor MCP oficial do Google, ainda em prévia para desenvolvedores. | Pequeno quando sair da prévia. | Depende do Google. |
| **D. Sincronização contínua** | O Drive vira espelho do espaço. | Como B, com tokens que não expiram. | Grande. | Duas fontes de verdade por desenho. |

**Recomendação: A agora;** um dia de teste de B com `drive.file` antes de decidir B; C quando o Google tirar o servidor da prévia; D não.

### Cliente novo (o fluxo de primeiro uso)

| | Como é |
|---|---|
| **A. Portas de hoje + duas novas** | Boas-vindas ganha *Trazer do Google Drive*; o Time ganha *Gerar* e *Criar conversando*. |
| **B. Fluxo guiado** | Depois da identidade: "De onde vêm seus documentos?" (do zero com um modelo · Google Drive · GitHub · uma pasta) → "Quem vai pensar?" → "Monte o time" (o assistente sugere colegas a partir do que existe) → uma tarefa real. |
| **C. Tudo na conversa** | Abre um espaço vazio e o assistente conduz: estrutura, brief e colegas, pelo roteiro `setup` ampliado. |

**Recomendação: B como desenho, com C por baixo.** "Monte o time" é uma conversa pelo harness (`setup` + `novo-colega`). A tela do fluxo guiado é da sessão de interface; nesta sessão saem os serviços e as portas mínimas (A), para a jornada já funcionar de ponta a ponta.

## Crítica

O crítico de interface leu as opções com as capturas da main: **aprova com ajustes**. O que mudou por causa dele:

- O formulário de colega começa pela pergunta "O que esse colega vai fazer?", com *Gerar com o assistente*, *Criar conversando* e *Preencher à mão*; o colega gerado traz um **pedido para testar**; pastas citadas que não existem aparecem como aviso e o colega fica só lendo; as pastas valem até três níveis.
- `setup` passa a vir com o app (como `novo-colega`) e aparece como cartão "Montar o espaço e o time" em todo espaço sem `TRUNKPAD.md`; os exemplos da conversa deixam de citar arquivos do espaço de exemplo.
- Drive: originais em *Originais do Google Drive*, imagens extraídas para `Imagens/<documento>/`, limite de 50 MB, detecção de partes, resumo de "o que veio / o que não veio igual" com *Configurar com o assistente*, "cópia única" dito no diálogo, a primeira versão com mensagem em pt-BR. Textos do diálogo seguem os dele.
- Bloqueio que fica para a interface: a revisão do colega como **ficha** (mesma grade do perfil), não YAML — é o que falta para o caminho *Criar conversando* ficar bom de aprovar.

## Entregue em 22/10 (main, próxima versão)

| O quê | Como |
|---|---|
| Harness em tudo | `AgentEngine.complete`: edição no documento, combinar conflito, título de versão e consultar colega passam pelo motor escolhido; com Claude Code e sem chave, funcionam. |
| Colegas com IA | *Gerar com o assistente* (o motor devolve a ficha para revisar, nada é gravado antes de *Criar colega*); *Criar conversando* (roteiro `novo-colega`, entrega `.claude/agents/<id>.md` num rascunho); só leitura por padrão. |
| Cliente novo | Cartão "Montar o espaço e o time" (roteiro `setup` do app): lê o que existe, entrevista, propõe brief, glossário e até três colegas com pedido de teste. |
| Cliente com Google Drive | Porta *Trazer do Google Drive* nas boas-vindas: acha o download em *Downloads* (ou escolher/arrastar os .zip), nomeia partes faltando, converte Docs em páginas, guarda o resto como veio, primeira versão assinada pela pessoa, resumo e *Configurar com o assistente* (espera o onboarding sair da frente). |

Verificação: 254 testes, typecheck, lint, build e os smokes de harness, interface e assistente; o de interface percorre a porta do Drive até a conversa de `setup` começar, no Claude Code simulado.

## A conferir com uma pasta real do Drive

- Se o .docx exportado traz os comentários (o resumo diz que ficaram no Docs e no original) e como as sugestões pendentes chegam (hoje: entram no texto).
- Nome e tamanho das partes do .zip (o app espera `<pasta>-<AAAAMMDDTHHMMSSZ>-<NNN>.zip`).
- Se formulários e atalhos realmente ficam de fora do download.
- Um dia de teste da opção B com `drive.file`: escolher uma pasta no seletor do Google dá acesso aos arquivos dentro dela?

## Fica com a sessão de interface

O fluxo guiado (opção B do cliente novo, "De onde vêm seus documentos?"), a ficha do colega na revisão, o erro cru do GitHub nas boas-vindas (vira uma linha com *Entrar com GitHub*), estados desativados com motivo quando não há IA, progresso determinado e *Cancelar* na importação do Drive, grade das boas-vindas em duas colunas abaixo de ~900 px e contraste no modo escuro.
