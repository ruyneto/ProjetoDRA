const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var Server = require('mongodb').Server;
var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
var dbo;


function inserir(objeto){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("projeto");
    var myobj = objeto;
    dbo.collection("usuario").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}


module.exports = inserir;
