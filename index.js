// var app = require('express')();
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket){
  socket.on('chat message', function(msg, usr){
    io.emit('chat message', msg, usr);
  });
});

http.listen(port, function(){
  console.log('listening on localhost:' + port);
});
