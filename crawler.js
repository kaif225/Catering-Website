import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  '/',
  '/about',
  '/captured-moments',
  '/events',
  '/luxury-services'
];

async function crawlPages() {
  const results = [];
  console.log('Starting crawler...');

  // Read the src/pages directory to get all page components
  const pagesDir = path.join(__dirname, 'src', 'pages');
  const pages = await fs.readdir(pagesDir);

  for (const page of pages) {
    if (page.endsWith('.jsx')) {
      try {
        const filePath = path.join(pagesDir, page);
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Extract metadata from the component
        const title = content.match(/title="([^"]+)"/) || ['', page.replace('.jsx', '')];
        const description = content.match(/description="([^"]+)"/) || ['', ''];
        
        results.push({
          route: `/${page.replace('.jsx', '').toLowerCase()}`,
          title: title[1],
          description: description[1],
          component: page,
          timestamp: new Date().toISOString()
        });

        console.log(`✓ Analyzed ${page}`);
      } catch (error) {
        console.error(`Error analyzing ${page}:`, error.message);
      }
    }
  }

  // Save results
  const outputPath = path.join(__dirname, 'crawler-results.json');
  await fs.writeFile(outputPath, JSON.stringify(results, null, 2));
  
  // Generate sitemap
  const sitemapContent = generateSitemap(results);
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  await fs.writeFile(sitemapPath, sitemapContent);

  console.log('\nCrawling completed! Results saved to crawler-results.json');
  console.log('Sitemap updated at public/sitemap.xml');
}

function generateSitemap(results) {
  const baseUrl = 'https://ruknaldyafa.ae';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${results.map(({ route, timestamp }) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${timestamp}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  return sitemap;
}

// Run the crawler
crawlPages().catch(console.error);
