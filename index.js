const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const fileName = 'main.html';

  try {
    const html = fs.readFileSync(fileName, 'utf8');
    res.end(html);
  } catch (err) {
    console.error(err);
    res.end('<h1>Error reading file</h1>');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
