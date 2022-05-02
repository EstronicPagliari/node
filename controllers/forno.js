const forno = require('../models/crudforno');


exports.selectfornoligado = async (req, res, next) => {
    try {
      const [newforno] = await forno.selectfornoligado();
      res.status(200).json(newforno);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.selectetapaatual = async (req, res, next) => {
    try {
      const [newetapa] = await forno.selectetapaatual();
      res.status(200).json(newetapa);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

  exports.btligarforno = async (req, res, next) => {
    try {
      const putForno = await forno.ligarforno(req.body.btligarforno);
      res.status(200).json(putForno);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };