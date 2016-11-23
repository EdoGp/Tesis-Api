var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Tesis');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var usuario = require('./routes/usuario.js')(app);
var producto = require('./routes/producto.js')(app);
var pedido = require('./routes/pedido.js')(app);

var server = app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000/');
});