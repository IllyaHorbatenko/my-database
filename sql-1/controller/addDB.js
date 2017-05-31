var express = require('express');
var app = express();
var fs = require("fs");
var mysql = require('mysql');
var db_config = require('../database/database.config.json');
var pool = mysql.createPool(db_config);
/* GET home page. */

app.get('/', function (req, res, next) {
	var user = {
		name: req.query.name,
		grade: req.query.grade
	};
	pool.query('INSERT INTO Highschooler SET ?', user , function(err, result) {
		pool.query('SELECT * FROM Highschooler', function (error, results, fields) {
			res.send(results);
		});
	});
});

module.exports = app;