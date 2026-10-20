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
