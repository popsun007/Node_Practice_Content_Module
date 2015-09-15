var http = require('http');
var fs = require('fs');
var static_content = require('./modules/static.js');
	// console.log(static_content);	
var server = http.createServer(function(request,response)
{
	static_content(request, response);
});
server.listen(8888);
console.log("Running server in local host at port 8888");
