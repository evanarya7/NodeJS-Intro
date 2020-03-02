var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
	var q = require('url').parse(req.url, true)
	if(q.pathname === '/home') {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write('Ini page home'); 
	  res.end(); 
	} else if(q.pathname === '/registrasi') {
	  fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	  });
	} else if (q.pathname === '/registrasiproses') {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write("<h3>"+q.query.userEmail+"</h3>");
	  res.write("<h4>"+q.query.userPassword+"</h4>");
	  res.end(); 
	} else {
	  res.writeHead(200, {'Content-Type': 'text/html'});
	  res.write('Ini halaman rootnya'); 
	  res.end();
	}
  });
}).listen(8888);