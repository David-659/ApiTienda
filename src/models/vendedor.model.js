const mongo = require("../config/connection")

const schemaVendedor = new mongo.Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    documento:{
        type:String,
        required:true,
        minLength:7,
        maxLength:10
    },
    ventas:{
        type:Number,
        default:0,
        minLength:0
    },
    userId:{
        type: mongo.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
},{versionKey:false})

const modelovendedor = mongo.model("vendedor",schemaVendedor)

module.exports = modelovendedor;