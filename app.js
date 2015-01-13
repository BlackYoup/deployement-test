var express = require('express');

var app = express();

setInterval(function(){
    console.log('LOG');
}, 1000);

app.listen(8080, function(){
    console.log('server is listening');
});
