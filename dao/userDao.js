var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./userSqlMapping');
var md5 = require("crypto-js/md5");

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
var jsonWritePass = function (res, ret) {
    if( ret === 'undefined') {
        res.json({
            code:'1',
            msg: '登陆失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;

            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.insert, [param.name, param.sex, param.account, param.pass], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加成功'
                    };
                }

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    delete: function (req, res, next) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = +req.query.id;
            connection.query($sql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    queryById: function (req, res, next) {
        var account=req.query.account; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryById, account, function(err, result) {
                console.log(result[0].pass);
                var a=md5(result[0].pass).toString();
                console.log(a);
                jsonWrite(res, {
                    name:result[0].name,
                    pass:a,
                    sex:result[0].sex,
                    id:result[0].id,
                    account:result[0].account
                });
                connection.release();

            });
        });
    },
    queryAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    }
};
