import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const result = spawnSync(process.execPath, ['scripts/export-worker.mjs'], {
  cwd: root,
  env: { ...process.env, NAVIS_STATIC_EXPORT: '1' },
  stdio: 'inherit',
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
const source = path.join(root, 'dist/client');
const routes = ['services/nautiq', 'news/brand-crisis-detection', 'news/understanding-sudden-changes-in-public-opinion', 'news/competitor-monitoring'];
for (const page of ['index.html', ...routes.map(route => `${route}.html`)]) {
  if (!existsSync(path.join(source, page))) throw new Error(`Missing exported page: ${page}`);
}
const target = path.join(root, 'html');
// Only replace this script's dedicated output directory inside the project.
if (path.dirname(target) !== path.resolve(root)) throw new Error('Invalid output directory');
rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });
// Directory entrypoints work on hosts without an extensionless-URL rewrite.
for (const route of routes) {
  mkdirSync(path.join(target, route), { recursive: true });
  cpSync(path.join(target, `${route}.html`), path.join(target, route, 'index.html'));
}
writeFileSync(path.join(target, '.nojekyll'), '');
for (const page of ['index.html', ...routes.map(route => `${route}/index.html`)]) {
  const html = readFileSync(path.join(target, page), 'utf8');
  if (!html.includes('<main') || !html.includes('<script')) throw new Error(`Incomplete HTML: ${page}`);
  for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]*)/g)) {
    const relative = decodeURIComponent(match[1]).slice(1);
    if (!relative || !path.extname(relative)) continue;
    if (!existsSync(path.join(target, relative))) throw new Error(`Missing asset in ${page}: ${relative}`);
  }
}
console.log('Static website exported to html/');
