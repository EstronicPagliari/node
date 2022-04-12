const receita = require('../models/crudsql');
const receitaid = require('../models/crudsqlreceita');

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

  exports.carregarreceita = async (req, res, next) => {
    try {
      const putResponse = await receitaid.carregarreceita(req.body.btcarregar);
      res.status(200).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };