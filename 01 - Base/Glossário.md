---
tags: [trunkpad/base]
status: ativo
---

# Glossário

Vocabulário da interface e o que ele é por baixo. Novo termo de interface entra aqui antes de entrar no produto.

| Na interface | Por baixo | Nota |
|---|---|---|
| **Espaço** (de trabalho) | repositório git local | Uma pasta; um vault do Obsidian serve como está |
| **Principal** | branch padrão (`main` ou `master`) | Detectado, nunca assumido |
| **Rascunho** | branch `draft/<slug>` | Único lugar onde o agente escreve |
| **Salvar versão** | commit | Mensagem sugerida pelo assistente |
| **Checkpoint** | commit `[checkpoint]` com `Co-authored-by` do agente | Escondido do histórico por padrão |
| **Revisar e incorporar** | merge `--no-ff` com trailer `Trunkpad-Draft` | Diff renderizado por formato |
| **Desfazer incorporação** | `revert -m 1` | Sempre disponível; reincorporar reverte o revert |
| **Histórico / Restaurar** | log e checkout de arquivo | Não destrutivo |
| **Trazer novidades** | fetch + merge | Conflitos resolvidos por arquivo |
| **Publicar** | push | |
| **Enviar para revisão** | pull request | Via GitHub |
| **Exigir rascunhos** | política em `.trunkpad/config.json` | Bloqueia salvar direto no Principal |
| **Palco** | área de abas ao lado da conversa | Arquivos, diffs, revisão, aba Espaço |
| **Comentário** | thread em `.trunkpad/comments.json` ancorada a um trecho | `@assistente` passa para a conversa |
| **Persona** | agente em `.claude/agents/*.md` | Revisor com critérios fixos, não edita |
| **Playbook** | `SKILL.md` em `.trunkpad/playbooks/` ou `.claude/skills/` | Aparece com `/` na caixa de texto |
| **Script permitido** | entrada em `.trunkpad/scripts.json` | Única forma de o agente executar algo |
| **Conector** | servidor MCP em `.trunkpad/connectors.json` | Ferramentas externas para o agente |

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
- **Embutido no app** — conector que o próprio Trunkpad oferece, sem servidor, instalação ou chave (Páginas da web).
- **Só lê** — servidor configurado para só leitura: toda ação conta como leitura e funciona em qualquer nível de confiança.
