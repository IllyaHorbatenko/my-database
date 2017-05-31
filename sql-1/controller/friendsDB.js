var express = require('express');
var app = express();
var fs = require("fs");
var mysql = require('mysql');
var db_config = require('../database/database.config.json');
var pool = mysql.createPool(db_config);

app.get('/', function (req, res, next) {
	var id = {
		id1: req.query.id1,
		id2: req.query.id2
	};
	pool.query('INSERT INTO Friend SET ?', id , function(err, result) {
		pool.query('SELECT * FROM Friend', function (error, results, fields) {
			res.send(results);
		});
	});
});

module.exports = app;