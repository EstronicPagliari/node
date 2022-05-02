const express = require('express');

const Controller = require('../controllers/receita');

const router = express.Router();

router.put('/', Controller.carregarreceita);

router.get('/receitacarregada', Controller.SelectReceitaCarregada);

router.get('/:id', Controller.SelectReceitaId);


module.exports = router;