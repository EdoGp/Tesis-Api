var _ = require('lodash');
var Pedido = require('../models/pedido.js');

module.exports = function(app) {

    /* Create */
    app.post('/pedido', function (req, res) {
        var newPedido = new Pedido(req.body);
        newPedido.save(function(err) {
            if (err) 
            {
                res.json({info: 'error during Pedido create', error: err});
            };
            res.json({info: 'Pedido created successfully'});
        });
    });

    /* Read */
    app.get('/pedido', function (req, res) {
        Pedido.find(function(err, pedido) {
            if (err) 
            {
                res.json({info: 'error during find Pedidos', error: err});
            };
            res.json({info: 'Pedidos found successfully', data: pedido});
        });
    });

    app.get('/pedido/:id', function (req, res) {
        Pedido.findById(req.params.id, function(err, pedido) {
            if (err) 
            
                res.json({info: 'error during find Pedido', error: err});
            };
            if (Pedido) 
            {
                res.json({info: 'Pedido found successfully', data: pedido});
              
            } else 
            {
                res.json({info: 'Pedido not found'});
            }
        });
    });

    /* Update */
    app.put('/pedido/:id', function (req, res) {
        Pedido.findById(req.params.id, function(err, pedido) {
            if (err) 
            {
                res.json({info: 'error during find Pedido', error: err});
            };
            if (pedido) 
            {
                _.merge(pedido, req.body);
                pedido.save(function(err) 
                {
                    if (err) 
                    {
                        res.json({info: 'error during Pedido update', error: err});
                    };
                    res.json({info: 'Pedido updated successfully'});
                });
            } else 
            {
                res.json({info: 'Pedido not found'});
            }

        });
    });

    /* Delete */
    app.delete('/pedido/:id', function (req, res) {
        Pedido.findByIdAndRemove(req.params.id, function(err) {
            if (err) 
            {
                res.json({info: 'error during remove Pedido', error: err});
            };
            res.json({info: 'Pedido removed successfully'});
        });
    });
};