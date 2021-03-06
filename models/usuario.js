var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({

    "nombre": String,
    "password":String,
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
        }
});

module.exports = mongoose.model('Usuario', usuarioSchema);