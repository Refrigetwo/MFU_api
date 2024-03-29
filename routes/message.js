var express = require('express');
var router = express.Router();
var messageDao= require('../dao/messageDao');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
    messageDao.add(req, res, next);
});
/*
router.get('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});
*/
router.get('/query', function(req, res, next) {
    messageDao.queryById(req, res, next);
});
/*
router.get('/deleteUser', function(req, res, next) {
    userDao.delete(req, res, next);
});

router.post('/updateUser', function(req, res, next) {
    userDao.update(req, res, next);
});
*/
module.exports = router;
