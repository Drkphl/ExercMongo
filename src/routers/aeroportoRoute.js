const express = require('express');
const aeroportoController = require('../controllers/aeroporto.js');
const cep_endereco = require('../middlewares/cep_endereco.js');
const router = express.Router();

router.post('/', cep_endereco, aeroportoController.store());
router.get('/', aeroportoController.index());
router.get('/:id', aeroportoController.show());
router.put('/:id', cep_endereco, aeroportoController.update());
router.delete('/:id', aeroportoController.destroy());

module.exports = router;
