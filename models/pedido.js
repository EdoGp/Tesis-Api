var mongoose = require('mongoose');

var pedidoSchema = mongoose.Schema({

    "id_usuario": String,
    "Producto": [],
    "ubicacion": []

});

module.exports = mongoose.model('Pedido', pedidoSchema);
