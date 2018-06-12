const http = require('http');

http.createServer((req, res) => {
  console.log('request');
  req.pipe(res);
}).listen(3000, () => {
  console.log('listening on 3000');
});