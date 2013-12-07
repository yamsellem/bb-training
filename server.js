var express = require('express'),
	app = module.exports = express(),
	todos = [];

app.use(express.static(__dirname + '/'));
app.use(express.bodyParser());

app.get('/todos', function(req, res) {
	console.log(req.header('X-User'))
	res.send(todos);
});
app.post('/todos', function(req, res) {
	todos.push(req.body);
	res.send(todos);
});
app.listen(8000);