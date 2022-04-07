const express = require('express');

const Controller = require('../controllers/receita');

const router = express.Router();

router.get('/', Controller.SelectReceita);

router.delete('/:id', Controller.deletereceita);

module.exports = router;