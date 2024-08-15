// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the HTTP status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the response content type to plain text
  res.end('Hello, World!\n'); // Send the response to the client
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
