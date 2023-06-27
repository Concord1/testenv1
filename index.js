const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const template = fs.readFileSync('index.ejs', 'utf8');
  const port = process.env.PORT || 3000;
  const renderedHtml = ejs.render(template, { port });

  res.end(renderedHtml);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
