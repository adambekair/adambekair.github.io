const boty = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
];

export function GET({ site }: { site: URL }) {
  const wpisy = boty.map((b) => `User-agent: ${b}\nAllow: /\n`).join('\n');
  const tekst = `User-agent: *\nAllow: /\n\n${wpisy}\nSitemap: ${new URL('/sitemap.xml', site).toString()}\n`;
  return new Response(tekst, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
