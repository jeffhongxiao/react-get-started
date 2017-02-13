var express = require('express');
var app = express();

//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

app.listen(3000, function () {
  console.log('Serving static files under /, on port 3000!')
})
