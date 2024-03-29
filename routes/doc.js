var express = require('express');
var router = express.Router();
var DocDao= require('../dao/DocDao');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
    DocDao.add(req, res, next);
});
/*
router.get('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});
*/
router.get('/query', function(req, res, next) {
    DocDao.queryById(req, res, next);
});

router.get('/delete', function(req, res, next) {
    DocDao.delete(req, res, next);
});
/*
router.post('/updateUser', function(req, res, next) {
    userDao.update(req, res, next);
});
*/
module.exports = router;
