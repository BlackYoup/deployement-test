var color = require('colors');
var express = require('express');
var myModule = require('./module.js');

var app = express();

setInterval(function(){
    console.log('Youhavesomushswagonu'.red);
}, 5000);

app.listen(8080, function(){
    console.log('server is listening'.yellow);
});
