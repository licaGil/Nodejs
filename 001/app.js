const http = require('http');
const os = require('os');

console.log(os);




http = createServer((req, resp) => {

    resp.end('Hello world!');

}).listen(5500, "127.0.0.1", () => {

    console.log('Success start!');
});