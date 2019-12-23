var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  response.writeHead(200);

  if (request.method === 'POST') {
    // YOUR CODE HERE
    if(globalCounter[property] !== undefined){
        console.log(globalCounter[property], '999')
        globalCounter[property] = globalCounter[property] + 1;
      
      // {
      //   'Content-Type': 'text/plain' 
      // }
      response.end();
    } else if(globalCounter[property] === undefined){
        console.log(globalCounter[property], '555')
        globalCounter[request.method] = 0;
      
      response.end();
    }
  } else if (request.method === 'GET') {
    // YOUR CODE HERE
    
    // if(globalCounter[property]){
      // response.statusCode = 200;
      console.log(property, globalCounter[property])
      response.end(JSON.stringify({ count: globalCounter[property]}));
    // } 
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
