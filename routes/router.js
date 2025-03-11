const exp = require('express')
const router = exp.Router();
const controladorProducto = require('../src/controllers/producto.controller')

router.get('/productos',controladorProducto.listarProductos);

router.get('/productos/:ref', async (req, res) => {
    let resultado = await modeloProducto.find({"referencia": req.params.ref });
    console.log(resultado)
    if (resultado) {
        res.json(resultado)
    }else {
        res.json({"mensaje": "hubo un error"})
    }
});

router.post('/productos', async (req, res) => {
    const nuevoProducto = {
        "referencia": req.body.referencia,
        "nombre": req.body.nombre,
        "precio": req.body.precio
    }
    
    let insercion= await modeloProducto.create(nuevoProducto);
    if (insercion)
        res.status(200).json({"mensaje":"registro exitoso"})
    else
        res.status(404).json({"mensaje":"se presento un error"})
});

router.put('/productos/:x', async (req, res) => {
    const productoEditado = {
        referencia: req.params.ref,
        nombre: req.body.nom,
        precio: req.body.precio,
    }
    let actualizacion = await modeloProducto.findOneAndUpdate({referencia: req.params.x}, productoEditado);
    if (actualizacion)
        res.status(200).json({"mensaje":"actualización exitosa"})
    else
        res.status(404).json({"mensaje":"se presento un error"})
});

router.delete('/productos/:id', async (req, res) => {
    console.log(req.params.id,req.body.ref)
    let eliminacion = await modeloProducto.findOneAndDelete({referencia:req.params.ref});
    if (eliminacion)
        res.status(200).json({"mensaje":"eliminación exitosa"})
    else
    res.status(404).json({"mensaje":"se presento un error"})
});

module.exports = router;