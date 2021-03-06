const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const inserir = require("./DAO/Connection.js").inserir;
const listar = require("./DAO/Connection.js").listar;
const excluir = require("./DAO/Connection.js").excluir;
const update = require("./DAO/Connection.js").update;
var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors(corsOptions))
app.use(bodyParser.json());
app.get('/',function(req,res){
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  listar(res);

});

app.delete('/deletar',function(req,res){
    excluir(req.body,res);
});

app.post('/inserir',function(req,res){
  inserir(req.body,res);
});

app.put("/update",function(req,res){
  console.log("Passou pelo app update.");
  update(req,res);
});


app.listen(300,function(){
  console.log("Server on.");
});
