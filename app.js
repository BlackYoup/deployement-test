var express = require('express');
var myModule = require('./module.js');

var app = express();

setInterval(function(){
    console.log('\u001b[31mLine1');
    console.log('line 2');
    console.log('line 3');
    console.log('line 4');
    console.log('line 5\u001b[39m');
    console.log('line6');
}, 5000);

app.listen(8080, function(){
});
