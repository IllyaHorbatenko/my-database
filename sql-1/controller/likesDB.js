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
	if(id.id1 === ''){
		id.id1 = 'не взаимно'
	}
	if(id.id2 === ''){
		id.id2 = 'не взаимно'
	}
	pool.query('INSERT INTO Likes SET ?', id , function(err, result) {
		pool.query('SELECT * FROM Likes', function (error, results, fields) {
			res.send(results);
		});
	});
});

module.exports = app;