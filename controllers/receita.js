const receita = require('../models/crudsql');
const receitaid = require('../models/crudsqlreceita');

//select receita banco
exports.SelectReceita = async (req, res, next) => {
    try {
      const [Newreceita] = await receita.SelectReceita();
      res.status(200).json(Newreceita);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  // select receita por id 
  exports.SelectReceitaId = async (req, res, next) => {
    try {
      const [Newreceita] = await receitaid.selectreceitaid(req.params.id);
      res.status(200).json(Newreceita);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
// select receita carregada que vai para o CLP
  exports.SelectReceitaCarregada = async (req, res, next) => {
    try {
      const [Newreceita] = await receitaid.selectreceitacarregada();
      res.status(200).json(Newreceita);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  //deletar receita
  exports.deletereceita = async (req, res, next) => {
    try {
      const deleteResponse = await receita.deletereceita(req.params.id);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
// criar receita
  exports.criarreceita = async (req, res, next) => {
    const nomereceita = req.body.nomereceita;
    try {
      const post = {
        nomereceita: nomereceita
      }
      const result = await receita.criarreceita(post);
      res.status(201).json({message: 'posted!'});
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
// carregar id receita
  exports.carregarreceita = async (req, res, next) => {
    try {
      const putResponse = await receitaid.carregarreceita(req.body.idreceita);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };