var express = require('express');
var app = express();

setInterval(function(){
    console.log(new Date().toISOString());
}, 5000);

setTimeout(function(){
    app.listen(8080);
}, 5000);
