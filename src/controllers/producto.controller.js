const modeloProducto = require('../models/producto.model')

exports.listarProductos = async (req, res) => {
    let listarProductos = await modeloProducto.find();
    console.log(listarProductos)
    if (listarProductos) {
        res.status(200).json(listarProductos)
    }else {
        res.status(500).json({error})
    }
};