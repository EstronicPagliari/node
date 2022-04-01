const express = require('express');

const Controller = require('../controllers/grocery');

const router = express.Router();

router.get('/', Controller.Selectbtrearme);

router.put('/', Controller.rearmeMotor);

module.exports = router;