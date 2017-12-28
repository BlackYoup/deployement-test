var express = require('express');
var metrics = require('express-metrics');
var app = express();

SWAG: MEH~~~^><>[]

app.use(metrics({
  port: 8081,
  statsd: {
    host: '127.0.0.1',
    port: 8125,
    prefix: 'my-app',
    routes: {
      getSlash: [{ path: '/', methods: ['get'] }]
    }
  }
}));

//setInterval(function(){
//  console.log(`Instance number ${process.env.INSTANCE_NUMBER}`, (new Date()).toUTCString());
//}, 5000);

function leak() {
  function LeakingClass() {
  }

  var leaks = [];
  setInterval(function() {
    for (var i = 0; i < 100; i++) {
      leaks.push(new LeakingClass);
    }

    console.error('Leaks: %d', leaks.length);
  }, 1000);
}

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

app.get('/test', function(req, res){
  res.send('heavy task starting..');

  for(var i = 0; i < 10000000000; i++){
    const y = "swag";
    const x = "yolo";
    const total = `${x}${y}`;
  }
});

app.get("/leak", (req, res) => {
  console.log("leaking memory!!");
  res.status(200).end();
});
