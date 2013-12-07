var express = require('express'),
	app = module.exports = express(),
	httpProxy = require('http-proxy'),
	proxy = new httpProxy.RoutingProxy();

var endpoint  = {
    host:   'localhost',
    port:   8000,
    prefix: '/ws'
}

app.use(express.static(__dirname + '/'));
app.use(function(req, res) {
    if (req.url.indexOf(endpoint.prefix) === 0) {
    	req.url = req.url.substring(3, req.url.length);
        proxy.proxyRequest(req, res, endpoint);
    }
});