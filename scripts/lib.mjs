// Front matter YAML mínimo (chave: valor, listas [a, b] e strings entre aspas), sem dependências.
export function frontMatter(src) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(src);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([\w\u00C0-\u024F]+):\s*(.*)$/.exec(line);
    if (!kv) continue;
    let v = kv[2].trim();
    if (v === '') out[kv[1]] = '';
    else if (/^\[.*\]$/.test(v)) out[kv[1]] = v.slice(1, -1).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
    else out[kv[1]] = v.replace(/^["']|["']$/g, '');
  }
  return out;
}
