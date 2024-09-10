const express = require('express');
const router = express.Router;
const refrigeranteController = require('../controllers/refrigerante.js');

router.post('/', refrigeranteController.store());
router.get('/', refrigeranteController.index());
router.get('/:id', refrigeranteController.show());
router.put('/:id', refrigeranteController.update());
router.delete('/:id', refrigeranteController.destroy());

module.exports = router;
