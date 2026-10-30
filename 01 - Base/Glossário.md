---
tags: [nanquim/base]
status: ativo
---

# Glossário

Vocabulário da interface e o que ele é por baixo. Novo termo de interface entra aqui antes de entrar no produto. As palavras do produto seguem o Vocabulário da marca (pasta Marca, Posicionamento e voz).

| Na interface | Por baixo | Nota |
|---|---|---|
| **Espaço** | repositório git local | Uma pasta de trabalho do time; um vault do Obsidian serve como está |
| **Sobre este espaço** | brief (`NANQUIM.md`) | O que o time precisa saber deste espaço |
| **Pedido** | sessão do agente | O que se pede ao time, numa conversa |
| **Colega de IA** | agente nomeado (`.nanquim/agents/<id>.md` ou `.claude/agents/<id>.md`) | Com nome, função, rosto e limites; é chamado com `@id`. Um revisor é um colega de IA que só lê |
| **Principal** | branch padrão (`main` ou `master`) | Detectado, nunca assumido |
| **Rascunho** | branch `draft/<slug>` | A proposta de mudança, à parte; único lugar onde o colega de IA escreve |
| **Versão** / **Guardar versão** | commit | Um momento guardado; mensagem sugerida pelo colega de IA |
| **Etapa** | commit `[checkpoint]` com `Co-authored-by` do agente | Escondida do histórico por padrão |
| **Aprovar** | merge `--no-ff` no Principal, com trailer `Nanquim-Draft` | Faz a proposta valer no espaço; antes, a pessoa revisa o que mudou, mostrado por formato |
| **Desfazer** (uma aprovação) | `revert -m 1` | Sempre disponível; aprovar de novo reverte o revert |
| **Histórico** | log | Todas as versões, com quem e quando |
| **Restaurar** | checkout da versão e commit novo | Volta a uma versão sem apagar as outras |
| **Trazer novidades** | fetch + merge | Conflitos resolvidos por arquivo |
| **Publicar** | push | |
| **Propor ao time** | pull request | Via GitHub |
| **Exigir rascunhos** | política em `.nanquim/config.json` | Bloqueia guardar direto no Principal |
| **Palco** | área de abas ao lado da conversa | Arquivos, diffs, revisão, aba Espaço |
| **Comentário** | thread em `.nanquim/comments.json` ancorada a um trecho | `@assistente` passa para a conversa |
| **Roteiro** | playbook: `SKILL.md` em `.nanquim/playbooks/` ou `.claude/skills/` | Instruções reutilizáveis para um tipo de trabalho; aparece com `/` na caixa de texto |
| **Script permitido** | entrada em `.nanquim/scripts.json` | Única forma de o colega de IA executar algo |
| **Conector** | servidor MCP em `.nanquim/connectors.json` | Ferramentas externas para o time |

## Proibidas na interface

- **Técnicas:** commit, branch, merge, rebase, stage, push, pull, repositório, prompt, token, LLM, modelo de linguagem, workspace, deploy. Exceções: "modelo" para o modelo de IA nas configurações avançadas e "GitHub" como nome de serviço.
- **Do vocabulário antigo:** agente e bot (é colega de IA), sessão (é pedido), incorporar (é aprovar), reverter (é restaurar ou desfazer), playbook e skill (é roteiro), brief (é Sobre este espaço).
- **De propaganda:** desbloqueie, eleve, potencialize, turbine, revolucione, mágica, poderoso, sem esforço, de forma fluida, insights, "não é só X, é Y".

## Onde o app ainda diverge

Levantado nas strings em português do app na versão 0.20.1, em 30/10/2026. A marca é de 22/10; as duas primeiras linhas são mudanças feitas de propósito no app depois dela, sem decisão registrada neste espaço.

| Aqui | No app | Origem |
|---|---|---|
| Colega de IA | Agente (menu, *Criar agente*, *Recrutar*), com "colega" em poucas telas | Changelog da 0.17.0 (26/10): os membros de IA passam a se chamar agentes |
| Pedido | Conversa (menu, *Nova conversa*), com "pedido" em textos como *Fazer um pedido* | Changelog da 0.17.0: Pedidos virou Conversas |
| Aprovar, Desfazer | O botão já diz *Aprovar*; ficam *Desfazer incorporação*, *Incorporado* e *Mais opções de incorporação* | Pendente |
| Guardar versão | *Salvar versão* | Pendente também em Antes e depois, da marca |
| Sobre este espaço | Também *Instruções do espaço*, nos menus e em Ajustes | Pendente |
| Espaço | *repositório* nas telas de GitHub e *Clonando…* | Pendente |

## Termos do editor (v0.6)

- **Destaque** — bloco de nota com ícone e título (callout do Obsidian, `> [!tipo]`). Tipos: Nota, Dica, Atenção, Informação, Citação, Perigo.
- **Marca-texto** — trecho realçado (`==texto==`).
- **Trecho de outra nota** — embed (`![[nota]]`, `![[nota#seção]]`), mostrado como bloco só-leitura.
- **Cópia editável** — o `.md` criado ao lado de um Word ou PowerPoint, com `origem:` no front matter; o original fica como está.
- **Apresentação** — página HTML com uma `<section>` por slide, aberta com miniaturas e *Apresentar*.

## Termos de notas (v0.9)

- **Propriedades** — os campos do front matter da nota (`status`, `area`, `ice_impacto`…), mostrados num bloco acima do texto e editáveis ali.
- **Modelo de nota** — nota-padrão em `99 - Templates/` (ou na pasta de modelos do Obsidian) a partir da qual uma nota nova nasce; não confundir com o modelo de IA.
- **Painel** — tabela ou lista Dataview renderizada ao vivo; nas colunas de propriedade, a célula edita a nota.

## Termos de conectores (v0.8)

- **Preparar** — instalar o servidor de um conector local uma vez, pelo próprio app (sem Node no computador); depois funciona sem internet.
- **Atualizar** — preparar de novo quando o catálogo fixa uma versão mais nova; o conector continua usável enquanto isso.
- **Trocar** — reescrever a entrada do time quando o pacote que ela usa foi descontinuado; nome, id e acesso continuam.
- **Embutido no app** — conector que o próprio Nanquim oferece, sem servidor, instalação ou chave (Páginas da web).
- **Só lê** — servidor configurado para só leitura: toda ação conta como leitura e funciona em qualquer nível de confiança.

## Termos da pessoa (v0.10)

- **Pessoa** — quem usa esta instalação: nome e e-mail que assinam as versões em todos os espaços; fica no rodapé da barra lateral e no chip da tela inicial.
- **Chave do terminal** — chave de IA que o app recebeu do terminal que o abriu; só vale nessa abertura. *Guardar no app* copia para o chaveiro.
- **Nova versão disponível** — estado do rodapé quando existe uma release mais nova; o menu oferece *Baixar Nanquim x.y.z*.

## Termos do motor (v0.11)

- **Motor da IA** — quem pensa pelo time: *Modelo via API* (o Nanquim chama o provedor com a sua chave) ou *Claude Code* (o `claude` instalado e logado na sua máquina, dirigido pelo Nanquim, que continua cuidando de rascunhos, regras, aprovações e versões).
