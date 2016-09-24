var express = require('express');
var app = express();

app.use(express.static('../client/build'));

var port = 3000;
app.listen(port, function(){
  console.log('app listening on port 3000');
});
