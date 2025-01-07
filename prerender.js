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
    const indexPath = path.join(distPath, 'index.html');

    // Check if dist directory exists
    if (!fs.existsSync(distPath)) {
      console.error('Dist directory not found. Please run build first.');
      process.exit(1);
    }

    // Check if index.html exists
    if (!fs.existsSync(indexPath)) {
      console.error('index.html not found in dist directory.');
      process.exit(1);
    }

    // Read the index.html template
    const template = fs.readFileSync(indexPath, 'utf-8');

    // Create static files for each route
    for (const route of routes) {
      const routePath = path.join(distPath, route);
      
      // Create directory if it doesn't exist
      if (route !== '') {
        fs.mkdirSync(routePath, { recursive: true });
      }

      // Write index.html for this route
      const targetPath = path.join(routePath, 'index.html');
      fs.writeFileSync(targetPath, template);
      console.log(`Created: ${targetPath}`);
    }

    console.log('Static files generated successfully!');
  } catch (error) {
    console.error('Error creating static files:', error);
    process.exit(1);
  }
}

createStaticFiles();
