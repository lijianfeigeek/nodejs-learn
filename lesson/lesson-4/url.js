const urlLib = require('url')

var obj = urlLib.parse('http://lijianfei.cn/index?a=12&b=5',true);

console.log(obj.pathname,obj.query);

// console.log(obj);

/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'lijianfei.cn',
  port: null,
  hostname: 'lijianfei.cn',
  hash: null,
  search: '?a=12&b=5',
  query: 'a=12&b=5',
  pathname: '/index',
  path: '/index?a=12&b=5',
  href: 'http://lijianfei.cn/index?a=12&b=5' }


  Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'lijianfei.cn',
  port: null,
  hostname: 'lijianfei.cn',
  hash: null,
  search: '?a=12&b=5',
  query: { a: '12', b: '5' },
  pathname: '/index',
  path: '/index?a=12&b=5',
  href: 'http://lijianfei.cn/index?a=12&b=5' }
*/