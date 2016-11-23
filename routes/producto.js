var _ = require('lodash');
var Producto = require('../models/producto.js');

module.exports = function(app) {

    /* Create */
    app.post('/producto', function (req, res) {
        var newProducto = new Producto(req.body);
        newProducto.save(function(err) {
            if (err) 
            {
                res.json({info: 'error during Producto create', error: err});
            };
            res.json({info: 'Producto created successfully'});
        });
    });

    /* Read */
    app.get('/producto', function (req, res) {
        Producto.find(function(err, producto) {
            if (err) 
            {
                res.json({info: 'error during find Productos', error: err});
            };
            res.json({info: 'Productos found successfully', data: producto});
        });
    });

    app.get('/producto/:id', function (req, res) {
        Producto.findById(req.params.id, function(err, producto) {
            if (err) 
            {
                res.json({info: 'error during find Producto', error: err});
            };
            if (Producto) 
            {
                res.json({info: 'Producto found successfully', data: producto});
              
            } else 
            {
                res.json({info: 'Producto not found'});
            }
        });
    });

    /* Update */
    app.put('/producto/:id', function (req, res) {
        Producto.findById(req.params.id, function(err, producto) {
            if (err) 
            {
                res.json({info: 'error during find Producto', error: err});
            };
            if (producto) 
            {
                _.merge(producto, req.body);
                producto.save(function(err) 
                {
                    if (err) 
                    {
                        res.json({info: 'error during Producto update', error: err});
                    };
                    res.json({info: 'Producto updated successfully'});
                });
            } else 
            {
                res.json({info: 'Producto not found'});
            }

        });
    });

    /* Delete */
    app.delete('/producto/:id', function (req, res) {
        Producto.findByIdAndRemove(req.params.id, function(err) {
            if (err) 
            {
                res.json({info: 'error during remove Producto', error: err});
            };
            res.json({info: 'Producto removed successfully'});
        });
    });
};