// Lista as hipóteses de "02 - Hipóteses" com status, área, evidência e ICE.
// Uso: node scripts/hipoteses.mjs [status]
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { frontMatter } from './lib.mjs';

const dir = '02 - Hipóteses';
const filter = process.argv[2];
const rows = [];
for (const f of readdirSync(dir).filter((n) => n.endsWith('.md') && !n.startsWith('_')).sort()) {
  const fm = frontMatter(readFileSync(join(dir, f), 'utf8'));
  if (filter && fm.status !== filter) continue;
  const ice = [fm.ice_impacto, fm.ice_confianca, fm.ice_facilidade].map(Number);
  const score = ice.every((n) => n > 0) ? ice[0] * ice[1] * ice[2] : '';
  rows.push({ nota: f.replace(/\.md$/, ''), status: fm.status ?? '', area: Array.isArray(fm.area) ? fm.area.join(', ') : fm.area ?? '', evidencia: fm.nivel_evidencia ?? '', ice: score });
}
if (!rows.length) {
  console.log(filter ? `Nenhuma hipótese com status "${filter}".` : 'Nenhuma hipótese.');
  process.exit(0);
}
const w = (k) => Math.max(k.length, ...rows.map((r) => String(r[k]).length));
const cols = ['nota', 'status', 'area', 'evidencia', 'ice'];
console.log(cols.map((c) => c.padEnd(w(c))).join('  '));
for (const r of rows) console.log(cols.map((c) => String(r[c]).padEnd(w(c))).join('  '));
console.log(`\n${rows.length} hipótese(s). Próximo número: H${String(nextNumber()).padStart(2, '0')}`);

function nextNumber() {
  const nums = readdirSync(dir).map((n) => /^H(\d+)/.exec(n)?.[1]).filter(Boolean).map(Number);
  return (nums.length ? Math.max(...nums) : 0) + 1;
}
