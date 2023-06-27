const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script>
            const PORT = process.env.PORT;
            console.log(PORT);
        </script>
    </head>
    <body>
        
    </body>
    </html>
  `;
  const html = 'main.html';

  res.end(html);
});
