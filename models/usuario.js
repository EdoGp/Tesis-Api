var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({

    "nombre": String,
    "rif": String,
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