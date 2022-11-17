// Rutas para  proveedores

const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// rutas Crud 

router.get('/', proveedorController.buscarProveedores);
router.post('/', proveedorController.agregarProveedores);
router.get('/:id', proveedorController.buscarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);
router.put('/:id', proveedorController.modificarProveedor);

module.exports = router;
