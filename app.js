var express = require('express');
var app = express();

setInterval(function(){
  console.log(`Instance number ${process.env.INSTANCE_NUMBER}: éêçâüï`);
}, 5000);

app.listen(8080);

app.use(function(req, res, next) {
  console.log("HEADERS", req.headers);
  var proto = req.headers["x-forwarded-proto"];
  console.log("proto", proto);

  if(proto && proto != "https") {
    res.redirect("https://" + req.headers.host + req.url);
  }
  else {
    next();
  }
});

app.get('/', function(req, res){
    res.send('Hello, second version !');
});
