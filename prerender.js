const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/event-planning-services/',
  '/about-rukn-al-dyafa/',
  '/luxury-hospitality-services/',
  '/hospitality-services-memories/',
  '/checkout/'
];

// Read the index.html template
const template = fs.readFileSync('./dist/index.html', 'utf-8');

// Create static files for each route
routes.forEach(route => {
  const filePath = path.join('./dist', route === '/' ? 'index.html' : `${route.slice(1)}index.html`);
  const dirPath = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Write the file
  fs.writeFileSync(filePath, template);
});
