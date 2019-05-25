var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./NewsSqlMapping');

// 使用连接池，提升性能
var pool = mysql.createPool( $conf.mysql );

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    query: function (req, res, next) {
        var count = +req.query.count; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.query, count, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
};
