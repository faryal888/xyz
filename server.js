var http = require("http");


http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('faryal\n');
}).listen(3000);
console.log('Server running at http://localhost:3000/');
