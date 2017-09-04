var app = require('express')();
var http = require('http').createServer(app);


app.get('/', function(req, res){

    res.send(process.env.CLEARDB_DATABASE_URL);
    
});


http.listen(process.env.PORT || 5000, function(){

  console.log("Servidor rodando");

});
