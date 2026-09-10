import { readFileSync, writeFileSync } from 'node:fs';

const origin = 'https://www.navis.rizkypermn.com';
const headings = html => [...html.matchAll(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/gi)]
  .map(match => match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim());
const pages = [];
for (const [route, file] of [['/', 'html/index.html'], ['/services/nautiq', 'html/services/nautiq/index.html']]) {
  const response = await fetch(new URL(route, origin));
  if (!response.ok) throw new Error(`Published route ${route}: HTTP ${response.status}`);
  const published = headings(await response.text());
  const exported = headings(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'));
  if (!published.length || JSON.stringify(published) !== JSON.stringify(exported)) {
    throw new Error(`Published headings differ from export: ${route}`);
  }
  pages.push({ route, status: response.status, matchedHeadings: published });
}
writeFileSync(new URL('../published-build.json', import.meta.url), JSON.stringify({
  origin,
  siteVersion: 2,
  sourceCommit: '7ae2a81917af62cfe2f6cec5ae661c6204555c95',
  verifiedAt: new Date().toISOString(),
  verification: 'HTTP status and all H1/H2 headings match the static export; not a visual comparison.',
  pages,
}, null, 2) + '\n');
console.log('Published Homepage and Nautiq verified against HTML export.');
