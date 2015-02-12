var express = require('express');
var app = express();

setInterval(function(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}, 1000);

app.listen(8080);
