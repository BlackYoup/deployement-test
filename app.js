process.env.DEBUG = "*";
process.env.DEBUG_COLOR = true;

var express = require('express');
var debug = require('debug')('App');
var myModule = require('./module.js');

var app = express();

setInterval(function(){
    debug('Youhavesomushswagonu');
}, 5000);

app.listen(8080, function(){
    require('debug')('server')('server is listening');
});
