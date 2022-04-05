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

  exports.SelectMotorFreq = async (req, res, next) => {
    try {
      const [Motor] = await motor.SelectMotorFreq();
      res.status(200).json(Motor);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };