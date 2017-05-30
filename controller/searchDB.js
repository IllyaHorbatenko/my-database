var express = require('express');
var app = express();
var fs = require("fs");
var url = './db/data.json';
/* GET home page. */

app.get('/', function (req, res, next) {
	var name = req.query.data.toUpperCase(); // данные из клиента
	var resolut = [];
	fs.readFile(url, "utf8", function (err, data) {
		data = JSON.parse(data);

		for (var i = 0; i < data.length; i++) {


			if(name.indexOf(data[i].name.toUpperCase()) >= 0){
				resolut.push(data[i])
			}
		}
		res.send(resolut);
	});
});

module.exports = app;