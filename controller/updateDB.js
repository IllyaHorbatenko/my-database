var express = require('express');
var app = express();
var fs = require("fs");
var url = './db/data.json';
/* GET home page. */

app.get('/', function (req, res, next) {
	var id = parseInt(req.query.id); // данные из клиента
	var name = req.query.name; // данные из клиента
	var number = req.query.number; // данные из клиента

	fs.readFile(url, "utf8", function (err, data) {

		var dataStr = data.replace(/\[|\]/g, '').split('}');
		var resolut = '';
		var schaema;
		
		data = JSON.parse(data);

		for (var i = 0; i < data.length; i++) {

			if (parseInt(data[i].id) === id) {

				schaema = ',{"id"' + ': ' + '"' + id + '","name"' + ': ' + '"' + name + '",'+ '"number":' + '"' + number + '"' +'}';
				resolut = resolut + schaema;
			}else{
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