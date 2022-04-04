const express = require('express');

const Controller = require('../controllers/updatefreq');

const router = express.Router();


router.get('/', Controller.SelectMotorFreq);

router.put('/', Controller.UpdateFrequencia);

module.exports = router;