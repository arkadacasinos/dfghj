export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://kush1.vercel.app/sitemap.xml
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
