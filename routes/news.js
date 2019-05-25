var express = require('express');
var router = express.Router();
var NewsDao= require('../dao/NewsDao');

/* GET users listing. */

router.get('/query', function(req, res, next) {
    NewsDao.query(req, res, next);
});

module.exports = router;
