const express = require('express');
const router = express.Router;
const canetaController = require('../controllers/caneta.js');

router.post('/', canetaController.store());
router.get('/', canetaController.index());
router.get('/:id', canetaController.show());
router.put('/:id', canetaController.update());
router.delete('/:id', canetaController.destroy());
