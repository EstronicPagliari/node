const receita = require('../models/crudsql');

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
    const settempo1 = req.body.settempo1;
    try {
      const criar = {
        nomereceita: nomereceita,
        settempo1: settempo1,
      };
      const result = await receita.criarreceita(criar);
      res.status(201).json({ message: 'Posted!' });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };