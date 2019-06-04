var express = require('express');
var router = express.Router();
var schDao= require('../dao/schDao');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
    schDao.add(req, res, next);
});

router.get('/queryAll', function(req, res, next) {
    schDao.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
    schDao.queryById(req, res, next);
});

module.exports = router;
