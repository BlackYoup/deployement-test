process.env.DEBUG = "*";

var express = require('express');
var debug = require('debug')('App');
var myModule = require('./module.js');

var app = express();

setInterval(function(){
    debug('Youhavesomushswagonu');
}, 5000);

app.listen(8081, function(){
    require('debug')('server')('server is listening');
});
