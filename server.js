var http = require('http');
var fs = require('fs');
var static_content = require('./static');
	console.log(static_content);	
var server = http.createServer(function(request,response)
{
});
server.listen(7077);
console.log("Running server in local host at port 7077");
