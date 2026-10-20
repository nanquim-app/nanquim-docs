# trunkpad-docs

Documentação de produto do [Trunkpad](https://github.com/oandre/ai-ide-for-business), escrita no próprio Trunkpad. Serve a dois propósitos: registrar visão, hipóteses, decisões e roadmap, e ser o espaço de trabalho em que a equipe usa a ferramenta todos os dias (dogfooding).

## Abrir no Trunkpad

```bash
cd ai-ide-for-business && ./scripts/launch.sh ~/code/trunkpad-docs
```

O assistente lê `TRUNKPAD.md` a cada rodada, roda os scripts de `.trunkpad/scripts.json`, usa os playbooks de `.trunkpad/playbooks/` (digite `/` na caixa de texto) e as personas de `.claude/agents/`. **Exigir rascunhos** está ligado em `.trunkpad/config.json`: ninguém salva direto no Principal.

Comece por `00 - Início.md`.

## Convenções

Estão em `TRUNKPAD.md`. Em resumo: uma hipótese por nota, numeração `Hxx` única, decisões só se acumulam, ICE com justificativa, nunca inventar números.
