---
tags: [nanquim/base]
status: ativo
---

# Glossário

Vocabulário da interface e o que ele é por baixo. As palavras seguem o Vocabulário da marca (pasta Marca, Posicionamento e voz); o que a marca não cobre é decisão deste espaço. Novo termo de interface entra aqui antes de entrar no produto. A nota avisa quando o app ainda diz outra coisa.

| Na interface | Por baixo | Nota |
|---|---|---|
| **Espaço** | repositório git local | Uma pasta de trabalho do time; um vault do Obsidian serve como está. Nunca "repositório" nem "workspace" |
| **Principal** | branch padrão (`main` ou `master`) | Detectado, nunca assumido |
| **Pedido** | sessão do agente | O que se pede ao time, numa conversa. Nunca "prompt" nem "sessão" |
| **Colega de IA** | agente em `.nanquim/agents/<id>.md` ou `.claude/agents/<id>.md` | Nome, função, rosto e limites; é chamado com `@id`. Nunca "bot" nem "agente". O app mostra "Agentes" desde a v0.17 |
| **Rascunho** | branch `draft/<slug>` | A proposta de mudança, à parte; único lugar onde o colega de IA escreve |
| **Versão** / **Salvar versão** | commit | Um momento guardado; mensagem sugerida pelo assistente |
| **Etapa** | commit `[checkpoint]` com `Co-authored-by` do agente | Escondida do Histórico por padrão |
| **Aprovar** | merge `--no-ff` com trailer `Nanquim-Draft` | Faz a proposta valer no espaço; antes, *O que mudou* mostra o diff renderizado por formato. Nunca "fazer merge" nem "incorporar" |
| **Desfazer** | `revert -m 1` | Sempre disponível; aprovar de novo reverte o revert. O app ainda diz "Desfazer incorporação" e "Incorporado" |
| **Histórico** | log | Todas as versões, com quem e quando |
| **Restaurar** | checkout da versão, salvo como versão nova | Volta a uma versão sem apagar as outras; vale para um arquivo ou para o espaço todo |
| **Trazer novidades** | fetch + merge | Conflitos resolvidos por arquivo |
| **Publicar** | push | |
| **Propor ao time** / **Proposta** | pull request | Via GitHub |
| **Exigir rascunhos** | política em `.nanquim/config.json` | Bloqueia salvar direto no Principal |
| **Palco** | área de abas ao lado da conversa | Arquivos, diffs, revisão, aba Espaço. Nome de trabalho: não aparece na tela |
| **Comentário** | thread em `.nanquim/comments.json` ancorada a um trecho | `@assistente` passa para a conversa |
| **Roteiro** | `SKILL.md` em `.nanquim/playbooks/` ou `.claude/skills/` | Instruções reutilizáveis; aparece com `/` na caixa de texto. Nunca "playbook" nem "skill" |
| **Sobre este espaço** | `NANQUIM.md` (`TRUNKPAD.md` nos espaços antigos) | O que o time precisa saber deste espaço. Nunca "brief" |
| **Script permitido** | entrada em `.nanquim/scripts.json` | Única forma de o agente executar algo |
| **Conector** | servidor MCP em `.nanquim/connectors.json` | Ferramentas externas para o agente |

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

- **Motor da IA** — quem pensa pelo assistente: *Modelo via API* (o Nanquim chama o provedor com a sua chave) ou *Claude Code* (o `claude` instalado e logado na sua máquina, dirigido pelo Nanquim, que continua cuidando de rascunhos, regras, aprovações e versões).
