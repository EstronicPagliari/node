const motor = require('../models/QuerySql');
const Auto2 = require('../models/QuerySQl2');

// table automatico 
exports.selectTbAutomatico = async (req, res, next) => {
  try {
    const [allGroceries] = await Auto2.selectTbAutomatico();
    res.status(200).json(allGroceries);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const putResponse = await Auto2.update(req.body.ligar);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//// select 
exports.SelectTbMotor = async (req, res, next) => {
  try {
    const [Motor] = await motor.SelectMotor();
    res.status(200).json(Motor);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
//select 
exports.SelectRetornoLigado = async (req, res, next) => {
  try {
    const [Motor] = await motor.SelectRetornoLigado();
    res.status(200).json(Motor);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.Selectbtrearme = async (req, res, next) => {
  try {
    const [Motor] = await motor.Selectbtrearme();
    res.status(200).json(Motor);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
//update
exports.ligarMotor = async (req, res, next) => {
  try {
    const putResponse = await motor.ligarMotor(req.body.ligar);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
//update
exports.rearmeMotor = async (req, res, next) => {
  try {
    const putResponse = await motor.rearmeMotor(req.body.rearme);
    res.status(200).json(putResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


