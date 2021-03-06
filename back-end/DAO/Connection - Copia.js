const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var Server = require('mongodb').Server;
var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});
var ObjectId = require('mongodb').ObjectId;
var dbo;


exports.inserir = function(objeto){
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

exports.deletar = function(objeto){
  console.log(objeto);
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("projeto");
    var myobj = objeto;
    dbo.collection("usuario").deleteOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document deletar");
      db.close();
    });
  });
}


exports.listar = function(res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("projeto");
      dbo.collection("usuario").find({}).toArray(function(err, result) {
    if (err) throw err;
    res.json(result);
    db.close();
  });
});

}
