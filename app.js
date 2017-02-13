var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// NOT WORKING AS EXPECTED
//app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.listen(3333, function () {
  console.log('Serving static files under /, on port 3333!')
})
