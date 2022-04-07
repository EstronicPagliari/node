const express = require('express');

const Controller = require('../controllers/receita');

const router = express.Router();

router.get('/', Controller.SelectReceita);

router.post('/', Controller.criarreceita);

router.delete('/:id', Controller.deletereceita);

module.exports = router;