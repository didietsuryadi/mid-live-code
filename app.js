var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var mongoose = require('mongoose')
var app = express();

mongoose.connect('mongodb://localhost/restaurant', function (err) {
  if (err) throw err;
  console.log("connected")
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
