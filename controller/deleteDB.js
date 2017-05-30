var express = require('express');
var app = express();
var fs = require("fs");
var url = './db/data.json';
/* GET home page. */

app.get('/', function (req, res, next) {
	var id = parseInt(req.query.data); // данные из клиента
	fs.readFile(url, "utf8", function (err, data) {

		var dataStr = data.replace(/\[|\]/g, '').split('}');
		var resolut = '';
		
		data = JSON.parse(data);

		for (var i = 0; i < data.length; i++) {

			if (parseInt(data[i].id) !== id) {
				resolut = resolut + dataStr[i] + '}';
			}
		}

		fs.writeFile(url, "[" + resolut + "]", function () {
			fs.readFile(url, "utf8", function (err, data) {
				// отправляем на клиента
				res.send(JSON.parse(data));
			});
		});
	});
});

module.exports = app;