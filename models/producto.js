var mongoose = require('mongoose');

var productoSchema = mongoose.Schema({

    "Producto": String,
    "id_usuario": String,
    "nombre": String,
    "descripcion": String,
    "existencia": String,
    "costo": String

});

module.exports = mongoose.model('Producto', productoSchema);
