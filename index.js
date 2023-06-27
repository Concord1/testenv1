const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const html = 'main.html';

    fs.readFile(html, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.end('<h1>Error reading file</h1>');
    } else {
      res.end(data);
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
