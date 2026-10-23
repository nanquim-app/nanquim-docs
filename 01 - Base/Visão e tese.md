---
tags: [nanquim/base]
status: ativo
---

# Visão e tese

## O problema

Times de negócio usam IA em janelas de chat: pedem, copiam, colam em documentos, perdem o histórico. Quem revisa não vê o que mudou; quem errou não tem como desfazer; a empresa não sabe o que foi feito por pessoa e o que foi feito por agente. Engenharia resolveu esse problema há anos com git: diff, revisão, incorporação, reversão. Ninguém levou isso para quem não programa.

## A tese

Um espaço de trabalho que é um repositório git, com interface em linguagem de negócio, onde:

1. o agente lê e edita os mesmos arquivos que as pessoas (Markdown, planilhas, páginas),
2. toda escrita do agente nasce em um rascunho e vira um checkpoint atribuído,
3. revisar é ver o diff renderizado (texto, células, páginas) e incorporar com um clique, com desfazer,
4. o repositório continua legível por Claude Code, Cursor e CI, então engenharia e negócio trabalham no mesmo lugar.

## Para quem

Primeiro: fundadores, PMs e analistas que já vivem em Obsidian, Notion ou Claude Desktop e sentem falta de histórico, revisão e colaboração com agentes. Depois: o time inteiro de uma empresa, com políticas por espaço. Detalhe em [[01 - Base/Usuários|Usuários]].

## O que o Nanquim não é

- Não é um chat com upload de arquivos: o arquivo é o centro, a conversa é o meio.
- Não é um banco de dados proprietário: tudo é arquivo em disco, em git.
- Não é um cliente git: ninguém vê commit, branch, stage ou rebase. Ver [[01 - Base/Glossário|Glossário]].

## Onde está a vantagem

- **Git como fosso, escondido.** Concorrentes que guardam conteúdo em banco próprio não conseguem oferecer "revisar um diff renderizado e desfazer uma incorporação" sem reescrever o storage.
- **Compatível com a stack de engenharia.** Mesmo repositório, mesmas skills e agentes (`CLAUDE.md`, `.claude/skills`, `.claude/agents`).
- **Segurança por padrão.** Escrita só em rascunho, ferramentas confinadas ao espaço, scripts permitidos, deny-list de segredos.
- **Local-first e neutro de provedor.** Chaves no chaveiro, arquivos no disco, modelo à escolha.
- **A proposta como unidade de colaboração.** Rascunho → revisão → incorporação carrega intenção, diff e aprovação; "compartilhar esta página" não carrega nada disso.
