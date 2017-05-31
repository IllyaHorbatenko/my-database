var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db_config = require('../database/database.config.json');
var pool = mysql.createPool(db_config);

/* GET home page. */
router.get('/', function (req, res, next) {
	//подключение к базе данных
	var request = {
		Highschooler: '',
		Friend: '',
		Likes: ''
	};

	pool.query('SELECT * FROM Highschooler', function (error, results, fields) {
		request.Highschooler = results;
		pool.query('SELECT * FROM Friend', function (error, results, fields) {
			request.Friend = results;
			pool.query('SELECT * FROM Likes', function (error, results, fields) {
				request.Likes = results;
				res.render('index', {
					title: 'Express',
					data: request
				});
			});
		});
	});
		
});

module.exports = router;
