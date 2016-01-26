var express = require('express');
var app = express();

setInterval(function(){
    console.log("Default branch, not master");
}, 5001);

app.listen(8080);

app.get('/', function(req, res){
    res.send('Hello, on default branch !');
});
