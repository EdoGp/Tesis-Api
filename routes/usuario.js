var _ = require('lodash');
var Usuario = require('../models/usuario.js');

module.exports = function(app) {

    /* Create */
    app.post('/usuario', function (req, res) {
        var newUsuario = new Usuario(req.body);
        newUsuario.save(function(err) {
            if (err) 
            {
                res.json({info: 'error during Usuario create', error: err});
            };
            res.json({info: 'Usuario created successfully'});
        });
    });

    /* Read */
    app.get('/usuario', function (req, res) {
        Usuario.find(function(err, usuario) {
            if (err) 
            {
                res.json({info: 'error during find Usuarios', error: err});
            };
            res.json({info: 'Usuarios found successfully', data: usuario});
        });
    });

  app.get('/usuario/:nombre/:password', function (req, res) {
        Usuario.findOne({nombre:req.params.nombre,password:req.params.password}, function(err, usuario) {
            if (err) 
            {
                res.json({info: 'error during find Usuario', error: err});
            };
            if (Usuario) 
            {
                if(Password)
                {
                    res.json({info: 'Usuarios found successfully',data: usuario});
                }
                else
                {
                    res.json({info: 'Password error', error: err});
                }
                         
              
            } else 
            {
                res.json({info: 'Usuario not found'});
            }
        });
    });

    /* Update */
    app.put('/usuario/:id', function (req, res) {
        Usuario.findById(req.params.id, function(err, usuario) {
            if (err) 
            {
                res.json({info: 'error during find Usuario', error: err});
            };
            if (usuario) 
            {
                _.merge(usuario, req.body);
                usuario.save(function(err) 
                {
                    if (err) 
                    {
                        res.json({info: 'error during Usuario update', error: err});
                    };
                    res.json({info: 'Usuario updated successfully'});
                });
            } else 
            {
                res.json({info: 'Usuario not found'});
            }

        });
    });

    /* Delete */
    app.delete('/usuario/:id', function (req, res) {
        Usuario.findByIdAndRemove(req.params.id, function(err) {
            if (err) 
            {
                res.json({info: 'error during remove Usuario', error: err});
            };
            res.json({info: 'Usuario removed successfully'});
        });
    });


};