var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 mongoose.connect('mongodb://127.0.0.1:27017/projeto');



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Conectado");
});

var usuarioSchema = new mongoose.Schema({
  nome: String,
  senha: String
});

var Usuario = mongoose.model('usuario', usuarioSchema,"usuario");



exports.inserir = function inserir(obj){
  var us1 = Usuario(obj);
  us1.save(function(err,msg){
    console.log(msg);
  });
};


exports.listar = function listar(res){

  Usuario.find(function (err, docs) {
      res.send(docs);
      });
}

exports.excluir = function excluir(obj){
  Usuario.deleteOne(obj, function (err) {
    if (err) return handleError(err);
    console.log("1 Arquivo deletado");
  });

}
