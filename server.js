var express = require('express');
var app = express();
var port = 3000;

var middleware = require('./middleware');
//route
// app.get('/', function (req, res) {
// 	res.send('Hello express');
// });

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

//route
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!');
})

//get path
//console.log(__dirname);

//expose folder
app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
	console.log('Express start with port : '+port);
});

