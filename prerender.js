import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '',  // for root path
  'event-planning-services',
  'about-rukn-al-dyafa',
  'luxury-hospitality-services',
  'hospitality-services-memories',
  'checkout'
];

const SITE_URL = 'https://ruknaldyafa.ae';

async function createStaticFiles() {
  try {
    const distPath = path.join(__dirname, 'dist');
    
    // Ensure dist directory exists
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }

    // Create index.html content with proper meta tags and links
    const createHtmlContent = (route) => {
      const pageTitle = route === '' ? 'Rukn Al Dyafa - Luxury Catering Services' 
        : `${route.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - Rukn Al Dyafa`;
      
      const canonicalUrl = `${SITE_URL}${route ? '/' + route : ''}`;
      
      return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="Premium catering and hospitality services in UAE. Luxury event planning, corporate catering, and exclusive hospitality solutions." />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="Premium catering and hospitality services in UAE" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta name="robots" content="index, follow" />
    <link rel="alternate" href="${canonicalUrl}" hreflang="en" />
    <link rel="alternate" href="${canonicalUrl}" hreflang="ar" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main/index.js"></script>
  </body>
</html>`;
    };

    // Write index.html for each route
    routes.forEach(route => {
      const routePath = path.join(distPath, route);
      
      // Create directory if it doesn't exist
      if (route !== '') {
        fs.mkdirSync(routePath, { recursive: true });
      }

      // Write index.html with proper meta tags
      fs.writeFileSync(
        path.join(routePath, 'index.html'),
        createHtmlContent(route)
      );
    });

    console.log('Static files generated successfully!');
  } catch (error) {
    console.error('Error creating static files:', error);
    process.exit(1);
  }
}

createStaticFiles();
