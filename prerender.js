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
    // Read the index.html template
    const template = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf-8');

    // Create static files for each route
    routes.forEach(route => {
      const dirPath = route 
        ? path.join(__dirname, 'dist', route)
        : path.join(__dirname, 'dist');

      // Create directory if it doesn't exist
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }

      // Write index.html to each directory
      const filePath = path.join(dirPath, 'index.html');
      fs.writeFileSync(filePath, template);
      console.log(`Created static file for route: /${route}`);
    });

    // Copy robots.txt and sitemap.xml
    ['robots.txt', 'sitemap.xml'].forEach(file => {
      const srcPath = path.join(__dirname, 'public', file);
      const destPath = path.join(__dirname, 'dist', file);
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${file} to dist`);
      }
    });

    console.log('Static file generation complete!');
  } catch (error) {
    console.error('Error generating static files:', error);
    process.exit(1);
  }
}

createStaticFiles();
