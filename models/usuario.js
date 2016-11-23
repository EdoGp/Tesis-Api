var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({

   "nombre": String,
        "rif": String,
        "tipo": String,
        "direccion": {
            "direccion": String,
            "ciudad": String,
            "estado": String,
            "pais": String
        },
        "contacto": {
            "email": String,
            "telefono": String
        },
        "afiliados": []
});

module.exports = mongoose.model('Usuario', usuarioSchema);