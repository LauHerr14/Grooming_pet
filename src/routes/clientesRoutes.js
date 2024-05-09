const { Router } = require('express');
const router  = Router();
const clientesController = require('../controllers/clientesController');


router.post('/clientes', clientesController.register);
router.get('/clientes', clientesController.getAll);
router.get('/clientes/id', clientesController.getById);

module.exports = router;