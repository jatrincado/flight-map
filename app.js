var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('Browser conectado');

  socket.on('data', function(data){
    console.log(data);
  });

  socket.on('disconnect', function(){
    console.log('Browser desconectado');
  });
});

app.listen(app.get('port'));
