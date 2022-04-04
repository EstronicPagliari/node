const express = require('express');

const Controller = require('../controllers/updatefreq');

const router = express.Router();


router.put('/', Controller.UpdateFrequencia);

module.exports = router;