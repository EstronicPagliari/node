const express = require('express');

const Controller = require('../controllers/grocery');

const router = express.Router();


// comando de updata da tabela
router.get('/', Controller.SelectTbMotor);
//select retonro ligado
router.get('/retligado', Controller.SelectRetornoLigado);

router.put('/', Controller.ligarMotor);

module.exports = router;