const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// Serve all static assets (css, images, html)
app.use(express.static(path.join(__dirname), {
  extensions: ['html'],
  index: 'index.html'
}));

// Clean URL routes (no .html extension needed)
app.get('/',         (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/process',  (req, res) => res.sendFile(path.join(__dirname, 'process.html')));
app.get('/projects', (req, res) => res.sendFile(path.join(__dirname, 'projects.html')));
app.get('/contact',  (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));

// 404 fallback
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
  console.log('\n  Ash Management Services (u) Ltd — Website');
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log('  Press Ctrl+C to stop\n');
});
