<!-- nanquim-agent-rules v2 pt-BR -->
# Regras para agentes neste espaço do Nanquim

Esta pasta é um espaço do Nanquim: um repositório git que um time edita pelo aplicativo Nanquim. O Nanquim conduz o fluxo entre os rascunhos e a `main`; siga estas regras mesmo que o repositório pareça um projeto comum do GitHub. O time não usa o GitHub diretamente, e não quer usar.

## Onde trabalhar

- Trabalhe só em um branch `draft/<nome-curto>`. Na `main`, crie um antes (`git switch -c draft/<nome-curto>`); já em um branch `draft/*`, continue nele.
- Nunca faça commit na `main`, nunca faça merge nela, nunca faça push para ela.
- Salve o trabalho com commits normais. O prefixo `[checkpoint]` na mensagem e um trailer `Co-authored-by:` são bem-vindos: o Nanquim deixa os checkpoints fora do histórico do time e preserva a autoria.
- Faça commits pequenos, um por assunto (o glossário, depois os documentos de produto), cada um com uma mensagem curta em português dizendo o que mudou.
- Leia `NANQUIM.md` primeiro, se existir (`TRUNKPAD.md` nos espaços criados antes da troca de nome): é o briefing do time para este espaço.

## Nunca

- Não instale nem execute a CLI do GitHub (`gh`), e não sugira instalá-la.
- Não abra pull requests, não faça merge, não faça push para a `main`, não crie tags nem releases.
- Não edite `.nanquim/` nem `.trunkpad/` (a configuração do espaço) nem `.github/CODEOWNERS` (a regra de revisão).
- Não mude a configuração do git, os hooks nem os remotes.

## Quando terminar

Deixe o trabalho salvo em commits no branch de rascunho; não precisa fazer push. Diga à pessoa para abrir o espaço no Nanquim e propor ao time com **Enviar para revisão**: isso publica o rascunho e abre a proposta com a conta dela, e o time revisa e incorpora por lá.
