var http = require('http');
var Stackable = require('../dist/stackable-node');

var stackable = new Stackable('kX8JddwDJqdf');

var server = http.createServer(function(request, response) {
  // magic happens here!

  stackable.getContainerItems('yuXN5CHkCpfqi8Pk9', function (error, result) {
    console.log(error, result);
  });
}).listen(8080);
