const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adminproductos',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conexion con DB'))
    .catch(err => console.log('No se pudo conectar con DB'+ err));