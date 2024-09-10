const express = require('express');
const router = express.Router;
const aeroportoController = require('../controllers/aeroporto.js');

router.post('/', aeroportoController.store());
router.get('/', aeroportoController.index());
router.get('/:id', aeroportoController.show());
router.put('/:id', aeroportoController.update());
router.delete('/:id', aeroportoController.destroy());

module.exports = router;
