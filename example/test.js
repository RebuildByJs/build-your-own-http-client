const Request = require('../client');

Request({
  url: 'http://localhost:3000',
  qs: {
    a: 123,
    b: 456
  }
}).then((ret) => {
  console.log(ret.headers);
  console.log(ret.statusCode);
  console.log(ret.body);
}).catch((err) => { console.log(err); });