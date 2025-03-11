const modeloUsuario = require('../models/usuario.model')
const modeloVendedor = require('../models/vendedor.model')

exports.register = async (req,res)=>{

    const nuevoUsuario = new modeloUsuario({
        correo: "daviduj@gmail.com",
        contraseña: "5656gtr56",
        rol: "vendedor"
    });

    let usuario = await nuevoUsuario.save();
    console.log(usuario)

    const nuevoVendedor = new modeloVendedor({
        nombre: "pepito",
        documento: "1274924",
        ventas: 4,
        userId: usuario._id
    });
    await nuevoVendedor.save();

}