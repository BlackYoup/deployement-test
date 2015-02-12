var express = require('express');
var app = express();

setInterval(function(){
    console.log(new Date().toISOString());
}, 2000);

app.listen(8080);
