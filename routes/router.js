const exp = require('express')
const router = exp.Router();
const controladorProducto = require('../src/controllers/producto.controller')
const controladorVendedor = require('../src/controllers/vendedor.controller')

router.get('/productos',controladorProducto.listarProductos);
router.get('/productos/:ref',controladorProducto.buscarProductos);
router.post('/productos',controladorProducto.agregarProductos);
router.put('/productos/:x',controladorProducto.editarProductos);
router.delete('/productos/:id',controladorProducto.elimimarProductos);

router.get('/registrar',controladorVendedor.register);

router.get("/", (req,res) => {
    res.render('pages/index')    
})

module.exports = router;