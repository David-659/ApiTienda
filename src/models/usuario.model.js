const mongo = require("../config/connection")

const schemaUsuario = new mongo.Schema({
    correo:{
        type: String,
        required :true,
        minLength:7
    },
    contraseña:{
        type:String,
        required :true,
        minLength:7
    },
    rol:{
        type:String,
        enum: ['invitado','vendedor','cliente'],
        default: 'invitado'
    }
},{versionKey:false});

const modeloUsuario = mongo.model("Usuario",schemaUsuario);

module.exports = modeloUsuario;


