var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello, second version !');
});

//app.listen(process.env.PORT);

setTimeout(() => {
  process.exit(1);
}, 20000);
