var Addition = require('./addition.js');
var Calculator1 = require('./calculator1.js');
var { sub, mul, div } = require('./calculator1.js');
var { subtraction } = require('./calculator2.js');
var Calculator2 = require('./calculator2.js');
var Person = require('./person.js');
var Son = require('./son.js');

var http = require('http');
var http2 = require('./httpModule.js');
var fs = require('fs');

console.log('Welcome to Demo');
console.log('Addition of 1 and 2 is ', Addition(1, 2));
console.log('1 + 5 is ', Calculator1.add(1, 5));
console.log('5 - 1 is ', sub(5, 1));
console.log('5 * 2 is ', mul(5, 2));
console.log('5 / 2 is ', div(5, 2));

console.log('5 - 1 is ', subtraction(5, 1));
console.log('4 - 2 is ', Calculator2.subtraction(4, 2));

var obj = new Person();
obj.setName('Navya');
console.log('user is ' + obj.getName());

var son1 = new Son();
console.log('Son ->  ' + son1.getName());
console.log('Son ->  ' + son1.getGender());
console.log('Son ->  ' + son1.getCity());

http.createServer(function(req, res) {
	//console.log(req);
	//console.log(res);
	//res.end('Welcome to HTML Demo');
	
	fs.readFile('pages/demo23.html', function(error, response){
		if(error){
			res.writeHead(404);
			res.write('Content not found');
		}
		else {
			res.writeHead(200, { 'content-type': 'text/html'});
			res.write(response);
		}
		res.end();
	});
}).listen(3000);