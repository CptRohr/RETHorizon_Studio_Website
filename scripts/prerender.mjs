// Emits real HTML files for each route so GitHub Pages can serve /games/ directly, with the right <title>.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const html = readFileSync('dist/index.html', 'utf8')
const { name } = JSON.parse(readFileSync('src/data/brand.json', 'utf8'))
const siteUrl = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
if (!siteUrl) throw new Error('Missing canonical URL in dist/index.html')
const gamesUrl = `${siteUrl.replace(/\/?$/, '/')}games/`
mkdirSync('dist/games', { recursive: true })
writeFileSync(
  'dist/games/index.html',
  html
    .replace(/<title>.*?<\/title>/, `<title>Games — ${name}</title>`)
    .replace(/(<meta property="og:url" content=")[^"]+/, `$1${gamesUrl}`)
    .replace(/(<link rel="canonical" href=")[^"]+/, `$1${gamesUrl}`),
)
writeFileSync('dist/404.html', html) // unknown paths still load the app
