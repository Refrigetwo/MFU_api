var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var messageRouter = require('./routes/message');
var docRouter = require('./routes/doc');
var newsRouter = require('./routes/news');
var schRouter = require('./routes/sch');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/message', messageRouter);
app.use('/doc', docRouter);
app.use('/news', newsRouter);
app.use('/sch', schRouter);

module.exports = app;
