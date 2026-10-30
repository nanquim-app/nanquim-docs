---
tags: [nanquim/base]
status: ativo
---

# Princípios de produto

Cada princípio tem uma consequência prática. Se uma decisão contraria um deles, registre em [[03 - Decisões/Decisões|Decisões]] por quê.

1. **O arquivo é a fonte da verdade.** Tudo que o produto sabe está em arquivos no repositório, legíveis por qualquer outra ferramenta. Nada vive só no app. Consequência: comentários ficam em `.nanquim/comments.json`, configuração do time em `.nanquim/`, sessões do assistente fora do repositório porque são pessoais.
2. **Agentes nunca escrevem no Principal.** Toda escrita do agente nasce em um rascunho e vira checkpoint atribuído. Consequência: o botão de revisar existe em toda rodada que mudou algo.
3. **Linguagem de negócio, sempre.** Guardar versão, iniciar rascunho, ver o que mudou, aprovar, desfazer, trazer novidades, publicar. Nunca commit, branch, stage, rebase. Consequência: toda string da interface passa por esse filtro; ver [[01 - Base/Glossário|Glossário]].
4. **O que você não tocou não muda.** O editor rico preserva byte a byte o que o usuário não editou. Consequência: o teste de round-trip no vault real é bloqueante.
5. **A fonte da verdade no centro; a IA é um jeito de trabalhar nela.** O Nanquim vale para um time sem nenhum agente; a conversa com a IA é uma das formas de mudar o material, não a tela principal do produto. A árvore de pastas nunca some, só recolhe. Consequência: nenhuma tela essencial (abrir, editar, revisar, aprovar) depende de conversar. Como a tela se divide entre arquivo e conversa está em proposta (D-048).
6. **Mostrar, não explicar.** Diff renderizado em vez de texto diff; células em vez de CSV cru; página antes e depois em vez de HTML.
7. **Confiança é um dial, não um interruptor.** Somente leitura, revisar cada alteração, autônomo. Mesma ferramenta, políticas diferentes por pessoa e por espaço.
8. **Local-first, neutro de provedor.** Chaves no chaveiro do sistema, modelo à escolha, nada sai da máquina além da chamada ao modelo.
9. **Compatível com engenharia.** O repositório funciona igual no Claude Code, no Cursor e na CI. Convenções já existentes (`CLAUDE.md`, skills, agents) são lidas, não reinventadas.
10. **Interface sofisticada.** Tipografia de documento, hierarquia clara, densidade de ferramenta profissional, estados vazios que ensinam. Referências em [[05 - Pesquisa/Benchmarks|Benchmarks]].
