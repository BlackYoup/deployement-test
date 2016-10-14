var express = require('express');
var app = express();

setInterval(function(){
    console.log("Desktop notifications, metrics !");
}, 5000);

app.listen(8080);

app.get('/', function(req, res){
    res.send('Hello, second version !');
});
