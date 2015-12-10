var express = require('express');
var app = express();

setInterval(function(){
    console.log("gwendal masqué ohé ohé, GWEENNDAAAAAAAl, GWENDAAAAL MASQUEEE");
}, 5001);

app.listen(8080);

app.get('/', function(req, res){
    res.send('Hello, second version !');
});
