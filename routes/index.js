var express = require('express');
var router = express.Router();
var fs = require("fs");
var url = './db/data.json';
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(url, "utf8", function (err, data) {

    // отправляем на клиента
    res.render('index', {
      title: 'Express',
      data: data !== '' ? JSON.parse(data) : ''
    });
  });
 
});

module.exports = router;
