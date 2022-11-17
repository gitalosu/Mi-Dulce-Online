// Rutas para  productos

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// rutas Crud 

router.get('/', productoController.buscarProductos);
router.post('/', productoController.agregarProductos);
router.get('/:id', productoController.buscarProducto);
router.delete('/:id', productoController.eliminarProducto);
router.put('/:id', productoController.modificarProducto);

module.exports = router;