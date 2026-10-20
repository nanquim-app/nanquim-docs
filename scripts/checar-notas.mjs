// Valida o front matter das hipóteses e a numeração das decisões. Sai com 1 se houver erro.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { frontMatter } from './lib.mjs';

const errors = [];
const STATUS = ['ideia', 'backlog', 'em-análise', 'pronta', 'em-teste', 'validada', 'refutada', 'arquivada'];
const EVID = ['ideia', 'evidência', 'dados', 'experimento', 'validação'];
const ICE = [1, 3, 5, 7, 9];

const dir = '02 - Hipóteses';
for (const f of readdirSync(dir).filter((n) => n.endsWith('.md') && !n.startsWith('_'))) {
  const where = `${dir}/${f}`;
  if (!/^H\d{2,} — .+\.md$/.test(f)) errors.push(`${where}: nome deve ser "Hxx — Título.md"`);
  const src = readFileSync(join(dir, f), 'utf8');
  const fm = frontMatter(src);
  if (!STATUS.includes(fm.status)) errors.push(`${where}: status inválido "${fm.status}"`);
  if (!Array.isArray(fm.area) || !fm.area.length) errors.push(`${where}: area vazia`);
  if (!EVID.includes(fm.nivel_evidencia)) errors.push(`${where}: nivel_evidencia inválido "${fm.nivel_evidencia}"`);
  for (const h of ['## Sinal', '## Mecanismo', '## Impacto esperado', '## Como validar']) if (!src.includes(h)) errors.push(`${where}: falta a seção "${h}"`);
  if (fm.status !== 'ideia') {
    for (const k of ['ice_impacto', 'ice_confianca', 'ice_facilidade']) if (!ICE.includes(Number(fm[k]))) errors.push(`${where}: ${k} deve ser 1, 3, 5, 7 ou 9 (status ${fm.status})`);
    if (!fm.impacto_estimado) errors.push(`${where}: impacto_estimado vazio com status ${fm.status}`);
    if (!fm.esforço) errors.push(`${where}: esforço vazio com status ${fm.status}`);
  }
  if (fm.nivel_evidencia === 'ideia' && Number(fm.ice_confianca) > 1) errors.push(`${where}: nivel_evidencia ideia exige ice_confianca 1`);
}

const dec = readFileSync('03 - Decisões/Decisões.md', 'utf8');
const ids = [...dec.matchAll(/^### D-(\d{3}) — /gm)].map((m) => Number(m[1]));
ids.forEach((n, i) => {
  if (n !== i + 1) errors.push(`03 - Decisões/Decisões.md: D-${String(n).padStart(3, '0')} fora de sequência (esperado D-${String(i + 1).padStart(3, '0')})`);
});
for (const block of dec.split(/^(?=### D-)/m).slice(1)) {
  const id = /^### (D-\d{3})/.exec(block)?.[1] ?? '?';
  for (const field of ['**Data:**', '**Alternativa rejeitada:**', '**Razão:**', '**Quem decidiu:**']) if (!block.includes(field)) errors.push(`03 - Decisões/Decisões.md: ${id} sem ${field}`);
}

if (errors.length) {
  console.log(`${errors.length} problema(s):`);
  for (const e of errors) console.log(`- ${e}`);
  process.exit(1);
}
console.log('Notas OK: hipóteses e decisões consistentes.');
