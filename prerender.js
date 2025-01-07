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

async function createStaticFiles() {
  try {
    const distPath = path.join(__dirname, 'dist');
    
    // Ensure dist directory exists
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }

    // Create index.html content with proper base path
    const indexContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rukn Al Dyafa</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.js"></script>
  </body>
</html>`;

    // Write index.html for each route
    routes.forEach(route => {
      const routePath = path.join(distPath, route);
      
      // Create directory if it doesn't exist
      if (route !== '') {
        fs.mkdirSync(routePath, { recursive: true });
      }

      // Write index.html
      fs.writeFileSync(
        path.join(routePath, 'index.html'),
        indexContent
      );
    });

    console.log('Static files generated successfully!');
  } catch (error) {
    console.error('Error creating static files:', error);
    process.exit(1);
  }
}

createStaticFiles();
