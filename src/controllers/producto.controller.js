const modeloProducto = require('../models/producto.model')

exports.listarProductos = async (req, res) => {
    let listaProductos = await modeloProducto.find();
    console.log(listaProductos)
    if (listaProductos) {
        //res.status(200).json(listaProductos)
        res.render('pages/index',{listaProductos}) //corregir aqui para que sepa que es productos
    }else {
        res.status(500).json({error})
    }
};

exports.buscarProductos = async (req, res) => {
    let buscarProductos = await modeloProducto.find({"referencia": req.params.ref });
    console.log(buscarProductos)
    if (buscarProductos) {
        res.status(200).json(buscarProductos)
    }else {
        res.status(500).json({error})
    }
};

exports.agregarProductos = async (req, res) => {
    const nuevoProducto = {
        "referencia": req.body.referencia,
        "nombre": req.body.nombre,
        "precio": req.body.precio
    }
    
    let agregarProductos = await modeloProducto.create(nuevoProducto);
    if (agregarProductos) {
        res.status(200).json(agregarProductos)
    }else {
        res.status(500).json({error})
    }
}

exports.editarProductos = async (req, res) => {
    const productoEditado = {
        referencia: req.params.ref,
        nombre: req.body.nom,
        precio: req.body.precio,
    }
    let editarProductos = await modeloProducto.findOneAndUpdate({referencia: req.params.x}, productoEditado);
    if (editarProductos) {
        res.status(200).json(editarProductos)
    }else {
        res.status(500).json({error})
    }
}

exports.elimimarProductos =  async (req, res) => {
    console.log(req.params.id,req.body.ref)
    let elimimarProductos = await modeloProducto.findOneAndDelete({referencia:req.params.ref});
    if (elimimarProductos) {
        res.status(200).json(elimimarProductos)
    }else {
        res.status(500).json({error})
    }
}