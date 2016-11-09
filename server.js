var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static('./'));

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
