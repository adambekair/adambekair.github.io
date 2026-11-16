import przypadki from '../data/przypadki.json';

export function GET({ site }: { site: URL }) {
  const data = new Date().toISOString().slice(0, 10);
  const sciezki = ['/', ...przypadki.map((p) => `/przypadki/${p.slug}/`)];
  const wpisy = sciezki
    .map((s) => `  <url><loc>${new URL(s, site).toString()}</loc><lastmod>${data}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${wpisy}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
