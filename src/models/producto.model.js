const mongoose = require("../config/connection");

const schemaProducto = new mongoose.Schema({
    referencia: {
        type: Number,
        required: true
    },
    nombre: { 
        type: String, 
        required: true 
    },
    precio:{
        type: mongoose.Types.Decimal128,
        default: 0.0,
        min: 0.0
    }
},{versionKey:false});

const producto = mongoose.model("Producto",schemaProducto);
module.exports = producto;