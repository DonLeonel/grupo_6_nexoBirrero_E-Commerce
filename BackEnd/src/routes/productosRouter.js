const express = require('express');
const router = express.Router();
const validacionProducto = require('../middlewares/validacionProducto.js');
const validacionAuth = require('../middlewares/validacionAuth.js');
const uploadFile = require('../middlewares/multerProductos.js');
const productosController = require('../controllers/productosController');

router.get('/registrar', productosController.registrarView);
router.post('/registrar', uploadFile.single('imagen'), validacionProducto, productosController.save);

router.get('/editar/:id', productosController.editarView);
router.put('/actualizar/:id', uploadFile.single('imagen'), productosController.actualizar);

router.get('/delete/:id', productosController.delete);
router.get('/administrar', validacionAuth, productosController.administrarView);

router.get('/detalle/:id', productosController.detalleView);
router.get('/administrar/detalle/:id', productosController.adminDetalleView);

router.get('/carrito', validacionAuth, productosController.carritoView);

router.get('/categoria/:id', productosController.categoriaView);

module.exports = router;