const express = require('express');

const Controller = require('../controllers/forno');

const router = express.Router();

router.get('/', Controller.selectfornoligado);

router.get('/etapaatual', Controller.selectetapaatual);

router.put('/', Controller.btligarforno);

//router.delete('/:id', Controller.deletereceita);

module.exports = router;