import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/event-planning-services/',
  '/about-rukn-al-dyafa/',
  '/luxury-hospitality-services/',
  '/hospitality-services-memories/',
  '/checkout/'
];

async function createStaticFiles() {
  // Read the index.html template
  const template = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf-8');

  // Create static files for each route
  routes.forEach(route => {
    const dirPath = path.join(__dirname, 'dist', route);
    const filePath = path.join(dirPath, 'index.html');

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, template);
    console.log(`Created static file for route: ${route}`);
  });

  // Copy robots.txt and sitemap.xml
  ['robots.txt', 'sitemap.xml'].forEach(file => {
    fs.copyFileSync(
      path.join(__dirname, 'public', file),
      path.join(__dirname, 'dist', file)
    );
    console.log(`Copied ${file} to dist`);
  });
}

createStaticFiles().catch(console.error);
