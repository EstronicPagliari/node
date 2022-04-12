const express = require('express');

const Controller = require('../controllers/receita');

const router = express.Router();

router.put('/', Controller.carregarreceita);

router.get('/:id', Controller.SelectReceitaId);


module.exports = router;