var app = require('express')();
var http = require('http').createServer(app);


app.get('/', function(req, res){

    res.send("ok");
});


http.listen(process.env.PORT || 5000, function(){

  console.log("Servidor rodando");

});
