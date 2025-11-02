const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BUILD_DIR = path.join(__dirname, '.next/standalone');
const STATIC_DIR = path.join(__dirname, '.next/static');
const PUBLIC_DIR = path.join(__dirname, 'public');

// Simple static file server
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, '.next/server/app', req.url === '/' ? 'index.html' : req.url);
  
  // Try different paths
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'public', req.url);
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code, 'utf-8');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
