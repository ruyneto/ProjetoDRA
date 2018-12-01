const express = require('express');
const app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
const inserir = require("./DAO/Connection.js");
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
res.json({"lista":[{"nome":"ruyneto","senha":"321987"},
          {"nome":"Izaltino","senha":"321987"},
          {"nome":"Sandro","senha":"321987"},
          {"nome":"Gilmar","senha":"321987"},
          {"nome":"Hermani","senha":"321987"},
          {"nome":"Bruno","senha":"321987"}
        ]})
});




app.listen(300,function(){
  console.log("Server on.");
});

app.post('/inserir',function(req,res){
  inserir(request.body);
});
