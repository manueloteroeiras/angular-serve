var express = require('express');

var app = express();

app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 3000; // set our port


console.log('App - Listening on port '+port);


app.listen(port);
