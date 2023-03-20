// content of server.js
const http = require('http');
const port = 3030;
const requestHandler = (request, response) => {
console.log(request.url);
response.end("Hello Node.js Server HEHE!");
};
const server = http.createServer(requestHandler);
server.listen(port, (err) => {
if (err) { return console.log("something bad happened", err); }
console.log("server is listening on $(port)");
});
