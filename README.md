# trunkpad-docs

Documentação de produto do [Nanquim](https://github.com/oandre/ai-ide-for-business), escrita no próprio Nanquim. Serve a dois propósitos: registrar visão, hipóteses, decisões e roadmap, e ser o espaço de trabalho em que a equipe usa a ferramenta todos os dias (dogfooding).

## Abrir no Nanquim

```bash
cd ai-ide-for-business && ./scripts/launch.sh ~/code/trunkpad-docs
```

O assistente lê `NANQUIM.md` a cada rodada, roda os scripts de `.nanquim/scripts.json`, usa os playbooks de `.nanquim/playbooks/` (digite `/` na caixa de texto) e as personas de `.claude/agents/`. **Exigir rascunhos** está ligado em `.nanquim/config.json`: ninguém salva direto no Principal.

Comece por `00 - Início.md`.

## Convenções

Estão em `NANQUIM.md`. Em resumo: uma hipótese por nota, numeração `Hxx` única, decisões só se acumulam, ICE com justificativa, nunca inventar números.
