---
tags: [nanquim/base]
status: ativo
---

# Visão e tese

## Posicionamento

Para times de negócio cujo conhecimento está espalhado entre documentos, planilhas e sistemas, o Nanquim é a fonte única da verdade da empresa: um espaço que reúne essas fontes e onde as pessoas, e os agentes de IA quando o time quiser, mudam o mesmo material juntas, com cada mudança revisada e reversível. Diferente do Notion, nada muda sem revisão e tudo fica em arquivos abertos, que qualquer ferramenta lê.

O valor não depende da IA: um time sem nenhum agente já ganha a fonte única, a revisão e o desfazer. A IA acelera o trabalho dentro dessas mesmas regras (D-048). A frase vem do fundador em 28/10 e ainda não foi testada com ninguém de fora; validar nas entrevistas do beta.

## O problema

O que a empresa sabe está espalhado: documentos no Drive, páginas no Notion, planilhas, números em sistemas. Ninguém sabe qual versão vale, quem mudou o quê, nem como desfazer, e quem não programa não tem um jeito de trabalhar junto sobre o mesmo material com revisão.

A IA piora o quadro. Times de negócio usam IA em janelas de chat: pedem, copiam, colam em documentos, perdem o histórico. Quem revisa não vê o que mudou; quem errou não tem como desfazer; a empresa não sabe o que foi feito por pessoa e o que foi feito por agente. Engenharia resolveu esse problema há anos com git: diff, revisão, incorporação, reversão. Ninguém levou isso para quem não programa.

## A tese

Um espaço de trabalho que é um repositório git, com interface em linguagem de negócio, onde:

1. as fontes que o time já usa entram no espaço ou são consultadas a partir dele (pastas do Drive, planilhas, bancos de dados, conectores),
2. pessoas e agentes leem e editam os mesmos arquivos (Markdown, planilhas, páginas),
3. toda escrita do agente nasce em um rascunho e vira um checkpoint atribuído,
4. revisar é ver o diff renderizado (texto, células, páginas) e incorporar com um clique, com desfazer,
5. o repositório continua legível por Claude Code, Cursor e CI, então engenharia e negócio trabalham no mesmo lugar.

## Para quem

Primeiro: fundadores, PMs e analistas que já vivem em Obsidian, Notion ou Claude Desktop e sentem falta de histórico, revisão e colaboração com agentes. Depois: o time inteiro de uma empresa, com políticas por espaço. Detalhe em [[01 - Base/Usuários|Usuários]].

## O que o Nanquim não é

- Não é um chat com upload de arquivos: a fonte da verdade é o centro, a conversa é um dos jeitos de trabalhar nela.
- Não é um banco de dados proprietário: tudo é arquivo em disco, em git.
- Não é um cliente git: ninguém vê commit, branch, stage ou rebase. Ver [[01 - Base/Glossário|Glossário]].

## Onde está a vantagem

- **Git como fosso, escondido.** Concorrentes que guardam conteúdo em banco próprio não conseguem oferecer "revisar um diff renderizado e desfazer uma incorporação" sem reescrever o storage.
- **Compatível com a stack de engenharia.** Mesmo repositório, mesmas skills e agentes (`CLAUDE.md`, `.claude/skills`, `.claude/agents`).
- **Segurança por padrão.** Escrita só em rascunho, ferramentas confinadas ao espaço, scripts permitidos, deny-list de segredos.
- **Local-first e neutro de provedor.** Chaves no chaveiro, arquivos no disco, modelo à escolha.
- **A proposta como unidade de colaboração.** Rascunho → revisão → incorporação carrega intenção, diff e aprovação; "compartilhar esta página" não carrega nada disso.
