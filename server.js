var path = require('path');
var express = require('express');
var app = express();

/*
app.use(express.static(path.join(__dirname, 'dist')));
*/
app.set('port', process.env.PORT || 3000);
//app.use('/static', express.static(path.join(__dirname, 'build/static')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/build/')});
})


var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
