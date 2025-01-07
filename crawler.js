import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define all available routes based on App.jsx
const routes = [
  {
    path: '/',
    name: 'Home',
    component: 'herosection'
  },
  {
    path: '/event-planning-services',
    name: 'Event Planning Services',
    component: 'Event'
  },
  {
    path: '/about-rukn-al-dyafa',
    name: 'About Rukn Al Dyafa',
    component: 'AboutSection'
  },
  {
    path: '/luxury-hospitality-services',
    name: 'Luxury Hospitality Services',
    component: 'LuxuryServices'
  },
  {
    path: '/hospitality-services-memories',
    name: 'Hospitality Services Memories',
    component: 'CapturedMoment'
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: 'Checkout'
  }
];

async function crawlPages() {
  const results = [];
  console.log('Starting crawler...');

  // Read the src/pages directory and src/components directory
  const pagesDir = path.join(__dirname, 'src', 'pages');
  const componentsDir = path.join(__dirname, 'src', 'components');
  
  // Process each route
  for (const route of routes) {
    try {
      let filePath;
      if (route.component === 'Checkout') {
        filePath = path.join(componentsDir, `${route.component}.jsx`);
      } else {
        filePath = path.join(pagesDir, `${route.component}.jsx`);
      }

      if (await fs.access(filePath).then(() => true).catch(() => false)) {
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Extract metadata from the component
        const title = content.match(/title="([^"]+)"/) || ['', route.name];
        const description = content.match(/description="([^"]+)"/) || ['', `${route.name} - Rukn Al Dyafa Catering Services`];
        
        results.push({
          route: route.path,
          title: title[1],
          description: description[1],
          component: route.component,
          timestamp: new Date().toISOString()
        });

        console.log(`✓ Processed route: ${route.path}`);
      }
    } catch (error) {
      console.error(`Error processing ${route.path}:`, error.message);
    }
  }

  // Save results
  const outputPath = path.join(__dirname, 'crawler-results.json');
  await fs.writeFile(outputPath, JSON.stringify(results, null, 2));
  
  // Generate sitemap
  const sitemapContent = generateSitemap(results);
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  await fs.writeFile(sitemapPath, sitemapContent);

  console.log('\nCrawling completed! Results saved to:');
  console.log('- crawler-results.json');
  console.log('- public/sitemap.xml');
}

function generateSitemap(results) {
  const baseUrl = 'https://catering-website-pied.vercel.app';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${results.map(({ route, timestamp }) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${timestamp}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Run the crawler
crawlPages().catch(console.error);
