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



exports.inserir = function inserir(obj,res){
  var us1 = Usuario(obj);
  us1.save(function(err,msg){
    console.log(msg);
    res.json({'resposta':'inserido com sucesso'});
  });
};


exports.listar = function listar(res){

  Usuario.find(function (err, docs) {
      res.send(docs);
      });
}

exports.excluir = function excluir(obj,res){
  Usuario.deleteOne(obj, function (err) {
    if (err) return handleError(err);
      
    console.log("1 Arquivo deletado");
    res.json({'resposta':'excluido com sucesso'});

  });
}

exports.update = function update(req,res){
  var user = Usuario(req.body);
  console.log(user._id);
  Usuario.findById(user._id, function (err, us1) {
  if (err) return handleError(err);

  us1.set(req.body);
  us1.save(function (err, updatedTank) {
    if (err) return handleError(err);
    console.log(updatedTank);

  console.log("1 Arquivo Atualizado");
  res.json({'resposta':'atualizad com sucesso'});
  });
});

}
