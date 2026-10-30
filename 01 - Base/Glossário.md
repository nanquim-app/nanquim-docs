---
tags: [nanquim/base]
status: ativo
---

# Glossário

Vocabulário da interface e o que ele é por baixo. Novo termo de interface entra aqui antes de entrar no produto. As palavras do produto seguem o Vocabulário da marca; se divergirem, vale a marca (D-050).

| Na interface | Por baixo | Nota |
|---|---|---|
| **Espaço** | repositório git local | Uma pasta de trabalho do time; um vault do Obsidian serve como está. Nunca "repositório" nem "workspace" |
| **Principal** | branch padrão (`main` ou `master`) | Detectado, nunca assumido |
| **Pedido** | sessão do agente | O que se pede ao time numa conversa. Nunca "prompt" nem "sessão" |
| **Colega de IA** | agente nomeado, em `.nanquim/agents/<id>.md` ou `.claude/agents/<id>.md` | Com nome, função, rosto e limites; é chamado com `@id`. Um revisor é um colega que não edita. Nunca "bot" nem "agente" |
| **Rascunho** | branch `draft/<slug>` | A proposta de mudança, à parte; único lugar onde o colega de IA escreve |
| **Versão** | commit | Um momento guardado |
| **Guardar versão** | commit | Mensagem sugerida pelo assistente. O app ainda diz "Salvar versão" |
| **Etapa** | commit `[checkpoint]` com `Co-authored-by` do colega | Escondida do histórico por padrão |
| **Ver o que mudou** | diff entre o rascunho e o Principal | Renderizado por formato |
| **Aprovar** | merge `--no-ff` com trailer `Nanquim-Draft` | Faz a proposta valer no espaço. Nunca "fazer merge" nem "incorporar" |
| **Desfazer** | `revert -m 1` | Sempre disponível; aprovar de novo reverte o revert. O app ainda diz "Desfazer incorporação" |
| **Histórico** | log | Todas as versões, com quem e quando |
| **Restaurar** | nova versão com o conteúdo da versão escolhida | Volta a uma versão sem apagar as outras |
| **Trazer novidades** | fetch + merge | Conflitos resolvidos por arquivo |
| **Publicar** | push | |
| **Propor ao time** | pull request | Via GitHub; o que abre é uma proposta |
| **Exigir rascunhos** | política em `.nanquim/config.json` | Bloqueia guardar direto no Principal |
| **Palco** | área ao lado da conversa | Arquivos, comparações, revisão e página do Espaço, um item por vez. Nome de trabalho, fora do Vocabulário da marca |
| **Comentário** | thread em `.nanquim/comments.json` ancorada a um trecho | `@assistente` passa para a conversa |
| **Roteiro** | playbook: `SKILL.md` em `.nanquim/playbooks/` ou `.claude/skills/` | Instruções reutilizáveis para um tipo de trabalho; aparece com `/` na caixa de texto. Nunca "playbook" nem "skill" |
| **Sobre este espaço** | brief: `NANQUIM.md` | O que o time precisa saber deste espaço. Nunca "brief" |
| **Script permitido** | entrada em `.nanquim/scripts.json` | Única forma de o colega de IA executar algo |
| **Conector** | servidor MCP em `.nanquim/connectors.json` | Ferramentas externas para o colega de IA |

## Palavras que saíram

Ainda aparecem em notas antigas e nas métricas; não voltam para a interface.

| Saiu | Entrou |
|---|---|
| Revisar e incorporar | Ver o que mudou · Aprovar |
| Incorporar | Aprovar |
| Desfazer incorporação | Desfazer |
| Salvar versão | Guardar versão |
| Checkpoint | Etapa |
| Enviar para revisão | Propor ao time |
| Persona | Colega de IA |
| Playbook | Roteiro |

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
