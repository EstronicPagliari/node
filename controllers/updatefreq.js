const motor = require('../models/QuerySql');

exports.UpdateFrequencia = async (req, res, next) => {
    try {
      const putResponse = await motor.UpdateFrequencia(req.body.freqManual);
      res.status(200).json(putResponse);
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