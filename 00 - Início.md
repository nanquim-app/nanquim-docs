# Nanquim — início

**Tese em uma linha:** empresas já têm a matéria-prima de uma fonte única da verdade (documentos, planilhas, páginas, sistemas), mas espalhada. Falta um lugar que reúna essas fontes e onde times não técnicos, com ou sem agentes de IA, mudam esse material juntos, com cada mudança visível, atribuída, revisável e reversível. O Nanquim é esse lugar, e a fonte é um repositório git comum que todas as outras ferramentas também leem. Posicionamento em [[01 - Base/Visão e tese#Posicionamento|Visão e tese]] (D-048).

**Base:** [[01 - Base/Visão e tese|Visão e tese]] · [[01 - Base/Princípios|Princípios]] · [[01 - Base/Usuários|Usuários]] · [[01 - Base/Glossário|Glossário]] · [[01 - Base/Métricas|Métricas]] · [[01 - Base/Concorrentes|Concorrentes]]

**Trabalho:** [[02 - Hipóteses/_index|Hipóteses]] · [[03 - Decisões/Decisões|Decisões]] · [[04 - Roadmap/Roadmap|Roadmap]] · [[05 - Pesquisa/Feedback de uso|Feedback de uso]] · [[05 - Pesquisa/Benchmarks|Benchmarks]] · [[05 - Pesquisa/Revisão v0.11–v0.12|Revisão v0.11–v0.12]] · [[05 - Pesquisa/Crítica de interface — jornadas v0.12|Crítica de interface]] · [[05 - Pesquisa/Jornadas de entrada|Jornadas de entrada]]

## Em movimento

```dataview
TABLE WITHOUT ID file.link AS "Nota", area AS "Área", status AS "Status", nivel_evidencia AS "Evidência"
FROM "02 - Hipóteses"
WHERE contains(list("backlog", "em-análise", "pronta", "em-teste"), status)
SORT status ASC, file.name ASC
```

## Agora

- **Para testar enquanto as mudanças saem:** na pasta do `ai-ide-for-business`, feche o Nanquim instalado e rode `npm run follow`. O app abre pelo código e se atualiza sozinho a cada push na `main`; `npm run follow -- --fresh` abre uma cópia limpa, como no primeiro uso (D-047).
- Na 0.16.0 o identificador do app vira `com.nanquimapp.desktop` e tudo passa a dizer Nanquim (D-046). Falta você: renomear este repositório no GitHub para `nanquim-docs` (*Settings → General → Repository name*) e apagar o ramo `feat/trunkpad-v1` do `ai-ide-for-business` (*Branches*).
- v0.16.0 na main, pronta para `npm run release:mac`: o app é Nanquim também por dentro (D-045). Na primeira abertura o Mac pede a senha para "Trunkpad Safe Storage" uma última vez: digite a senha e clique em *Permitir* (ou *Sempre permitir*); as chaves passam para "Nanquim Safe Storage" e o pedido não volta. Espaços novos guardam a configuração em `.nanquim/`; o `product-planning` continua com `.trunkpad/` e funciona igual. A variável `TRUNKPAD_GITHUB_CLIENT_ID` do repositório continua valendo (pode renomear para `NANQUIM_GITHUB_CLIENT_ID` quando quiser).
- v0.14.0 na main, pronta para `npm run release:mac`: *Trazer do Google Drive* nas boas-vindas (baixe a pasta no Drive, traga o .zip; os Docs viram páginas), colegas criados com o assistente no Time (*Gerar com o assistente* ou *Criar conversando*), o cartão "Montar o espaço e o time" em todo espaço sem instruções, e edição no documento, combinar conflito, título de versão e consultar colega funcionando com o Claude Code sem chave (D-043). Teste com uma pasta real do Drive e anote em [[05 - Pesquisa/Feedback de uso|Feedback de uso]] o que não veio igual.
- A partir da 0.14.0, os instaladores do Mac saem do seu Mac (`npm run release:mac`) e o Windows só roda no GitHub quando você mandar (D-042).
- v0.13.0 publicada (Mac e Windows): o primeiro instalador que soma as quatro linhas (pessoa e versões, infraestrutura, colaboração, GitHub por padrão) mais as 0.10.x que tinham ficado fora. *Entrar com GitHub* só aparece no instalador quando a variável `NANQUIM_GITHUB_CLIENT_ID` existe no repositório; até lá, o token. Próximo: respostas a D1, D2 e D6 da revisão; depois a linha de interface reaplicada e o crítico.
- Revisão grande de 21/10 em [[05 - Pesquisa/Revisão v0.11–v0.12|Revisão v0.11–v0.12]]: a v0.11.0 não contém a v0.10.1 nem a v0.10.2; a main (0.12.0) soma quatro linhas e duas ainda estão fora; colaboração, login, conexão com o repositório e Claude Code avaliados, com seis decisões a tomar.
- v0.11.0 publicada (Mac e Windows): as duas linhas viraram um app só. Instale, libere a primeira abertura em Ajustes do Sistema → Privacidade e Segurança → *Abrir mesmo assim*, diga quem você é e escolha o motor em Configurações → IA (*Claude Code*, o seu `claude` logado, ou uma chave de API); o token do GitHub fica em Configurações → GitHub. Abra o `product-planning`; mude status e repontue ICE pelas Propriedades. Todo incômodo vira linha em [[05 - Pesquisa/Feedback de uso|Feedback de uso]].
- Próximo bloco: uma semana de uso real; depois slides na revisão, custo por rascunho e regras do espaço — ver [[04 - Roadmap/Roadmap|Roadmap]].
