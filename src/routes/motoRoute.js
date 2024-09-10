const express = require('express');
const router = express.Router;
const motoController = require('../controllers/moto.js');

router.post('/', motoController.store());
router.get('/', motoController.index());
router.get('/:id', motoController.show());
router.put('/:id', motoController.update());
router.delete('/:id', motoController.destroy());

module.exports = router;
