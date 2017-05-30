var express = require('express');
var app = express();
var fs = require("fs");
var url = './db/data.json';
var id = 0;
/* GET home page. */

app.get('/', function (req, res, next) {
	var name = req.query.name; // данные из клиента
	var number = req.query.number; // данные из клиента
	fs.readFile(url, "utf8", function (err, data) {
		var schaema; // схема формата баз
		if (data === '') {
			schaema = '{"id"' + ': ' + '"' + id++ + '","name"' + ': ' + '"' + name + '",'+ '"number":' + '"' + number + '"' +'}';
		} else {
			// накручивание id
			id = 0;
			for (var i in JSON.parse(data)) {
				id++;
				if(parseInt(JSON.parse(data)[i].id) === id){
					id++;
				}
			}
			schaema = ',{"id"' + ': ' + '"' + id++ + '","name"' + ': ' + '"' + name + '",'+ '"number":' + '"' + number + '"' +'}';
		}

		// убираем лишниее (скобки)
		var str = data.replace(/\[|\]/g, '');

		// добавляем в DB
		fs.writeFile(url, "[" + str + schaema + "]", function () {
			fs.readFile(url, "utf8", function (err, data) {

				// отправляем на клиента
				res.send(JSON.parse(data));
			});
		});
	});
});

module.exports = app;