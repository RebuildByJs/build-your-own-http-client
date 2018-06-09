/**
 * request({
      method: 'POST', // 请求方法
      url: 'http://xxx.com', // 请求地址
      qs: {a: 123, b: 456}, // query查询参数
      form: {c: 111, d: 'zxxxxx'}, // post body参数
      headers: {
        'user-agent': 'SuperID/Node.js', // 请求头
      },
    })
    .then(ret => {
      // ret.headers 表示响应头
      // ret.statusCode 表示响应代码
      // ret.body 表示响应内容（Buffer）
    })
    .catch(err => console.log(err))
 */

const Net = require('net');


const Request = ({}) => {
  
  return new Promise(() => {

  });
};

module.exports = Request;