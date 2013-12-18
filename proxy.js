var express = require('express'),
	app = module.exports = express(),
	httpProxy = require('http-proxy');

app.use(express.static(__dirname + '/'));

//httpProxy.createServer(3000, 'localhost').listen(8000);